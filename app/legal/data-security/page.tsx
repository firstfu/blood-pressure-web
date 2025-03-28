/**
 * @ Author: firstfu
 * @ Create Time: 2024-08-28 09:40:42
 * @ Description: 資料安全頁面，支援多語言
 */

"use client";

import { useLocale } from "@/app/i18n/context";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { motion } from "framer-motion";

export default function DataSecurity() {
  const { dictionary, isLoading } = useLocale();

  if (isLoading || !dictionary) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/">
            <Button variant="outline" className="flex items-center space-x-2">
              <ChevronLeft className="h-4 w-4" />
              <span>{dictionary.共用.首頁}</span>
            </Button>
          </Link>
          <LanguageSwitcher />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md"
        >
          <motion.h1 className="text-3xl font-bold mb-2 text-foreground">{dictionary.法律.資料安全}</motion.h1>
          <p className="text-muted-foreground mb-6">
            {dictionary.共用.最後更新日期}: {`2024-03-29`}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.資料安全承諾標題}</h2>
            <p className="mb-4">{dictionary.法律.資料安全承諾內容}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.資料加密標題}</h2>
            <p className="mb-4">{dictionary.法律.資料加密內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                <strong>{dictionary.法律.傳輸加密標題}：</strong> {dictionary.法律.傳輸加密內容}
              </li>
              <li>
                <strong>{dictionary.法律.靜態加密標題}：</strong> {dictionary.法律.靜態加密內容}
              </li>
              <li>
                <strong>{dictionary.法律.端到端加密標題}：</strong> {dictionary.法律.端到端加密內容}
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.基礎設施安全標題}</h2>
            <p className="mb-4">{dictionary.法律.基礎設施安全內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                <strong>{dictionary.法律.安全伺服器標題}：</strong> {dictionary.法律.安全伺服器內容}
              </li>
              <li>
                <strong>{dictionary.法律.防火牆標題}：</strong> {dictionary.法律.防火牆內容}
              </li>
              <li>
                <strong>{dictionary.法律.入侵檢測標題}：</strong> {dictionary.法律.入侵檢測內容}
              </li>
              <li>
                <strong>{dictionary.法律.安全掃描標題}：</strong> {dictionary.法律.安全掃描內容}
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.訪問控制標題}</h2>
            <p className="mb-4">{dictionary.法律.訪問控制內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                <strong>{dictionary.法律.權限管理標題}：</strong> {dictionary.法律.權限管理內容}
              </li>
              <li>
                <strong>{dictionary.法律.多因素認證標題}：</strong> {dictionary.法律.多因素認證內容}
              </li>
              <li>
                <strong>{dictionary.法律.訪問日誌標題}：</strong> {dictionary.法律.訪問日誌內容}
              </li>
              <li>
                <strong>{dictionary.法律.賬戶保護標題}：</strong> {dictionary.法律.賬戶保護內容}
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.應用安全標題}</h2>
            <p className="mb-4">{dictionary.法律.應用安全內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                <strong>{dictionary.法律.安全開發標題}：</strong> {dictionary.法律.安全開發內容}
              </li>
              <li>
                <strong>{dictionary.法律.代碼審查標題}：</strong> {dictionary.法律.代碼審查內容}
              </li>
              <li>
                <strong>{dictionary.法律.安全審計標題}：</strong> {dictionary.法律.安全審計內容}
              </li>
              <li>
                <strong>{dictionary.法律.自動化測試標題}：</strong> {dictionary.法律.自動化測試內容}
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.數據備份標題}</h2>
            <p className="mb-4">{dictionary.法律.數據備份內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                <strong>{dictionary.法律.定期備份標題}：</strong> {dictionary.法律.定期備份內容}
              </li>
              <li>
                <strong>{dictionary.法律.加密備份標題}：</strong> {dictionary.法律.加密備份內容}
              </li>
              <li>
                <strong>{dictionary.法律.備份測試標題}：</strong> {dictionary.法律.備份測試內容}
              </li>
              <li>
                <strong>{dictionary.法律.異地存儲標題}：</strong> {dictionary.法律.異地存儲內容}
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.合規標準標題}</h2>
            <p className="mb-4">{dictionary.法律.合規標準內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                <strong>{dictionary.法律.法規合規標題}：</strong> {dictionary.法律.法規合規內容}
              </li>
              <li>
                <strong>{dictionary.法律.行業標準標題}：</strong> {dictionary.法律.行業標準內容}
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.用戶安全標題}</h2>
            <p className="mb-4">{dictionary.法律.用戶安全內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                <strong>{dictionary.法律.強密碼標題}：</strong> {dictionary.法律.強密碼內容}
              </li>
              <li>
                <strong>{dictionary.法律.啟用多因素標題}：</strong> {dictionary.法律.啟用多因素內容}
              </li>
              <li>
                <strong>{dictionary.法律.保持軟件標題}：</strong> {dictionary.法律.保持軟件內容}
              </li>
              <li>
                <strong>{dictionary.法律.警惕標題}：</strong> {dictionary.法律.警惕內容}
              </li>
              <li>
                <strong>{dictionary.法律.通報標題}：</strong> {dictionary.法律.通報內容}
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.安全更新標題}</h2>
            <p className="mb-4">{dictionary.法律.安全更新內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                <strong>{dictionary.法律.持續改進標題}：</strong> {dictionary.法律.持續改進內容}
              </li>
              <li>
                <strong>{dictionary.法律.檢查更新標題}：</strong> {dictionary.法律.檢查更新內容}
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.聯繫我們標題}</h2>
            <p className="mb-4">{dictionary.法律.聯繫我們說明}</p>
            <p className="whitespace-pre-line">{dictionary.法律.聯繫信息}</p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
