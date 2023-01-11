/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
});

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

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  styledComponents: true,
  experimental: {
    appDir: true,
    transpilePackages: ["antd-mobile"],
    // concurrentFeatures: true,
    // serverComponents: true,
  },
  images: {
    // dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.s3.ap-northeast-1.amazonaws.com",
        port: "",
        pathname: "/chat_sys/**",
      },
    ],
  },
  // i18n: {
  //   locales: ["ja-JP", "en-US"],
  //   defaultLocale: "ja-JP",
  //   localeDetection: false,
  // },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home/index",
        permanent: true,
      },
    ];
  },
});

module.exports = nextConfig;
