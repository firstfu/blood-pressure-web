/**
 * @ Author: firstfu
 * @ Create Time: 2024-04-08 14:15:22
 * @ Description: 獲取當前顯示模式的 hook，用於根據明亮/暗黑模式選擇對應的資源
 */

"use client";

import { useState, useEffect } from 'react';
import { DisplayMode } from './localeImages';

/**
 * 獲取當前顯示模式的 hook
 * @returns {object} { mode: 當前顯示模式 ('light' | 'dark'), isDark: 是否為暗黑模式 }
 */
export function useDisplayMode() {
  // 預設使用明亮模式
  const [mode, setMode] = useState<DisplayMode>('light');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 初始化時根據系統偏好或使用者設定決定模式
    const initMode = () => {
      // 檢查是否有 HTML 元素的 data-theme 屬性
      const htmlTheme = document.documentElement.getAttribute('data-theme');

      // 檢查是否有預設的暗黑模式類別
      const hasDarkClass = document.documentElement.classList.contains('dark');

      // 檢查系統偏好
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

      // 根據以上條件決定模式
      const isDarkMode =
        htmlTheme === 'dark' ||
        hasDarkClass ||
        prefersDark;

      setMode(isDarkMode ? 'dark' : 'light');
      setIsDark(isDarkMode);
    };

    // 初始化
    initMode();

    // 監聽系統主題偏好變更
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // 只有在沒有明確設定主題的情況下，才跟隨系統偏好
      const htmlTheme = document.documentElement.getAttribute('data-theme');
      if (!htmlTheme) {
        setMode(e.matches ? 'dark' : 'light');
        setIsDark(e.matches);
      }
    };

    // 新的 API 使用 addEventListener
    if (darkModeMediaQuery.addEventListener) {
      darkModeMediaQuery.addEventListener('change', handleChange);
    } else {
      // 向下相容舊版瀏覽器
      darkModeMediaQuery.addListener(handleChange);
    }

    // 監聽 HTML 主題屬性變化
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          (mutation.attributeName === 'data-theme' || mutation.attributeName === 'class')
        ) {
          initMode();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class']
    });

    // 清理函數
    return () => {
      if (darkModeMediaQuery.removeEventListener) {
        darkModeMediaQuery.removeEventListener('change', handleChange);
      } else {
        darkModeMediaQuery.removeListener(handleChange);
      }
      observer.disconnect();
    };
  }, []);

  return { mode, isDark };
}