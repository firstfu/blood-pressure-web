/**
 * @ Author: firstfu
 * @ Create Time: 2024-08-28 09:15:42
 * @ Description: 使用條款頁面，支援多語言
 */

"use client";

import { useLocale } from "@/app/i18n/context";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { motion } from "framer-motion";

export default function TermsOfService() {
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
          <motion.h1 className="text-3xl font-bold mb-2 text-foreground">{dictionary.法律.使用條款}</motion.h1>
          <p className="text-muted-foreground mb-6">
            {dictionary.共用.最後更新日期}: {`2024-03-29`}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.接受條款標題}</h2>
            <p className="mb-4">{dictionary.法律.接受條款內容}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.服務描述標題}</h2>
            <p className="mb-4">{dictionary.法律.服務描述內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>{dictionary.法律.服務描述列表1}</li>
              <li>{dictionary.法律.服務描述列表2}</li>
              <li>{dictionary.法律.服務描述列表3}</li>
              <li>{dictionary.法律.服務描述列表4}</li>
              <li>{dictionary.法律.服務描述列表5}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.帳戶安全標題}</h2>
            <p className="mb-4">{dictionary.法律.帳戶安全內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>{dictionary.法律.帳戶安全列表1}</li>
              <li>{dictionary.法律.帳戶安全列表2}</li>
              <li>{dictionary.法律.帳戶安全列表3}</li>
              <li>{dictionary.法律.帳戶安全列表4}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.用戶責任標題}</h2>
            <p className="mb-4">{dictionary.法律.用戶責任內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>{dictionary.法律.用戶責任列表1}</li>
              <li>{dictionary.法律.用戶責任列表2}</li>
              <li>{dictionary.法律.用戶責任列表3}</li>
              <li>{dictionary.法律.用戶責任列表4}</li>
              <li>{dictionary.法律.用戶責任列表5}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.健康免責標題}</h2>
            <p className="mb-4">{dictionary.法律.健康免責內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>{dictionary.法律.健康免責列表1}</li>
              <li>{dictionary.法律.健康免責列表2}</li>
              <li>{dictionary.法律.健康免責列表3}</li>
              <li>{dictionary.法律.健康免責列表4}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.知識產權標題}</h2>
            <p className="mb-4">{dictionary.法律.知識產權內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>{dictionary.法律.知識產權列表1}</li>
              <li>{dictionary.法律.知識產權列表2}</li>
              <li>{dictionary.法律.知識產權列表3}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.服務變更標題}</h2>
            <p className="mb-4">{dictionary.法律.服務變更內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>{dictionary.法律.服務變更列表1}</li>
              <li>{dictionary.法律.服務變更列表2}</li>
              <li>{dictionary.法律.服務變更列表3}</li>
              <li>{dictionary.法律.服務變更列表4}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.免責聲明標題}</h2>
            <p className="mb-4">{dictionary.法律.免責聲明內容}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.責任限制標題}</h2>
            <p className="mb-4">{dictionary.法律.責任限制內容}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.條款變更標題}</h2>
            <p className="mb-4">{dictionary.法律.條款變更內容}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.一般條款標題}</h2>
            <p className="mb-4">{dictionary.法律.一般條款內容}</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                <strong>{dictionary.法律.管轄法律標題}</strong>：{dictionary.法律.管轄法律內容}
              </li>
              <li>
                <strong>{dictionary.法律.爭議解決標題}</strong>：{dictionary.法律.爭議解決內容}
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
