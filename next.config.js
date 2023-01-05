/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  //-----------------only https--------------------
  // {
  //   key: 'Strict-Transport-Security',
  //   value: 'max-age=63072000; includeSubDomains; preload'
  // },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // {
  //   key: 'Content-Security-Policy',
  //   value: "default-src 'self'; img-src https://*;"
  // }
];

const nextConfig = {
  distDir: "dist",
  reactStrictMode: true,
  swcMinify: true,
  styledComponents: true,
  experimental: {
    appDir: true,
    transpilePackages: ["antd-mobile"],
    // concurrentFeatures: true,
    // serverComponents: true,
  },
  i18n: {
    locales: ["ja-JP", "en-US"],
    defaultLocale: "ja-JP",
    localeDetection: false,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
