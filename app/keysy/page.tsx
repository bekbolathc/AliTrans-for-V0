import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { CasesGallery, type CaseEntry } from "@/components/CasesGallery";
import { buildMetadata } from "@/lib/seo";
import { schemaBreadcrumb, jsonLdProps } from "@/lib/schema";

const SLUG = "keysy";

export const metadata: Metadata = buildMetadata({
  slug: SLUG,
  title: "Кейсы Ali Trans Group — реальные доставки из Китая в Казахстан",
  description:
    "Реальные кейсы доставки грузов из Китая для бизнеса: маркетплейс-селлеры, производство, ритейл, медтехника. Фильтр по способу и отрасли.",
});

const allCases: CaseEntry[] = [
  {
    id: "wb-yiwu",
    mediaVariant: "c",
    transport: "rail",
    industry: "marketplace",
    route: { from: "YIW", to: "ALA · NQZ" },
    tagline: "MARKETPLACE · RAIL · MONTHLY",
    client: "СЕЛЛЕР WILDBERRIES",
    title: "Партии одежды для маркетплейсов",
    task: "регулярные ежемесячные партии 800 кг для пополнения склада.",
    solve: "ЖД через Хоргос, консолидация на нашем складе в Иу, фиксированный тариф.",
    results: ["Месячный цикл стабилен", "Цена $278/м³", "Полный пакет документов"],
    quote: { text: "ATG — это про предсказуемость. Знаю дату, цену, документы за неделю до отгрузки.", cite: "клиент ATG" },
  },
  {
    id: "pomo",
    mediaVariant: "b",
    transport: "rail",
    industry: "production",
    route: { from: "CAN", to: "SKZ" },
    tagline: "INDUSTRY · MULTI · 14 ДНЕЙ",
    client: "ТОО «POMO DESIGN»",
    title: "Промышленная линия для нового цеха",
    task: "привезти оборудование под запуск производства в Шымкенте.",
    solve: "мультимодальная схема ЖД + авто «до двери», страхование 0,2%.",
    results: ["14 дней до двери", "Растаможка под ключ", "Цех запущен вовремя"],
    quote: { text: "Сложная сборка с допуском к точности. Привезли как ювелирку.", cite: "Баймуратов Н.Р, ком. дир. ТОО Pomo Design" },
  },
  {
    id: "elec-szx",
    mediaVariant: "a",
    transport: "air",
    industry: "retail",
    route: { from: "CAN", to: "ALA" },
    tagline: "ELECTRONICS · AIR · 4 ДНЯ",
    client: "ТОО · ИМПОРТ ЭЛЕКТРОНИКИ",
    title: "Партия смартфонов на запуск розницы",
    task: "доставить 320 кг смартфонов из Шэньчжэня к открытию точки продаж за 5 дней.",
    solve: "авиа из Гуанчжоу прямым рейсом, ускоренная растаможка в Алматы.",
    results: ["В пути 4 дня", "Цена $612/м³ под ключ", "Полный пакет документов"],
  },
  {
    id: "med-pvg",
    mediaVariant: "c",
    transport: "air",
    industry: "medtech",
    route: { from: "PVG", to: "NQZ" },
    tagline: "PHARMA · AIR · 3 ДНЯ",
    client: "ТОО · МЕДИЦИНСКИЕ ИЗДЕЛИЯ",
    title: "Срочный довоз расходников для клиники",
    task: "200 кг расходников из Шанхая — дозаказ под графики операций.",
    solve: "авиа-сборный груз, температурный режим, страховка 0,2%.",
    results: ["Доставлено за 3 дня", "Без потерь температуры", "Документы под закрытие"],
  },
  {
    id: "fmcg-yiwu",
    mediaVariant: "d",
    transport: "road",
    industry: "fmcg",
    route: { from: "YIW", to: "ALA" },
    tagline: "FMCG · TRUCK · 11 ДНЕЙ",
    client: "ТОО · ИМПОРТ FMCG",
    title: "Сборная фура товаров широкого потребления",
    task: "ежемесячные сборные партии 2,5 т к собственному складу в Алматы.",
    solve: "консолидация в Иу, авто через Хоргос, доставка до двери.",
    results: ["Стабильный цикл 11 дней", "Цена $185/м³", "Документы под бухгалтерию"],
  },
  {
    id: "eq-urc",
    mediaVariant: "e",
    transport: "road",
    industry: "equipment",
    route: { from: "URC", to: "АЛМ" },
    tagline: "EQUIPMENT · OVERSIZE · 12 ДНЕЙ",
    client: "ТОО · СТРОИТЕЛЬНОЕ ОБОРУДОВАНИЕ",
    title: "Негабаритное оборудование для стройплощадки",
    task: "привезти компрессорную станцию длиной 11 м под запуск стройплощадки.",
    solve: "трал из Урумчи, согласование маршрута, спецсопровождение.",
    results: ["Доставлено за 12 дней", "Без повреждений", "Запуск стройки в срок"],
  },
  {
    id: "lcl-multi",
    mediaVariant: "d",
    transport: "lcl",
    industry: "retail",
    route: { from: "GUA · YIW", to: "ALA" },
    tagline: "RETAIL · LCL · 2 СКЛАДА",
    client: "ТОО · РОЗНИЦА",
    title: "Объединение двух поставщиков в одну отправку",
    task: "забрать товар у 2 поставщиков в Гуанчжоу и Иу — объединить в одну партию.",
    solve: "консолидация на складе в Иу, единая отправка сборным авто.",
    results: ["Экономия 23% против раздельных отгрузок", "10 дней до Алматы", "Один пакет документов"],
  },
  {
    id: "kaspi-gtd",
    mediaVariant: "b",
    transport: "lcl",
    industry: "marketplace",
    route: { from: "YIW", to: "ХРГ → АЛМ" },
    tagline: "MARKETPLACE · GTD · 4 ЧАСА",
    client: "СЕЛЛЕР KASPI",
    title: "Оформление ГТД в день прибытия",
    task: "растаможка не должна тормозить отгрузку на FBO Kaspi под пик продаж.",
    solve: "предварительная подготовка ВЭД-пакета, подача ГТД в день прибытия.",
    results: ["ГТД оформлено за 4 часа", "Партия уехала на FBO в день получения", "Бесшовно под маркетплейс"],
    quote: { text: "ATG — это про скорость на таможне. Знают всех инспекторов, знают наш продукт.", cite: "клиент ATG" },
  },
];

export default function Page() {
  const breadcrumbItems = [
    { name: "Главная", slug: "" },
    { name: "Кейсы", slug: SLUG, current: true },
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
              <div className="kicker mono">КЕЙСЫ · РЕАЛЬНЫЕ B2B-ДОСТАВКИ</div>
              <h1 className="hero__title">
                Реальные кейсы доставок<br />
                <span className="hero__title-accent">из Китая в Казахстан.</span>
              </h1>
              <p className="hero__lead">
                Подборка фактических доставок наших B2B-клиентов: маркетплейс-селлеры,
                производство, ритейл, медтехника, FMCG и оборудование. Фильтруйте по
                способу и отрасли, чтобы найти кейс под вашу задачу.
              </p>
            </div>

            <aside className="hero__panel" aria-label="Кейсы в цифрах">
              <div className="price-card">
                <div className="price-card__kicker">ПОДБОРКА</div>
                <div className="price-card__amount">
                  {allCases.length}
                  <span className="price-card__amount-unit">реальных кейса</span>
                </div>
                <div className="price-card__rows">
                  <div className="price-card__row">
                    <span className="price-card__row-label">Способов доставки</span>
                    <span className="price-card__row-value">4</span>
                  </div>
                  <div className="price-card__row">
                    <span className="price-card__row-label">Отраслей B2B</span>
                    <span className="price-card__row-value">6</span>
                  </div>
                  <div className="price-card__row">
                    <span className="price-card__row-label">География клиентов</span>
                    <span className="price-card__row-value">KZ + СНГ</span>
                  </div>
                </div>
                <div className="price-card__divider" />
                <div className="price-card__incl-label">МОЖНО ОТФИЛЬТРОВАТЬ</div>
                <ul className="price-card__incl">
                  <li>Авиа / ЖД / Авто / Сборные</li>
                  <li>Маркетплейс, ритейл, производство</li>
                  <li>Медтехника, FMCG, оборудование</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <div className="container">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>

        <section className="cases" id="cases">
          <div className="container">
            <header className="section-head">
              <div className="mono section-head__num">/01 · ВСЕ КЕЙСЫ</div>
              <h2 className="section-head__title">Кейсы Ali Trans Group</h2>
              <p className="section-head__lead">
                {allCases.length} кейсов из практики. Фильтрация — без перезагрузки страницы.
              </p>
            </header>
            <CasesGallery items={allCases} />
          </div>
        </section>

        <div id="quiz-cta">
          <CTA withQuizOnPage={false} source="cases" defaultMode="Консультация" />
        </div>
      </main>

      <Footer />

      <script {...jsonLdProps(schemaBreadcrumb(breadcrumbItems))} />
    </>
  );
}
