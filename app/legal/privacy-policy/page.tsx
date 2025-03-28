/**
 * @ Author: firstfu
 * @ Create Time: 2024-08-28 09:50:42
 * @ Description: 隱私政策頁面，支援多語言
 */

"use client";

import { useLocale } from "@/app/i18n/context";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
          <motion.h1 className="text-3xl font-bold mb-2 text-foreground">{dictionary.法律.隱私政策}</motion.h1>
          <p className="text-muted-foreground mb-6">
            {dictionary.共用.最後更新日期}: {`2024-03-29`}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.隱私政策簡介標題}</h2>
            <p className="mb-4">{dictionary.法律.隱私政策簡介內容1}</p>
            <p className="mb-4">{dictionary.法律.隱私政策簡介內容2}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.收集資訊標題}</h2>
            <p className="mb-4">{dictionary.法律.收集資訊內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                <strong>{dictionary.法律.個人識別標題}：</strong> {dictionary.法律.個人識別內容}
              </li>
              <li>
                <strong>{dictionary.法律.健康相關標題}：</strong> {dictionary.法律.健康相關內容}
              </li>
              <li>
                <strong>{dictionary.法律.使用資訊標題}：</strong> {dictionary.法律.使用資訊內容}
              </li>
              <li>
                <strong>{dictionary.法律.設備資訊標題}：</strong> {dictionary.法律.設備資訊內容}
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.使用收集標題}</h2>
            <p className="mb-4">{dictionary.法律.使用收集內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>{dictionary.法律.使用收集列表1}</li>
              <li>{dictionary.法律.使用收集列表2}</li>
              <li>{dictionary.法律.使用收集列表3}</li>
              <li>{dictionary.法律.使用收集列表4}</li>
              <li>{dictionary.法律.使用收集列表5}</li>
              <li>{dictionary.法律.使用收集列表6}</li>
              <li>{dictionary.法律.使用收集列表7}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.資訊分享標題}</h2>
            <p className="mb-4">{dictionary.法律.資訊分享內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                <strong>{dictionary.法律.服務提供商標題}：</strong> {dictionary.法律.服務提供商內容}
              </li>
              <li>
                <strong>{dictionary.法律.法律要求標題}：</strong> {dictionary.法律.法律要求內容}
              </li>
              <li>
                <strong>{dictionary.法律.保護權利標題}：</strong> {dictionary.法律.保護權利內容}
              </li>
              <li>
                <strong>{dictionary.法律.企業轉讓標題}：</strong> {dictionary.法律.企業轉讓內容}
              </li>
              <li>
                <strong>{dictionary.法律.同意分享標題}：</strong> {dictionary.法律.同意分享內容}
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.用戶權利標題}</h2>
            <p className="mb-4">{dictionary.法律.用戶權利內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                <strong>{dictionary.法律.訪問權利標題}：</strong> {dictionary.法律.訪問權利內容}
              </li>
              <li>
                <strong>{dictionary.法律.導出權利標題}：</strong> {dictionary.法律.導出權利內容}
              </li>
              <li>
                <strong>{dictionary.法律.刪除權利標題}：</strong> {dictionary.法律.刪除權利內容}
              </li>
              <li>
                <strong>{dictionary.法律.通知偏好標題}：</strong> {dictionary.法律.通知偏好內容}
              </li>
              <li>
                <strong>{dictionary.法律.撤回同意標題}：</strong> {dictionary.法律.撤回同意內容}
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.兒童隱私標題}</h2>
            <p className="mb-4">{dictionary.法律.兒童隱私內容}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.政策變更標題}</h2>
            <p className="mb-4">{dictionary.法律.政策變更內容}</p>
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
