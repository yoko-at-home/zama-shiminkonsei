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
    optimizePackageImports: ["@heroicons/react"],
  },
  // 動的インポートの最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // バンドル分割の最適化
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
