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
      // 最新ブラウザ向けの最適化
      config.target = ["web", "es2022"];

      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            priority: 10,
          },
          common: {
            name: "common",
            minChunks: 2,
            chunks: "all",
            priority: 5,
          },
          // html-react-parserを別チャンクに分離
          htmlParser: {
            test: /[\\/]node_modules[\\/]html-react-parser[\\/]/,
            name: "html-parser",
            chunks: "all",
            priority: 20,
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
