export function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <header className="section-head">
          <div className="mono section-head__num">/06 · ТАРИФЫ</div>
          <h2 className="section-head__title">Прозрачные тарифы — никаких скрытых платежей</h2>
        </header>

        <div className="ptable">
          <div className="ptable__head mono">
            <div>тип</div><div>срок</div><div>цена от</div><div>минимум</div><div></div>
          </div>
          <div className="ptable__row">
            <div className="ptable__type"><span className="ptable__icon">✈</span>Авиа</div>
            <div>5–7 дней</div>
            <div><b>$5</b><span className="mono">/кг</span></div>
            <div>100 кг</div>
            <div><a className="btn btn--ghost btn--sm" href="#quiz">Расчёт →</a></div>
          </div>
          <div className="ptable__row ptable__row--accent">
            <div className="ptable__type"><span className="ptable__icon">🚂</span>ЖД</div>
            <div>12–18 дней</div>
            <div><b>$0,5</b><span className="mono">/кг</span> <span className="mono ptable__or">или</span> <b>$299</b><span className="mono">/м³</span></div>
            <div>100 кг · 1 м³</div>
            <div><a className="btn btn--gold btn--sm" href="#quiz">Расчёт →</a></div>
          </div>
          <div className="ptable__row">
            <div className="ptable__type"><span className="ptable__icon">🚛</span>Авто · сборный</div>
            <div>7–14 дней</div>
            <div><b>$1</b><span className="mono">/кг</span></div>
            <div>100 кг</div>
            <div><a className="btn btn--ghost btn--sm" href="#quiz">Расчёт →</a></div>
          </div>
          <div className="ptable__row">
            <div className="ptable__type"><span className="ptable__icon">📦</span>Авто · полный</div>
            <div>7–14 дней</div>
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
