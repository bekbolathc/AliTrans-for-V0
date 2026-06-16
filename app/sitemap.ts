import type { MetadataRoute } from "next";
import { SITE_PAGES, absoluteUrl } from "@/lib/site-map";

/**
 * Динамический sitemap: каждая публичная страница из SITE_PAGES.
 * При добавлении новой страницы — править только lib/site-map.ts.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITE_PAGES.filter((p) => !p.noIndex).map((page) => ({
    url: absoluteUrl(page.slug),
    lastModified,
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
