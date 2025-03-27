/**
 * @ Author: firstfu
 * @ Create Time: 2024-08-01 15:42:10
 * @ Description: 多語言字典加載器
 */

import type { Locale } from "./settings";

// 定義字典類型
export type Dictionary = {
  共用: {
    首頁: string;
    關於我們: string;
    聯絡我們: string;
    登入: string;
    註冊: string;
    登出: string;
    搜尋: string;
    設定: string;
    製作者: string;
    應用名稱_上: string;
    應用名稱_下: string;
  };
  導航: {
    產品預覽: string;
    功能特色: string;
    未來展望: string;
    常見問題: string;
    預先註冊: string;
  };
  訂閱表單: {
    標題: string;
    副標題: string;
    電子郵件: string;
    輸入框文字: string;
    預先註冊按鈕: string;
    註冊成功標題: string;
    註冊成功訊息: string;
    返回按鈕: string;
    接收通知說明: string;
    隱私說明: string;
    隱私政策連結: string;
  };
  首頁: {
    標題: string;
    副標題: string;
    號召行動: string;
    功能特色: {
      標題: string;
      副標題: string;
      徽章文字: string;
      特色1: string;
      特色2: string;
      特色3: string;
      特色4: string;
      特色標題1: string;
      特色標題2: string;
      特色標題3: string;
      特色標題4: string;
      特色標題5: string;
      特色標題6: string;
      特色描述1: string;
      特色描述2: string;
      特色描述3: string;
      特色描述4: string;
      特色描述5: string;
      特色描述6: string;
    };
    未來展望: {
      標題: string;
      副標題: string;
      標題1: string;
      標題2: string;
      標題3: string;
      標題4: string;
      描述1: string;
      描述2: string;
      描述3: string;
      描述4: string;
    };
    英雄區塊: {
      徽章文字: string;
      主標題: string;
      副標題: string;
      手機版副標題: string;
      輸入框文字: string;
      註冊按鈕: string;
      已註冊: string;
      即將發布: string;
      註冊成功訊息: string;
    };
    社會證明: {
      隱私保障: string;
      醫療顧問: string;
      搶先使用: string;
    };
    問題解決: {
      標題: string;
      副標題: string;
      常見痛點: string;
      解決方案: string;
      痛點1: string;
      痛點2: string;
      痛點3: string;
      痛點4: string;
      解決方案1: string;
      解決方案2: string;
      解決方案3: string;
      解決方案4: string;
    };
    常見問題: {
      標題: string;
      副標題: string;
      徽章文字: string;
      分類1: string;
      分類2: string;
      分類3: string;
      問題1_1: string;
      問題1_2: string;
      問題1_3: string;
      問題1_4: string;
      回答1_1: string;
      回答1_2: string;
      回答1_3: string;
      回答1_4: string;
      問題2_1: string;
      問題2_2: string;
      回答2_1: string;
      回答2_2: string;
      問題3_1: string;
      問題3_2: string;
      問題3_3: string;
      回答3_1: string;
      回答3_2: string;
      回答3_3: string;
      更多問題: string;
      聯絡我們: string;
    };
  };
  價值主張: {
    標題: string;
    副標題: string;
    精確測試: string;
    精確測試描述: string;
    資料安全: string;
    資料安全描述: string;
    便捷記錄: string;
    便捷記錄描述: string;
    數據分析: string;
    數據分析描述: string;
  };
  頁腳: {
    描述: string;
    版權: string;
    產品: string;
    功能特點: string;
    價格方案: string;
    下載應用: string;
    更新日誌: string;
    支援: string;
    常見問題: string;
    使用指南: string;
    聯絡我們: string;
    意見反饋: string;
    法律: string;
    隱私政策: string;
    使用條款: string;
    Cookie政策: string;
    資料安全: string;
  };
  血壓: {
    收縮壓: string;
    舒張壓: string;
    脈搏: string;
    日期: string;
    時間: string;
    新增記錄: string;
    編輯記錄: string;
    刪除記錄: string;
    歷史記錄: string;
  };
  錯誤: {
    必填欄位: string;
    無效輸入: string;
    伺服器錯誤: string;
    請輸入您的電子郵件: string;
    請輸入有效的電子郵件地址: string;
    ["訂閱失敗，請稍後再試"]: string;
  };
  法律: {
    返回首頁: string;
    法律文件: string;
    隱私政策: string;
    使用條款: string;
    Cookie政策: string;
    資料安全: string;
    隱私政策描述: string;
    使用條款描述: string;
    Cookie政策描述: string;
    資料安全描述: string;
    說明文字: string;
    聯繫我們標題: string;
    聯繫我們說明: string;
    聯繫信息: string;
  };
};

// 字典緩存 - 預先加載所有字典以提高切換速度
const dictionaryCache: Record<Locale, Dictionary | null> = {
  en: null,
  "zh-TW": null,
  "zh-CN": null,
};

// 最後一次加載的時間戳
const lastLoadTime: Record<Locale, number> = {
  en: 0,
  "zh-TW": 0,
  "zh-CN": 0,
};

// 是否正在加載的標記
const isLoading: Record<Locale, boolean> = {
  en: false,
  "zh-TW": false,
  "zh-CN": false,
};

// 預加載所有字典的程序
let preloadStarted = false;

/**
 * 預加載所有語言字典
 */
const preloadDictionaries = async () => {
  if (preloadStarted) return;
  preloadStarted = true;

  console.log("Preloading all dictionaries in background...");

  try {
    // 首先確保當前語言已加載（如果可能）
    const currentLocale = typeof window !== "undefined" ? (localStorage.getItem("locale") as Locale) : null;

    if (currentLocale) {
      await loadDictionaryFile(currentLocale);
    }

    // 然後在背景加載其他語言
    const locales: Locale[] = ["zh-TW", "zh-CN", "en"];

    for (const locale of locales) {
      if (locale !== currentLocale) {
        // 使用 setTimeout 錯開加載時間，減輕初始負擔
        setTimeout(() => {
          loadDictionaryFile(locale).catch(e => console.log(`Background preload of ${locale} dictionary failed:`, e));
        }, 2000 + Math.random() * 3000); // 2-5秒延遲錯開加載
      }
    }
  } catch (e) {
    console.error("Dictionary preload error:", e);
  }
};

/**
 * 加載特定語言的字典文件
 */
const loadDictionaryFile = async (locale: Locale): Promise<Dictionary> => {
  if (isLoading[locale]) {
    // 如果正在加載中，等待直到加載完成
    return new Promise(resolve => {
      const checkInterval = setInterval(() => {
        if (!isLoading[locale] && dictionaryCache[locale]) {
          clearInterval(checkInterval);
          resolve(dictionaryCache[locale]!);
        }
      }, 50);
    });
  }

  try {
    isLoading[locale] = true;
    console.log(`Actually loading dictionary file for ${locale}`);

    // 根據語言代碼動態引入相應的字典
    const importedDictionary = await import(`../../dictionaries/${locale}.json`);

    // 更新緩存和時間戳
    dictionaryCache[locale] = importedDictionary.default;
    lastLoadTime[locale] = Date.now();

    return importedDictionary.default;
  } finally {
    isLoading[locale] = false;
  }
};

/**
 * 根據語言代碼獲取相應的字典
 * @param locale 語言代碼
 * @returns 對應語言的字典
 */
export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  try {
    // 檢查緩存 - 如果已加載，直接返回
    if (dictionaryCache[locale]) {
      console.log(`Using cached dictionary for ${locale}`);

      // 確保所有字典在後台預加載（只在客戶端執行）
      if (typeof window !== "undefined" && !preloadStarted) {
        setTimeout(preloadDictionaries, 1000);
      }

      return dictionaryCache[locale]!;
    }

    // 加載請求的字典
    const dictionary = await loadDictionaryFile(locale);

    // 確保所有字典在後台預加載（只在客戶端執行）
    if (typeof window !== "undefined" && !preloadStarted) {
      setTimeout(preloadDictionaries, 1000);
    }

    return dictionary;
  } catch (error) {
    console.error(`Error loading dictionary for ${locale}:`, error);

    // 如果加載失敗，嘗試載入已存在的任何字典
    for (const fallbackLocale of ["zh-TW", "en", "zh-CN"]) {
      if (dictionaryCache[fallbackLocale as Locale]) {
        console.log(`Falling back to cached ${fallbackLocale} dictionary`);
        return dictionaryCache[fallbackLocale as Locale]!;
      }
    }

    // 如果沒有緩存，嘗試載入英文作為備用
    if (locale !== "en") {
      console.log(`Falling back to English dictionary`);
      return getDictionary("en");
    }

    // 如果是英文也加載失敗，只能拋出錯誤
    throw new Error(`Failed to load any dictionary: ${error}`);
  }
};
