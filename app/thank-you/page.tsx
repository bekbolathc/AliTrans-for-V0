import { Suspense } from "react";
import { Metadata } from "next";
import { ThankYouContent } from "./thank-you-content";

export const metadata: Metadata = {
  title: "Заявка принята — Ali Trans Group",
  description: "Ваша заявка на расчёт доставки из Китая принята. Менеджер свяжется с вами в WhatsApp в течение 15 минут.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="thank-you"><div className="thank-you__container">Загружаем...</div></div>}>
      <ThankYouContent />
    </Suspense>
  );
}
