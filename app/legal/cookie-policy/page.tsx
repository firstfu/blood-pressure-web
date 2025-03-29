/**
 * @ Author: firstfu
 * @ Create Time: 2024-08-28 09:30:55
 * @ Description: Cookie政策頁面，支援多語言
 */

"use client";

import { useLocale } from "@/app/i18n/context";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { motion } from "framer-motion";

export default function CookiePolicy() {
  const { dictionary, isLoading } = useLocale();

  if (isLoading || !dictionary) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto p-8">
      <motion.h1 className="text-3xl font-bold mb-2 text-foreground">{dictionary.法律.Cookie政策}</motion.h1>
      <p className="text-muted-foreground mb-6">
        {dictionary.共用.最後更新日期}: {`2024-03-29`}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{dictionary.cookie.關於本政策}</h2>
        <p className="mb-4">{dictionary.cookie.關於本政策說明}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{dictionary.cookie.什麼是Cookies}</h2>
        <p className="mb-4">{dictionary.cookie.什麼是Cookies說明1}</p>
        <p className="mb-4">{dictionary.cookie.什麼是Cookies說明2}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{dictionary.cookie.使用類型}</h2>
        <p className="mb-4">{dictionary.cookie.使用類型說明}</p>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">{dictionary.cookie.必要Cookies}</h3>
          <p>{dictionary.cookie.必要Cookies說明}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">{dictionary.cookie.功能Cookies}</h3>
          <p>{dictionary.cookie.功能Cookies說明}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">{dictionary.cookie.分析Cookies}</h3>
          <p>{dictionary.cookie.分析Cookies說明}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">{dictionary.cookie.定向Cookies}</h3>
          <p>{dictionary.cookie.定向Cookies說明}</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{dictionary.cookie.如何使用}</h2>
        <p className="mb-4">{dictionary.cookie.如何使用說明}</p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          {dictionary.cookie.使用原因列表.map((reason: string, index: number) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{dictionary.cookie.第三方Cookies}</h2>
        <p className="mb-4">{dictionary.cookie.第三方Cookies說明1}</p>
        <p className="mb-4">{dictionary.cookie.第三方Cookies說明2}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{dictionary.cookie.管理偏好}</h2>
        <p className="mb-4">{dictionary.cookie.管理偏好說明1}</p>
        <p className="mb-4">{dictionary.cookie.管理偏好說明2}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{dictionary.cookie.其他追蹤技術}</h2>
        <p className="mb-4">{dictionary.cookie.其他追蹤技術說明}</p>
        <ul className="mb-4 space-y-4">
          {dictionary.cookie.追蹤技術列表.map((tech: string, index: number) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: tech }} />
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{dictionary.cookie.政策變更}</h2>
        <p className="mb-4">{dictionary.cookie.政策變更說明}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{dictionary.法律.聯繫我們標題}</h2>
        <p className="mb-4">{dictionary.cookie.聯繫我們說明}</p>
        <p className="whitespace-pre-line">{dictionary.法律.聯繫信息}</p>
      </section>
    </motion.div>
  );
}
