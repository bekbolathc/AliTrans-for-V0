"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface CTAProps {
  withQuizOnPage?: boolean;
  /** Источник заявки — попадает в payload `/api/quiz` и далее в Bitrix24/Telegram для сегментации. */
  source?: string;
  /** Базовый mode для API (рус. название способа доставки). */
  defaultMode?: string;
}

export function CTA({
  withQuizOnPage = true,
  source = "zhd-dostavka",
  defaultMode = "",
}: CTAProps) {
  const pathname = usePathname();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  // Get URL parameters on mount (pre-fill + UTM capture)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlName = params.get("name");
    const urlPhone = params.get("phone");
    if (urlName) setName(urlName);
    if (urlPhone) setPhone(urlPhone);

    // Capture UTM params for CRM attribution
    const utms: Record<string, string> = {};
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
      const val = params.get(key);
      if (val) utms[key] = val;
    }
    if (Object.keys(utms).length) setUtmParams(utms);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (withQuizOnPage) {
      // Main page behavior: save to sessionStorage and scroll to Quiz
      if (name) sessionStorage.setItem("quiz_name", name);
      if (phone) sessionStorage.setItem("quiz_phone", phone);
      document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Subpage behavior: validate and send directly to API
      if (!name.trim()) {
        setMessage("Пожалуйста, укажите имя");
        return;
      }
      if (!phone.trim()) {
        setMessage("Пожалуйста, укажите телефон");
        return;
      }

      setIsLoading(true);
      setMessage("");

      try {
        const response = await fetch("/api/quiz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            from: "",
            to: "",
            vol: "",
            kind: "",
            mode: defaultMode,
            name: name.trim(),
            phone: phone.trim(),
            source,
            ...utmParams,
          }),
        });

        const data = await response.json();

        if (data.success) {
          setMessage("✓ Спасибо! Расчёт придёт в WhatsApp в течение 15 минут.");
          setName("");
          setPhone("");
        } else {
          setMessage(data.error || "Ошибка при отправке заявки. Попробуйте позже.");
        }
      } catch (err) {
        setMessage("Ошибка при отправке заявки. Попробуйте позже.");
        console.error("[v0] CTA API error:", err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="cta" id="contacts">
      <div className="container cta__inner">
        <div className="cta__left">
          <div className="mono section-head__num section-head__num--light">/13 · ГОТОВЫ НАЧАТЬ</div>
          <h2 className="cta__title">Готовы доставить груз<br />из Китая?</h2>
          <p className="cta__lead">Расчёт за 15 минут. Без обязательств. Без навязчивых звонков.</p>

          <ul className="cta__guarantees">
            <li><span className="mono">✓</span> Договор + страховка груза 0,2%</li>
            <li><span className="mono">✓</span> Полный пакет документов и таможенное оформление</li>
            <li><span className="mono">✓</span> Расчёт за 15 минут, ответ в WhatsApp</li>
          </ul>

          <div className="cta__actions">
            <a className="btn btn--gold btn--lg" href={withQuizOnPage ? "#quiz" : "#quiz-cta"}>Рассчитать стоимость →</a>
            <a className="btn btn--ghost-light btn--lg" href="https://wa.me/77718000209" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>

        <div className="cta__right">
          <div className="manager">
            <div className="manager__photo" aria-hidden="true">
              <div className="manager__photo-init">АМ</div>
              <div className="mono manager__photo-lbl">АМ</div>
            </div>
            <div className="manager__body">
              <div className="mono manager__role">РУКОВОДИТЕЛЬ ЛОГИСТИЧЕСКОГО ОТДЕЛА</div>
              <div className="manager__name">Аманжол</div>
              <p className="manager__quote">«Здравствуйте! Помогу с логистикой вашего груза — рассчитаю стоимость и подберу способ доставки.»</p>
              <form className="manager__form" onSubmit={handleSubmit}>
                <label className="field"><span>Имя</span><input type="text" placeholder="Айгерим" value={name} onChange={(e) => setName(e.target.value)} disabled={isLoading} /></label>
                <label className="field"><span>Телефон</span><input type="tel" placeholder="+7 771 800 02 09" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={isLoading} /></label>
                {message && <p style={{ fontSize: "14px", color: message.startsWith("✓") ? "var(--emerald)" : "var(--rose)", marginTop: "8px" }}>{message}</p>}
                <button className="btn btn--gold btn--full" type="submit" disabled={isLoading}>{isLoading ? "Отправляем..." : "Жду расчёт →"}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
