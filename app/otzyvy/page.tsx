import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SLUG = "otzyvy";

export const metadata: Metadata = buildMetadata({
  slug: SLUG,
  title: "Отзывы клиентов Ali Trans Group | Логистика из Китая в Казахстан",
  description:
    "Реальные отзывы B2B-клиентов о доставке из Китая, Кореи, Турции в Казахстан. ТОО, ИП, производства и дистрибьюторы о работе с Ali Trans Group.",
});

const REVIEWS = [
  {
    id: 1,
    name: "Алибек М.",
    company: "ТОО «Импорт Плюс»",
    type: "Авиа из Китая",
    rating: 5,
    text: "Работаем с ATG уже два года. Авиа доставка из Гуанчжоу всегда в срок — за 3–4 дня. Документы полный комплект, менеджер отвечает в WhatsApp быстро. Рекомендую.",
  },
  {
    id: 2,
    name: "Динара С.",
    company: "ИП «KZ Beauty»",
    type: "Авиа из Кореи",
    rating: 5,
    text: "Привозим K-beauty из Сеула через ATG. Авиа за 4–5 дней, сертификаты для продажи в магазинах — всё оформляют. Очень довольна работой команды.",
  },
  {
    id: 3,
    name: "Марат К.",
    company: "ТОО «АвтоГрупп»",
    type: "ЖД из Китая",
    rating: 5,
    text: "Заказываем автозапчасти ЖД ежемесячно. Стабильные 14–16 дней, цена $122/м³ под ключ. Отличная альтернатива местным дистрибьюторам — разница в цене существенная.",
  },
  {
    id: 4,
    name: "Аида Н.",
    company: "ИП, продавец Kaspi",
    type: "Сборные грузы",
    rating: 5,
    text: "Для маркетплейса нужна стабильность. ATG отправляют из Иу каждые 2 недели. Упаковывают под стандарты Kaspi, документы в порядке. Сотрудничаем уже год.",
  },
  {
    id: 5,
    name: "Ерлан Д.",
    company: "ТОО «СтройТех KZ»",
    type: "Оборудование из Китая",
    rating: 5,
    text: "Доставляли производственное оборудование — 4 станка общим весом 6 тонн. Приняли на заводе в Китае, привезли до цеха в Алматы. Никаких повреждений, документы для постановки на баланс готовы.",
  },
  {
    id: 6,
    name: "Гульнар А.",
    company: "ТОО, дистрибьютор текстиля",
    type: "Текстиль из Китая",
    rating: 5,
    text: "Возим ткани и фурнитуру из Гуанчжоу через ATG. Консолидируют с нескольких поставщиков, вакуумная упаковка — объём реально уменьшается. Ценообразование прозрачное.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section
          className="section"
          style={{ paddingTop: "calc(var(--header-h) + 48px)", paddingBottom: "80px" }}
        >
          <div className="container">
            <div className="section-head">
              <div className="mono section-head__num">/09 · ОТЗЫВЫ</div>
              <h1 className="section-head__title">Клиенты о нас</h1>
              <p className="section-head__lead">
                18 лет — и каждый клиент важен. Вот что говорят компании, которые доверяют нам логистику из Китая, Кореи и Турции.
              </p>
            </div>

            <div className="cs__grid" style={{ marginTop: "40px" }}>
              {REVIEWS.map((r) => (
                <div key={r.id} className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="mono" style={{ fontSize: "11px", color: "var(--gold)" }}>
                    {r.type}
                  </div>
                  <p style={{ lineHeight: 1.7, flex: 1 }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div style={{ marginTop: "4px" }}>
                    <div style={{ color: "var(--gold)", fontSize: "14px", marginBottom: "4px" }}>
                      {"★".repeat(r.rating)}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: "14px" }}>{r.name}</div>
                    <div
                      className="mono"
                      style={{ fontSize: "11px", color: "var(--mute)", marginTop: "2px" }}
                    >
                      {r.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="card"
              style={{
                marginTop: "64px",
                padding: "40px",
                textAlign: "center",
                borderColor: "var(--gold)",
              }}
            >
              <div
                className="mono"
                style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "12px" }}
              >
                СТАЛИ КЛИЕНТОМ?
              </div>
              <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>
                Поделитесь опытом работы с нами
              </h2>
              <p style={{ color: "var(--mute)", marginBottom: "24px", maxWidth: "480px", margin: "0 auto 24px" }}>
                Ваш отзыв помогает другим компаниям сделать правильный выбор. Напишите нам в WhatsApp.
              </p>
              <a
                href="https://wa.me/77718000209?text=Хочу%20оставить%20отзыв%20о%20работе%20с%20Ali%20Trans%20Group"
                className="btn btn--gold"
                target="_blank"
                rel="noopener"
              >
                <span className="wa-ico" aria-hidden="true">✆</span> Написать отзыв в WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
