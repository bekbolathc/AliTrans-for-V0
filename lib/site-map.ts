// Единый источник правды о страницах сайта.
// Из него собираются: sitemap.ts, Footer-ссылки, NavDropdown.

export type SitePage = {
  /** Slug без leading slash. Пустая строка = главная. */
  slug: string;
  /** Type страницы (для группировки в навигации). */
  type: "home" | "service" | "about" | "cases" | "contacts" | "legal" | "system";
  /** Priority для sitemap. */
  priority: number;
  /** ChangeFrequency для sitemap. */
  changefreq: "weekly" | "monthly" | "yearly";
  /** Если страница не должна индексироваться (thank-you, например). */
  noIndex?: boolean;
};

export const SITE_URL = "https://alitrans.kz";

/**
 * Полный реестр публичных страниц.
 * Добавление страницы здесь автоматически заносит её в sitemap.xml
 * и позволяет переиспользовать пути в Footer / NavDropdown.
 */
export const SITE_PAGES: SitePage[] = [
  // ── Главная ────────────────────────────────────────────
  { slug: "", type: "home", priority: 1.0, changefreq: "weekly" },

  // ── Service-страницы (B2B услуги, generalised) ─────────
  { slug: "avia-dostavka-iz-kitaya", type: "service", priority: 0.9, changefreq: "monthly" },
  { slug: "zhd-dostavka-iz-kitaya", type: "service", priority: 0.9, changefreq: "monthly" },
  { slug: "avto-dostavka-iz-kitaya", type: "service", priority: 0.9, changefreq: "monthly" },
  { slug: "sbornye-gruzy-iz-kitaya", type: "service", priority: 0.85, changefreq: "monthly" },
  { slug: "rastamozhka-gruzov", type: "service", priority: 0.85, changefreq: "monthly" },
  { slug: "ved-pod-klyuch", type: "service", priority: 0.85, changefreq: "monthly" },

  // ── Корпоративные ─────────────────────────────────────
  { slug: "o-kompanii", type: "about", priority: 0.7, changefreq: "monthly" },
  { slug: "keysy", type: "cases", priority: 0.7, changefreq: "monthly" },
  { slug: "kontakty", type: "contacts", priority: 0.6, changefreq: "monthly" },

  // ── Юридические ────────────────────────────────────────
  { slug: "privacy-policy", type: "legal", priority: 0.3, changefreq: "yearly" },
  { slug: "terms", type: "legal", priority: 0.3, changefreq: "yearly" },

  // ── Технические (noindex) ─────────────────────────────
  { slug: "thank-you", type: "system", priority: 0.1, changefreq: "yearly", noIndex: true },
];

/** Сервисные страницы — для NavDropdown и Footer. */
export const SERVICE_PAGES = SITE_PAGES.filter((p) => p.type === "service");

/** Все страницы для главного меню Header. */
export const NAV_PAGES = {
  cases: SITE_PAGES.find((p) => p.slug === "keysy")!,
  about: SITE_PAGES.find((p) => p.slug === "o-kompanii")!,
  contacts: SITE_PAGES.find((p) => p.slug === "kontakty")!,
};

/** Helper: строит путь страницы. */
export function pagePath(slug: string): string {
  const cleanSlug = slug.replace(/^\//, "");
  return cleanSlug ? `/${cleanSlug}` : "/";
}

/** Helper: абсолютный URL. */
export function absoluteUrl(slug: string): string {
  return `${SITE_URL}${pagePath(slug)}`;
}
