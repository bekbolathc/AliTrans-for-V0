import Link from "next/link";

const directions = [
  {
    flag: "🇨🇳",
    from: "Китай",
    tag: "MAIN · 01",
    desc: "Все способы доставки. Склады в Иу, Гуанчжоу, Урумчи, Хоргос.",
    href: "#services",
    accent: true,
    label: "Подробнее об услугах →",
  },
  {
    flag: "🇰🇷",
    from: "Корея",
    tag: "KR · 02",
    desc: "Электроника, авто-запчасти, косметика. Авиа и морской экспресс.",
    href: "/dostavka-iz-korei",
    accent: false,
    label: "Подробнее →",
  },
  {
    flag: "🇹🇷",
    from: "Турция",
    tag: "TR · 03",
    desc: "Текстиль, стройматериалы, оборудование. Авто и авиа маршруты.",
    href: "/dostavka-iz-turcii",
    accent: false,
    label: "Подробнее →",
  },
  {
    flag: "🇪🇺",
    from: "Европа",
    tag: "EU · 04",
    desc: "Германия, Италия, Польша и другие. Авто и мультимодальные маршруты.",
    href: "/dostavka-iz-evropy",
    accent: false,
    label: "Подробнее →",
  },
];

export function Directions() {
  return (
    <section className="dir" id="directions">
      <div className="container">
        <header className="section-head">
          <div className="mono section-head__num">/04 · НАПРАВЛЕНИЯ ДОСТАВКИ</div>
          <h2 className="section-head__title">Доставляем из любой точки мира в Казахстан</h2>
          <p className="section-head__lead">
            Основное направление — Китай, но мы также работаем с Кореей, Турцией и Европой под ключ.
          </p>
        </header>

        <div className="dir__grid">
          {directions.map((d) => (
            <a
              key={d.from}
              className={`dir__card${d.accent ? " dir__card--accent" : ""}`}
              href={d.href}
            >
              <div className="dir__flag" aria-hidden="true">{d.flag}</div>
              <div className="mono dir__tag">{d.tag}</div>
              <h3 className="dir__from">{d.from} → Казахстан</h3>
              <p className="dir__desc">{d.desc}</p>
              <span className="mono dir__cta">{d.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
