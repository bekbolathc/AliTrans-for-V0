import Script from "next/script";

// GA4 measurement ID — публичный идентификатор (виден в исходнике страницы),
// не секрет. Можно переопределить через NEXT_PUBLIC_GA_ID в окружении.
const DEFAULT_GA_ID = "G-VH1YKKNX3J";

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || DEFAULT_GA_ID;

  if (!gaId) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
            allow_google_signals: true,
            allow_ad_personalization_signals: true
          });
        `}
      </Script>
    </>
  );
}
