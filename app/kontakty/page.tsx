import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { buildMetadata } from "@/lib/seo";
import {
  schemaBreadcrumb,
  schemaLocalBusiness,
  jsonLdProps,
} from "@/lib/schema";

const SLUG = "kontakty";

export const metadata: Metadata = buildMetadata({
  slug: SLUG,
  title: "Контакты Ali Trans Group — Алматы, +7 771 800 02 09",
  description:
    "Свяжитесь с Ali Trans Group: офис в Алматы (ул. Тимирязева 42, БЦ Asia Most), телефон +7 771 800 02 09, WhatsApp, email sales@alitrans.kz. ПН–ПТ 09:00–18:00.",
});

const contactBlocks = [
  {
    label: "ОФИС В АЛМАТЫ",
    items: [
      "г. Алматы, ул. Тимирязева 42, К23",
      "БЦ «Asia Most», офис 210",
      "ПН–ПТ · 09:00 – 18:00",
    ],
  },
  {
    label: "ТЕЛЕФОН И WHATSAPP",
    items: ["+7 (771) 800 02 09", "WhatsApp · 24/7", "Ответ в течение 5 минут в рабочее время"],
  },
  {
    label: "EMAIL И BIN",
    items: ["sales@alitrans.kz", "БИН 191040009895", "ТОО «Ali Trans Group»"],
  },
];

const prepBlocks = [
  { t: "Что подготовить для расчёта", items: [
    "Точка отправки в Китае (город/поставщик)",
    "Точка доставки в Казахстане",
    "Общий вес и объём (м³) груза",
    "Тип груза (категория товара)",
    "Желаемый срок доставки",
  ]},
  { t: "Что мы пришлём в ответ", items: [
    "Расчёт стоимости в WhatsApp за 15 минут",
    "Сравнение 3 способов: авиа, ЖД, авто",
    "Срок доставки и список документов",
    "Договор-оферта при необходимости",
    "Личный менеджер на связи",
  ]},
];

export default function Page() {
  const breadcrumbItems = [
    { name: "Главная", slug: "" },
    { name: "Контакты", slug: SLUG, current: true },
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
              <div className="kicker mono">КОНТАКТЫ · АЛМАТЫ · B2B</div>
              <h1 className="hero__title">
                Свяжитесь с Ali Trans Group<br />
                <span className="hero__title-accent">— расчёт за 15 минут.</span>
              </h1>
              <p className="hero__lead">
                Офис в Алматы, WhatsApp 24/7, ответ менеджера в течение 5 минут
                в рабочее время. Готовим расчёт стоимости доставки из Китая в
                Казахстан под вашу задачу.
              </p>
              <div className="hero__actions">
                <a className="btn btn--gold btn--lg" href="https://wa.me/77718000209" target="_blank" rel="noopener">
                  <span className="wa-ico" aria-hidden="true">✆</span> Написать в WhatsApp
                </a>
                <a className="btn btn--ghost btn--lg" href="tel:+77718000209">
                  Позвонить
                </a>
              </div>
            </div>

            <aside className="hero__panel" aria-label="Контактная карточка">
              <div className="price-card">
                <div className="price-card__kicker">ОФИС В АЛМАТЫ</div>
                <div className="price-card__amount">
                  09–18
                  <span className="price-card__amount-unit">ПН–ПТ</span>
                </div>
                <div className="price-card__rows">
                  <div className="price-card__row">
                    <span className="price-card__row-label">Телефон</span>
                    <span className="price-card__row-value">+7 771 800 02 09</span>
                  </div>
                  <div className="price-card__row">
                    <span className="price-card__row-label">WhatsApp</span>
                    <span className="price-card__row-value">24 / 7</span>
                  </div>
                  <div className="price-card__row">
                    <span className="price-card__row-label">Email</span>
                    <span className="price-card__row-value">sales@alitrans.kz</span>
                  </div>
                  <div className="price-card__row">
                    <span className="price-card__row-label">БИН</span>
                    <span className="price-card__row-value">191040009895</span>
                  </div>
                </div>
                <div className="price-card__divider" />
                <div className="price-card__incl-label">АДРЕС</div>
                <ul className="price-card__incl">
                  <li>г. Алматы, Тимирязева 42, К23</li>
                  <li>БЦ «Asia Most», офис 210</li>
                  <li>Ответ менеджера за 5 минут</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <div className="container">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>

        <section className="why" id="contact-blocks">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">/01 · КАК С НАМИ СВЯЗАТЬСЯ</div>
              <h2 className="section-head__title">Контактная информация</h2>
            </header>
            <div className="why__grid">
              {contactBlocks.map((b) => (
                <article key={b.label} className="why__card">
                  <div className="mono why__num">{b.label}</div>
                  <ul className="svc__list">
                    {b.items.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why" id="how-to-write">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">/02 · КАК НАПИСАТЬ В WHATSAPP</div>
              <h2 className="section-head__title">
                Что подготовить и что получить
              </h2>
              <p className="section-head__lead">
                Чем больше деталей в первом сообщении — тем точнее расчёт.
                Минимум — точки отправки/доставки и объём.
              </p>
            </header>
            <div className="why__grid why__grid--2">
              {prepBlocks.map((b) => (
                <article key={b.t} className="why__card">
                  <div className="why__num mono">→</div>
                  <h3>{b.t}</h3>
                  <ul className="svc__list">
                    {b.items.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why" id="map">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">/03 · ОФИС В АЛМАТЫ</div>
              <h2 className="section-head__title">
                ул. Тимирязева 42, БЦ Asia Most, офис 210
              </h2>
            </header>
            <div className="map-embed">
              <iframe
                title="Карта офиса Ali Trans Group"
                src="https://yandex.com/map-widget/v1/?ll=76.892586%2C43.230127&z=15&pt=76.892586,43.230127,pm2rdm"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <div id="quiz-cta">
          <CTA withQuizOnPage={false} source="contacts" defaultMode="Консультация" />
        </div>
      </main>

      <Footer />

      <script {...jsonLdProps(schemaBreadcrumb(breadcrumbItems))} />
      <script {...jsonLdProps(schemaLocalBusiness())} />
    </>
  );
}
