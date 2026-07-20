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
 * Успешная заявка (лид). Шлётся ТОЛЬКО по факту успешного ответа сервера —
 * поэтому перезагрузками страницы /thank-you её не накрутить (в отличие от
 * события на просмотр страницы). Схема полей = тег GA4 «generate_lead» в GTM.
 *
 * `value` опционален: у калькулятора (Quiz) есть расчётная сумма, у формы на
 * страницах услуг (CTA) её нет — тогда поле просто не отправляем.
 */
export function pushGenerateLead(params: {
  transactionId: string;
  currency?: string;
  value?: number;
}) {
  const payload: Record<string, unknown> = {
    event: "generate_lead",
    transaction_id: params.transactionId,
  };
  if (typeof params.value === "number") payload.value = params.value;
  if (params.currency) payload.currency = params.currency;
  push(payload);
}
