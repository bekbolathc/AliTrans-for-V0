import type { MetadataRoute } from "next";
import { SITE_PAGES, absoluteUrl } from "@/lib/site-map";

/**
 * Динамический sitemap: каждая публичная страница из SITE_PAGES.
 * При добавлении новой страницы — править только lib/site-map.ts.
 */
// Static date — update this when significant content changes are deployed.
const LAST_MODIFIED = new Date("2026-07-21");

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_PAGES.filter((p) => !p.noIndex).map((page) => ({
    url: absoluteUrl(page.slug),
    lastModified: LAST_MODIFIED,
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
