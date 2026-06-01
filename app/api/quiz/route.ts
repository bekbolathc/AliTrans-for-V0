import { NextRequest, NextResponse } from "next/server";

// Улучшенная санитизация user input от XSS и инъекций
function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .replace(/[<>'"&\\]/g, '') // Убираем опасные символы
    .replace(/javascript:/gi, '') // Предотвращаем JS URI
    .replace(/on\w+=/gi, '') // Убираем event handlers
    .slice(0, 500);
}

// Логирование ошибок (для продакшена можно заменить на Sentry/LogRocket)
function logError(context: string, error: unknown, metadata?: Record<string, unknown>) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  const logEntry = {
    timestamp: new Date().toISOString(),
    context,
    error: errorMessage,
    ...metadata,
  };
  console.error('[ATG API Error]', JSON.stringify(logEntry));
}

// Валидация email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  return emailRegex.test(email);
}

// Валидация телефона Казахстана
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+7|8)?[- ]?7[0-9]{9}$|^7[0-9]{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
}

// Отправка сделки в Битрикс24
async function sendToBitrix24(params: {
  orderId: string;
  name: string;
  phone: string;
  wa?: string;
  email?: string;
  from: string;
  to: string;
  vol: string;
  kind: string;
  mode: string;
  price: string;
}) {
  const BITRIX_WEBHOOK = process.env.BITRIX_WEBHOOK_URL || 'https://alitrans.bitrix24.kz/rest/19/brd9b1vhzy7u8bpr';

  const title = `Заявка с сайта #${params.orderId} — ${params.name}`;
  const comment =
    `Источник: alitrans.kz (квиз)\n` +
    `Заявка: ${params.orderId}\n` +
    `Имя: ${params.name}\n` +
    `Телефон: ${params.phone}\n` +
    (params.wa ? `WhatsApp: ${params.wa}\n` : '') +
    (params.email ? `Email: ${params.email}\n` : '') +
    `Откуда: ${params.from}\n` +
    `Куда: ${params.to}\n` +
    `Объём: ${params.vol}\n` +
    `Тип груза: ${params.kind}\n` +
    `Способ доставки: ${params.mode}\n` +
    `Ориентировочная цена: ${params.price}`;

  const payload = {
    fields: {
      TITLE: title,
      COMMENTS: comment,
      STAGE_ID: 'C1:NEW',
      SOURCE_ID: 'WEB',
      SOURCE_DESCRIPTION: `Квиз на alitrans.kz, заявка #${params.orderId}`,
    }
  };

  console.log('Bitrix24 payload:', JSON.stringify(payload));

  const dealRes = await fetch(`${BITRIX_WEBHOOK}/crm.deal.add.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const dealData = await dealRes.json();
  console.log('Bitrix24 response:', JSON.stringify(dealData));

  if (!dealData.result) {
    throw new Error(`Bitrix24 error: ${JSON.stringify(dealData)}`);
  }

  return { success: true, dealId: dealData.result };
}

// Отправка на рабочий WhatsApp через webhook
async function sendToBusinessWhatsApp(orderId: string, from: string, to: string, vol: string, kind: string, mode: string, name: string, phone: string, wa?: string, email?: string) {
  try {
    const businessPhone = "77718000209";
    const message =
      `📋 *Новая заявка* #${orderId}\n\n` +
      `👤 Имя: ${name}\n` +
      `📞 Телефон: ${phone}\n` +
      (wa ? `📱 WhatsApp: ${wa}\n` : '') +
      (email ? `📧 Email: ${email}\n` : '') +
      `📍 От: ${from}\n` +
      `📍 До: ${to}\n` +
      `📦 Объём: ${vol}\n` +
      `🏷️ Тип: ${kind}\n` +
      `🚚 Способ: ${mode}`;

    const webhookUrl = process.env.WHATSAPP_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ to: businessPhone, message, orderId }),
        });
      } catch (_) {}
    }

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

export async function POST(request: NextRequest) {
  try {
    // CSRF protection: проверяем origin
    const origin = request.headers.get('origin');
    const allowedOrigins = ['https://alitrans.kz', 'https://www.alitrans.kz', 'http://localhost:3000'];
    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 });
    }

    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json({ success: false, error: "Invalid content type" }, { status: 400 });
    }

    // Rate limiting (с учётом ограничений in-memory хранилища)
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
    const globalCache = globalThis as unknown as { _rateLimits?: Map<string, { count: number; reset: number }> };
    if (!globalCache._rateLimits) globalCache._rateLimits = new Map();
    const now = Date.now();
    const limits = globalCache._rateLimits;
    const limitKey = `rate:${ip}`;
    const limitData = limits.get(limitKey) || { count: 0, reset: now + 60000 };
    
    // Очистка старых записей (простая garbage collection)
    if (limits.size > 10000) {
      const keysToDelete: string[] = [];
      limits.forEach((v, k) => { if (now > v.reset) keysToDelete.push(k); });
      keysToDelete.forEach(k => limits.delete(k));
    }
    
    if (now > limitData.reset) { limitData.count = 0; limitData.reset = now + 60000; }
    if (limitData.count >= 5) {
      return NextResponse.json({ success: false, error: "Слишком много заявок. Попробуйте позже." }, { status: 429 });
    }
    limitData.count++;
    limits.set(limitKey, limitData);

    const body = await request.json();
    const { from, to, vol, kind, mode, name, phone, wa, email } = body;

    // Санитизация
    const sFrom  = sanitizeInput(from);
    const sTo    = sanitizeInput(to);
    const sVol   = sanitizeInput(vol);
    const sKind  = sanitizeInput(kind);
    const sMode  = sanitizeInput(mode);
    const sName  = sanitizeInput(name);
    const sPhone = sanitizeInput(phone);
    const sWa    = sanitizeInput(wa || '');
    const sEmail = sanitizeInput(email || '');

    // Валидация обязательных полей
    if (!sFrom || !sTo || !sVol || !sKind || !sMode || !sName || !sPhone) {
      return NextResponse.json({ success: false, error: "Заполните все обязательные поля" }, { status: 400 });
    }
    if (!isValidPhone(sPhone)) {
      return NextResponse.json({ success: false, error: "Неправильный формат номера телефона" }, { status: 400 });
    }
    if (sEmail && !isValidEmail(sEmail)) {
      return NextResponse.json({ success: false, error: "Неправильный формат email" }, { status: 400 });
    }

    // Генерируем ID заявки
    const orderId = "ATG-" + (100000 + Math.floor(Math.random() * 899999));

    // Считаем цену
    const base = ({ "lt100": 150, "100-500": 350, "500-2000": 900, "2-10t": 3200, container: 9500 } as any)[sVol] ?? 800;
    const mult = ({ air: 2.4, road: 1.0, rail: 0.9, advice: 1.1 } as any)[sMode] ?? 1;
    const low  = Math.round(base * mult);
    const high = Math.round(base * mult * 1.35);
    const price = `$${low.toLocaleString("en-US")} – $${high.toLocaleString("en-US")}`;

    // Отправляем в Битрикс24 и WhatsApp параллельно с проверкой результатов
    console.log('Sending to Bitrix24:', { name: sName, phone: sPhone, from: sFrom, to: sTo, vol: sVol, kind: sKind, mode: sMode, orderId });
    
    const [bitrixResult, whatsappResult] = await Promise.allSettled([
      sendToBitrix24({ orderId, name: sName, phone: sPhone, wa: sWa, email: sEmail, from: sFrom, to: sTo, vol: sVol, kind: sKind, mode: sMode, price }),
      sendToBusinessWhatsApp(orderId, sFrom, sTo, sVol, sKind, sMode, sName, sPhone, sWa, sEmail),
    ]);

    // Логируем ошибки интеграций (но не блокируем ответ клиенту)
    if (bitrixResult.status === 'rejected' || (bitrixResult.status === 'fulfilled' && !bitrixResult.value.success)) {
      logError('Bitrix24 integration failed', bitrixResult.status === 'rejected' ? bitrixResult.reason : 'API returned failure', { orderId });
    }
    if (whatsappResult.status === 'rejected') {
      logError('WhatsApp integration failed', whatsappResult.reason, { orderId });
    }

    // WhatsApp ссылка для клиента
    const whatsappUrl = `https://wa.me/77718000209?text=${encodeURIComponent(
      `Здравствуйте! Я оставил заявку на расчёт доставки:\n\n` +
      `👤 Имя: ${sName}\n` +
      `📞 Телефон: ${sPhone}\n` +
      (sWa ? `📱 WhatsApp: ${sWa}\n` : '') +
      `📧 ${sEmail ? `Email: ${sEmail}` : `Способ связи: WhatsApp`}\n` +
      `📍 От: ${sFrom}\n` +
      `📍 До: ${sTo}\n` +
      `📦 Объём: ${sVol}\n` +
      `🏷️ Тип груза: ${sKind}\n` +
      `🚚 Способ: ${sMode}\n` +
      `\nЗаявка #${orderId}`
    )}`;

    return NextResponse.json({
      success: true,
      message: "Заявка принята. Расчёт пришлём в WhatsApp в течение 15 минут.",
      orderId,
      whatsappUrl,
    }, { status: 200 });

  } catch (error) {
    logError('POST /api/quiz', error);
    return NextResponse.json({ success: false, error: "Ошибка при обработке заявки. Попробуйте позже." }, { status: 500 });
  }
}
