export function ForWhom() {
  return (
    <section className="forwhom" id="forwhom">
      <div className="container">
        <header className="section-head">
          <div className="mono section-head__num">/01 · ПОЗИЦИОНИРОВАНИЕ</div>
          <h2 className="section-head__title">Кому подходит наш сервис</h2>
          <p className="section-head__lead">
            Ali Trans Group — это премиальная B2B-логистика. <b>Мы не работаем как карго.</b>{" "}
            У нас договор, документы, НДС и страховка — поэтому минимум партии 100 кг / 1 м³.
          </p>
        </header>

        <div className="forwhom__grid">
          <article className="card card--yes">
            <header className="card__head">
              <span className="card__icon">✓</span>
              <h3>Подходит</h3>
            </header>
            <ul className="card__list">
              <li>ТОО и ИП с регулярным импортом из Китая</li>
              <li>Оптовые компании и дистрибьюторы</li>
              <li>Производственные предприятия — оборудование, сырьё, материалы</li>
              <li>Селлеры маркетплейсов с партиями от 100 кг (Kaspi, Wildberries, Ozon)</li>
              <li>Импорт строительных и отделочных материалов</li>
              <li>Доставка медицинского и промышленного оборудования</li>
            </ul>
          </article>

          <article className="card card--no">
            <header className="card__head">
              <span className="card__icon">×</span>
              <h3>Не подходит</h3>
            </header>
            <ul className="card__list">
              <li>Личные покупки и частные посылки</li>
              <li>Карго-доставка от 5 до 100 кг</li>
              <li>Единичные посылки и подарки</li>
              <li>Доставка для частных лиц без оформления документов</li>
              <li>Aliexpress / Taobao для розничной перепродажи</li>
              <li>«Серый» импорт без договора и закрывающих</li>
            </ul>
          </article>
        </div>

        <p className="forwhom__hint">
          Если ваш груз меньше 100 кг — рекомендуем посмотреть карго-сервисы. Мы будем рады работать с вами, когда объём вырастет.
        </p>
      </div>
    </section>
  );
}
