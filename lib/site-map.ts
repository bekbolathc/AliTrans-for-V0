// Единый источник правды о страницах сайта.
// Из него собираются: sitemap.ts, Footer-ссылки, NavDropdown.

export type SitePage = {
  /** Slug без leading slash. Пустая строка = главная. */
  slug: string;
  /** Type страницы (для группировки в навигации). */
  type: "home" | "service" | "cargo" | "about" | "cases" | "contacts" | "blog" | "legal" | "system";
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

  // ── Пиллар: международные грузоперевозки (хаб всех направлений) ─
  { slug: "mezhdunarodnye-gruzoperevozki", type: "service", priority: 0.9, changefreq: "monthly" },

  // ── Service-страницы (B2B услуги, generalised) ─────────
  { slug: "avia-dostavka-iz-kitaya", type: "service", priority: 0.9, changefreq: "monthly" },
  { slug: "zhd-dostavka-iz-kitaya", type: "service", priority: 0.9, changefreq: "monthly" },
  { slug: "avto-dostavka-iz-kitaya", type: "service", priority: 0.9, changefreq: "monthly" },
  { slug: "konteynernye-perevozki-iz-kitaya", type: "service", priority: 0.9, changefreq: "monthly" },
  { slug: "morskaya-dostavka-iz-kitaya", type: "service", priority: 0.85, changefreq: "monthly" },
  { slug: "sbornye-gruzy-iz-kitaya", type: "service", priority: 0.85, changefreq: "monthly" },
  { slug: "rastamozhka-gruzov", type: "service", priority: 0.85, changefreq: "monthly" },
  { slug: "ved-pod-klyuch", type: "service", priority: 0.85, changefreq: "monthly" },

  // ── Китай: города назначения (гео) ────────────────────
  { slug: "dostavka-iz-kitaya-v-almaty", type: "service", priority: 0.85, changefreq: "monthly" },
  { slug: "dostavka-iz-kitaya-v-astanu", type: "service", priority: 0.85, changefreq: "monthly" },

  // ── Коридоры из Китая (назначение не KZ) ──────────────
  { slug: "gruzoperevozki-iz-kitaya-v-rossiyu", type: "service", priority: 0.8, changefreq: "monthly" },
  { slug: "gruzoperevozki-iz-kitaya-v-uzbekistan", type: "service", priority: 0.75, changefreq: "monthly" },

  // ── Новые страны-отправители ──────────────────────────
  { slug: "dostavka-iz-indii", type: "service", priority: 0.75, changefreq: "monthly" },
  { slug: "dostavka-iz-vietnama", type: "service", priority: 0.7, changefreq: "monthly" },
  { slug: "dostavka-iz-tailanda", type: "service", priority: 0.7, changefreq: "monthly" },
  { slug: "dostavka-iz-malaysii", type: "service", priority: 0.7, changefreq: "monthly" },
  { slug: "dostavka-iz-singapura", type: "service", priority: 0.7, changefreq: "monthly" },
  { slug: "dostavka-iz-ssha", type: "service", priority: 0.7, changefreq: "monthly" },

  // ── Другие направления (не Китай) ─────────────────────
  { slug: "dostavka-iz-korei", type: "service", priority: 0.8, changefreq: "monthly" },
  { slug: "dostavka-iz-turcii", type: "service", priority: 0.8, changefreq: "monthly" },
  { slug: "dostavka-iz-evropy", type: "service", priority: 0.8, changefreq: "monthly" },

  // ── Phase 2: матрица направление × способ ─────────────
  { slug: "avia-dostavka-iz-turcii", type: "service", priority: 0.75, changefreq: "monthly" },
  { slug: "avto-dostavka-iz-turcii", type: "service", priority: 0.75, changefreq: "monthly" },
  { slug: "avia-dostavka-iz-korei", type: "service", priority: 0.75, changefreq: "monthly" },
  { slug: "morskoy-ekspress-iz-korei", type: "service", priority: 0.75, changefreq: "monthly" },
  { slug: "avia-dostavka-iz-evropy", type: "service", priority: 0.75, changefreq: "monthly" },
  { slug: "avto-dostavka-iz-evropy", type: "service", priority: 0.75, changefreq: "monthly" },

  // ── Phase 3: типы грузов ───────────────────────────────
  { slug: "elektronika-iz-kitaya", type: "cargo", priority: 0.8, changefreq: "monthly" },
  { slug: "avtozapchasti-iz-kitaya", type: "cargo", priority: 0.8, changefreq: "monthly" },
  { slug: "tekstil-i-odezhda", type: "cargo", priority: 0.75, changefreq: "monthly" },
  { slug: "oborudovanie-i-mashiny", type: "cargo", priority: 0.75, changefreq: "monthly" },
  { slug: "negabaritnye-gruzy", type: "cargo", priority: 0.75, changefreq: "monthly" },
  { slug: "opasnye-gruzy", type: "cargo", priority: 0.7, changefreq: "monthly" },
  { slug: "kosmetika-i-krasota", type: "cargo", priority: 0.75, changefreq: "monthly" },
  { slug: "tovary-dlya-marketpleysov", type: "cargo", priority: 0.8, changefreq: "monthly" },
  { slug: "shiny-iz-kitaya", type: "cargo", priority: 0.8, changefreq: "monthly" },
  { slug: "spetstehnika-iz-kitaya", type: "cargo", priority: 0.8, changefreq: "monthly" },
  { slug: "promyshlennoe-oborudovanie-iz-kitaya", type: "cargo", priority: 0.8, changefreq: "monthly" },
  { slug: "stroymaterialy-iz-kitaya", type: "cargo", priority: 0.8, changefreq: "monthly" },

  // ── Phase 3: блог ─────────────────────────────────────
  { slug: "blog", type: "blog", priority: 0.7, changefreq: "weekly" },
  { slug: "blog/zhd-vs-avia-iz-kitaya", type: "blog", priority: 0.7, changefreq: "monthly" },
  { slug: "blog/kak-rastamojit-gruz-iz-kitaya", type: "blog", priority: 0.7, changefreq: "monthly" },
  { slug: "blog/kak-vybrat-postavshchika-v-kitaye", type: "blog", priority: 0.7, changefreq: "monthly" },

  // ── Phase 3: компания ─────────────────────────────────
  { slug: "otzyvy", type: "about", priority: 0.65, changefreq: "monthly" },

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
