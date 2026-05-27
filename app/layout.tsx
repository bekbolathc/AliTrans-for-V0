import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { FAQSchema } from "@/components/FAQSchema";
import "./globals.css";

// Self-hosted fonts via Next.js - eliminates render-blocking Google Fonts CDN request
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--ff-manrope",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--ff-mono",
});

export const metadata: Metadata = {
  title: "Доставка грузов из Китая в Казахстан — Ali Trans Group · от 100 кг, договор, страховка",
  description:
    "Грузоперевозки из Китая в Казахстан под ключ. Авиа, ЖД, авто. Минимум 100 кг. Свои склады в Иу, Гуанчжоу, Урумчи, Хоргос. Договор + страховка 0,2%. 18 лет на рынке.",
  openGraph: {
    title: "Ali Trans Group — доставка грузов из Китая в Казахстан",
    description:
      "B2B-логистика из Китая в Казахстан. Авиа, ЖД, авто. Минимум 100 кг. Свои склады в Иу, Гуанчжоу, Урумчи, Хоргос.",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon-192x192.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ali Trans Group",
  alternateName: "AXG",
  url: "https://alitrans.kz",
  logo: "https://alitrans.kz/logo.svg",
  description:
    "B2B логистика из Китая в Казахстан. Авиа, ЖД, авто доставка. 18 лет опыта. Договор, полный пакет документов и страховка.",
  foundingDate: "2007",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Тимирязева 42, К23, БЦ Asia Most, офис 210",
    addressLocality: "Алматы",
    postalCode: "050000",
    addressCountry: "KZ",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+77718000209",
    contactType: "Customer Service",
    areaServed: "KZ",
    availableLanguage: "ru",
  },
  sameAs: ["https://instagram.com/alitrans.kz"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ali Trans Group",
  image: "https://alitrans.kz/logo.svg",
  description:
    "B2B логистика из Китая в Казахстан с 2007 года",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Тимирязева 42, К23, БЦ Asia Most, офис 210",
    addressLocality: "Алматы",
    addressCountry: "KZ",
  },
  telephone: "+77718000209",
  email: "sales@alitrans.kz",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Critical CSS inline to prevent FOUC and blocking */}
        <style dangerouslySetInnerHTML={{__html: `
:root {
  --navy-900: #08152F;
  --navy-800: #0B1B3A;
  --navy-700: #102347;
  --navy-600: #1A2E5C;
  --navy-500: #2A3F70;
  --gold: #D9A441;
  --gold-soft: #E8B965;
  --gold-deep: #B9842B;
  --ink: #1A1F2E;
  --ink-2: #4A5063;
  --mute: #7B8299;
  --paper: #F5F2EB;
  --paper-2: #EFEAE0;
  --line: #E2DCCE;
  --line-2: #D4CDBC;
  --white: #FFFFFF;
  --emerald: #0E8B6C;
  --rose: #B23A48;
  --ff-mono: 'JetBrains Mono', monospace;
  --ff-sans: 'Manrope', system-ui, -apple-system, sans-serif;
  --max: 1320px;
  --pad-x: 20px;
}
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { background-color: var(--paper); -webkit-font-smoothing: antialiased; }
body { font-family: var(--ff-sans); font-size: 16px; line-height: 1.5; color: var(--ink); background: var(--paper); }
img { display: block; max-width: 100%; height: auto; }
.logo__image { width: auto; height: 52px; }
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(255,255,255,0.98); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line); padding: 12px 0; }
.container { max-width: var(--max); margin: 0 auto; padding: 0 var(--pad-x); }
.header__row { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        `}} />
        
        {/* Google Tag Manager - moved to lazyOnload to prevent blocking critical rendering */}
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KZ36W5SJ');`,
          }}
        />
        
        {/* DNS Prefetch for GTM - allows faster connection after lazyOnload triggers */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Logo preload for LCP optimization */}
        <link rel="preload" as="image" href="/logo.svg" type="image/svg+xml" fetchPriority="high" />
        
        {/* Preload fonts with high priority for text rendering */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" href="/favicon-192x192.png" />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZ36W5SJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {children}
        <FAQSchema />
        <GoogleAnalytics />
        
        {/* Google Ads Event Tracking */}
        <Script id="google-ads-events" strategy="afterInteractive">
          {`
            // Track form submissions and CTA clicks
            document.addEventListener('DOMContentLoaded', function() {
              // Track Quiz submission
              const quizButtons = document.querySelectorAll('[data-track-conversion]');
              quizButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                  if (typeof window.trackQuizConversion === 'function') {
                    window.trackQuizConversion();
                  }
                });
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
