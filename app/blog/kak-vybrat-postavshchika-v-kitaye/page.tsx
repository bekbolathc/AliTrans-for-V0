import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import Link from "next/link";

const SLUG = "blog/kak-vybrat-postavshchika-v-kitaye";

export const metadata: Metadata = buildMetadata({
  slug: SLUG,
  title: "Как найти надёжного поставщика в Китае | Ali Trans Group",
  description:
    "Практическое руководство: Alibaba, рынки Гуанчжоу и Иу, проверка поставщика, инспекция качества. Опыт 18 лет в работе с китайскими заводами.",
});

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <article
          style={{
            paddingTop: "calc(var(--header-h) + 32px)",
            paddingBottom: "80px",
          }}
        >
          <div className="container" style={{ maxWidth: "720px" }}>
            <BreadcrumbNav
              items={[
                { slug: "", label: "Главная" },
                { slug: "blog", label: "Блог" },
                { slug: SLUG, label: "Как найти поставщика", current: true },
              ]}
            />

            <div style={{ marginTop: "24px" }}>
              <div
                className="mono"
                style={{ fontSize: "11px", color: "var(--mute)", marginBottom: "12px" }}
              >
                2025-06-20 · 11 мин · Закупки
              </div>
              <h1
                style={{
                  fontSize: "clamp(24px, 4vw, 36px)",
                  lineHeight: 1.2,
                  marginBottom: "20px",
                }}
              >
                Как найти надёжного поставщика в Китае
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  color: "var(--mute)",
                  lineHeight: 1.6,
                  marginBottom: "40px",
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: "16px",
                }}
              >
                Неправильный поставщик — главная причина потерь в импорте из Китая. Бракованный товар, срыв сроков, исчезновение с деньгами. Разбираем, где искать, как проверять и что спрашивать до оплаты.
              </p>
            </div>

            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Где искать поставщиков в Китае
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Три главных канала поиска: онлайн-платформы, физические рынки и отраслевые выставки. Каждый подходит под разный тип закупок.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "6px" }}>
                  КАНАЛ 01 · ОНЛАЙН
                </div>
                <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>Alibaba.com и 1688.com</h3>
                <p style={{ color: "var(--mute)", fontSize: "14px", lineHeight: 1.6, marginBottom: "10px" }}>
                  Alibaba.com — международная B2B-платформа, поставщики говорят по-английски, принимают международные платежи. 1688.com — внутрикитайский аналог, цены на 20–40% ниже, но нужен переводчик или посредник.
                </p>
                <p style={{ color: "var(--mute)", fontSize: "14px", lineHeight: 1.6 }}>
                  Фильтр «Gold Supplier» и «Verified Supplier» на Alibaba снижает риск мошенничества, но не гарантирует качество. Обязательно запрашивайте образцы.
                </p>
              </div>
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "6px" }}>
                  КАНАЛ 02 · РЫНКИ
                </div>
                <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>Рынки Иу и Гуанчжоу</h3>
                <p style={{ color: "var(--mute)", fontSize: "14px", lineHeight: 1.6, marginBottom: "10px" }}>
                  <strong>Иу (Yiwu)</strong> — крупнейший в мире оптовый рынок мелких товаров: игрушки, аксессуары, текстиль, сувениры, хозтовары. Более 75 000 торговых точек. Подходит для небольших партий от 1 коробки.
                </p>
                <p style={{ color: "var(--mute)", fontSize: "14px", lineHeight: 1.6 }}>
                  <strong>Гуанчжоу (Canton)</strong> — электроника, одежда, обувь, мебель, авто-товары. Textile City, Electronics Market на Huaqiangbei. Крупные оптовые партии, прямые производители.
                </p>
              </div>
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "6px" }}>
                  КАНАЛ 03 · ВЫСТАВКИ
                </div>
                <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>Canton Fair и отраслевые выставки</h3>
                <p style={{ color: "var(--mute)", fontSize: "14px", lineHeight: 1.6 }}>
                  Canton Fair (Кантонская ярмарка) — дважды в год в Гуанчжоу, крупнейшая торговая выставка Китая. Здесь представлены реальные производители, а не посредники. Лучший способ найти завод для крупных заказов и long-term контрактов.
                </p>
              </div>
            </div>

            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Производитель или торговая компания: в чём разница
            </h2>
            <p style={{ marginBottom: "16px" }}>
              На Alibaba большинство поставщиков — торговые компании (Trading Company), а не заводы. Они перепродают продукцию с наценкой 10–40%. Это не плохо, если они обеспечивают гибкость по объёмам и ассортименту.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "8px" }}>
                  ЗАВОД (Factory)
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px" }}>
                  <div style={{ color: "var(--mute)" }}>+ Цена ниже на 10–40%</div>
                  <div style={{ color: "var(--mute)" }}>+ Кастомизация под ваш заказ</div>
                  <div style={{ color: "var(--mute)" }}>− Высокий MOQ (минимальный заказ)</div>
                  <div style={{ color: "var(--mute)" }}>− Меньше гибкости по ассортименту</div>
                </div>
              </div>
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "8px" }}>
                  ТОРГОВАЯ КОМПАНИЯ
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px" }}>
                  <div style={{ color: "var(--mute)" }}>+ Низкий MOQ, можно смешивать SKU</div>
                  <div style={{ color: "var(--mute)" }}>+ Хорошо говорят по-английски</div>
                  <div style={{ color: "var(--mute)" }}>− Наценка сверху себестоимости</div>
                  <div style={{ color: "var(--mute)" }}>− Не контролируют производство</div>
                </div>
              </div>
            </div>
            <p style={{ marginBottom: "16px" }}>
              Как отличить: попросите Business License (лицензию) — у завода в названии будет «factory» или «manufacturing co.», у торговой компании — «trading co.» или «import & export co.».
            </p>

            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Как проверить поставщика: чек-лист
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
              {[
                { n: "01", t: "Запросите Business License", d: "Официальный регистрационный документ компании в Китае. Проверьте название, дату регистрации, вид деятельности. Мошенники часто отказываются его предоставлять." },
                { n: "02", t: "Проверьте через CNIPA или SAIC", d: "Публичные реестры юридических лиц Китая. Запрос по названию или регистрационному номеру. Ваш агент в Китае сделает это за 10–15 минут." },
                { n: "03", t: "Видеозвонок на производство", d: "Попросите провести видеоэкскурсию по заводу. Добросовестный производитель согласится. Обратите внимание: есть ли реальное производство, оборудование, рабочие." },
                { n: "04", t: "Запросите образцы (Samples)", d: "Никогда не делайте крупный заказ без образцов. Стоимость образца — 1–3 единицы по розничной цене + доставка авиа. Это $50–300, которые спасут вас от потери $5 000–50 000." },
                { n: "05", t: "Проверьте отзывы и историю на Alibaba", d: "На Alibaba смотрите: Trade Assurance (защита сделки), число завершённых сделок, средний чек, отзывы за последние 2 года. Аккаунту меньше года — осторожно." },
                { n: "06", t: "Начните с небольшого тестового заказа", d: "Первый заказ — всегда небольшой, даже если у вас хорошие переговоры и образцы понравились. $1 000–5 000 на проверку надёжности лучше, чем $50 000 риска." },
              ].map((item) => (
                <div key={item.n} className="card">
                  <div style={{ display: "flex", gap: "12px" }}>
                    <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", minWidth: "20px", paddingTop: "2px" }}>
                      {item.n}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "15px", marginBottom: "4px" }}>{item.t}</h3>
                      <p style={{ color: "var(--mute)", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{item.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Инспекция качества перед отправкой
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Инспекция (Pre-Shipment Inspection, PSI) — проверка товара на складе в Китае до отправки. Инспектор приезжает, вскрывает случайную выборку коробок, проверяет соответствие образцу, маркировку, упаковку.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Стоимость независимой инспекции: $200–400 за один день проверки. Международные компании: SGS, Bureau Veritas, Intertek, QIMA. Местные агенты — дешевле, но менее авторитетны.
            </p>
            <div
              className="card"
              style={{ borderColor: "var(--gold)", marginBottom: "24px" }}
            >
              <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "8px" }}>
                КОГДА НУЖНА ИНСПЕКЦИЯ
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", color: "var(--mute)", lineHeight: 1.6 }}>
                <div>— Первый заказ у нового поставщика</div>
                <div>— Заказ на сумму от $10 000</div>
                <div>— Товар с жёсткими требованиями к качеству (электроника, детские товары, одежда)</div>
                <div>— Поставщик уже имел проблемы с браком в прошлом</div>
              </div>
            </div>

            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Красные флаги: когда стоит уйти
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
              {[
                "Требуют 100% предоплату без Trade Assurance или аккредитива.",
                "Отказываются давать образцы или Business License.",
                "Цена значительно ниже рыночной без объяснений.",
                "Нет реального производства — только офис и каталог.",
                "Не могут дать контакт завода или провести видеозвонок.",
                "Давят на срочность: «цена только сегодня», «место на складе заканчивается».",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ color: "var(--gold)", minWidth: "16px", fontSize: "16px" }}>⚠</div>
                  <p style={{ fontSize: "14px", color: "var(--mute)", lineHeight: 1.6, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Как Ali Trans Group помогает с поиском поставщика
            </h2>
            <p style={{ marginBottom: "16px" }}>
              У нас есть собственные представители в Иу и Гуанчжоу — они физически присутствуют на рынках. По запросу клиента: находим поставщиков по описанию товара, получаем образцы, проводят инспекцию перед отправкой.
            </p>
            <p style={{ marginBottom: "24px" }}>
              Это часть услуги ВЭД под ключ: поставщик → инспекция → упаковка → таможня → доставка. Вам не нужно лететь в Китай для первого заказа.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
              <Link href="/ved-pod-klyuch" className="btn btn--ghost" style={{ display: "inline-block" }}>
                ВЭД под ключ →
              </Link>
              <Link href="/rastamozhka-gruzov" className="btn btn--ghost" style={{ display: "inline-block" }}>
                Растаможка →
              </Link>
            </div>

            <div
              className="card"
              style={{
                marginTop: "48px",
                padding: "32px",
                borderColor: "var(--gold)",
                textAlign: "center",
              }}
            >
              <div
                className="mono"
                style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "12px" }}
              >
                НУЖЕН ПОСТАВЩИК В КИТАЕ?
              </div>
              <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>
                Найдём поставщика и организуем доставку под ключ
              </h3>
              <p style={{ color: "var(--mute)", marginBottom: "20px" }}>
                Наши представители в Иу и Гуанчжоу помогут найти завод, получить образцы и проверить качество. 18 лет работы с Китаем.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/kontakty" className="btn btn--gold">
                  Обсудить задачу<span aria-hidden="true" className="btn__arrow">→</span>
                </Link>
                <a
                  href="https://wa.me/77718000209"
                  className="btn btn--ghost"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="wa-ico" aria-hidden="true">✆</span> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
