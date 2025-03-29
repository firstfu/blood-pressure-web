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
    應用名稱: string;
    應用名稱_上: string;
    應用名稱_下: string;
    最後更新日期: string;
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

    // 資料安全相關翻譯
    資料安全承諾標題: string;
    資料安全承諾內容: string;
    資料加密標題: string;
    資料加密內容: string;
    傳輸加密標題: string;
    傳輸加密內容: string;
    靜態加密標題: string;
    靜態加密內容: string;
    端到端加密標題: string;
    端到端加密內容: string;
    基礎設施安全標題: string;
    基礎設施安全內容: string;
    安全伺服器標題: string;
    安全伺服器內容: string;
    防火牆標題: string;
    防火牆內容: string;
    入侵檢測標題: string;
    入侵檢測內容: string;
    安全掃描標題: string;
    安全掃描內容: string;
    訪問控制標題: string;
    訪問控制內容: string;
    權限管理標題: string;
    權限管理內容: string;
    多因素認證標題: string;
    多因素認證內容: string;
    訪問日誌標題: string;
    訪問日誌內容: string;
    賬戶保護標題: string;
    賬戶保護內容: string;
    應用安全標題: string;
    應用安全內容: string;
    安全開發標題: string;
    安全開發內容: string;
    代碼審查標題: string;
    代碼審查內容: string;
    安全審計標題: string;
    安全審計內容: string;
    自動化測試標題: string;
    自動化測試內容: string;
    數據備份標題: string;
    數據備份內容: string;
    定期備份標題: string;
    定期備份內容: string;
    加密備份標題: string;
    加密備份內容: string;
    備份測試標題: string;
    備份測試內容: string;
    異地存儲標題: string;
    異地存儲內容: string;
    合規標準標題: string;
    合規標準內容: string;
    法規合規標題: string;
    法規合規內容: string;
    行業標準標題: string;
    行業標準內容: string;
    用戶安全標題: string;
    用戶安全內容: string;
    強密碼標題: string;
    強密碼內容: string;
    啟用多因素標題: string;
    啟用多因素內容: string;
    保持軟件標題: string;
    保持軟件內容: string;
    警惕標題: string;
    警惕內容: string;
    通報標題: string;
    通報內容: string;
    安全更新標題: string;
    安全更新內容: string;
    持續改進標題: string;
    持續改進內容: string;
    檢查更新標題: string;
    檢查更新內容: string;
    資料安全內容標題: string;

    // 隱私政策相關翻譯
    隱私政策簡介標題: string;
    隱私政策簡介內容1: string;
    隱私政策簡介內容2: string;
    收集資訊標題: string;
    收集資訊內容: string;
    個人識別標題: string;
    個人識別內容: string;
    健康相關標題: string;
    健康相關內容: string;
    使用資訊標題: string;
    使用資訊內容: string;
    設備資訊標題: string;
    設備資訊內容: string;
    使用收集標題: string;
    使用收集內容: string;
    使用收集列表1: string;
    使用收集列表2: string;
    使用收集列表3: string;
    使用收集列表4: string;
    使用收集列表5: string;
    使用收集列表6: string;
    使用收集列表7: string;
    資訊分享標題: string;
    資訊分享內容: string;
    服務提供商標題: string;
    服務提供商內容: string;
    法律要求標題: string;
    法律要求內容: string;
    保護權利標題: string;
    保護權利內容: string;
    企業轉讓標題: string;
    企業轉讓內容: string;
    同意分享標題: string;
    同意分享內容: string;
    用戶權利標題: string;
    用戶權利內容: string;
    訪問權利標題: string;
    訪問權利內容: string;
    導出權利標題: string;
    導出權利內容: string;
    刪除權利標題: string;
    刪除權利內容: string;
    通知偏好標題: string;
    通知偏好內容: string;
    撤回同意標題: string;
    撤回同意內容: string;
    兒童隱私標題: string;
    兒童隱私內容: string;
    政策變更標題: string;
    政策變更內容: string;

    // 使用條款相關翻譯
    接受條款標題: string;
    接受條款內容: string;
    服務描述標題: string;
    服務描述內容: string;
    服務描述列表1: string;
    服務描述列表2: string;
    服務描述列表3: string;
    服務描述列表4: string;
    服務描述列表5: string;
    帳戶安全標題: string;
    帳戶安全內容: string;
    帳戶安全列表1: string;
    帳戶安全列表2: string;
    帳戶安全列表3: string;
    帳戶安全列表4: string;
    用戶責任標題: string;
    用戶責任內容: string;
    用戶責任列表1: string;
    用戶責任列表2: string;
    用戶責任列表3: string;
    用戶責任列表4: string;
    用戶責任列表5: string;
    健康免責標題: string;
    健康免責內容: string;
    健康免責列表1: string;
    健康免責列表2: string;
    健康免責列表3: string;
    健康免責列表4: string;
    知識產權標題: string;
    知識產權內容: string;
    知識產權列表1: string;
    知識產權列表2: string;
    知識產權列表3: string;
    服務變更標題: string;
    服務變更內容: string;
    服務變更列表1: string;
    服務變更列表2: string;
    服務變更列表3: string;
    服務變更列表4: string;
    免責聲明標題: string;
    免責聲明內容: string;
    責任限制標題: string;
    責任限制內容: string;
    條款變更標題: string;
    條款變更內容: string;
    一般條款標題: string;
    一般條款內容: string;
    管轄法律標題: string;
    管轄法律內容: string;
    爭議解決標題: string;
    爭議解決內容: string;
  };
  cookie: {
    關於本政策: string;
    關於本政策說明: string;
    什麼是Cookies: string;
    什麼是Cookies說明1: string;
    什麼是Cookies說明2: string;
    使用類型: string;
    使用類型說明: string;
    必要Cookies: string;
    必要Cookies說明: string;
    功能Cookies: string;
    功能Cookies說明: string;
    分析Cookies: string;
    分析Cookies說明: string;
    定向Cookies: string;
    定向Cookies說明: string;
    如何使用: string;
    如何使用說明: string;
    使用原因列表: string[];
    第三方Cookies: string;
    第三方Cookies說明1: string;
    第三方Cookies說明2: string;
    管理偏好: string;
    管理偏好說明1: string;
    管理偏好說明2: string;
    其他追蹤技術: string;
    其他追蹤技術說明: string;
    追蹤技術列表: string[];
    政策變更: string;
    政策變更說明: string;
    聯繫我們說明: string;
  };
};

// 字典緩存 - 預先加載所有字典以提高切換速度
const dictionaryCache: Record<Locale, Dictionary | null> = {
  en: null,
  "zh-TW": null,
};

// 最後一次加載的時間戳
const lastLoadTime: Record<Locale, number> = {
  en: 0,
  "zh-TW": 0,
};

// 是否正在加載的標記
const isLoading: Record<Locale, boolean> = {
  en: false,
  "zh-TW": false,
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
    const locales: Locale[] = ["zh-TW", "en"];

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
    for (const fallbackLocale of ["zh-TW", "en"]) {
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
