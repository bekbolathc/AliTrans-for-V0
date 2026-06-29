import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { FAQSchema } from "@/components/FAQSchema";
import { schemaOrganization, schemaLocalBusiness } from "@/lib/schema";
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
  verification: {
    google: "erLr1W_64AeUsso4hnYIP4R-nkSUMeU3xGywF01fS78",
  },
  title: "Доставка грузов из Китая в Казахстан — Ali Trans Group · от 100 кг, договор, страховка",
  description:
    "Грузоперевозки из Китая в Казахстан под ключ. Авиа, ЖД, авто. Минимум 100 кг. Свои склады в Иу, Гуанчжоу, Урумчи, Хоргос. Договор + страховка 0,2%. 18 лет на рынке.",
  openGraph: {
    title: "Ali Trans Group — доставка грузов из Китая в Казахстан",
    description:
      "B2B-логистика из Китая в Казахстан. Авиа, ЖД, авто. Минимум 100 кг. Свои склады в Иу, Гуанчжоу, Урумчи, Хоргос.",
    type: "website",
    locale: "ru_RU",
    url: "https://alitrans.kz",
    siteName: "Ali Trans Group",
    images: [
      {
        url: "https://alitrans.kz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Trans Group — доставка грузов из Китая в Казахстан",
      },
    ],
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

// Schema objects from canonical source in lib/schema.ts
const organizationSchema = schemaOrganization();
const localBusinessSchema = schemaLocalBusiness();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru-KZ" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
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

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KZ36W5SJ');`,
          }}
        />

        {/* Preconnect for Google services - establishes connection early */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />

        {/* DNS Prefetch fallback for older browsers */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* DNS Prefetch for external domains */}
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Logo preload for LCP optimization */}
        <link rel="preload" as="image" href="/logo.svg" type="image/svg+xml" />

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
        <Analytics />

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
