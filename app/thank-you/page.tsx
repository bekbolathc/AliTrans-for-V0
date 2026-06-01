import { Suspense } from "react";
import { ThankYouContent } from "./thank-you-content";

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="thank-you"><div className="thank-you__container">Загружаем...</div></div>}>
      <ThankYouContent />
    </Suspense>
  );
}
