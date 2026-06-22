import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { TrustBar } from "@/components/TrustBar";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { buildMetadata } from "@/lib/seo";
import {
  schemaBreadcrumb,
  schemaOrganization,
  jsonLdProps,
} from "@/lib/schema";

const Founders = dynamic(() =>
  import("@/components/Founders").then((m) => ({ default: m.Founders }))
);
const Geography = dynamic(() =>
  import("@/components/Geography").then((m) => ({ default: m.Geography }))
);

const SLUG = "o-kompanii";

export const metadata: Metadata = buildMetadata({
  slug: SLUG,
  title:
    "О компании Ali Trans Group — 18 лет B2B-логистики из Китая в Казахстан",
  description:
    "Ali Trans Group — семейная B2B-логистическая компания с 2007 года. 4 склада в Китае, собственный брокер на Хоргосе, 2000+ клиентов и 20 500 тонн перевезено.",
});

const missionItems = [
  {
    h: "Миссия",
    p: "Делаем международную логистику предсказуемой и прозрачной для казахстанского бизнеса. Берём на себя сложности ВЭД — клиент получает только результат.",
  },
  {
    h: "B2B-философия",
    p: "Работаем только с компаниями: ТОО, ИП, маркетплейс-селлерами, производством. Не возим розницу и личные посылки — все ресурсы заточены под бизнес-импорт.",
  },
];

const valueItems = [
  { n: "01", t: "Свои склады, свой брокер", d: "Контролируем процесс на каждом этапе — от приёмки в Китае до растаможки в KZ. Не работаем «через партнёров»." },
  { n: "02", t: "Прозрачные тарифы и договор", d: "Цену и срок фиксируем в договоре до отгрузки. Без скрытых платежей и доплат «по факту»." },
  { n: "03", t: "Личная ответственность", d: "Семейный бизнес с 2007 года. Отвечаем своей репутацией за каждую отправку." },
  { n: "04", t: "Полный пакет документов", d: "ГТД, инвойс, CMR, договор-оферта — под официальный импорт и закрытие бухгалтерии." },
];

const docItems = [
  { label: "Юр. лицо", v: "ТОО «Ali Trans Group»" },
  { label: "БИН", v: "191040009895" },
  { label: "Год основания", v: "2007" },
  { label: "Юр. адрес", v: "г. Алматы, ул. Тимирязева 42, К23, БЦ Asia Most, офис 210" },
];

export default function Page() {
  const breadcrumbItems = [
    { name: "Главная", slug: "" },
    { name: "О компании", slug: SLUG, current: true },
  ];

  return (
    <>
      <Header />

      <main id="main">
        <section className="hero" id="top">
          <div className="hero__bg" aria-hidden="true">
            <div className="hero__grid"></div>
            <div className="hero__glow"></div>
          </div>
          <div className="container hero__inner">
            <div className="hero__left">
              <div className="kicker mono">О КОМПАНИИ · 2007 → 2026 · B2B</div>
              <h1 className="hero__title">
                Ali Trans Group<br />
                <span className="hero__title-accent">— 18 лет B2B-логистики Китай → KZ.</span>
              </h1>
              <p className="hero__lead">
                Семейный бизнес с 2007 года. Доставка грузов из Китая в Казахстан
                под ключ: авиа, ЖД, авто, сборные. 4 собственных склада в Китае,
                собственный брокер на Хоргосе, 2000+ корпоративных клиентов.
              </p>
              <div className="hero__actions">
                <a className="btn btn--gold btn--lg" href="#quiz-cta">
                  Связаться с нами<span aria-hidden="true" className="btn__arrow">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="https://wa.me/77718000209"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="wa-ico" aria-hidden="true">✆</span> WhatsApp
                </a>
              </div>
            </div>

            <aside className="hero__panel" aria-label="Краткие факты о компании">
              <div className="price-card">
                <div className="price-card__kicker">КОМПАНИЯ В ЦИФРАХ</div>
                <div className="price-card__amount">
                  18<span className="price-card__amount-unit">лет на рынке</span>
                </div>
                <div className="price-card__rows">
                  <div className="price-card__row">
                    <span className="price-card__row-label">Корпоративных клиентов</span>
                    <span className="price-card__row-value">2 000+</span>
                  </div>
                  <div className="price-card__row">
                    <span className="price-card__row-label">Перевезено грузов</span>
                    <span className="price-card__row-value">20 500 т</span>
                  </div>
                  <div className="price-card__row">
                    <span className="price-card__row-label">Складов в Китае</span>
                    <span className="price-card__row-value">4 собственных</span>
                  </div>
                  <div className="price-card__row">
                    <span className="price-card__row-label">Городов Китая</span>
                    <span className="price-card__row-value">30+</span>
                  </div>
                </div>
                <div className="price-card__divider" />
                <div className="price-card__incl-label">B2B-ПРИНЦИПЫ</div>
                <ul className="price-card__incl">
                  <li>Свои склады и брокер</li>
                  <li>Договор и страховка 0,2%</li>
                  <li>Полный пакет документов</li>
                  <li>Семейная ответственность</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <div className="container">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>

        <TrustBar />

        <section className="why" id="mission">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">/01 · ЧТО НАМИ ДВИЖЕТ</div>
              <h2 className="section-head__title">Миссия и B2B-философия</h2>
              <p className="section-head__lead">
                Мы строим Ali Trans Group вокруг одной идеи: казахстанский бизнес
                заслуживает предсказуемой логистики из Китая.
              </p>
            </header>
            <div className="why__grid why__grid--2">
              {missionItems.map((m) => (
                <article key={m.h} className="why__card">
                  <div className="why__num mono">→</div>
                  <h3>{m.h}</h3>
                  <p>{m.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Founders />

        <Geography />

        <section className="why" id="values">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">/02 · ЦЕННОСТИ</div>
              <h2 className="section-head__title">Как мы работаем с B2B-клиентами</h2>
              <p className="section-head__lead">
                Четыре принципа, которые отличают Ali Trans Group от посредников.
              </p>
            </header>
            <div className="why__grid">
              {valueItems.map((v) => (
                <article key={v.n} className="why__card">
                  <div className="why__num mono">{v.n}</div>
                  <h3>{v.t}</h3>
                  <p>{v.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why" id="docs">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">/03 · РЕКВИЗИТЫ И ДОКУМЕНТЫ</div>
              <h2 className="section-head__title">Юридические данные и договоры</h2>
              <p className="section-head__lead">
                Прозрачные реквизиты, договор-оферта и политика конфиденциальности —
                всё, что нужно для официального импорта под бухгалтерию ТОО / ИП.
              </p>
            </header>
            <div className="why__grid why__grid--4">
              {docItems.map((d) => (
                <article key={d.label} className="why__card">
                  <div className="why__num mono">→</div>
                  <h3>{d.label}</h3>
                  <p>{d.v}</p>
                </article>
              ))}
            </div>
            <div className="cta__actions" style={{ marginTop: 24 }}>
              <a className="btn btn--ghost" href="/terms">Договор-оферта</a>
              <a className="btn btn--ghost" href="/privacy-policy">Политика конфиденциальности</a>
            </div>
          </div>
        </section>

        <div id="quiz-cta">
          <CTA withQuizOnPage={false} source="about" defaultMode="Консультация" />
        </div>
      </main>

      <Footer />

      <script {...jsonLdProps(schemaBreadcrumb(breadcrumbItems))} />
      <script {...jsonLdProps(schemaOrganization())} />
    </>
  );
}
