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

    // TODO: Здесь нужно добавить сохранение в БД и отправку email
    // Сейчас возвращаем успешный ответ
    
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
