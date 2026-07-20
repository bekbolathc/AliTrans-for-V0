import Link from "next/link";

type Method = { label: string; href: string };

type Direction = {
  flag: string;
  from: string;
  tag: string;
  desc: string;
  href: string;
  accent: boolean;
  label: string;
  methods: Method[];
  cities?: Method[];
};

const directions: Direction[] = [
  {
    flag: "🇨🇳",
    from: "Китай",
    tag: "MAIN · 01",
    desc: "Все способы доставки. Склады в Иу, Гуанчжоу, Урумчи, Хоргос.",
    href: "#services",
    accent: true,
    label: "Подробнее об услугах →",
    methods: [
      { label: "ЖД · 12–18 дн", href: "/zhd-dostavka-iz-kitaya" },
      { label: "Авиа · 2–5 дн", href: "/avia-dostavka-iz-kitaya" },
      { label: "Авто · 7–14 дн", href: "/avto-dostavka-iz-kitaya" },
    ],
    cities: [
      { label: "→ в Алматы", href: "/dostavka-iz-kitaya-v-almaty" },
      { label: "→ в Астану", href: "/dostavka-iz-kitaya-v-astanu" },
    ],
  },
  {
    flag: "🇰🇷",
    from: "Корея",
    tag: "KR · 02",
    desc: "Электроника, авто-запчасти, косметика. Авиа и морской экспресс.",
    href: "/dostavka-iz-korei",
    accent: false,
    label: "Все способы →",
    methods: [
      { label: "Авиа · 3–7 дн", href: "/avia-dostavka-iz-korei" },
      { label: "Море · 18–25 дн", href: "/morskoy-ekspress-iz-korei" },
    ],
  },
  {
    flag: "🇹🇷",
    from: "Турция",
    tag: "TR · 03",
    desc: "Текстиль, стройматериалы, оборудование. Авто и авиа маршруты.",
    href: "/dostavka-iz-turcii",
    accent: false,
    label: "Все способы →",
    methods: [
      { label: "Авто · 12–18 дн", href: "/avto-dostavka-iz-turcii" },
      { label: "Авиа · 4–7 дн", href: "/avia-dostavka-iz-turcii" },
    ],
  },
  {
    flag: "🇪🇺",
    from: "Европа",
    tag: "EU · 04",
    desc: "Германия, Италия, Польша и другие. Авто и мультимодальные маршруты.",
    href: "/dostavka-iz-evropy",
    accent: false,
    label: "Все способы →",
    methods: [
      { label: "Авто · 15–25 дн", href: "/avto-dostavka-iz-evropy" },
      { label: "Авиа · 5–8 дн", href: "/avia-dostavka-iz-evropy" },
    ],
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
            <div
              key={d.from}
              className={`dir__card${d.accent ? " dir__card--accent" : ""}`}
            >
              <div className="dir__flag" aria-hidden="true">{d.flag}</div>
              <div className="mono dir__tag">{d.tag}</div>
              <h3 className="dir__from">{d.from} → Казахстан</h3>
              <p className="dir__desc">{d.desc}</p>
              <Link href={d.href} className="mono dir__cta">
                {d.label}
              </Link>
              {d.methods.length > 0 && (
                <div className="dir__methods">
                  {d.methods.map((m) => (
                    <Link key={m.href} href={m.href} className="mono dir__method">
                      {m.label}
                    </Link>
                  ))}
                </div>
              )}
              {d.cities && d.cities.length > 0 && (
                <div className="dir__methods">
                  {d.cities.map((c) => (
                    <Link key={c.href} href={c.href} className="mono dir__method">
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
