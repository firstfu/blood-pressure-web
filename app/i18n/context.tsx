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
  const [switchError, setSwitchError] = useState<string | null>(null);

  // 切換語言
  const setLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;

    // 先設置載入狀態
    setIsLoading(true);
    setSwitchError(null);

    // 更新狀態
    setLocaleState(newLocale);

    // 保存到 localStorage
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("locale", newLocale);
        console.log(`Language switched to: ${newLocale}`);
      } catch (error) {
        console.error("Error saving locale to localStorage:", error);
      }
    }
  };

  // 當語言變更時，更新字典
  useEffect(() => {
    let isMounted = true;

    const loadDictionary = async () => {
      if (!isMounted) return;

      setIsLoading(true);
      try {
        console.log(`Loading dictionary for: ${locale}`);
        const dict = await getDictionary(locale);

        if (!isMounted) return;

        if (!dict) {
          console.error(`Failed to load dictionary for locale: ${locale}`);
          setSwitchError(`Failed to load dictionary for: ${locale}`);
          // 如果加載失敗，回退到默認語言
          if (locale !== i18n.defaultLocale) {
            console.log(`Falling back to default locale: ${i18n.defaultLocale}`);
            setLocaleState(i18n.defaultLocale);
          }
        } else {
          console.log(`Dictionary loaded successfully for: ${locale}`);
          setDictionary(dict);
          setSwitchError(null);
        }
      } catch (error) {
        if (!isMounted) return;

        console.error("Failed to load dictionary:", error);
        setSwitchError(`Error loading dictionary: ${error}`);
        // 如果加載失敗，回退到默認語言
        if (locale !== i18n.defaultLocale) {
          setLocaleState(i18n.defaultLocale);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadDictionary();

    return () => {
      isMounted = false;
    };
  }, [locale]);

  // 從 localStorage 恢復語言設置
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedLocale = localStorage.getItem("locale") as Locale | null;
        console.log(`Restored locale from localStorage: ${savedLocale}`);

        if (savedLocale && i18n.locales.includes(savedLocale)) {
          setLocaleState(savedLocale);
        } else {
          console.log(`Using default locale: ${i18n.defaultLocale}`);
        }
      } catch (error) {
        console.error("Error reading locale from localStorage:", error);
      }
    }
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, dictionary, isLoading }}>
      {switchError && process.env.NODE_ENV === "development" && (
        <div
          style={{
            position: "fixed",
            bottom: "10px",
            left: "10px",
            background: "red",
            color: "white",
            padding: "8px",
            borderRadius: "4px",
            zIndex: 9999,
            fontSize: "12px",
          }}
        >
          Language switch error: {switchError}
        </div>
      )}
      {children}
    </LocaleContext.Provider>
  );
}
