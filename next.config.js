/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.microcms-assets.io"],
  },
  // バンドルサイズ最適化
  experimental: {
    optimizeCss: true,
  },
  // 動的インポートの最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
