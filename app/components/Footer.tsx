/**
 * @ Author: firstfu
 * @ Create Time: 2024-06-05 15:37:00
 * @ Description: 網站頁腳組件，包含導航鏈接、社交媒體連結和版權信息
 */
"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useContext } from "react";
import { LegalPageContext } from "../legal/LegalContextProvider";
import { useLocale } from "../i18n/context";

export default function Footer() {
  const { dictionary } = useLocale();
  const currentYear = new Date().getFullYear();
  const isLegalPage = useContext(LegalPageContext);

  // 在法律頁面中，所有連結都指向首頁
  const getFooterHref = (href: string) => {
    return isLegalPage ? "/" : href;
  };

  return (
    <footer className="bg-background border-border border-t dark:bg-card dark:border-primary-900/20">
      <div className="container mx-auto px-5 py-12 md:px-4">
        {/* 移動端標題和社交媒體區塊 */}
        <div className="flex flex-col items-center text-center md:hidden mb-10">
          <Link href={getFooterHref("/")} className="flex items-center">
            <span className="bg-clip-text bg-gradient-to-r text-2xl text-transparent font-bold from-primary to-secondary">血壓管家</span>
          </Link>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            {dictionary?.頁腳?.描述 || "專注於血壓記錄的應用，幫助您輕鬆記錄和分析血壓數值，智能管理您的健康數據。"}
          </p>
          <div className="flex mt-6 space-x-6 justify-center">
            <a href={getFooterHref("/")} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </a>
            <a href={getFooterHref("/")} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </a>
            <a href={getFooterHref("/")} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </a>
            <a href={getFooterHref("/")} className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* 桌面版和移動端的網格佈局 */}
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:gap-8 md:grid-cols-4">
          {/* 僅在桌面版顯示的品牌和描述 */}
          <div className="hidden md:block md:col-span-1">
            <Link href={getFooterHref("/")} className="flex items-center">
              <span className="bg-clip-text bg-gradient-to-r text-2xl text-transparent font-bold from-primary to-secondary">血壓管家</span>
            </Link>
            <p className="text-muted-foreground mt-4">
              {dictionary?.頁腳?.描述 || "專注於血壓記錄的應用，幫助您輕鬆記錄和分析血壓數值，智能管理您的健康數據。"}
            </p>
            <div className="flex mt-6 space-x-4">
              <a href={getFooterHref("/")} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={getFooterHref("/")} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={getFooterHref("/")} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={getFooterHref("/")} className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-foreground text-lg font-semibold mb-4">{dictionary?.頁腳?.產品 || "產品"}</h3>
            <ul className="space-y-3 md:space-y-2 text-center md:text-left">
              <li>
                <Link href={getFooterHref("#features")} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary?.頁腳?.功能特點 || "功能特點"}
                </Link>
              </li>
              <li>
                <Link href={getFooterHref("/")} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary?.頁腳?.價格方案 || "價格方案"}
                </Link>
              </li>
              <li>
                <Link href={getFooterHref("/")} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary?.頁腳?.下載應用 || "下載應用"}
                </Link>
              </li>
              <li>
                <Link href={getFooterHref("/")} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary?.頁腳?.更新日誌 || "更新日誌"}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-foreground text-lg font-semibold mb-4">{dictionary?.頁腳?.支援 || "支援"}</h3>
            <ul className="space-y-3 md:space-y-2 text-center md:text-left">
              <li>
                <Link href={getFooterHref("/legal/faq")} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary?.頁腳?.常見問題 || "常見問題"}
                </Link>
              </li>
              <li>
                <Link href={getFooterHref("/legal/guide")} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary?.頁腳?.使用指南 || "使用指南"}
                </Link>
              </li>
              <li>
                <Link href={getFooterHref("#contact")} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary?.頁腳?.聯絡我們 || "聯絡我們"}
                </Link>
              </li>
              <li>
                <Link href={getFooterHref("/")} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary?.頁腳?.意見反饋 || "意見反饋"}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start col-span-2 md:col-span-1">
            <h3 className="text-foreground text-lg font-semibold mb-4">{dictionary?.頁腳?.法律 || "法律"}</h3>
            <ul className="space-y-3 md:space-y-2 text-center md:text-left">
              <li>
                <Link href={getFooterHref("/legal/privacy-policy")} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary?.頁腳?.隱私政策 || "隱私政策"}
                </Link>
              </li>
              <li>
                <Link href={getFooterHref("/legal/terms-of-service")} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary?.頁腳?.使用條款 || "使用條款"}
                </Link>
              </li>
              <li>
                <Link href={getFooterHref("/legal/cookie-policy")} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary?.頁腳?.Cookie政策 || "Cookie 政策"}
                </Link>
              </li>
              <li>
                <Link href={getFooterHref("/legal/data-security")} className="text-muted-foreground hover:text-primary transition-colors">
                  {dictionary?.頁腳?.資料安全 || "資料安全"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col border-border border-t justify-center dark:border-primary-900/20 items-center md:flex-row md:justify-between mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm mb-6 md:mb-0">
            &copy; {currentYear} 血壓管家. {dictionary?.頁腳?.版權 || "保留所有權利"}.
          </p>
          <div className="flex items-center space-x-4">
            <span className="flex text-muted-foreground text-sm items-center">
              {dictionary?.共用?.製作者 || "以"} <Heart className="h-4 text-red-500 w-4 mx-1" /> {"製作"}
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
