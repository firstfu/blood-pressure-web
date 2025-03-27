/**
 * @ Author: firstfu
 * @ Create Time: 2024-08-01 16:10:42
 * @ Description: 多語言功能演示頁面
 */

"use client";

import { useState } from "react";
import { useLocale } from "@/app/i18n/context";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function I18nDemoPage() {
  const { dictionary, locale, isLoading } = useLocale();

  // 卡片動畫變體
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

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

        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 text-center text-slate-900 dark:text-white"
          >
            {dictionary.首頁.標題}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-center mb-12 text-slate-700 dark:text-slate-300"
          >
            {dictionary.首頁.副標題}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-12">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-teal-600 dark:text-teal-400">{dictionary.首頁.功能特色.標題}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { key: "特色1", icon: "📊" },
                  { key: "特色2", icon: "📈" },
                  { key: "特色3", icon: "📋" },
                  { key: "特色4", icon: "⏰" },
                ].map((feature, i) => (
                  <motion.div
                    key={feature.key}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    className="flex items-start space-x-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                  >
                    <div className="text-2xl">{feature.icon}</div>
                    <div className="text-slate-800 dark:text-slate-200">{dictionary.首頁.功能特色[feature.key as keyof typeof dictionary.首頁.功能特色]}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-teal-600 dark:text-teal-400">{dictionary.血壓.歷史記錄}</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b dark:border-slate-700">
                      <th className="text-left py-3 px-4">{dictionary.血壓.日期}</th>
                      <th className="text-left py-3 px-4">{dictionary.血壓.時間}</th>
                      <th className="text-left py-3 px-4">{dictionary.血壓.收縮壓}</th>
                      <th className="text-left py-3 px-4">{dictionary.血壓.舒張壓}</th>
                      <th className="text-left py-3 px-4">{dictionary.血壓.脈搏}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: "2024-07-31", time: "08:30", systolic: 120, diastolic: 80, pulse: 72 },
                      { date: "2024-07-31", time: "20:15", systolic: 118, diastolic: 78, pulse: 70 },
                      { date: "2024-07-30", time: "09:00", systolic: 122, diastolic: 82, pulse: 75 },
                    ].map((record, i) => (
                      <motion.tr
                        key={`${record.date}-${record.time}`}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        className="border-b dark:border-slate-700"
                      >
                        <td className="py-3 px-4">{record.date}</td>
                        <td className="py-3 px-4">{record.time}</td>
                        <td className="py-3 px-4 text-rose-600 dark:text-rose-400">{record.systolic}</td>
                        <td className="py-3 px-4 text-blue-600 dark:text-blue-400">{record.diastolic}</td>
                        <td className="py-3 px-4 text-purple-600 dark:text-purple-400">{record.pulse}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex justify-end">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">{dictionary.血壓.新增記錄}</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
