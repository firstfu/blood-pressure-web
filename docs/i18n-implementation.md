# 血壓管家 - 多語言功能實現文檔

## 概述

本文檔詳細說明了在血壓管家專案中實現多語言(i18n)功能的方法與使用指南。我們使用了 Next.js 的 App Router 架構，結合 React Context API 實現了完整的多語言支援。

目前支援的語言：

- 繁體中文 (zh-TW) - 預設
- 英文 (en)

## 實現架構

多語言功能的實現架構如下：

```
/                           # 專案根目錄
├── dictionaries/           # 翻譯檔案目錄
│   ├── en.json             # 英文翻譯
│   └── zh-TW.json          # 繁體中文翻譯
├── app/
│   ├── i18n/               # i18n 相關功能目錄
│   │   ├── settings.ts     # 設定檔，定義支援的語言
│   │   ├── dictionaries.ts # 字典類型定義與加載器
│   │   └── context.tsx     # 語言上下文管理器
│   ├── components/
│   │   └── LanguageSwitcher.tsx # 語言切換組件
│   └── layout.tsx          # 應用根佈局，整合 LocaleProvider
├── docs/
│   └── i18n-implementation.md # 本文檔
└── next.config.ts          # Next.js 配置，包含多語言相關設定
```

## 關鍵組件說明

### 1. 語言設定 (app/i18n/settings.ts)

定義了支援的語言列表與預設語言：

```typescript
export const i18n = {
  defaultLocale: "zh-TW",
  locales: ["en", "zh-TW"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
```

### 2. 字典類型與加載器 (app/i18n/dictionaries.ts)

定義了翻譯字典的類型並提供了根據語言代碼加載相應字典的功能：

```typescript
// 定義字典類型
export type Dictionary = {
  共用: {
    首頁: string;
    // ...其他翻譯鍵
  };
  // ...其他翻譯類別
};

// 字典加載器
export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return import(`../../dictionaries/${locale}.json`).then(module => module.default);
};
```

### 3. 語言上下文管理器 (app/i18n/context.tsx)

實現了語言狀態管理，提供語言切換能力，並在 localStorage 中保存用戶的語言選擇：

```typescript
export function LocaleProvider({ children, initialLocale = i18n.defaultLocale, initialDictionary }: LocaleProviderProps) {
  // ...實現代碼
}

// 使用語言上下文的 Hook
export const useLocale = () => useContext(LocaleContext);
```

### 4. 語言切換組件 (app/components/LanguageSwitcher.tsx)

提供了用戶介面，允許用戶切換網站顯示語言：

```typescript
export default function LanguageSwitcher() {
  const { locale, setLocale, isLoading } = useLocale();
  // ...實現代碼
}
```

## 翻譯檔格式

翻譯檔採用 JSON 格式，使用繁體中文作為鍵名，以增加可讀性和便於維護：

```json
{
  "共用": {
    "首頁": "Home" // 英文翻譯
    // ...其他翻譯
  }
}
```

## 使用方法

### 1. 在組件中使用多語言

```typescript
"use client";

import { useLocale } from "@/app/i18n/context";

export default function MyComponent() {
  const { dictionary } = useLocale();

  return (
    <div>
      <h1>{dictionary.首頁.標題}</h1>
      <p>{dictionary.首頁.副標題}</p>
    </div>
  );
}
```

### 2. 添加新的翻譯

要添加新的翻譯，需要在以下三個地方進行更新：

1. 修改 `app/i18n/dictionaries.ts` 中的 `Dictionary` 類型定義
2. 更新所有語言的 JSON 翻譯檔 (`dictionaries/` 目錄下)
3. 在需要使用的組件中使用新增的翻譯鍵

### 3. 添加新的語言支援

要添加新的語言支援，請按照以下步驟：

1. 在 `app/i18n/settings.ts` 中的 `locales` 陣列添加新語言代碼
2. 在 `dictionaries/` 目錄下創建新的語言 JSON 檔案 (例如：`ja.json` 用於日文)
3. 在 `app/components/LanguageSwitcher.tsx` 中的 `localeNames` 對象添加新語言的顯示名稱

## 進階功能

### 1. 使用 URL 參數切換語言

可以擴展實現，使用 URL 參數切換語言，例如：`?lang=en`。

### 2. 基於用戶瀏覽器語言自動選擇語言

可以在初始化時檢測瀏覽器的 `navigator.language` 並自動選擇匹配的語言。

### 3. 服務端語言處理

可以實現在服務端渲染時根據 cookie 或 HTTP header 進行語言切換。

## 注意事項

1. 所有翻譯檔的鍵結構需保持一致
2. 新增翻譯時確保所有語言檔案都同步更新
3. 使用 `'use client'` 指令以確保客戶端組件可以正確使用 `useLocale` Hook

## 演示頁面

可以訪問 `/examples/i18n-demo` 頁面查看多語言功能的完整展示。

## 首頁多語言實現注意事項

### 將靜態文本替換為動態翻譯

在實現首頁的多語言時，我們遇到的主要問題是許多 UI 組件中的文本是硬編碼的，導致語言切換後內容沒有隨之更新。解決方法是：

1. **組件接收字典參數**：修改組件如 `BadgeSection`、`HeadingSection` 等，使其接收字典參數

   ```typescript
   const BadgeSection = ({ dictionary }) => (
     // 使用 dictionary.首頁.英雄區塊.徽章文字 等替換硬編碼文本
   );
   ```

2. **使用訪問器函數**：對於導航欄等重複使用的元素，創建訪問器函數簡化翻譯獲取

   ```typescript
   const getNavLabel = (key: string) => {
     return dictionary?.導航?.[key as keyof typeof dictionary.導航] || key;
   };
   ```

3. **提供後備值**：所有引用翻譯的地方都應提供後備值，以防字典載入失敗或鍵不存在
   ```typescript
   {
     dictionary?.首頁?.英雄區塊?.主標題 || "智能血壓管理助手";
   }
   ```

### Client Components 的處理

由於語言切換功能依賴客戶端狀態，所有使用多語言的組件必須是客戶端組件：

1. 在文件頂部添加 `'use client'` 指令
2. 使用 `useLocale()` Hook 獲取當前語言與字典
3. 確保所有子組件都能接收字典參數

### 性能優化考量

1. **字典預加載**：在 `RootLayout` 中預加載默認語言字典，減少初始加載時的閃爍
2. **按需分割字典**：如果字典過大，可以考慮按功能模塊拆分，減少載入時間
3. **緩存字典**：使用 `localStorage` 緩存已載入的字典，減少重複請求

### 實際使用建議

1. **統一命名規範**：使用繁體中文作為鍵名，讓開發人員更容易理解與維護
2. **完整測試**：切換每種語言並檢查所有 UI 元素是否正確更新
3. **漸進式實現**：優先處理重要的頁面和組件，然後逐步擴展到整個應用
4. **定期檢查覆蓋率**：確保新增的 UI 元素也有相應的多語言支持

這種實現方式確保了用戶可以順暢地切換語言，而所有頁面內容會即時響應語言變更，提供一致的用戶體驗。

## 未來計劃

1. 支援更多語言（如日語、韓語等）
2. 日期與數字的本地化格式
3. 右到左語言（如阿拉伯語）的支援
