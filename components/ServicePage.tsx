import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import {
  schemaBreadcrumb,
  schemaService,
  schemaFAQ,
  jsonLdProps,
} from "@/lib/schema";

export type ServiceHeroBullet = { n: string; html: React.ReactNode };

export type ServiceItem = { n: string; t: string; d: string };

export type PricingRow = {
  type: string;
  icon: "rail" | "container" | "air" | "road" | "truck" | "box";
  term: string;
  price: React.ReactNode;
  min: string;
  accent?: boolean;
};

export type CaseCard = {
  mediaVariant: "a" | "b" | "c" | "d" | "e";
  route: { from: string; to: string };
  tagline: string;
  client: string;
  title: string;
  task: string;
  solve: string;
  results: string[];
  quote?: { text: string; cite: string };
};

export type FaqItem = { n: string; q: string; a: string };

export type OtherService = { href: string; title: string; description: string };

export type ServicePageData = {
  /** Slug этой страницы (для breadcrumb + schema). */
  slug: string;
  /** Видимая подпись в breadcrumb. */
  breadcrumbLabel: string;
  ctaMode?: string;

  /** Hero. */
  hero: {
    kicker: string;
    title: React.ReactNode;
    accent?: string;
    lead: string;
    bullets: ServiceHeroBullet[];
    primaryCtaText: string;
    proof: React.ReactNode;
  };

  /** Правая колонка Hero — price-card в стиле /zhd. */
  heroPanel?: {
    kicker: string;
    /** Сумма (например "$120"). */
    amount: string;
    /** Единица (например "/м³"). */
    amountUnit?: string;
    /** Строки лейбл → значение. */
    rows: Array<{ label: string; value: string }>;
    /** Подпись блока «включено» (опционально). */
    includedLabel?: string;
    /** Чек-лист «в стоимость включено». */
    included?: string[];
  };

  /** Schema.org Service блок. */
  schema: {
    serviceType: string;
    name: string;
    description: string;
    priceFrom?: number;
    priceUnit?: string;
  };

  /** Секции страницы (контент). */
  when: {
    head: { num: string; title: string; lead: string };
    items: ServiceItem[];
  };
  steps: {
    head: { num: string; title: string; lead: string };
    items: ServiceItem[];
  };
  pricing: {
    head: { num: string; title: string; lead: string };
    rows: PricingRow[];
    included: string[];
  };
  why: {
    head: { num: string; title: string; lead: string };
    items: ServiceItem[];
  };
  cases: {
    head: { num: string; title: string };
    items: CaseCard[];
  };
  faqs: {
    head: { num: string; title: string; lead: string };
    items: FaqItem[];
  };
  otherServices: {
    head: { num: string; title: string; lead: string };
    items: OtherService[];
  };

  /** source-параметр для /api/quiz (передаётся в CTA). */
  ctaSource: string;
  /** Способ доставки для поля "mode" в заявке (по умолчанию совпадает с ctaSource). */
  ctaMode?: string;
};

export function ServicePage({ data }: { data: ServicePageData }) {
  const breadcrumbItems = [
    { name: "Главная", slug: "" },
    { name: data.breadcrumbLabel, slug: data.slug, current: true },
  ];

  return (
    <>
      <Header />

      <main id="main">
        {/* Hero */}
        <section className="hero" id="top">
          <div className="hero__bg" aria-hidden="true">
            <div className="hero__grid"></div>
            <div className="hero__glow"></div>
          </div>

          <div className="container hero__inner">
            <div className="hero__left">
              <div className="kicker mono">{data.hero.kicker}</div>

              <h1 className="hero__title">
                {data.hero.title}
                {data.hero.accent ? (
                  <>
                    <br />
                    <span className="hero__title-accent">{data.hero.accent}</span>
                  </>
                ) : null}
              </h1>

              <p className="hero__lead">{data.hero.lead}</p>

              <ul className="hero__bullets">
                {data.hero.bullets.map((b) => (
                  <li key={b.n}>
                    <span className="bullet-num mono">{b.n}</span>
                    <span>{b.html}</span>
                  </li>
                ))}
              </ul>

              <div className="hero__actions">
                <a className="btn btn--gold btn--lg" href="#quiz-cta">
                  {data.hero.primaryCtaText}
                  <span aria-hidden="true" className="btn__arrow">→</span>
                </a>
                <a
                  className="btn btn--ghost btn--lg"
                  href="https://wa.me/77718000209"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="wa-ico" aria-hidden="true">✆</span> WhatsApp
                </a>
              </div>

              <div className="hero__proof">{data.hero.proof}</div>
            </div>

            {data.heroPanel && (
              <aside className="hero__panel" aria-label="Условия услуги">
                <div className="price-card">
                  <div className="price-card__kicker">{data.heroPanel.kicker}</div>
                  <div className="price-card__amount">
                    {data.heroPanel.amount}
                    {data.heroPanel.amountUnit && (
                      <span className="price-card__amount-unit">
                        {data.heroPanel.amountUnit}
                      </span>
                    )}
                  </div>
                  <div className="price-card__rows">
                    {data.heroPanel.rows.map((row, idx) => (
                      <div key={idx} className="price-card__row">
                        <span className="price-card__row-label">{row.label}</span>
                        <span className="price-card__row-value">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  {data.heroPanel.included && data.heroPanel.included.length > 0 && (
                    <>
                      <div className="price-card__divider" />
                      {data.heroPanel.includedLabel && (
                        <div className="price-card__incl-label">
                          {data.heroPanel.includedLabel}
                        </div>
                      )}
                      <ul className="price-card__incl">
                        {data.heroPanel.included.map((it, idx) => (
                          <li key={idx}>{it}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </aside>
            )}
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="container">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>

        {/* 01 · Когда выбирают */}
        <section className="why" id="when">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">{data.when.head.num}</div>
              <h2 className="section-head__title">{data.when.head.title}</h2>
              <p className="section-head__lead">{data.when.head.lead}</p>
            </header>
            <div className="why__grid">
              {data.when.items.map((i) => (
                <article key={i.n} className="why__card">
                  <div className="why__num mono">{i.n}</div>
                  <h3>{i.t}</h3>
                  <p>{i.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 02 · Процесс */}
        <section className="howwork" id="process">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">{data.steps.head.num}</div>
              <h2 className="section-head__title">{data.steps.head.title}</h2>
              <p className="section-head__lead">{data.steps.head.lead}</p>
            </header>
            <ol className="steps">
              {data.steps.items.map((s, i) => (
                <li key={s.n} className="step">
                  <div className="step__num mono">{s.n}</div>
                  {i < data.steps.items.length - 1 && (
                    <div className="step__line" aria-hidden="true"></div>
                  )}
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 03 · Тарифы */}
        <section className="pricing" id="pricing">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">{data.pricing.head.num}</div>
              <h2 className="section-head__title">{data.pricing.head.title}</h2>
              <p className="section-head__lead">{data.pricing.head.lead}</p>
            </header>

            <div className="ptable">
              <div className="ptable__head mono">
                <div>тип</div>
                <div>срок</div>
                <div>цена от</div>
                <div>минимум</div>
                <div></div>
              </div>

              {data.pricing.rows.map((row, idx) => (
                <div
                  key={idx}
                  className={`ptable__row${row.accent ? " ptable__row--accent" : ""}`}
                >
                  <div className="ptable__type">
                    <span className="ptable__icon" aria-hidden="true">
                      <PriceIcon kind={row.icon} />
                    </span>
                    {row.type}
                  </div>
                  <div>{row.term}</div>
                  <div>{row.price}</div>
                  <div>{row.min}</div>
                  <div>
                    <a
                      className={`btn ${row.accent ? "btn--gold" : "btn--ghost"} btn--sm`}
                      href="#quiz-cta"
                    >
                      Расчёт →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pricing__included">
              <div className="mono pricing__inc-label">В СТОИМОСТЬ ВКЛЮЧЕНО</div>
              <ul>
                {data.pricing.included.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 04 · Почему выбирают */}
        <section className="why" id="why">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">{data.why.head.num}</div>
              <h2 className="section-head__title">{data.why.head.title}</h2>
              <p className="section-head__lead">{data.why.head.lead}</p>
            </header>
            <div className="why__grid">
              {data.why.items.map((i) => (
                <article key={i.n} className="why__card">
                  <div className="why__num mono">{i.n}</div>
                  <h3>{i.t}</h3>
                  <p>{i.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 05 · Кейсы */}
        <section className="cases" id="cases">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">{data.cases.head.num}</div>
              <h2 className="section-head__title">{data.cases.head.title}</h2>
            </header>

            <div className="cases__grid">
              {data.cases.items.map((c, i) => (
                <article key={i} className="cs">
                  <div className={`cs__media cs__media--${c.mediaVariant}`} aria-hidden="true">
                    <div className="cs__route mono">
                      <span>{c.route.from}</span>
                      <span className="cs__arrow">→</span>
                      <span>{c.route.to}</span>
                    </div>
                    <div className="cs__tagline mono">{c.tagline}</div>
                  </div>
                  <div className="cs__body">
                    <div className="cs__client mono">{c.client}</div>
                    <h3 className="cs__title">{c.title}</h3>
                    <p className="cs__task"><b>Задача —</b> {c.task}</p>
                    <p className="cs__solve"><b>Решение —</b> {c.solve}</p>
                    <ul className="cs__result">
                      {c.results.map((r, j) => (
                        <li key={j}>{r}</li>
                      ))}
                    </ul>
                    {c.quote && (
                      <blockquote>
                        «{c.quote.text}»
                        <cite>— {c.quote.cite}</cite>
                      </blockquote>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 06 · FAQ */}
        <section className="faq" id="faq">
          <div className="container faq__inner">
            <aside className="faq__side">
              <div className="mono section-head__num">{data.faqs.head.num}</div>
              <h2 className="section-head__title">{data.faqs.head.title}</h2>
              <p className="section-head__lead">{data.faqs.head.lead}</p>
              <a
                href="https://wa.me/77718000209"
                className="btn btn--gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Не нашли ответ — WhatsApp →
              </a>
              <div className="faq__hint mono">
                ↳ Отвечаем в течение 5 минут в рабочее время
              </div>
            </aside>

            <div className="faq__list">
              {data.faqs.items.map((f) => (
                <details key={f.n}>
                  <summary>
                    <span className="mono faq__n">{f.n}</span> {f.q}
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 07 · Другие способы */}
        <section className="why" id="other">
          <div className="container">
            <header className="section-head section-head--center">
              <div className="mono section-head__num">{data.otherServices.head.num}</div>
              <h2 className="section-head__title">{data.otherServices.head.title}</h2>
              <p className="section-head__lead">{data.otherServices.head.lead}</p>
            </header>
            <div className="why__grid">
              {data.otherServices.items.map((o) => (
                <article key={o.href} className="why__card">
                  <div className="why__num mono">→</div>
                  <h3>
                    <Link href={o.href}>{o.title}</Link>
                  </h3>
                  <p>{o.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div id="quiz-cta">
          <CTA withQuizOnPage={false} source={data.ctaSource} defaultMode={data.ctaMode} />
        </div>
      </main>

      <Footer />

      {/* JSON-LD */}
      <script {...jsonLdProps(schemaBreadcrumb(breadcrumbItems))} />
      <script {...jsonLdProps(schemaService({
        serviceType: data.schema.serviceType,
        name: data.schema.name,
        description: data.schema.description,
        priceFrom: data.schema.priceFrom,
        priceUnit: data.schema.priceUnit,
      }))} />
      <script {...jsonLdProps(schemaFAQ(
        data.faqs.items.map((f) => ({ question: f.q, answer: f.a }))
      ))} />
    </>
  );
}

function PriceIcon({ kind }: { kind: PricingRow["icon"] }) {
  switch (kind) {
    case "rail":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="4" cy="18" r="2" />
          <circle cx="20" cy="18" r="2" />
          <path d="M6 16h12M4 8h16v8H4z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "container":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="7" width="18" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 11h18M9 7v10" />
        </svg>
      );
    case "air":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 13l8-2 8-8 2 2-8 8-2 8-2-2-2-4-4-2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "road":
    case "truck":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 7h12v10H2zM14 10h5l3 3v4h-8z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="6" cy="18" r="1.6" />
          <circle cx="18" cy="18" r="1.6" />
        </svg>
      );
    case "box":
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 8l9-5 9 5v8l-9 5-9-5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 8l9 5 9-5M12 13v9" />
        </svg>
      );
  }
}
