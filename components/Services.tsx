export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <header className="section-head">
          <div className="mono section-head__num">/03 · СПОСОБЫ ДОСТАВКИ</div>
          <h2 className="section-head__title">Выберите способ доставки под вашу задачу</h2>
        </header>

        <div className="services__grid">
          <article className="svc">
            <div className="svc__head">
              <div className="svc__ico" aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none">
                  <path d="M4 22 L22 18 L34 6 L36 8 L26 22 L34 24 L34 26 L24 26 L18 32 L16 32 L18 26 L12 26 L10 28 L8 28 L10 24 L4 24 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="mono svc__tag">AIR · 01</div>
            </div>
            <h3 className="svc__title">Авиа доставка</h3>
            <div className="svc__meta">
              <div><span className="mono">срок</span><b>5–7 дней</b></div>
              <div><span className="mono">от</span><b>$5/кг</b></div>
            </div>
            <p className="svc__when mono">КОГДА ВЫБИРАТЬ</p>
            <ul className="svc__list">
              <li>Срочные грузы и дедлайны</li>
              <li>Дорогостоящие товары (электроника)</li>
              <li>Малогабаритные партии 100–500 кг</li>
              <li>Образцы и прототипы</li>
            </ul>
            <a className="btn btn--ghost btn--full" href="#quiz">Рассчитать авиа →</a>
          </article>

          <article className="svc svc--accent">
            <div className="svc__head">
              <div className="svc__ico" aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none">
                  <rect x="6" y="10" width="28" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M6 14 H34 M6 22 H34" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="12" cy="30" r="2" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="28" cy="30" r="2" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M2 30 H8 M32 30 H38" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </div>
              <div className="mono svc__tag">RAIL · 02</div>
            </div>
            <h3 className="svc__title">ЖД доставка</h3>
            <div className="svc__meta">
              <div><span className="mono">срок</span><b>12–18 дней</b></div>
              <div><span className="mono">от</span><b>$299/м³</b></div>
            </div>
            <p className="svc__when mono">КОГДА ВЫБИРАТЬ</p>
            <ul className="svc__list">
              <li>Оптимальный баланс цены и срока</li>
              <li>Оптовые партии от 500 кг</li>
              <li>Контейнерные перевозки через Хоргос</li>
              <li>Сезонные закупки заранее</li>
            </ul>
            <a className="btn btn--gold btn--full" href="#quiz">Рассчитать ЖД →</a>
            <div className="svc__ribbon mono">САМЫЙ ПОПУЛЯРНЫЙ</div>
          </article>

          <article className="svc">
            <div className="svc__head">
              <div className="svc__ico" aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none">
                  <path d="M4 12 H22 V26 H4 Z M22 16 H30 L36 22 V26 H22 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  <circle cx="12" cy="30" r="2.4" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="28" cy="30" r="2.4" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </div>
              <div className="mono svc__tag">ROAD · 03</div>
            </div>
            <h3 className="svc__title">Авто доставка</h3>
            <div className="svc__meta">
              <div><span className="mono">срок</span><b>7–14 дней</b></div>
              <div><span className="mono">от</span><b>$1/кг</b></div>
            </div>
            <p className="svc__when mono">КОГДА ВЫБИРАТЬ</p>
            <ul className="svc__list">
              <li>Гибкие маршруты «до двери»</li>
              <li>Сборные грузы</li>
              <li>Негабаритные грузы и тралы</li>
              <li>Температурный режим</li>
            </ul>
            <a className="btn btn--ghost btn--full" href="#quiz">Рассчитать авто →</a>
          </article>
        </div>
      </div>
    </section>
  );
}
