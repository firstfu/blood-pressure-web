import type { NextConfig } from "next";

/**
 * @ Author: firstfu
 * @ Create Time: 2024-08-01 15:37:42
 * @ Description: Next.js 配置文件，包含國際化設定
 */

const nextConfig: NextConfig = {
  /* config options here */
  // 在 App Router 中配置 i18n
  experimental: {
    // 啟用基於目錄的國際化路由支援
    turbo: {
      resolveAlias: {
        // 別名，方便引用多語言文件
        "@/dictionaries": "./dictionaries",
      },
    },
  },
};

export default nextConfig;
