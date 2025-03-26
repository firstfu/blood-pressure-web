# 血壓管家：血壓記錄網站

這是一個基於 [Next.js](https://nextjs.org) 開發的血壓記錄網站應用程序，旨在為用戶提供簡便、直觀的血壓數據管理界面。

## 項目概述

「血壓管家」是專為需要長期追蹤血壓數據的使用者設計的血壓記錄應用程式。此應用旨在提供簡便、直觀的介面，幫助使用者記錄、追蹤和分析自己的血壓數據，並能夠輕鬆分享報告給醫療專業人員。

### 核心功能：

- **簡單紀錄**：快速輸入血壓數據，支援多種輸入方式
- **智能分析**：趨勢圖表、異常警示、統計報告
- **醫療連結**：方便與醫生分享報告，支援常見醫療格式
- **健康提醒**：定時測量提醒，用藥提醒
- **資料安全**：符合醫療資料隱私標準，資料加密

## 技術架構

- **前端框架**：Next.js 15.2.1
- **UI 框架**：Tailwind CSS 4.x、Radix UI 組件
- **狀態管理**：React Hook Form、Zod 驗證
- **動畫效果**：Framer Motion
- **開發工具**：TypeScript、ESLint

## 開發指南

### 環境需求

- Node.js 18+ 版本
- npm 或 yarn 或 pnpm 或 bun

### 本地開發

1. 克隆項目

```bash
git clone [項目倉庫地址]
cd blood-pressure-web
```

2. 安裝依賴

```bash
npm install
# 或
yarn install
# 或
pnpm install
# 或
bun install
```

3. 啟動開發服務器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看網站效果。

### 項目結構

- `/app` - Next.js 應用程序頁面和佈局
- `/components` - 可復用 UI 組件
- `/lib` - 工具函數和共享邏輯
- `/docs` - 項目文檔和設計指南
- `/public` - 靜態資源文件
- `/scripts` - 自動化腳本工具

## 文檔資源

詳細的項目文檔請參考 `/docs` 目錄下的相關文件：

- `血壓記錄App_網站地圖.md` - 網站架構和頁面規劃
- `血壓記錄App_LandingPage規劃.md` - 著陸頁設計和規劃
- `血壓記錄App_市場調查問卷.md` - 市場需求分析
- `血壓記錄App_LandingPage實作指南.md` - 實作指南和標準

## 部署說明

本項目可以部署在 Vercel 平台上：

1. 在 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 上創建新項目
2. 連接 Git 倉庫並設定相關環境變量
3. 點擊部署即可

更多部署選項請參考 [Next.js 部署文檔](https://nextjs.org/docs/app/building-your-application/deploying)。

## 協作貢獻

歡迎提交問題和改進建議！請遵循以下步驟：

1. Fork 本項目
2. 創建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 開啟一個 Pull Request

## 許可證

本項目採用 [許可證類型] 許可 - 詳情請參閱 LICENSE 文件。
