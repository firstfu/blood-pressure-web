# 血壓記錄 App - Landing Page 實作指南

## 1. 技術選擇

考量到快速實現和高效能的需求，建議使用以下技術組合：

### 前端框架：

- **Next.js**：提供伺服器渲染(SSR)功能，對搜尋引擎優化(SEO)有利
- **React**：靈活的元件系統，豐富的生態系統
- **TailwindCSS**：高度客製化且易於使用的 CSS 框架

### 表單處理：

- **FormSpree** 或 **Netlify Forms**：無需後端即可處理表單提交
- **ConvertKit** 或 **Mailchimp**：電子郵件訂閱列表管理

### 分析工具：

- **Google Analytics**：訪客行為追蹤
- **Hotjar**：熱圖和用戶行為記錄
- **Facebook Pixel**：社群媒體廣告追蹤

### 部署選項：

- **Vercel**：最適合 Next.js 的部署平台
- **Netlify**：簡單的持續部署和表單處理
- **GitHub Pages**：成本低的靜態頁面部署選項

## 2. 頁面結構與元件

### 封裝元件：

1. **導航欄 (Navbar)**：

   - 產品標誌/名稱
   - 導航連結：功能概覽、常見問題、聯絡我們
   - 主要 CTA 按鈕

2. **頂部橫幅 (Hero Section)**：

   - 標題與副標題元件
   - 描述段落
   - CTA 按鈕
   - 產品手機模擬圖

3. **特色功能區 (Features Section)**：

   - 功能卡片元件 (圖標、標題、描述)
   - 每個功能使用獨立元件便於維護和更新

4. **問題與解決方案 (Problem-Solution)**：

   - 問題陳述
   - 解決方案說明
   - 前後對比模塊

5. **產品預覽 (Product Preview)**：

   - 輪播圖片或影片元件
   - 螢幕截圖展示元件
   - 動畫過渡效果

6. **用戶見證 (Testimonials)**：

   - 見證卡片元件 (頭像、姓名、評價)
   - 滑動輪播功能

7. **訂閱表單 (Subscription Form)**：

   - 輸入欄位元件
   - 提交按鈕
   - 成功/錯誤訊息元件

8. **常見問題 (FAQ)**：

   - 摺疊問答元件
   - 展開/收起動畫

9. **頁尾 (Footer)**：
   - 版權信息
   - 社群媒體連結
   - 法律聲明連結

## 3. 實作指南

### 步驟 1: 建立專案

```bash
# 創建 Next.js 專案
npx create-next-app blood-pressure-landing
cd blood-pressure-landing

# 安裝必要依賴
npm install tailwindcss postcss autoprefixer
npm install react-intersection-observer

# 初始化 Tailwind CSS
npx tailwindcss init -p
```

### 步驟 2: 設定 Tailwind CSS

編輯 `tailwind.config.js` 檔案：

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4dabf7", // 淺藍色
          DEFAULT: "#228be6", // 主要藍色
          dark: "#1971c2", // 深藍色
        },
        secondary: {
          light: "#8ce99a", // 淺綠色
          DEFAULT: "#40c057", // 主要綠色
          dark: "#2b8a3e", // 深綠色
        },
      },
      fontFamily: {
        sans: ["Noto Sans TC", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

### 步驟 3: 建立頁面元件

#### `components/Navbar.js` 範例

```jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 fixed w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="font-display text-xl font-bold text-primary">
            健康守護
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-primary">
            功能特色
          </Link>
          <Link href="#how-it-works" className="text-gray-600 hover:text-primary">
            使用方式
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-primary">
            常見問題
          </Link>
        </div>

        <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md transition duration-300">立即訂閱</button>
      </div>
    </nav>
  );
}
```

#### `components/HeroSection.js` 範例

```jsx
import { useInView } from "react-intersection-observer";

export default function HeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div
        ref={ref}
        className={`container mx-auto px-4 flex flex-col lg:flex-row items-center ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition duration-1000`}
      >
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">健康守護：您的個人血壓管理助手</h1>
          <p className="text-xl text-gray-600 mb-8">簡單紀錄，智能分析，連結醫療專業</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">加入等候名單</button>
            <button className="border-2 border-primary text-primary hover:bg-primary-light hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
              了解更多
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-xl"></div>
            <img src="/images/screen1.png" alt="血壓記錄App畫面" className="relative z-10 max-w-full h-auto rounded-xl shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 步驟 4: 建立訂閱表單

#### `components/SubscriptionForm.js` 範例

```jsx
import { useState } from "react";

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    // 這裡可以連接到實際的訂閱處理服務，例如 Formspree 或 Mailchimp
    try {
      // 模擬 API 呼叫
      setTimeout(() => {
        setStatus("success");
      }, 1000);

      // 實際實作時的 API 呼叫範例：
      // const response = await fetch('https://formspree.io/your-form-id', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      //
      // if (response.ok) {
      //   setStatus('success');
      // } else {
      //   setStatus('error');
      // }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-primary-light bg-opacity-10 py-16 px-4 rounded-2xl">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">搶先體驗我們的血壓記錄 App</h2>
        <p className="text-lg mb-8 text-gray-600">留下您的電子郵件，成為首批獲得通知並享有早鳥優惠的使用者</p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="請輸入您的電子郵件"
              required
              className="flex-grow px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
              立即訂閱
            </button>
          </div>

          {status === "success" && <div className="mt-4 text-green-600">感謝您的訂閱！我們將盡快與您聯繫。</div>}

          {status === "error" && <div className="mt-4 text-red-600">訂閱失敗，請稍後再試。</div>}

          <div className="mt-4 text-sm text-gray-500">我們重視您的隱私，承諾不會將您的資料分享給第三方。</div>
        </form>
      </div>
    </div>
  );
}
```

### 步驟 5: 設定分析追蹤

#### 在 `pages/_app.js` 中添加 Google Analytics 追蹤

```jsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

// Google Analytics 追蹤 ID
const GA_TRACKING_ID = "G-XXXXXXXXXX"; // 替換為實際的追蹤 ID

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // 僅在生產環境中加載 Google Analytics
    if (process.env.NODE_ENV === "production") {
      // 添加 Google Analytics 腳本
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // 初始化 Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", GA_TRACKING_ID);

      // 頁面跳轉時追蹤 pageview
      const handleRouteChange = url => {
        gtag("event", "page_view", {
          page_path: url,
        });
      };

      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
```

## 4. 追蹤與優化

### 設定追蹤事件：

在適當的元件和事件處理器中添加追蹤代碼：

```javascript
// CTA 按鈕點擊事件
function trackCTAClick(buttonName) {
  if (window.gtag) {
    window.gtag("event", "click", {
      event_category: "engagement",
      event_label: buttonName,
    });
  }
}

// 表單提交事件
function trackFormSubmission(formName, status) {
  if (window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "conversion",
      event_label: formName,
      event_status: status,
    });
  }
}
```

### A/B 測試實作：

使用 Next.js 的特性來實現簡單的 A/B 測試：

```jsx
// 在頁面載入時決定顯示哪個版本
useEffect(() => {
  // 隨機決定版本 A 或版本 B
  const testGroup = Math.random() < 0.5 ? "A" : "B";

  // 儲存用戶的測試組
  localStorage.setItem("testGroup", testGroup);

  // 追蹤用戶被分配到哪個組
  if (window.gtag) {
    window.gtag("event", "experiment_impression", {
      experiment_id: "hero_text",
      variant_id: testGroup,
    });
  }
}, []);

// 根據測試組顯示不同內容
const testGroup = typeof window !== "undefined" ? localStorage.getItem("testGroup") : "A";

return <h1 className="text-4xl font-bold mb-6">{testGroup === "A" ? "健康守護：您的個人血壓管理助手" : "簡單監測血壓，預防心血管疾病"}</h1>;
```

## 5. 市場驗證實用工具

### 推薦工具：

1. **問卷調查**：

   - Google Forms（免費）
   - Typeform（有免費方案）
   - SurveyMonkey（有免費方案）

2. **使用者行為分析**：

   - Hotjar（有免費方案）
   - Mouseflow（有試用版）
   - Clarity by Microsoft（免費）

3. **廣告平台**：

   - Google Ads
   - Facebook/Instagram Ads
   - LinkedIn Ads（針對醫療專業人員）

4. **電子郵件行銷**：
   - Mailchimp（有免費方案）
   - ConvertKit（適合創建序列電子郵件）
   - SendGrid（大量發送郵件）

## 6. 部署指南

### Vercel 部署流程：

1. 在 GitHub/GitLab/Bitbucket 上建立專案儲存庫
2. 將程式碼推送到儲存庫
3. 在 Vercel 上註冊/登入
4. 點擊「New Project」並選擇您的儲存庫
5. 設定環境變數（如有需要）
6. 點擊「Deploy」

### 自定義網域設定：

1. 在 Vercel 專案儀表板中，點擊「Domains」
2. 添加您的自定義網域
3. 根據指示更新 DNS 記錄
4. 等待 DNS 傳播完成（通常 24-48 小時）

## 7. 結論與最佳實踐

### 總結：

以下是構建有效的 Landing Page 的最佳實踐：

1. **專注於價值主張**：清晰傳達應用程式的主要價值
2. **簡化用戶旅程**：讓訪客輕鬆找到並點擊 CTA
3. **持續測試與優化**：根據數據調整內容和設計
4. **行動裝置優先**：確保在手機上有最佳體驗
5. **頁面載入速度**：優化圖片和代碼以獲得更快的載入時間
6. **建立信任元素**：使用評價、案例研究和專家背書

隨著資料收集和分析的進行，應根據用戶行為和反饋不斷迭代和改進 Landing Page，以優化轉換率和提高市場驗證的效果。
