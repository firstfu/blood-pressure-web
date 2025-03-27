/**
 * @ Author: firstfu
 * @ Create Time: 2024-08-01 15:48:42
 * @ Description: 語言切換組件，允許用戶切換網站顯示語言
 */

"use client";

import { useLocale } from "../i18n/context";
import { i18n, Locale } from "../i18n/settings";
import { useState } from "react";

// 語言顯示名稱映射
const localeNames: Record<Locale, string> = {
  en: "English",
  "zh-TW": "繁體中文",
  "zh-CN": "简体中文",
};

export default function LanguageSwitcher() {
  const { locale, setLocale, isLoading } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        disabled={isLoading}
      >
        <span>{localeNames[locale]}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {i18n.locales.map(localeOption => (
              <button
                key={localeOption}
                onClick={() => handleClick(localeOption)}
                className={`${
                  locale === localeOption ? "bg-gray-100 dark:bg-gray-800" : ""
                } block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800`}
              >
                {localeNames[localeOption]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
