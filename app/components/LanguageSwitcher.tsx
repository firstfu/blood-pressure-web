/**
 * @ Author: firstfu
 * @ Create Time: 2024-08-01 15:48:42
 * @ Description: 語言切換組件，允許用戶切換網站顯示語言
 */

"use client";

import { useLocale } from "../i18n/context";
import { i18n, Locale } from "../i18n/settings";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

// 語言顯示名稱映射
const localeNames: Record<Locale, string> = {
  en: "English",
  "zh-TW": "繁體中文",
};

export default function LanguageSwitcher() {
  const { locale, setLocale, isLoading } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [previousLocale, setPreviousLocale] = useState<Locale | null>(null);
  const [lastSwitchTime, setLastSwitchTime] = useState<number>(0);
  const [isSwitching, setIsSwitching] = useState(false);

  // 追蹤當前使用的語言
  useEffect(() => {
    if (locale !== previousLocale && previousLocale !== null) {
      console.log(`Language switched from ${previousLocale} to ${locale}`);
      // 語言切換完成
      setIsSwitching(false);
    }
    setPreviousLocale(locale);
  }, [locale, previousLocale]);

  // 點擊外部時關閉下拉選單
  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleClick = (newLocale: Locale) => {
    // 防止頻繁切換 (至少1秒間隔)
    const now = Date.now();
    if (now - lastSwitchTime < 1000) {
      console.log("Switching too fast, ignoring");
      return;
    }

    setLastSwitchTime(now);
    console.log(`Switching to ${newLocale} from ${locale}`);

    // 如果點擊的是當前語言，只關閉下拉選單
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    // 先關閉選單
    setIsOpen(false);

    // 設置切換中狀態
    setIsSwitching(true);

    // 切換語言
    setLocale(newLocale);
  };

  return (
    <div className="relative" onClick={e => e.stopPropagation()}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
          isLoading || isSwitching ? "opacity-60 cursor-not-allowed" : ""
        }`}
        disabled={isLoading || isSwitching}
        aria-expanded={isOpen}
        aria-label="切換語言"
      >
        <span>{localeNames[locale]}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        {(isLoading || isSwitching) && <Loader2 className="ml-2 h-4 w-4 animate-spin text-primary" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {i18n.locales.map(localeOption => (
              <button
                key={localeOption}
                onClick={() => handleClick(localeOption)}
                className={`${
                  locale === localeOption ? "bg-gray-100 dark:bg-gray-800 font-semibold" : ""
                } block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  (isLoading || isSwitching) && "opacity-60 cursor-not-allowed"
                }`}
                disabled={isLoading || isSwitching}
              >
                {localeNames[localeOption]}
                {locale === localeOption && <span className="ml-2 inline-block rounded-full bg-primary w-2 h-2"></span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
