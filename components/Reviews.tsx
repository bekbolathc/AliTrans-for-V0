const reviews = [
  { ini: "АБ", name: "А. Баймагамбетов", role: "генеральный директор · ТОО «Olimp Medicus»", text: "«За три года перевезли больше 120 тонн медоборудования. Ни одной серьёзной задержки. Документы всегда вовремя. Это редкость на нашем рынке.»" },
  { ini: "БН", name: "Баймуратов Н.Р.", role: "коммерческий директор · ТОО «Pomo Design Center»", text: "«Запускали новый цех — оборудование надо было привезти в окно ±5 дней. ATG собрали мультимодальную схему, привезли точно по графику. Цех запустили без простоя.»" },
  { ini: "ЮР", name: "Юрченко Р.А.", role: "директор департамента закупок · ТОО «Freedom Drive»", text: "«Ценим, что нет навязчивых звонков. Расчёт пришёл в WhatsApp за 12 минут, с фиксированной ценой за м³ и сроком. После договорённости — всё точно как обещали.»" },
  { ini: "ИМ", name: "Ишанова М.А.", role: "президент · АО «Аралтуз»", text: "«Берём контейнерами сырьё из Тяньцзиня. ATG помогли выстроить регулярные отгрузки, считают честно. Документы по таможне оформляют чисто.»" },
  { ini: "ТМ", name: "Таужанов М.К.", role: "директор · ТОО «Жакко Караганда»", text: "«Крупногабаритное оборудование для линии производства. ATG подобрали маршрут, оформили документы, доставили без повреждений. Работаем дальше.»" },
  { ini: "ЖА", name: "Жакупов А.Т.", role: "генеральный директор · ТОО «Призма Оверсис»", text: "«Селлерим на Wildberries — нужна предсказуемость каждый месяц. ATG зафиксировали тариф, склад в Иу принимает товар напрямую от фабрик.»" },
];

const logos = ["OLIMP MEDICUS", "АРАЛТУЗ", "FREEDOM FINANCE", "POMO DESIGN", "ЖАККО КАРАГАНДА", "ПРИЗМА ОВЕРСИЗ"];

export function Reviews() {
  const showVideoReviews = false; // TODO: Включить, когда видео будут готовы

  return (
    <section className="reviews">
      <div className="container">
        <header className="section-head">
          <div className="mono section-head__num">/11 · ОТЗЫВЫ</div>
          <h2 className="section-head__title">Что говорят клиенты</h2>
        </header>

        <div className="reviews__grid">
          {reviews.map((r, i) => (
            <article key={i} className="rv">
              <div className="rv__stars" aria-label="5 из 5">★★★★★</div>
              <p className="rv__text">{r.text}</p>
              <footer className="rv__who">
                <div className="rv__avatar">{r.ini}</div>
                <div>
                  <div className="rv__name">{r.name}</div>
                  <div className="mono rv__role">{r.role}</div>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {showVideoReviews && (
          <div className="videos">
            <div className="mono videos__label">↳ ВИДЕООТЗЫВЫ · СКОРО</div>
            <div className="videos__grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="vid">
                  <div className="vid__play">▶</div>
                  <div className="mono vid__lbl">VIDEO · TODO 16:9</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="logos">
          <div className="logos__track">
            {[...logos, ...logos].map((l, i) => <span key={i}>{l}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
