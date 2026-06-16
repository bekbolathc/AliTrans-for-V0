import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title:
    "ЖД доставка из Китая в Казахстан — контейнерные и сборные перевозки | Ali Trans Group",
  description:
    "Узнайте условия ЖД доставки из Китая в Казахстан: сроки 12–18 дней, цена от $120/м³, маршрут через Хоргос. Контейнерные и сборные грузы.",
  alternates: {
    canonical: "https://alitrans.kz/zhd-dostavka-iz-kitaya",
  },
  openGraph: {
    title:
      "ЖД доставка из Китая в Казахстан — контейнерные и сборные перевозки | Ali Trans Group",
    description:
      "Условия ЖД доставки из Китая в Казахстан: сроки 12–18 дней, цена от $120/м³, маршрут через Хоргос. Контейнерные и сборные грузы.",
    url: "https://alitrans.kz/zhd-dostavka-iz-kitaya",
    type: "website",
    locale: "ru_RU",
    siteName: "Ali Trans Group",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ЖД доставка из Китая в Казахстан — контейнерные и сборные перевозки | Ali Trans Group",
    description:
      "Условия ЖД доставки из Китая в Казахстан: сроки 12–18 дней, цена от $120/м³, маршрут через Хоргос. Контейнерные и сборные грузы.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const whenItems = [
  {
    n: "01",
    t: "Оптовые партии от 500 кг",
    d: "ЖД доставка из Китая в Казахстан выгоднее всего на регулярных оптовых отгрузках — цена за м³ заметно ниже авиа при предсказуемом сроке.",
  },
  {
    n: "02",
    t: "Баланс цены и срока",
    d: "Железнодорожная доставка из Китая — это золотая середина: дешевле авиа и быстрее морского фрахта. Срок 12–18 дней под планируемые закупки.",
  },
  {
    n: "03",
    t: "Контейнерные перевозки через Хоргос",
    d: "Контейнерные перевозки Китай — Казахстан идут через сухой порт Хоргос. Подходит для стабильных объёмов и моно-номенклатуры.",
  },
  {
    n: "04",
    t: "Сборные грузы Китай — Казахстан",
    d: "Если контейнер не нужен целиком — консолидируем сборный груз на нашем складе в Иу. Минимум 100 кг / 1 м³.",
  },
  {
    n: "05",
    t: "Сезонные закупки заранее",
    d: "Когда сроки позволяют спланировать поставку — ЖД перевозки Китай — Казахстан экономят бюджет без потери предсказуемости.",
  },
  {
    n: "06",
    t: "Официальный импорт с документами",
    d: "Полный пакет: договор, инвойс, CMR, ГТД. Доставка грузов Китай — Казахстан ЖД под закрытие бухгалтерии ТОО и ИП.",
  },
];

const steps = [
  {
    n: "01",
    t: "Заявка → расчёт за 15 минут",
    d: "Заполните квиз или напишите в WhatsApp. Логист рассчитает стоимость и срок ЖД доставки из Китая в Казахстан.",
  },
  {
    n: "02",
    t: "Договор + предоплата 50%",
    d: "Подписываем договор, фиксируем цену и сроки. Остальные 50% — после доставки.",
  },
  {
    n: "03",
    t: "Консолидация на складе в Китае",
    d: "Забираем груз у поставщика, упаковываем, маркируем и страхуем на собственном складе в Иу, Гуанчжоу или Урумчи.",
  },
  {
    n: "04",
    t: "ЖД-плечо до Хоргоса",
    d: "Везём по железной дороге с SMS-оповещениями на каждом этапе пути.",
  },
  {
    n: "05",
    t: "Таможня Хоргоса + доставка до двери",
    d: "Собственный брокер на Хоргосе проходит таможню, оформляет ГТД и доставляет груз по адресу в Казахстане.",
  },
];

const whyItems = [
  {
    n: "01",
    t: "Четыре собственных склада в Китае",
    d: "Иу, Гуанчжоу, Урумчи, Хоргос. Груз принимают наши логисты на нашем складе — не «работаем через партнёров».",
  },
  {
    n: "02",
    t: "Собственный брокер на Хоргосе",
    d: "Доставка грузов через Хоргос проходит таможню без посредников. Запрос на документ видим в течение часа и решаем сами.",
  },
  {
    n: "03",
    t: "Полный пакет документов",
    d: "Договор, акты, CMR, инвойс, упаковочный лист, ГТД — всё под официальный импорт и закрытие бухгалтерии.",
  },
  {
    n: "04",
    t: "Страховка груза 0,2%",
    d: "Одна из самых низких ставок на рынке Казахстана. От повреждения, утери и форс-мажора в пути.",
  },
  {
    n: "05",
    t: "Семейный бизнес с 2007 года",
    d: "18 лет на рынке международной логистики. Отвечаем личной репутацией за каждую доставку.",
  },
  {
    n: "06",
    t: "Личный менеджер в WhatsApp",
    d: "SMS-оповещения на каждом этапе доставки. Менеджер на связи в WhatsApp для решения любых вопросов.",
  },
];

const faqs: [string, string, string][] = [
  [
    "Q1",
    "Какие сроки ЖД доставки из Китая в Казахстан?",
    "В среднем 12–18 дней от склада в Китае до Казахстана через Хоргос. Точный срок зависит от маршрута и загрузки погранперехода — назовём его при расчёте.",
  ],
  [
    "Q2",
    "Что выгоднее — контейнер или сборный груз?",
    "Контейнер выгоден, когда у вас стабильный объём и одна номенклатура. Если груза меньше — берём сборный: вы платите только за свои м³, минимум 100 кг / 1 м³. Подскажем оптимальный вариант по вашему объёму.",
  ],
  [
    "Q3",
    "Что происходит на таможне Хоргоса?",
    "На Хоргосе работает наш собственный брокер и склад временного хранения. Мы оформляем ГТД, проходим таможню и сразу видим любой запрос на дополнительный документ — решаем его на своей стороне, без простоя по вашей вине.",
  ],
  [
    "Q4",
    "Какая минимальная партия для ЖД доставки?",
    "Минимум — 100 кг или 1 м³ для сборного груза. Меньше возить ЖД невыгодно: для срочных образцов лучше подойдёт авиа.",
  ],
  [
    "Q5",
    "Как фиксируется тариф на доставку?",
    "Цену и срок фиксируем в договоре при отгрузке — она не меняется в пути. Расчёты с компаниями Казахстана ведём в тенге по курсу Нацбанка на день выставления счёта.",
  ],
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Главная",
      item: "https://alitrans.kz/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Услуги",
      item: "https://alitrans.kz/#services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ЖД доставка из Китая в Казахстан",
      item: "https://alitrans.kz/zhd-dostavka-iz-kitaya",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "ЖД доставка грузов из Китая в Казахстан",
  name: "ЖД доставка грузов из Китая в Казахстан",
  description:
    "Железнодорожная доставка грузов из Китая в Казахстан через Хоргос: контейнерные и сборные перевозки. Срок 12–18 дней, цена от $120/м³, минимум 100 кг / 1 м³.",
  provider: {
    "@type": "Organization",
    name: 'ТОО "Ali Trans Group"',
    url: "https://alitrans.kz",
  },
  areaServed: {
    "@type": "Country",
    name: "Казахстан",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "120",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "USD",
      price: "120",
      unitText: "м³",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([, q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export default function ZhdDostavkaIzKitaya() {
  return (
    <>
      <Header />

      <main id="main">
        {/* Hero — exact keyword zone */}
        <section className="hero" id="top">
          <div className="hero__bg" aria-hidden="true">
            <div className="hero__grid"></div>
            <div className="hero__glow"></div>
          </div>

          <div className="container hero__inner">
            <div className="hero__left">
              <nav aria-label="Хлебные крошки" className="kicker">
                <span className="mono">
                  <Link href="/">Главная</Link> / <Link href="/#services">Услуги</Link> / ЖД доставка
                </span>
              </nav>

              <h1 className="hero__title">
                ЖД доставка грузов<br />из Китая в Казахстан<br />
                <span className="hero__title-accent">— контейнерные и сборные перевозки.</span>
              </h1>

              <p className="hero__lead">
                Железнодорожная доставка из Китая в Казахстан через Хоргос. Срок 12–18 дней,
                цена от $120/м³, минимум 100 кг / 1 м³. Договор, полный пакет документов
                и страховка груза 0,2%. Свои склады консолидации в Иу, Гуанчжоу и Урумчи.
              </p>

              <ul className="hero__bullets">
                <li><span className="bullet-num mono">01</span><span>Срок <b>12–18 дней</b> через Хоргос</span></li>
                <li><span className="bullet-num mono">02</span><span>Цена <b>от $120</b> за м³</span></li>
                <li><span className="bullet-num mono">03</span><span>Контейнерные и <b>сборные грузы</b></span></li>
                <li><span className="bullet-num mono">04</span><span>Минимум <b>100 кг / 1 м³</b></span></li>
              </ul>

              <div className="hero__actions">
                <a className="btn btn--gold btn--lg" href="#quiz-cta">
                  Рассчитать стоимость
                  <span aria-hidden="true" className="btn__arrow">→</span>
                </a>
                <a className="btn btn--ghost btn--lg" href="https://wa.me/77718000209" target="_blank" rel="noopener">
                  <span className="wa-ico" aria-hidden="true">✆</span> WhatsApp
                </a>
              </div>

              <div className="hero__proof">
                <span className="mono">↳</span> <b>18 лет</b> на рынке логистики Китай — Казахстан{" "}
                <span className="dot-sep">·</span> собственный брокер на Хоргосе
              </div>
            </div>

            <aside className="hero__panel" aria-label="Условия услуги">
              <div className="price-card">
                <div className="price-card__kicker">ЦЕНА ОТ</div>
                <div className="price-card__amount">
                  $120
                  <span className="price-card__amount-unit">/м³</span>
                </div>
                <div className="price-card__rows">
                  <div className="price-card__row">
                    <span className="price-card__row-label">Срок доставки</span>
                    <span className="price-card__row-value">12–18 дней</span>
                  </div>
                  <div className="price-card__row">
                    <span className="price-card__row-label">Минимальная партия</span>
                    <span className="price-card__row-value">100 кг / 1 м³</span>
                  </div>
                  <div className="price-card__row">
                    <span className="price-card__row-label">Складов в Китае</span>
                    <span className="price-card__row-value">4 собственных</span>
                  </div>
                </div>
                <div className="price-card__divider" />
                <div className="price-card__incl-label">В СТОИМОСТЬ ВКЛЮЧЕНО</div>
                <ul className="price-card__incl">
                  <li>Страхование 0,2%</li>
                  <li>Растаможка на Хоргосе</li>
                  <li>Документы для бухгалтерии</li>
                  <li>SMS-оповещения</li>
                  <li>Доставка по адресу</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* 01 · Когда выбирают ЖД доставку */}
        <section className="why" id="when">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">/01 · КОГДА ВЫБИРАЮТ ЖД</div>
              <h2 className="section-head__title">
                Когда выгодна ЖД доставка из Китая в Казахстан
              </h2>
              <p className="section-head__lead">
                Железнодорожная доставка из Китая — это баланс цены и срока. Вот задачи,
                под которые ЖД перевозки Китай — Казахстан подходят лучше всего.
              </p>
            </header>
            <div className="why__grid">
              {whenItems.map((i) => (
                <article key={i.n} className="why__card">
                  <div className="why__num mono">{i.n}</div>
                  <h3>{i.t}</h3>
                  <p>{i.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 02 · Как работает доставка через Хоргос */}
        <section className="howwork" id="process">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">/02 · ПРОЦЕСС</div>
              <h2 className="section-head__title">
                Как работает доставка грузов через Хоргос
              </h2>
              <p className="section-head__lead">
                Пять шагов от заявки до доставки по адресу в Казахстане — с собственным
                брокером на погранпереходе Хоргос.
              </p>
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

        {/* 03 · Тарифы ЖД доставки */}
        <section className="pricing" id="pricing">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">/03 · ТАРИФЫ</div>
              <h2 className="section-head__title">
                Тарифы ЖД доставки из Китая в Казахстан
              </h2>
              <p className="section-head__lead">
                Прозрачные тарифы железнодорожной доставки — никаких скрытых платежей.
                Цену и срок фиксируем в договоре.
              </p>
            </header>

            <div className="ptable">
              <div className="ptable__head mono">
                <div>тип</div><div>срок</div><div>цена от</div><div>минимум</div><div></div>
              </div>

              <div className="ptable__row ptable__row--accent">
                <div className="ptable__type">
                  <span className="ptable__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="4" cy="18" r="2" /><circle cx="20" cy="18" r="2" /><path d="M6 16h12M4 8h16v8H4z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  ЖД · сборный
                </div>
                <div>12–18 дней</div>
                <div><b>$120</b><span className="mono">/м³</span></div>
                <div>1 м³</div>
                <div><a className="btn btn--gold btn--sm" href="#quiz-cta">Расчёт →</a></div>
              </div>

              <div className="ptable__row">
                <div className="ptable__type">
                  <span className="ptable__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="7" width="18" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 11h18M9 7v10" />
                    </svg>
                  </span>
                  ЖД · контейнер
                </div>
                <div>12–18 дней</div>
                <div className="mono">по запросу</div>
                <div>20/40 фут</div>
                <div><a className="btn btn--ghost btn--sm" href="#quiz-cta">Расчёт →</a></div>
              </div>
            </div>

            <div className="pricing__included">
              <div className="mono pricing__inc-label">В СТОИМОСТЬ ВКЛЮЧЕНО</div>
              <ul>
                <li>Страхование 0,2%</li>
                <li>Растаможка на Хоргосе</li>
                <li>Документы для бухгалтерии</li>
                <li>SMS-оповещения</li>
                <li>Личный менеджер в WhatsApp</li>
                <li>Доставка по адресу</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 04 · Почему выбирают ATG */}
        <section className="why" id="why">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">/04 · ПОЧЕМУ ATG</div>
              <h2 className="section-head__title">
                Почему компании выбирают Ali Trans Group
              </h2>
              <p className="section-head__lead">
                18 лет на рынке, собственные склады в Китае и брокер на Хоргосе — доставка
                грузов Китай — Казахстан ЖД под официальный импорт.
              </p>
            </header>
            <div className="why__grid">
              {whyItems.map((i) => (
                <article key={i.n} className="why__card">
                  <div className="why__num mono">{i.n}</div>
                  <h3>{i.t}</h3>
                  <p>{i.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 05 · Кейсы (только реальные) */}
        <section className="cases" id="cases">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">/05 · РЕАЛЬНЫЕ КЕЙСЫ</div>
              <h2 className="section-head__title">ЖД-кейсы наших клиентов</h2>
            </header>

            <div className="cases__grid">
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
                    <li>Полный пакет документов</li>
                  </ul>
                  <blockquote>«ATG — это про предсказуемость. Знаю дату, цену, документы за неделю до отгрузки.»
                    <cite>— TODO · цитата клиента</cite>
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
                    <cite>— Баймуратов Н.Р, коммерческий директор ТОО "Pomo Design"</cite>
                  </blockquote>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 06 · FAQ — PAA optimization */}
        <section className="faq" id="faq">
          <div className="container faq__inner">
            <aside className="faq__side">
              <div className="mono section-head__num">/06 · ВОПРОСЫ</div>
              <h2 className="section-head__title">Частые вопросы о ЖД доставке</h2>
              <p className="section-head__lead">
                Главное о железнодорожной доставке из Китая в Казахстан — коротко и по делу.
              </p>
              <a href="https://wa.me/77718000209" className="btn btn--gold" target="_blank" rel="noopener">
                Не нашли ответ — WhatsApp →
              </a>
              <div className="faq__hint mono">↳ Отвечаем в течение 5 минут в рабочее время</div>
            </aside>

            <div className="faq__list">
              {faqs.map(([n, q, a]) => (
                <details key={n}>
                  <summary>
                    <span className="mono faq__n">{n}</span> {q}
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 07 · Другие способы доставки (internal linking) */}
        <section className="why" id="other">
          <div className="container">
            <header className="section-head section-head--center">
              <div className="mono section-head__num">/07 · ДРУГИЕ СПОСОБЫ</div>
              <h2 className="section-head__title">Не уверены, что ЖД — ваш вариант?</h2>
              <p className="section-head__lead">
                Сравните с другими способами доставки грузов из Китая в Казахстан под вашу задачу.
              </p>
            </header>
            <div className="why__grid">
              <article className="why__card">
                <div className="why__num mono">→</div>
                <h3><Link href="/aviadostavka-iz-kitaya">Авиа доставка из Китая</Link></h3>
                <p>Срочные грузы и дедлайны от 2 дней. Дорогостоящие товары и малогабаритные партии.</p>
              </article>
              <article className="why__card">
                <div className="why__num mono">→</div>
                <h3><Link href="/avto-dostavka-iz-kitaya">Авто доставка из Китая</Link></h3>
                <p>Гибкие маршруты «до двери», сборные и негабаритные грузы, температурный режим.</p>
              </article>
              <article className="why__card">
                <div className="why__num mono">→</div>
                <h3><Link href="/">Все услуги Ali Trans Group</Link></h3>
                <p>Авиа, ЖД, авто и мультимодальная логистика из Китая в Казахстан под ключ.</p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA — conversion block (existing component) */}
        <div id="quiz-cta">
          <CTA withQuizOnPage={false} />
        </div>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
