"use client";

import { useState, useEffect } from "react";

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

type Mode = "air" | "rail" | "road" | "advice";
type Volume = "lt100" | "100-500" | "500-2000" | "2-10t" | "container";

type Answers = {
  from?: string;
  to?: string;
  vol?: Volume;
  kind?: string;
  mode?: Mode;
  name?: string;
  phone?: string;
  wa?: string;
  email?: string;
};

const captions: Record<number, string> = {
  1: "Откуда везём",
  2: "Куда везём",
  3: "Объём",
  4: "Тип груза",
  5: "Скорость",
  6: "Контакты",
};

export function Quiz() {
  const [step, setStep] = useState<number | "block" | "done">(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [price, setPrice] = useState("");
  const [orderId, setOrderId] = useState("ATG-000000");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>("");
  const [showCustomFrom, setShowCustomFrom] = useState(false);
  const [showCustomTo, setShowCustomTo] = useState(false);
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");

  // Load pre-filled data from sessionStorage and URL params; capture UTM
  useEffect(() => {
    const savedName = sessionStorage.getItem("quiz_name");
    const savedPhone = sessionStorage.getItem("quiz_phone");
    if (savedName || savedPhone) {
      setAnswers((prev) => ({
        ...prev,
        name: savedName || prev.name,
        phone: savedPhone || prev.phone,
      }));
      sessionStorage.removeItem("quiz_name");
      sessionStorage.removeItem("quiz_phone");
    }

    // Store UTM params in sessionStorage so they survive quiz multi-step flow
    const params = new URLSearchParams(window.location.search);
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
      const val = params.get(key);
      if (val) sessionStorage.setItem(`quiz_${key}`, val);
    }
  }, []);

  // Auto-advance on radio select (except step 6)
  useEffect(() => {
    if (typeof step !== "number") return;
    // pass — handled by onChange below
  }, [step]);

  const set = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const next = () => {
    if (step === 3 && answers.vol === "lt100") {
      setStep("block");
      return;
    }
    if (step === 6) {
      submitQuiz();
      return;
    }
    if (typeof step === "number" && step < 6) setStep(step + 1);
  };

  const prev = () => {
    if (typeof step === "number" && step > 1) setStep(step - 1);
  };

  const reset = () => {
    setAnswers({});
    setStep(1);
    setError("");
  };

  const handleRadio = (key: keyof Answers, value: string) => {
    set(key, value);
    if (typeof step === "number" && step < 6) {
      setTimeout(() => {
        if (key === "vol" && value === "lt100") {
          setStep("block");
        } else if (typeof step === "number" && step < 6) {
          setStep((s) => (typeof s === "number" && s < 6 ? s + 1 : s));
        }
      }, 220);
    }
  };

  const submitQuiz = async () => {
    // Валидирование обязательных полей
    if (!answers.name?.trim() || !answers.phone?.trim()) {
      setError("Пожалуйста, заполните имя и номер телефона");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Рассчитываем цену перед отправкой
      const base = { "lt100": 150, "100-500": 350, "500-2000": 900, "2-10t": 3200, container: 9500 }[answers.vol ?? "100-500"] ?? 800;
      const mult = { air: 2.4, road: 1.0, rail: 0.9, advice: 1.1 }[answers.mode ?? "rail"] ?? 1;
      const low = Math.round(base * mult);
      const high = Math.round(base * mult * 1.35);
      const calculatedPrice = `$${low.toLocaleString("en-US")} – $${high.toLocaleString("en-US")}`;

      // Fetch с timeout (25 секунд — Bitrix24-вебхук иногда отвечает дольше 10с,
      // а ранний abort означал, что лид уже создан в CRM, но клиент не успевал
      // дождаться success и не делал редирект на /thank-you).
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000);

      // Read UTM params stored at quiz entry
      const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
      const utms: Record<string, string> = {};
      for (const key of utmKeys) {
        const val = sessionStorage.getItem(`quiz_${key}`);
        if (val) utms[key] = val;
      }

      const response = await fetch("/api/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...answers, ...utms }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ошибка при отправке заявки");
      }

      setPrice(calculatedPrice);
      setOrderId(data.orderId);
      setStep("done");
      
      // Redirect to thank-you page after 1.5 seconds.
      // Полная перезагрузка (не router.push) — GTM должен переинициализироваться
      // и заново сработать триггер «Просмотр страницы» для конверсии в Google Ads.
      setTimeout(() => {
        window.location.href = `/thank-you?id=${data.orderId}`;
      }, 1500);
      
      // Track conversion in Google Analytics
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "purchase", {
          value: base * mult,
          currency: "USD",
          transaction_id: data.orderId,
        });
      }
      
      // Сохраняем данные в sessionStorage для CTA компонента
      sessionStorage.setItem("quiz_name", answers.name);
      sessionStorage.setItem("quiz_phone", answers.phone);
    } catch (err) {
      let message = "Ошибка при отправке заявки";
      
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          message = "Сервер не ответил. Попробуйте снова или напишите в WhatsApp +77718000209";
        } else {
          message = err.message;
        }
      }
      
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressW =
    step === "done"
      ? "100%"
      : step === "block"
      ? "50%"
      : `${(((step as number) || 1) / 6) * 100}%`;

  const navHidden = step === "done" || step === "block";

  return (
    <section className="quiz" id="quiz">
      <div className="container">
        <header className="section-head section-head--center">
          <div className="mono section-head__num">/02 · КОНВЕРСИЯ</div>
          <h2 className="section-head__title">Рассчитайте стоимость доставки за 15 минут</h2>
          <p className="section-head__lead">
            Ответьте на 6 вопросов — пришлём расчёт в WhatsApp. Без обязательств и навязчивых звонков.
          </p>
        </header>

        <div className="quiz__wrap" data-step={step} role="region" aria-live="polite" aria-label="Quiz форма">
          <div className="quiz__progress">
            <div className="quiz__progress-bar">
              <div style={{ width: progressW, height: "100%", background: step === "done" ? "#0E8B6C" : "#D9A441", borderRadius: 99, transition: "width 0.4s cubic-bezier(.4,0,.2,1)" }}></div>
            </div>
            <div className="quiz__progress-meta mono">
              ШАГ <span>{typeof step === "number" ? step : 6}</span> / 6 ·{" "}
              <span>{typeof step === "number" ? captions[step] : ""}</span>
            </div>
          </div>

          <div className="quiz__stage">
            {step === 1 && (
              <fieldset className="qstep is-active">
                <legend className="qstep__title">Откуда вы хотите доставить груз?</legend>
                <div className="qstep__opts">
                  {["Гуанчжоу", "Иу", "Шанхай", "Урумчи", "Шэньчжэнь", "Пекин", "Чэнду", "Другой"].map((c) => (
                    <label key={c}>
                      <input 
                        type="radio" 
                        name="from" 
                        value={c === "Другой" ? customFrom : c} 
                        checked={c === "Другой" ? showCustomFrom : answers.from === c} 
                        onChange={() => {
                          if (c === "Другой") {
                            setShowCustomFrom(true);
                            setShowCustomTo(false);
                          } else {
                            setShowCustomFrom(false);
                            handleRadio("from", c);
                          }
                        }}
                      />
                      <span>{c === "Другой" ? "Другой город" : c}</span>
                    </label>
                  ))}
                </div>
                {showCustomFrom && (
                  <div style={{ marginTop: "16px" }}>
                    <input
                      type="text"
                      placeholder="Введите название города"
                      value={customFrom}
                      onChange={(e) => {
                        setCustomFrom(e.target.value);
                        set("from", e.target.value);
                      }}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        background: "transparent",
                        color: "#fff",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                )}
              </fieldset>
            )}

            {step === 2 && (
              <fieldset className="qstep is-active">
                <legend className="qstep__title">В какой город Казахстана нужна доставка?</legend>
                <div className="qstep__opts">
                  {["Алматы", "Астана", "Шымкент", "Актау", "Актобе", "Караганда", "Другой"].map((c) => (
                    <label key={c}>
                      <input 
                        type="radio" 
                        name="to" 
                        value={c === "Другой" ? customTo : c} 
                        checked={c === "Другой" ? showCustomTo : answers.to === c} 
                        onChange={() => {
                          if (c === "Другой") {
                            setShowCustomTo(true);
                          } else {
                            setShowCustomTo(false);
                            handleRadio("to", c);
                          }
                        }}
                      />
                      <span>{c === "Другой" ? "Другой город" : c}</span>
                    </label>
                  ))}
                </div>
                {showCustomTo && (
                  <div style={{ marginTop: "16px" }}>
                    <input
                      type="text"
                      placeholder="Введите название города"
                      value={customTo}
                      onChange={(e) => {
                        setCustomTo(e.target.value);
                        set("to", e.target.value);
                      }}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        background: "transparent",
                        color: "#fff",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                )}
              </fieldset>
            )}

            {step === 3 && (
              <fieldset className="qstep is-active">
                <legend className="qstep__title">Какой объём груза?</legend>
                <div className="qstep__opts">
                  <label className="opt--danger">
                    <input type="radio" name="vol" value="lt100" checked={answers.vol === "lt100"} onChange={() => handleRadio("vol", "lt100")} />
                    <span>До 100 кг <em>не подходит</em></span>
                  </label>
                  <label><input type="radio" name="vol" value="100-500" checked={answers.vol === "100-500"} onChange={() => handleRadio("vol", "100-500")} /><span>100–500 кг</span></label>
                  <label><input type="radio" name="vol" value="500-2000" checked={answers.vol === "500-2000"} onChange={() => handleRadio("vol", "500-2000")} /><span>500 кг — 2 т</span></label>
                  <label><input type="radio" name="vol" value="2-10t" checked={answers.vol === "2-10t"} onChange={() => handleRadio("vol", "2-10t")} /><span>2–10 т</span></label>
                  <label><input type="radio" name="vol" value="container" checked={answers.vol === "container"} onChange={() => handleRadio("vol", "container")} /><span>Контейнер · от 10 т</span></label>
                </div>
              </fieldset>
            )}

            {step === 4 && (
              <fieldset className="qstep is-active">
                <legend className="qstep__title">Что за груз?</legend>
                <div className="qstep__opts">
                  {[
                    ["apparel", "Одежда и аксессуары"],
                    ["electronics", "Электроника и техника"],
                    ["industry", "Промышленное оборудование"],
                    ["build", "Стройматериалы и сантехника"],
                    ["furniture", "Мебель и интерьер"],
                    ["other", "Другое"],
                  ].map(([v, l]) => (
                    <label key={v}>
                      <input type="radio" name="kind" value={v} checked={answers.kind === v} onChange={() => handleRadio("kind", v)} />
                      <span>{l}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 5 && (
              <fieldset className="qstep is-active">
                <legend className="qstep__title">Как нужно доставить?</legend>
                <div className="qstep__opts">
                  <label><input type="radio" name="mode" value="air" checked={answers.mode === "air"} onChange={() => handleRadio("mode", "air")} /><span><b>Срочно</b> · авиа, 5–7 дней</span></label>
                  <label><input type="radio" name="mode" value="road" checked={answers.mode === "road"} onChange={() => handleRadio("mode", "road")} /><span><b>Стандарт</b> · авто, 7–14 дней</span></label>
                  <label><input type="radio" name="mode" value="rail" checked={answers.mode === "rail"} onChange={() => handleRadio("mode", "rail")} /><span><b>Эконом</b> · ЖД, 12–18 дней</span></label>
                  <label><input type="radio" name="mode" value="advice" checked={answers.mode === "advice"} onChange={() => handleRadio("mode", "advice")} /><span>Не знаю — посоветуйте</span></label>
                </div>
              </fieldset>
            )}

            {step === 6 && (
              <fieldset className="qstep is-active">
                <legend className="qstep__title">Куда отправить расчёт?</legend>
                <div className="qstep__form">
                  {error && <div role="alert" style={{ color: "#D93D3D", marginBottom: "16px", fontSize: "14px" }}>{error}</div>}
                  <label className="field" htmlFor="quiz-name"><span>Имя</span><input id="quiz-name" type="text" autoComplete="name" placeholder="Айгерим" value={answers.name ?? ""} onChange={(e) => set("name", e.target.value)} /></label>
                  <label className="field" htmlFor="quiz-phone"><span>Телефон <em className="mono">+7 7XX XXX XX XX</em></span><input id="quiz-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+7 771 800 02 09" value={answers.phone ?? ""} onChange={(e) => set("phone", e.target.value)} /></label>
                  <label className="field" htmlFor="quiz-wa"><span>WhatsApp (если другой)</span><input id="quiz-wa" type="tel" inputMode="tel" placeholder="тот же номер" value={answers.wa ?? ""} onChange={(e) => set("wa", e.target.value)} /></label>
                  <label className="field" htmlFor="quiz-email"><span>Email · опционально</span><input id="quiz-email" type="email" inputMode="email" autoComplete="email" placeholder="company@mail.kz" value={answers.email ?? ""} onChange={(e) => set("email", e.target.value)} /></label>
                  <label className="check" htmlFor="quiz-consent"><input id="quiz-consent" type="checkbox" defaultChecked /><span>Согласен с обработкой персональных данных</span></label>
                </div>
              </fieldset>
            )}

            {step === "block" && (
              <div className="qstep is-active qstep--block">
                <div className="qstep__title">Извините — это меньше нашего минимума.</div>
                <p>
                  Наш сервис рассчитан на партии <b>от 100 кг / 1 м³</b>. Это премиальная B2B-доставка с договором,
                  страховкой и НДС-документами. Если груз меньше — рекомендуем карго-сервисы.
                </p>
                <button className="btn btn--ghost" onClick={reset}>Начать заново</button>
              </div>
            )}

            {step === "done" && (
              <div className="qstep is-active qstep--done">
                <div className="qstep__title">Спасибо! Заявка принята.</div>
                <p className="qstep__price">Ориентировочно: <b>{price}</b> <span className="mono">за партию</span></p>
                <p>Точную цену с учётом плотности, маркировки и таможни пришлём в WhatsApp <b>в течение 15 минут</b>.</p>
                <div className="qstep__id mono">ЗАЯВКА #{orderId}</div>
                
                {/* WhatsApp Button */}
                <div style={{ marginTop: "24px" }}>
                  <a 
                    href={`https://wa.me/77718000209?text=${encodeURIComponent(
                      `Здравствуйте! Я оставил заявку на расчёт доставки:\n\n` +
                      `👤 Имя: ${answers.name}\n` +
                      `📞 Телефон: ${answers.phone}\n` +
                      `${answers.wa ? `📱 WhatsApp: ${answers.wa}\n` : ``}` +
                      `📧 ${answers.email ? `Email: ${answers.email}` : `Способ связи: WhatsApp`}\n` +
                      `📍 От: ${answers.from}\n` +
                      `📍 До: ${answers.to}\n` +
                      `📦 Объём: ${answers.vol}\n` +
                      `🏷️ Тип груза: ${answers.kind}\n` +
                      `🚚 Способ: ${answers.mode}\n` +
                      `\nЗаявка #${orderId}`
                    )}`}
                    className="btn btn--gold btn--full"
                    style={{ display: "inline-block", width: "100%", textAlign: "center", textDecoration: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Открыть WhatsApp ↗
                  </a>
                </div>
              </div>
            )}
          </div>

          {!navHidden && (
            <footer className="quiz__nav">
              <button className="btn btn--ghost" onClick={prev} style={{ visibility: step === 1 ? "hidden" : "visible" }}>← Назад</button>
              <button className="btn btn--gold" onClick={next} disabled={isSubmitting}>
                {isSubmitting ? "Отправляем..." : step === 6 ? "Отправить заявку →" : "Далее →"}
              </button>
            </footer>
          )}
        </div>

        <p className="quiz__sub mono">↳ Данные защищены. Расчёт пришлём в WhatsApp, не будем звонить без вашей просьбы.</p>
      </div>
    </section>
  );
}
