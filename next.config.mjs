/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // Enable AVIF format for better compression (Chrome, Edge, Firefox)
    formats: ['image/avif', 'image/webp'],
    // Optimize images for LCP - focus on critical path
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
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
