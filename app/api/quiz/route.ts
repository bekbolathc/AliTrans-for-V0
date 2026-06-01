import { NextRequest, NextResponse } from "next/server";

// Базовая санитизация user input от XSS
function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .replace(/[<>]/g, '')
    .slice(0, 500);
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
  const BITRIX_WEBHOOK = 'https://alitrans.bitrix24.kz/rest/69/8e6x3s4u3n10kzgp';

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

  try {
    // 1. Создаём контакт
    let contactId: number | null = null;
    const contactRes = await fetch(`${BITRIX_WEBHOOK}/crm.contact.add.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          NAME: params.name,
          PHONE: [{ VALUE: params.phone, VALUE_TYPE: 'WORK' }],
          ...(params.email ? { EMAIL: [{ VALUE: params.email, VALUE_TYPE: 'WORK' }] } : {}),
          SOURCE_ID: 'WEB',
          ASSIGNED_BY_ID: 69,
        },
      }),
    });
    const contactData = await contactRes.json();
    if (contactData.result) contactId = contactData.result;

    // 2. Создаём сделку
    const dealBody: any = {
      fields: {
        TITLE: title,
        COMMENTS: comment,
        STAGE_ID: 'NEW',
        ASSIGNED_BY_ID: 69,
        SOURCE_ID: 'WEB',
        ...(contactId ? { CONTACT_ID: contactId } : {}),
      },
    };

    const dealRes = await fetch(`${BITRIX_WEBHOOK}/crm.deal.add.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dealBody),
    });
    const dealData = await dealRes.json();

    return { success: true, dealId: dealData.result, contactId };
  } catch (error) {
    console.error('Bitrix24 error:', error);
    return { success: false };
  }
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
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json({ success: false, error: "Invalid content type" }, { status: 400 });
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const globalCache = globalThis as any;
    if (!globalCache._rateLimits) globalCache._rateLimits = new Map();
    const now = Date.now();
    const limits = globalCache._rateLimits;
    const limitData = limits.get(`rate:${ip}`) || { count: 0, reset: now + 60000 };
    if (now > limitData.reset) { limitData.count = 0; limitData.reset = now + 60000; }
    if (limitData.count >= 5) {
      return NextResponse.json({ success: false, error: "Слишком много заявок. Попробуйте позже." }, { status: 429 });
    }
    limitData.count++;
    limits.set(`rate:${ip}`, limitData);

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

    // Отправляем в Битрикс24 и WhatsApp параллельно
    await Promise.allSettled([
      sendToBitrix24({ orderId, name: sName, phone: sPhone, wa: sWa, email: sEmail, from: sFrom, to: sTo, vol: sVol, kind: sKind, mode: sMode, price }),
      sendToBusinessWhatsApp(orderId, sFrom, sTo, sVol, sKind, sMode, sName, sPhone, sWa, sEmail),
    ]);

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
    return NextResponse.json({ success: false, error: "Ошибка при обработке заявки. Попробуйте позже." }, { status: 500 });
  }
}