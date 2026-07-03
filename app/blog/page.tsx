import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const SLUG = "blog";

export const metadata: Metadata = buildMetadata({
  slug: SLUG,
  title: "Блог о логистике из Китая | Ali Trans Group",
  description:
    "Полезные статьи о доставке из Китая в Казахстан: ЖД vs Авиа, растаможка, выбор поставщика, маркетплейсы. Экспертиза 18 лет в B2B-логистике.",
});

const ARTICLES = [
  {
    slug: "zhd-vs-avia-iz-kitaya",
    title: "ЖД или авиа из Китая: как выбрать в 2025 году",
    description:
      "Сравниваем ЖД и авиа доставку из Китая по срокам, стоимости и типам грузов. Разбираем 6 сценариев с конкретными цифрами.",
    date: "2025-06-01",
    readTime: "7 мин",
    tag: "Сравнение",
  },
  {
    slug: "kak-rastamojit-gruz-iz-kitaya",
    title: "Как растаможить груз из Китая в Казахстане",
    description:
      "Пошаговое руководство по таможенному оформлению для ИП и ТОО. Какие документы нужны, сколько стоит, как избежать задержек.",
    date: "2025-06-10",
    readTime: "9 мин",
    tag: "Таможня",
  },
  {
    slug: "kak-vybrat-postavshchika-v-kitaye",
    title: "Как найти надёжного поставщика в Китае",
    description:
      "Практическое руководство: Alibaba, рынки Гуанчжоу и Иу, проверка поставщика, инспекция качества. Опыт 18 лет в работе с китайскими заводами.",
    date: "2025-06-20",
    readTime: "11 мин",
    tag: "Закупки",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: "calc(var(--header-h) + 48px)" }}>
          <div className="container">
            <div className="section-head">
              <div className="mono section-head__num">/00 · БЛОГ</div>
              <h1 className="section-head__title">
                Блог о логистике<br />из Китая в Казахстан
              </h1>
              <p className="section-head__lead">
                Экспертные статьи о доставке, растаможке и работе с поставщиками — от команды Ali Trans Group с 18-летним опытом.
              </p>
            </div>
            <div className="cs__grid" style={{ marginTop: "40px" }}>
              {ARTICLES.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="cs"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div className="cs__tag mono">
                    {a.tag} · {a.readTime}
                  </div>
                  <h2 className="cs__title" style={{ fontSize: "18px" }}>
                    {a.title}
                  </h2>
                  <p className="cs__desc">{a.description}</p>
                  <div
                    className="mono"
                    style={{ fontSize: "11px", color: "var(--mute)", marginTop: "12px" }}
                  >
                    {a.date}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
