/**
 * @ Author: firstfu
 * @ Create Time: 2024-08-01 15:45:30
 * @ Description: 語言上下文管理器，提供全應用的語言切換能力
 */

"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Locale, i18n } from "./settings";
import { Dictionary, getDictionary } from "./dictionaries";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dictionary: Dictionary | null;
  isLoading: boolean;
};

// 創建語言上下文
const LocaleContext = createContext<LocaleContextType>({
  locale: i18n.defaultLocale,
  setLocale: () => {},
  dictionary: null,
  isLoading: true,
});

// 使用語言上下文的 Hook
export const useLocale = () => useContext(LocaleContext);

type LocaleProviderProps = {
  children: ReactNode;
  initialLocale?: Locale;
  initialDictionary?: Dictionary;
};

// 語言提供者組件
export function LocaleProvider({ children, initialLocale = i18n.defaultLocale, initialDictionary }: LocaleProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [dictionary, setDictionary] = useState<Dictionary | null>(initialDictionary || null);
  const [isLoading, setIsLoading] = useState(!initialDictionary);

  // 切換語言
  const setLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;

    // 更新狀態
    setLocaleState(newLocale);

    // 保存到 localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
    }
  };

  // 當語言變更時，更新字典
  useEffect(() => {
    const loadDictionary = async () => {
      setIsLoading(true);
      try {
        const dict = await getDictionary(locale);
        setDictionary(dict);
      } catch (error) {
        console.error("Failed to load dictionary:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!initialDictionary || locale !== initialLocale) {
      loadDictionary();
    }
  }, [locale, initialDictionary, initialLocale]);

  // 從 localStorage 恢復語言設置
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem("locale") as Locale | null;
      if (savedLocale && i18n.locales.includes(savedLocale)) {
        setLocaleState(savedLocale);
      }
    }
  }, []);

  return <LocaleContext.Provider value={{ locale, setLocale, dictionary, isLoading }}>{children}</LocaleContext.Provider>;
}
