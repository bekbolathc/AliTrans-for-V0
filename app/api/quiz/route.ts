import { NextRequest, NextResponse } from "next/server";

// Простое валидирование email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Валидирование номера телефона
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
  return phoneRegex.test(phone);
}

// Отправка сообщения на рабочий WhatsApp
async function sendToBusinessWhatsApp(orderId: string, from: string, to: string, vol: string, kind: string, mode: string, name: string, phone: string) {
  try {
    const businessPhone = "77718000209"; // Рабочий номер WhatsApp
    const message = `📋 *Новая заявка* #${orderId}\n\n` +
      `👤 Имя: ${name}\n` +
      `📞 Телефон: ${phone}\n` +
      `📍 От: ${from}\n` +
      `📍 До: ${to}\n` +
      `📦 Объём: ${vol}\n` +
      `🏷️ Тип: ${kind}\n` +
      `🚚 Способ: ${mode}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappBusinessUrl = `https://wa.me/${businessPhone}?text=${encodedMessage}`;
    
    console.log("[v0] Business WhatsApp link generated:", whatsappBusinessUrl);
    
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
        console.log("[v0] Message sent to webhook");
      } catch (webhookError) {
        console.log("[v0] Webhook error (non-critical):", webhookError);
      }
    }
    
    return { success: true, businessUrl: whatsappBusinessUrl };
  } catch (error) {
    console.error("[v0] Error sending to business WhatsApp:", error);
    return { success: false };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { from, to, vol, kind, mode, name, phone, wa, email } = body;

    // Валидирование обязательных полей
    if (!from || !to || !vol || !kind || !mode || !name || !phone) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Заполните все обязательные поля" 
        },
        { status: 400 }
      );
    }

    // Валидирование формата номера
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Неправильный формат номера телефона" 
        },
        { status: 400 }
      );
    }

    // Валидирование email если указан
    if (email && !isValidEmail(email)) {
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

    // Формируем сообщение для WhatsApp
    const whatsappPhone = (wa || phone).replace(/\D/g, "");
    const message = encodeURIComponent(
      `Здравствуйте! Я оставил заявку на расчёт доставки:\n` +
      `Откуда: ${from}\n` +
      `Куда: ${to}\n` +
      `Объём: ${vol}\n` +
      `Тип груза: ${kind}\n` +
      `Способ: ${mode}\n` +
      `Заявка #${orderId}`
    );
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${message}`;

    // Отправляем сообщение на рабочий WhatsApp
    const businessResult = await sendToBusinessWhatsApp(orderId, from, to, vol, kind, mode, name, phone);
    
    console.log("[v0] New quiz submission:", {
      orderId,
      from,
      to,
      vol,
      kind,
      mode,
      name,
      phone,
      wa,
      email,
      timestamp: new Date().toISOString(),
    });

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
    console.error("[v0] Quiz API Error:", error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: "Ошибка при обработке заявки. Попробуйте позже." 
      },
      { status: 500 }
    );
  }
}
