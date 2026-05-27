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
  // Enable SWR cache headers for better caching strategy
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;
