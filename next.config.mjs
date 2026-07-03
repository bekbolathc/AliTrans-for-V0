/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            // Report-only: собираем нарушения, не ломая GTM/GA/Vercel.
            // После проверки в проде перевести в Content-Security-Policy.
            key: "Content-Security-Policy-Report-Only",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com",
              "font-src 'self'",
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://vitals.vercel-insights.com",
              "frame-src https://www.googletagmanager.com",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },

  images: {
    // Enable AVIF format for better compression (Chrome, Edge, Firefox)
    formats: ['image/avif', 'image/webp'],
    // Components use quality 75 (default) and 80 — both must be allowed
    qualities: [75, 80],
    // No remotePatterns: all images are local; an open pattern ('**')
    // would let anyone proxy arbitrary hosts through /_next/image.
  },

  // Remove console.log statements in production to reduce overhead
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'], // Keep error and warn statements for debugging
    } : false,
  },

  // Enable SWR cache headers for better caching strategy
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // Disable source maps in production for smaller bundle
  productionBrowserSourceMaps: false,

  // Turbopack is the default bundler in Next.js 16 and provides excellent performance
  // Enable experimental optimizations for better bundle size
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
    // Enable critical CSS optimization to inline critical path and async load the rest
    optimizeCss: true,
  },
};

export default nextConfig;
