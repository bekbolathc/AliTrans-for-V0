import { SITE_URL, absoluteUrl } from "./site-map";

/**
 * Общие константы компании — используются во всех JSON-LD.
 * Один источник правды.
 */
const COMPANY = {
  name: "Ali Trans Group",
  legalName: 'ТОО "Ali Trans Group"',
  alternateName: "ATG",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  foundingDate: "2007",
  telephone: "+77718000209",
  email: "sales@alitrans.kz",
  streetAddress: "ул. Тимирязева 42, К23, БЦ Asia Most, офис 210",
  addressLocality: "Алматы",
  postalCode: "050000",
  addressCountry: "KZ",
  sameAs: ["https://instagram.com/alitrans.kz"],
} as const;

export function schemaOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    alternateName: COMPANY.alternateName,
    url: COMPANY.url,
    logo: COMPANY.logo,
    description:
      "B2B логистика из Китая в Казахстан. Авиа, ЖД, авто доставка. 18 лет опыта. Договор, полный пакет документов и страховка.",
    foundingDate: COMPANY.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.addressLocality,
      postalCode: COMPANY.postalCode,
      addressCountry: COMPANY.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.telephone,
      contactType: "Customer Service",
      areaServed: "KZ",
      availableLanguage: ["ru"],
    },
    sameAs: COMPANY.sameAs,
  };
}

export function schemaLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    image: COMPANY.logo,
    description: "B2B логистика из Китая в Казахстан с 2007 года",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.addressLocality,
      addressCountry: COMPANY.addressCountry,
    },
    telephone: COMPANY.telephone,
    email: COMPANY.email,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

type BreadcrumbItem = { name: string; slug: string };

export function schemaBreadcrumb(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.slug),
    })),
  };
}

type ServiceSchemaInput = {
  serviceType: string;
  name: string;
  description: string;
  priceFrom?: number;
  priceUnit?: string;
  areaServed?: string;
};

export function schemaService({
  serviceType,
  name,
  description,
  priceFrom,
  priceUnit = "м³",
  areaServed = "Казахстан",
}: ServiceSchemaInput) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name,
    description,
    provider: {
      "@type": "Organization",
      name: COMPANY.legalName,
      url: COMPANY.url,
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
  };

  if (priceFrom !== undefined) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: "USD",
      price: String(priceFrom),
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "USD",
        price: String(priceFrom),
        unitText: priceUnit,
      },
    };
  }

  return schema;
}

export function schemaFAQ(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

/** Хелпер для рендера: возвращает props для `<script type="application/ld+json">`. */
export function jsonLdProps(schema: object) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  } as const;
}
