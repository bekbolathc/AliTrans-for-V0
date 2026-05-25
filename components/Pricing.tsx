export function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <header className="section-head">
          <div className="mono section-head__num">/07 · ТАРИФЫ</div>
          <h2 className="section-head__title">Прозрачные тарифы — никаких скрытых платежей</h2>
        </header>

        <div className="ptable">
          <div className="ptable__head mono">
            <div>тип</div><div>срок</div><div>цена от</div><div>минимум</div><div></div>
          </div>
          <div className="ptable__row">
            <div className="ptable__type">
              <span className="ptable__icon" aria-label="Авиа доставка">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.8 19.2 16 11h.01M5.2 5h12.6M6 9l6-7 6 7M9 19h6M5 8h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Авиа
            </div>
            <div>от 2 дней</div>
            <div><b>$500</b><span className="mono">/м³</span></div>
            <div>1 м³</div>
            <div><a className="btn btn--ghost btn--sm" href="#quiz">Расчёт →</a></div>
          </div>
          <div className="ptable__row ptable__row--accent">
            <div className="ptable__type">
              <span className="ptable__icon" aria-label="ЖД доставка">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="4" cy="18" r="2" /><circle cx="20" cy="18" r="2" /><path d="M6 16h12M4 8h16v8H4z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              ЖД
            </div>
            <div>12–18 дней</div>
            <div><b>$120</b><span className="mono">/м³</span></div>
            <div>1 м³</div>
            <div><a className="btn btn--gold btn--sm" href="#quiz">Расчёт →</a></div>
          </div>
          <div className="ptable__row">
            <div className="ptable__type">
              <span className="ptable__icon" aria-label="Авто доставка сборный">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="4" cy="17" r="2" /><circle cx="20" cy="17" r="2" /><path d="M6 17h8M2 9h16l-2-6H4z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Авто · сборный
            </div>
            <div>9–16 дней</div>
            <div><b>$150</b><span className="mono">/м³</span></div>
            <div>1 м³</div>
            <div><a className="btn btn--ghost btn--sm" href="#quiz">Расчёт →</a></div>
          </div>
          <div className="ptable__row">
            <div className="ptable__type">
              <span className="ptable__icon" aria-label="Авто доставка полный контейнер">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 5h16v14H4z" strokeLinecap="round" strokeLinejoin="round" /><line x1="4" y1="9" x2="20" y2="9" />
                </svg>
              </span>
              Авто · полный
            </div>
            <div>9–16 дней</div>
            <div className="mono">по запросу</div>
            <div>5 т</div>
            <div><a className="btn btn--ghost btn--sm" href="#quiz">Расчёт →</a></div>
          </div>
        </div>

        <div className="pricing__included">
          <div className="mono pricing__inc-label">В СТОИМОСТЬ ВКЛЮЧЕНО</div>
          <ul>
            <li>Страхование 0,2%</li>
            <li>Растаможка</li>
            <li>Документы для бухгалтерии</li>
            <li>GPS-трекинг</li>
            <li>SMS-оповещения</li>
            <li>Личный менеджер</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
