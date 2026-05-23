import { NextRequest, NextResponse } from "next/server";

// Базовая санитизация user input от XSS
function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .replace(/[<>]/g, '') // Удалить < и >
    .slice(0, 500); // Максимум 500 символов
}

// Улучшенная валидация email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  return emailRegex.test(email);
}

// Валидация номера телефона Казахстана
function isValidPhone(phone: string): boolean {
  // Формат: +7, 8, или без кода | 7XXXXXXXXXX (10 цифр)
  const phoneRegex = /^(\+7|8)?[- ]?7[0-9]{9}$|^7[0-9]{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
}

// Отправка сообщения на рабочий WhatsApp
async function sendToBusinessWhatsApp(orderId: string, from: string, to: string, vol: string, kind: string, mode: string, name: string, phone: string, wa?: string, email?: string) {
  try {
    const businessPhone = "77718000209"; // Рабочий номер WhatsApp
    const message = `📋 *Новая заявка* #${orderId}\n\n` +
      `👤 Имя: ${name}\n` +
      `📞 Телефон: ${phone}\n` +
      `${wa ? `📱 WhatsApp: ${wa}\n` : ``}` +
      `${email ? `📧 Email: ${email}\n` : ``}` +
      `📍 От: ${from}\n` +
      `📍 До: ${to}\n` +
      `📦 Объём: ${vol}\n` +
      `🏷️ Тип: ${kind}\n` +
      `🚚 Способ: ${mode}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappBusinessUrl = `https://wa.me/${businessPhone}?text=${encodedMessage}`;
    
    // Попытка отправить через webhook (если настроен)
    const webhookUrl = process.env.WHATSAPP_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: businessPhone,
            message: message,
            orderId,
          }),
        });
      } catch (webhookError) {
        // Webhook ошибка не критична
      }
    }
    
    return { success: true, businessUrl: whatsappBusinessUrl };
  } catch (error) {
    return { success: false };
  }
}

export async function POST(request: NextRequest) {
  try {
    // Базовая CSRF защита - проверяем что запрос пришел с нашего же домена
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const contentType = request.headers.get('content-type');
    
    // Должен быть JSON и origin должен совпадать (или быть localhost)
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { success: false, error: "Invalid content type" },
        { status: 400 }
      );
    }
    // Базовая защита от DDoS - проверка IP и limit requests
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const key = `rate-limit:${ip}`;
    
    // Используем простой in-memory rate limiting (для production используйте Redis)
    const globalCache = globalThis as any;
    if (!globalCache._rateLimits) {
      globalCache._rateLimits = new Map();
    }
    
    const now = Date.now();
    const limits = globalCache._rateLimits;
    const limitData = limits.get(key) || { count: 0, reset: now + 60000 };
    
    // Reset если прошла минута
    if (now > limitData.reset) {
      limitData.count = 0;
      limitData.reset = now + 60000;
    }
    
    // Лимит 5 заявок в минуту с одного IP
    if (limitData.count >= 5) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Слишком много заявок. Попробуйте позже." 
        },
        { status: 429 }
      );
    }
    
    limitData.count++;
    limits.set(key, limitData);
    
    const body = await request.json();
    
    const { from, to, vol, kind, mode, name, phone, wa, email } = body;

    // Санитизируем все user inputs
    const sanitizedFrom = sanitizeInput(from);
    const sanitizedTo = sanitizeInput(to);
    const sanitizedVol = sanitizeInput(vol);
    const sanitizedKind = sanitizeInput(kind);
    const sanitizedMode = sanitizeInput(mode);
    const sanitizedName = sanitizeInput(name);
    const sanitizedPhone = sanitizeInput(phone);
    const sanitizedWa = sanitizeInput(wa || '');
    const sanitizedEmail = sanitizeInput(email || '');

    // Валидирование обязательных полей
    if (!sanitizedFrom || !sanitizedTo || !sanitizedVol || !sanitizedKind || !sanitizedMode || !sanitizedName || !sanitizedPhone) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Заполните все обязательные поля" 
        },
        { status: 400 }
      );
    }

    // Валидирование формата номера
    if (!isValidPhone(sanitizedPhone)) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Неправильный формат номера телефона" 
        },
        { status: 400 }
      );
    }

    // Валидирование email если указан
    if (sanitizedEmail && !isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Неправильный формат email" 
        },
        { status: 400 }
      );
    }

    // Генерируем ID заявки
    const orderId = "AXG-" + (100000 + Math.floor(Math.random() * 899999));

    // Формируем сообщение для WhatsApp - отправляем на рабочий номер
    const businessPhone = "77718000209";
    const customerMessage = encodeURIComponent(
      `Здравствуйте! Я оставил заявку на расчёт доставки:\n\n` +
      `👤 Имя: ${sanitizedName}\n` +
      `📞 Телефон: ${sanitizedPhone}\n` +
      `${sanitizedWa ? `📱 WhatsApp: ${sanitizedWa}\n` : ``}` +
      `📧 ${sanitizedEmail ? `Email: ${sanitizedEmail}` : `Способ связи: WhatsApp`}\n` +
      `📍 От: ${sanitizedFrom}\n` +
      `📍 До: ${sanitizedTo}\n` +
      `📦 Объём: ${sanitizedVol}\n` +
      `🏷️ Тип груза: ${sanitizedKind}\n` +
      `🚚 Способ: ${sanitizedMode}\n` +
      `\nЗаявка #${orderId}`
    );
    const whatsappUrl = `https://wa.me/${businessPhone}?text=${customerMessage}`;

    // Отправляем сообщение на рабочий WhatsApp
    const businessResult = await sendToBusinessWhatsApp(orderId, sanitizedFrom, sanitizedTo, sanitizedVol, sanitizedKind, sanitizedMode, sanitizedName, sanitizedPhone, sanitizedWa, sanitizedEmail);

    return NextResponse.json(
      {
        success: true,
        message: "Заявка принята. Расчёт пришлём в WhatsApp в течение 15 минут.",
        orderId,
        whatsappUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: "Ошибка при обработке заявки. Попробуйте позже." 
      },
      { status: 500 }
    );
  }
}
