import Script from "next/script";

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

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

      {/* Google Ads Conversion Tracking */}
      {adsId && (
        <Script id="google-ads-tracking" strategy="afterInteractive">
          {`
            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': '${adsId}/AW-123456789_ConversionLabel_abcdefgh',
                'value': 1.0,
                'currency': 'KZT',
                'callback': callback
              });
              return false;
            }
            
            // Track quiz submissions as conversions
            function trackQuizConversion() {
              gtag('event', 'conversion', {
                'send_to': '${adsId}/AW-123456789_ConversionLabel_abcdefgh',
                'value': 1.0,
                'currency': 'KZT',
                'transaction_id': ''
              });
            }
            
            window.trackQuizConversion = trackQuizConversion;
          `}
        </Script>
      )}
    </>
  );
}
