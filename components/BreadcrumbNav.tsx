import Link from "next/link";

export type BreadcrumbItem = {
  /** Slug без leading slash. Пустая строка = главная. */
  slug: string;
  /** Подпись (если undefined — берём из LABELS[slug]). */
  label?: string;
  /** Если true — рендерится как текущая страница (не ссылка). */
  current?: boolean;
};

const LABELS: Record<string, string> = {
  "o-kompanii": "О компании",
  keysy: "Кейсы",
  kontakty: "Контакты",
};

type Props = {
  items: BreadcrumbItem[];
};

/**
 * Хлебные крошки для всех глубоких страниц (UX + SEO).
 * BreadcrumbList schema отдельно генерируется через lib/schema.ts.
 */
export function BreadcrumbNav({ items }: Props) {
  return (
    <nav aria-label="Хлебные крошки" className="breadcrumbs">
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isCurrent = item.current ?? isLast;
          const label =
            item.label ?? (item.slug === "" ? "Главная" : LABELS[item.slug] ?? item.slug);

          return (
            <li key={`${item.slug}-${index}`} className="breadcrumbs__item">
              {isCurrent ? (
                <span className="breadcrumbs__current" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link className="breadcrumbs__link" href={`/${item.slug}`}>
                  {label}
                </Link>
              )}
              {!isLast && (
                <span className="breadcrumbs__sep mono" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
