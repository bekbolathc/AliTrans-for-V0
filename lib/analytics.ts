// Единая точка отправки событий форм в dataLayer.
// GTM ловит их триггерами Custom Event и передаёт в GA4 Event-тегами.
// window.gtag при загрузке GA4 через GTM не создаётся — поэтому только dataLayer.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Формы, с которых шлём аналитику. */
export type FormId = "quiz" | "cta";

function push(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

// form_start — «первое взаимодействие», поэтому шлём один раз на форму
// за жизнь страницы. Модуль живёт до полной перезагрузки, а обе формы
// уводят на /thank-you через window.location — счётчик обнулится сам.
const startedForms = new Set<FormId>();

/**
 * Первое взаимодействие пользователя с формой (фокус или ввод).
 * Повторные вызовы для той же формы игнорируются.
 */
export function pushFormStart(formId: FormId) {
  if (typeof window === "undefined") return;
  if (startedForms.has(formId)) return;
  startedForms.add(formId);

  push({
    event: "form_start",
    form_id: formId,
    form_location: window.location.pathname,
  });
}

/**
 * Успешная заявка. Схема полей совпадает с тегом GA4 «purchase» в GTM:
 * value / currency / transaction_id.
 */
export function pushPurchase(params: {
  value: number;
  currency: string;
  transactionId: string;
}) {
  push({
    event: "purchase",
    value: params.value,
    currency: params.currency,
    transaction_id: params.transactionId,
  });
}
