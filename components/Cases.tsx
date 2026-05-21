export function Cases() {
  return (
    <section className="cases" id="cases">
      <div className="container">
        <header className="section-head">
          <div className="mono section-head__num">/05 · РЕАЛЬНЫЕ КЕЙСЫ</div>
          <h2 className="section-head__title">Что мы возили для наших клиентов</h2>
        </header>

        <div className="cases__grid">
          <article className="cs">
            <div className="cs__media" aria-hidden="true">
              <div className="cs__route mono"><span>SHA</span><span className="cs__arrow">→</span><span>ALA</span></div>
              <div className="cs__tagline mono">MEDICAL · AIR · 9 ДНЕЙ</div>
            </div>
            <div className="cs__body">
              <div className="cs__client mono">КЛИЕНТ · ТОО «OLIMP MEDICUS»</div>
              <h3 className="cs__title">Рентген-аппарат для частной клиники</h3>
              <p className="cs__task"><b>Задача —</b> доставить тяжёлое мед.оборудование до открытия клиники, под ключ.</p>
              <p className="cs__solve"><b>Решение —</b> авиа-фрахт + растаможка + сопровождение на заводе производителя.</p>
              <ul className="cs__result">
                <li>Доставлено за <b>9 дней</b></li>
                <li>Бюджет в плане <b>±3%</b></li>
                <li>Клиника открылась в срок</li>
              </ul>
              <blockquote>«Работаем 3 года, перевезли 120 тонн оборудования. Ни одной задержки.»
                <cite>— Артур, директор ТОО «Olimp Medicus»</cite>
              </blockquote>
            </div>
          </article>

          <article className="cs">
            <div className="cs__media cs__media--b" aria-hidden="true">
              <div className="cs__route mono"><span>CAN</span><span className="cs__arrow">→</span><span>СKZ</span></div>
              <div className="cs__tagline mono">INDUSTRY · MULTI · 14 ДНЕЙ</div>
            </div>
            <div className="cs__body">
              <div className="cs__client mono">КЛИЕНТ · ТОО «POMO DESIGN»</div>
              <h3 className="cs__title">Промышленная линия для нового цеха</h3>
              <p className="cs__task"><b>Задача —</b> привезти оборудование под запуск производства в Шымкенте.</p>
              <p className="cs__solve"><b>Решение —</b> мультимодальная схема ЖД + авто «до двери», страхование 0,2%.</p>
              <ul className="cs__result">
                <li><b>14 дней</b> до двери</li>
                <li>Растаможка под ключ</li>
                <li>Цех запущен вовремя</li>
              </ul>
              <blockquote>«Сложная сборка с допуском к точности. Привезли как ювелирку.»
                <cite>— TODO · цитата клиента</cite>
              </blockquote>
            </div>
          </article>

          <article className="cs">
            <div className="cs__media cs__media--c" aria-hidden="true">
              <div className="cs__route mono"><span>YIW</span><span className="cs__arrow">→</span><span>ALA · NQZ</span></div>
              <div className="cs__tagline mono">MARKETPLACE · RAIL · MONTHLY</div>
            </div>
            <div className="cs__body">
              <div className="cs__client mono">КЛИЕНТ · СЕЛЛЕР WILDBERRIES</div>
              <h3 className="cs__title">Партии одежды для маркетплейсов</h3>
              <p className="cs__task"><b>Задача —</b> регулярные ежемесячные партии 800 кг для пополнения склада.</p>
              <p className="cs__solve"><b>Решение —</b> ЖД через Хоргос, консолидация на нашем складе в Иу, фиксированный тариф.</p>
              <ul className="cs__result">
                <li>Месячный цикл стабилен</li>
                <li>Цена <b>$278/м³</b></li>
                <li>Возврат НДС</li>
              </ul>
              <blockquote>«AXG — это про предсказуемость. Знаю дату, цену, документы за неделю до отгрузки.»
                <cite>— TODO · цитата клиента</cite>
              </blockquote>
            </div>
          </article>

          <article className="cs cs--small">
            <div className="cs__media cs__media--d" aria-hidden="true">
              <div className="cs__route mono"><span>URM</span><span className="cs__arrow">→</span><span>KGF</span></div>
              <div className="cs__tagline mono">BUILD · ROAD</div>
            </div>
            <div className="cs__body">
              <div className="cs__client mono">КЛИЕНТ · ТОО «ЖАККО КАРАГАНДА»</div>
              <h3 className="cs__title">Стройматериалы для коммерческого объекта</h3>
              <p className="cs__short"><span className="mono">TODO ·</span> объём и сроки — уточнить у клиента и заполнить.</p>
            </div>
          </article>

          <article className="cs cs--small">
            <div className="cs__media cs__media--e" aria-hidden="true">
              <div className="cs__route mono"><span>TSN</span><span className="cs__arrow">→</span><span>AKX</span></div>
              <div className="cs__tagline mono">RAW · CONTAINER</div>
            </div>
            <div className="cs__body">
              <div className="cs__client mono">КЛИЕНТ · АО «АРАЛТУЗ»</div>
              <h3 className="cs__title">Промышленное сырьё контейнером</h3>
              <p className="cs__short"><span className="mono">TODO ·</span> объём и сроки — уточнить у клиента и заполнить.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
