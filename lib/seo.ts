import type { Metadata } from "next";
import { SITE_URL, absoluteUrl } from "./site-map";

type BuildMetadataInput = {
  /** Slug без leading slash. Пустая строка = главная. */
  slug: string;
  title: string;
  description: string;
  /** Опциональный путь к OG-картинке (по умолчанию /og-image.png). */
  ogImage?: string;
  /** Если true — добавляется meta robots noindex. */
  noIndex?: boolean;
};

/**
 * Унифицированный генератор Metadata для всех страниц проекта.
 * Покрывает canonical, OpenGraph и Twitter.
 */
export function buildMetadata({
  slug,
  title,
  description,
  ogImage = "/og-image.png",
  noIndex,
}: BuildMetadataInput): Metadata {
  const canonical = absoluteUrl(slug);
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Ali Trans Group",
      type: "website",
      locale: "ru_RU",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    icons: {
      icon: "/favicon.ico",
      apple: "/favicon-192x192.png",
    },
  };
}
