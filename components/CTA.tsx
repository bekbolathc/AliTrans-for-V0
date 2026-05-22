"use client";

import { useState, useEffect } from "react";

export function CTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Get URL parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlName = params.get("name");
    const urlPhone = params.get("phone");
    
    if (urlName) setName(urlName);
    if (urlPhone) setPhone(urlPhone);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store data in sessionStorage so Quiz component can access it
    if (name) sessionStorage.setItem("quiz_name", name);
    if (phone) sessionStorage.setItem("quiz_phone", phone);
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="cta" id="contacts">
      <div className="container cta__inner">
        <div className="cta__left">
          <div className="mono section-head__num section-head__num--light">/12 · ГОТОВЫ НАЧАТЬ</div>
          <h2 className="cta__title">Готовы доставить груз<br />из Китая?</h2>
          <p className="cta__lead">Расчёт за 15 минут. Без обязательств. Без навязчивых звонков.</p>

          <ul className="cta__guarantees">
            <li><span className="mono">✓</span> Договор + страховка груза 0,2%</li>
            <li><span className="mono">✓</span> Полный пакет документов и таможенное оформление</li>
            <li><span className="mono">✓</span> Расчёт за 15 минут, ответ в WhatsApp</li>
          </ul>

          <div className="cta__actions">
            <a className="btn btn--gold btn--lg" href="#quiz">Рассчитать стоимость →</a>
            <a className="btn btn--ghost-light btn--lg" href="https://wa.me/77718000209" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>

        <div className="cta__right">
          <div className="manager">
            <div className="manager__photo" aria-hidden="true">
              <div className="manager__photo-init">АМ</div>
              <div className="mono manager__photo-lbl">PORTRAIT · TODO 600×600</div>
            </div>
            <div className="manager__body">
              <div className="mono manager__role">РУКОВОДИТЕЛЬ ЛОГИСТИЧЕСКОГО ОТДЕЛА</div>
              <div className="manager__name">Аманжол</div>
              <p className="manager__quote">«Здравствуйте! Помогу с логистикой вашего груза — рассчитаю стоимость и подберу способ доставки.»</p>
              <form className="manager__form" onSubmit={handleSubmit}>
                <label className="field"><span>Имя</span><input type="text" placeholder="Айгерим" value={name} onChange={(e) => setName(e.target.value)} /></label>
                <label className="field"><span>Телефон</span><input type="tel" placeholder="+7 771 800 02 09" value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
                <button className="btn btn--gold btn--full" type="submit">Жду расчёт →</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
