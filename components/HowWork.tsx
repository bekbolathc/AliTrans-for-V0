const steps = [
  { n: "01", t: "Заявка → расчёт за 15 минут", d: "Заполните квиз или напишите в WhatsApp. Логист рассчитает стоимость и срок." },
  { n: "02", t: "Договор + предоплата 50%", d: "Подписываем договор, фиксируем цену и сроки. Остальные 50% — после доставки." },
  { n: "03", t: "Сбор груза на нашем складе", d: "Забираем с фабрики поставщика, упаковываем, маркируем, страхуем — Иу, Гуанчжоу, Урумчи, Хоргос." },
  { n: "04", t: "Транспортировка + GPS", d: "Везём авиа / ЖД / авто. Вы видите груз в реальном времени, получаете SMS на каждом этапе." },
  { n: "05", t: "Растаможка + доставка до двери", d: "Оформляем документы, проходим таможню. Привозим по адресу в Казахстане." },
];

export function HowWork() {
  return (
    <section className="howwork">
      <div className="container">
        <header className="section-head">
          <div className="mono section-head__num">/08 · ПРОЦЕСС</div>
          <h2 className="section-head__title">Пять простых шагов до доставки</h2>
        </header>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.n} className="step">
              <div className="step__num mono">{s.n}</div>
              {i < steps.length - 1 && <div className="step__line" aria-hidden="true"></div>}
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
