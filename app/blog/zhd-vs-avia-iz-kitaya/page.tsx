import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import Link from "next/link";

const SLUG = "blog/zhd-vs-avia-iz-kitaya";

export const metadata: Metadata = buildMetadata({
  slug: SLUG,
  title: "ЖД или авиа из Китая: как выбрать в 2025 году | Ali Trans Group",
  description:
    "Сравниваем ЖД и авиа доставку из Китая по срокам, стоимости и типам грузов. Разбираем 6 сценариев с конкретными цифрами.",
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
                { slug: SLUG, label: "ЖД vs Авиа", current: true },
              ]}
            />

            <div style={{ marginTop: "24px" }}>
              <div
                className="mono"
                style={{ fontSize: "11px", color: "var(--mute)", marginBottom: "12px" }}
              >
                2025-06-01 · 7 мин · Сравнение
              </div>
              <h1
                style={{
                  fontSize: "clamp(24px, 4vw, 36px)",
                  lineHeight: 1.2,
                  marginBottom: "20px",
                }}
              >
                ЖД или авиа из Китая: как выбрать в 2025 году
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
                Два главных вопроса при импорте из Китая — «сколько стоит?» и «когда придёт?». ЖД и авиа дают разные ответы. Разбираем, что выбрать под вашу задачу.
              </p>
            </div>

            {/* Ключевые цифры */}
            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Ключевые цифры: ЖД vs Авиа
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Прежде чем разбирать сценарии — сравним два способа по ключевым параметрам.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "8px" }}>
                  ЖД · ЖЕЛЕЗНАЯ ДОРОГА
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--mute)", fontSize: "13px" }}>Срок</span>
                    <span style={{ fontWeight: 600 }}>12–18 дней</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--mute)", fontSize: "13px" }}>Цена</span>
                    <span style={{ fontWeight: 600 }}>от $120/м³</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--mute)", fontSize: "13px" }}>Минимум</span>
                    <span style={{ fontWeight: 600 }}>от 100 кг</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--mute)", fontSize: "13px" }}>Подходит для</span>
                    <span style={{ fontWeight: 600, textAlign: "right", fontSize: "13px" }}>объём + бюджет</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "8px" }}>
                  АВИА · ВОЗДУШНЫЙ ТРАНСПОРТ
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--mute)", fontSize: "13px" }}>Срок</span>
                    <span style={{ fontWeight: 600 }}>2–5 дней</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--mute)", fontSize: "13px" }}>Цена</span>
                    <span style={{ fontWeight: 600 }}>от $500/м³</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--mute)", fontSize: "13px" }}>Минимум</span>
                    <span style={{ fontWeight: 600 }}>от 45 кг</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--mute)", fontSize: "13px" }}>Подходит для</span>
                    <span style={{ fontWeight: 600, textAlign: "right", fontSize: "13px" }}>срочность + ценность</span>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ marginBottom: "16px" }}>
              Авиа в 4 раза дороже ЖД по цене за кубометр, но в 4–6 раз быстрее. Выбор зависит не от личных предпочтений, а от конкретных параметров груза и задачи.
            </p>

            {/* 6 сценариев */}
            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              6 сценариев: когда что выбрать
            </h2>
            <p style={{ marginBottom: "24px" }}>
              На практике выбор между ЖД и авиа определяется одним из шести сценариев. Найдите свой.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "6px" }}>
                  СЦЕНАРИЙ 01
                </div>
                <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>Срок критичен → авиа</h3>
                <p style={{ color: "var(--mute)", fontSize: "14px", lineHeight: 1.6 }}>
                  Дедлайн через 7–10 дней, товар нужен к открытию, запуску или акции. Авиа доставит из Гуанчжоу за 3–4 дня. ЖД не успеет.
                </p>
              </div>
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "6px" }}>
                  СЦЕНАРИЙ 02
                </div>
                <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>Бюджет ограничен, объём большой → ЖД</h3>
                <p style={{ color: "var(--mute)", fontSize: "14px", lineHeight: 1.6 }}>
                  Несколько кубометров товаров, сроки позволяют 2–3 недели. ЖД за $120/м³ даст экономию в 4 раза против авиа. На больших объёмах это сотни тысяч тенге.
                </p>
              </div>
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "6px" }}>
                  СЦЕНАРИЙ 03
                </div>
                <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>Дорогой товар (электроника) → авиа</h3>
                <p style={{ color: "var(--mute)", fontSize: "14px", lineHeight: 1.6 }}>
                  Смартфоны, ноутбуки, медтехника — стоимость груза велика. Чем дольше в пути, тем выше риск повреждения, кражи или колебаний курса. Авиа минимизирует transit time и страховые риски.
                </p>
              </div>
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "6px" }}>
                  СЦЕНАРИЙ 04
                </div>
                <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>Текстиль, аксессуары, товары для маркетплейса → ЖД</h3>
                <p style={{ color: "var(--mute)", fontSize: "14px", lineHeight: 1.6 }}>
                  Одежда, обувь, аксессуары, товары для Kaspi или OZON — объёмные, недорогие, не требуют срочной доставки. ЖД — идеальное решение для регулярных поставок.
                </p>
              </div>
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "6px" }}>
                  СЦЕНАРИЙ 05
                </div>
                <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>Образцы и прототипы → авиа</h3>
                <p style={{ color: "var(--mute)", fontSize: "14px", lineHeight: 1.6 }}>
                  Небольшая партия 5–50 кг для проверки качества перед заказом крупной партии. Авиа доставит за 2–3 дня — производство или отдел закупок не стоит на паузе.
                </p>
              </div>
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "6px" }}>
                  СЦЕНАРИЙ 06
                </div>
                <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>Сезонный товар с запасом времени → ЖД</h3>
                <p style={{ color: "var(--mute)", fontSize: "14px", lineHeight: 1.6 }}>
                  Новогодний декор, летний садовый инвентарь, школьные товары — если заказать за 4–6 недель до сезона, ЖД успеет. Планирование экономит в 4 раза против авиа.
                </p>
              </div>
            </div>

            {/* Авто */}
            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Авто доставка — третий вариант
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Между ЖД и авиа есть золотая середина — автодоставка. Срок 7–14 дней, цена от $150/м³, подходит для большинства типов грузов. Минимум от 0,5 м³, доставка «до двери» без перегрузок на крупных узлах.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Авто выигрывает у ЖД по гибкости маршрута и скорости, а у авиа — по цене. Хороший выбор для небольших партий 0,5–5 м³ без экстремальной срочности.
            </p>
            <div style={{ marginBottom: "32px" }}>
              <Link href="/avto-dostavka-iz-kitaya" className="btn btn--ghost" style={{ display: "inline-block" }}>
                Подробнее об автодоставке →
              </Link>
            </div>

            {/* Как ATG помогает выбрать */}
            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Как Ali Trans Group помогает выбрать маршрут
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Мы не продаём «один способ». Под каждую задачу подбираем оптимальный маршрут: рассчитываем реальную стоимость ЖД, авиа и авто, учитываем тип товара, срок и бюджет.
            </p>
            <p style={{ marginBottom: "16px" }}>
              18 лет в B2B-логистике Китай — Казахстан: свои склады в Иу, Гуанчжоу, Урумчи, Хоргосе и собственный брокер. Цену и срок фиксируем в договоре.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              <Link href="/zhd-dostavka-iz-kitaya" className="btn btn--ghost" style={{ display: "block", textAlign: "center" }}>
                ЖД из Китая →
              </Link>
              <Link href="/avia-dostavka-iz-kitaya" className="btn btn--ghost" style={{ display: "block", textAlign: "center" }}>
                Авиа из Китая →
              </Link>
              <Link href="/avto-dostavka-iz-kitaya" className="btn btn--ghost" style={{ display: "block", textAlign: "center" }}>
                Авто из Китая →
              </Link>
            </div>

            {/* CTA */}
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
                НУЖЕН РАСЧЁТ?
              </div>
              <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>
                Подберём маршрут под вашу задачу
              </h3>
              <p style={{ color: "var(--mute)", marginBottom: "20px" }}>
                Напишите параметры груза — рассчитаем ЖД, авиа и авто, и скажем, что выгоднее именно для вас.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/kontakty" className="btn btn--gold">
                  Получить расчёт<span aria-hidden="true" className="btn__arrow">→</span>
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
