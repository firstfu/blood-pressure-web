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
    };
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
