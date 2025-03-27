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
  };
  導航: {
    產品預覽: string;
    功能特色: string;
    未來展望: string;
    常見問題: string;
    預先註冊: string;
  };
  首頁: {
    標題: string;
    副標題: string;
    號召行動: string;
    功能特色: {
      標題: string;
      特色1: string;
      特色2: string;
      特色3: string;
      特色4: string;
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
  };
};

/**
 * 根據語言代碼獲取相應的字典
 * @param locale 語言代碼
 * @returns 對應語言的字典
 */
export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  // 根據語言代碼動態引入相應的字典
  return import(`../../dictionaries/${locale}.json`).then(module => module.default);
};
