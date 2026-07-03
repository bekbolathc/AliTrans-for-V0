import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import Link from "next/link";

const SLUG = "blog/kak-rastamojit-gruz-iz-kitaya";

export const metadata: Metadata = buildMetadata({
  slug: SLUG,
  title: "Как растаможить груз из Китая в Казахстане | Ali Trans Group",
  description:
    "Пошаговое руководство по таможенному оформлению для ИП и ТОО. Какие документы нужны, сколько стоит, как избежать задержек.",
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
                { slug: SLUG, label: "Как растаможить груз", current: true },
              ]}
            />

            <div style={{ marginTop: "24px" }}>
              <div
                className="mono"
                style={{ fontSize: "11px", color: "var(--mute)", marginBottom: "12px" }}
              >
                2025-06-10 · 9 мин · Таможня
              </div>
              <h1
                style={{
                  fontSize: "clamp(24px, 4vw, 36px)",
                  lineHeight: 1.2,
                  marginBottom: "20px",
                }}
              >
                Как растаможить груз из Китая в Казахстане
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
                Таможня — самый стрессовый этап импорта для новичка. Задержки, штрафы, непонятные требования. Разбираем процесс пошагово: что нужно, сколько стоит, как избежать типичных ошибок.
              </p>
            </div>

            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Что такое таможенное оформление
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Таможенное оформление — это официальная процедура декларирования товара при пересечении государственной границы. Без неё груз из Китая не попадёт в Казахстан легально. Оформляется таможенная декларация (ГТД), уплачиваются пошлины и НДС.
            </p>
            <p style={{ marginBottom: "16px" }}>
              В Казахстане таможня работает по нормам ЕАЭС (Евразийский экономический союз). Товары из Китая — третья страна, поэтому стандартные ставки пошлин применяются в полном объёме.
            </p>

            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Шаг 1: Подготовка документов от поставщика
            </h2>
            <p style={{ marginBottom: "16px" }}>
              До того как груз отправится из Китая, вам нужен полный пакет документов от поставщика. Это основа таможенного оформления.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
              {[
                { n: "01", t: "Инвойс (Invoice)", d: "Счёт от поставщика с указанием наименования товара, количества, цены за единицу и общей суммы. Цена в инвойсе — база для расчёта таможенной стоимости и пошлин." },
                { n: "02", t: "Упаковочный лист (Packing List)", d: "Детальный список содержимого каждого места: вес нетто/брутто, размеры, количество. Таможня сверяет с фактическим грузом." },
                { n: "03", t: "Договор с поставщиком", d: "Контракт купли-продажи с реквизитами сторон, условиями поставки (Incoterms), валютой и порядком оплаты. Нужен для валютного контроля в банке." },
                { n: "04", t: "Сертификаты соответствия (при необходимости)", d: "Для ряда товаров (детские товары, электроника, продукты питания, косметика) нужны сертификаты ЕЭС. Без них товар не пустят на рынок KZ." },
              ].map((item) => (
                <div key={item.n} className="card">
                  <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "6px" }}>
                    ШАГ {item.n}
                  </div>
                  <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>{item.t}</h3>
                  <p style={{ color: "var(--mute)", fontSize: "14px", lineHeight: 1.6 }}>{item.d}</p>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Шаг 2: Определение кода ТН ВЭД
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Каждый товар имеет код ТН ВЭД (товарная номенклатура внешнеэкономической деятельности). От кода зависят ставка пошлины и список обязательных документов. Неправильный код — штраф или задержание груза.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Например: джинсы — 6203 42 310 0 (ставка 12% + 0,60 евро/кг), смартфон — 8517 13 000 0 (ставка 0%), промышленный станок — 8457 10 100 0 (ставка 0%).
            </p>
            <div
              className="card"
              style={{ borderColor: "var(--gold)", marginBottom: "24px" }}
            >
              <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "8px" }}>
                ВАЖНО
              </div>
              <p style={{ fontSize: "14px", lineHeight: 1.6 }}>
                Таможенный брокер определяет код ТН ВЭД профессионально. Попытка самостоятельно сэкономить на брокере и ошибиться в коде обходится дороже: штраф до 200% от суммы пошлины + задержание груза на склад временного хранения (СВХ) за ваш счёт.
              </p>
            </div>

            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Шаг 3: Расчёт таможенных платежей
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Таможенные платежи состоят из трёх составляющих.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              {[
                { label: "Таможенная пошлина", value: "0–15%", note: "от таможенной стоимости. Зависит от кода ТН ВЭД." },
                { label: "НДС", value: "12%", note: "от (таможенная стоимость + пошлина). Стандартная ставка KZ." },
                { label: "Сбор за оформление", value: "от 5 000 тг", note: "фиксированный сбор таможни за подачу декларации." },
              ].map((item) => (
                <div key={item.label} className="card" style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "13px", color: "var(--mute)", marginBottom: "6px" }}>{item.label}</div>
                  <div style={{ fontSize: "24px", fontWeight: 600, marginBottom: "6px" }}>{item.value}</div>
                  <div style={{ fontSize: "12px", color: "var(--mute)", lineHeight: 1.5 }}>{item.note}</div>
                </div>
              ))}
            </div>
            <p style={{ marginBottom: "16px" }}>
              <strong>Пример:</strong> Электроника на $10 000. Пошлина 0% (код 8517) + НДС 12% = $1 200 + сбор ≈ 5 000 тг. Итого к уплате около $1 210–1 220.
            </p>
            <p style={{ marginBottom: "16px" }}>
              <strong>Пример 2:</strong> Одежда на $5 000. Пошлина 12% = $600, НДС 12% от $5 600 = $672, сбор ≈ 5 000 тг. Итого ≈ $1 280.
            </p>

            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Шаг 4: Подача декларации (ГТД)
            </h2>
            <p style={{ marginBottom: "16px" }}>
              ГТД (грузовая таможенная декларация) подаётся таможенным брокером в электронном виде через систему АСТАНА-1. Груз при этом находится на СВХ (складе временного хранения) или в зоне таможенного контроля.
            </p>
            <p style={{ marginBottom: "16px" }}>
              После подачи декларации таможня может:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
              {[
                "Выпустить груз без досмотра — самый быстрый вариант (1–2 часа).",
                "Назначить документальный контроль — проверка документов без вскрытия груза (1–3 дня).",
                "Назначить физический досмотр — вскрытие упаковки и пересчёт (1–5 дней, стоимость досмотра — за счёт декларанта).",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginTop: "2px", minWidth: "20px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--mute)", lineHeight: 1.6, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Типичные ошибки и как их избежать
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {[
                { t: "Занижение стоимости в инвойсе", d: "«Серые» схемы с заниженной ценой в документах — риск конфискации и уголовной ответственности. Таможня использует базы данных контрольных цен и выявляет занижение." },
                { t: "Неполный пакет документов", d: "Отсутствие сертификата соответствия на подлежащий сертификации товар = задержание на границе. Список товаров, требующих сертификации, уточняйте у брокера заранее." },
                { t: "Неверное описание товара", d: "«Сувениры» вместо «электронные игрушки» или «запчасти» вместо «промышленное оборудование» — таможня классифицирует по факту, штраф за недостоверное декларирование." },
                { t: "Незнание льготных режимов", d: "Для отдельных категорий оборудования и сырья предусмотрены льготы или нулевые ставки пошлин. Брокер знает — самостоятельно вы можете переплатить." },
              ].map((item) => (
                <div key={item.t} className="card" style={{ borderLeft: "3px solid var(--gold)", borderRadius: "0 var(--r-card) var(--r-card) 0" }}>
                  <h3 style={{ fontSize: "15px", marginBottom: "6px" }}>⚠ {item.t}</h3>
                  <p style={{ color: "var(--mute)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{item.d}</p>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: "40px", marginBottom: "16px", fontSize: "22px" }}>
              Брокер или самостоятельно?
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Юридически ТОО и ИП могут декларировать товар самостоятельно (прямое декларирование). На практике это требует получения электронной подписи для системы АСТАНА-1, знания кодов ТН ВЭД и опыта работы с таможней.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Для разовых небольших поставок самодекларирование возможно. Для регулярного импорта — работа с брокером окупается: меньше ошибок, меньше задержек, меньше стресса.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "8px" }}>
                  САМОСТОЯТЕЛЬНО
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px" }}>
                  <div style={{ color: "var(--mute)" }}>+ Экономия на комиссии брокера</div>
                  <div style={{ color: "var(--mute)" }}>− Нужна ЭЦП для АСТАНА-1</div>
                  <div style={{ color: "var(--mute)" }}>− Риск ошибки в коде ТН ВЭД</div>
                  <div style={{ color: "var(--mute)" }}>− Время на изучение процедуры</div>
                </div>
              </div>
              <div className="card">
                <div className="mono" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "8px" }}>
                  ЧЕРЕЗ БРОКЕРА
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px" }}>
                  <div style={{ color: "var(--mute)" }}>+ Профессиональный подбор кода</div>
                  <div style={{ color: "var(--mute)" }}>+ Знание льгот и исключений</div>
                  <div style={{ color: "var(--mute)" }}>+ Ответственность брокера за ошибки</div>
                  <div style={{ color: "var(--mute)" }}>− Комиссия 15 000–50 000 тг за поставку</div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "32px" }}>
              <Link href="/rastamozhka-gruzov" className="btn btn--ghost" style={{ display: "inline-block" }}>
                Услуга растаможки от Ali Trans Group →
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
                НУЖНА РАСТАМОЖКА?
              </div>
              <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>
                Собственный таможенный брокер на Хоргосе
              </h3>
              <p style={{ color: "var(--mute)", marginBottom: "20px" }}>
                18 лет работы с таможней KZ. Оформляем ГТД, подбираем код ТН ВЭД, работаем с сертификатами. Все документы под ключ.
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
