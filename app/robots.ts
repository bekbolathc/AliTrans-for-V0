import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-map";

/**
 * Динамический robots.txt — заменяет статический public/robots.txt.
 * Снят блок AhrefsBot/MJ12bot: их польза для SEO-аналитики
 * перевешивает мнимую защиту (см. plan §7).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
        crawlDelay: 2,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
