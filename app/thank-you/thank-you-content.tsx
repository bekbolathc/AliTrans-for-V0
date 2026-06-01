"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export function ThankYouContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id") || "ATG-000000";

  const steps = [
    { number: "1", title: "Менеджер уточнит детали", description: "Проверим грузовые размеры, вес и особенности" },
    { number: "2", title: "Пришлём точный расчёт", description: "С фиксированной ценой и сроком доставки" },
    { number: "3", title: "Подпишем договор", description: "Оформим и начнём организацию перевозки" },
  ];

  return (
    <div className="thank-you">
      <div className="thank-you__container">
        {/* Checkmark */}
        <div className="thank-you__checkmark">
          <svg viewBox="0 0 100 100" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="8">
            <circle cx="50" cy="50" r="45" fill="#0E8B6C" />
            <path d="M30 50L45 65L70 35" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Main heading */}
        <h1 className="thank-you__title">Заявка принята!</h1>
        
        {/* Subheading */}
        <p className="thank-you__subtitle">
          Менеджер свяжется с вами в WhatsApp в течение 15 минут
        </p>

        {/* Order ID */}
        <div className="thank-you__order-id">
          <span className="thank-you__order-label">Номер заявки:</span>
          <span className="thank-you__order-number mono">{orderId}</span>
        </div>

        {/* Steps */}
        <div className="thank-you__steps">
          {steps.map((step) => (
            <div key={step.number} className="thank-you__step">
              <div className="thank-you__step-number">{step.number}</div>
              <div className="thank-you__step-content">
                <h3 className="thank-you__step-title">{step.title}</h3>
                <p className="thank-you__step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/77718000209"
          target="_blank"
          rel="noopener noreferrer"
          className="thank-you__whatsapp-btn"
        >
          Написать в WhatsApp
        </a>

        {/* Back link */}
        <Link href="/" className="thank-you__back-link">
          ← Вернуться на сайт
        </Link>
      </div>
    </div>
  );
}
