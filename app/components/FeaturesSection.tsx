"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { LineChart, Bell, Share2, Calendar, Cloud, Smartphone } from "lucide-react";
import Image from "next/image";
import AppScreenshotCarousel from "./AppScreenshotCarousel";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function Feature({ icon, title, description, delay }: FeatureProps) {
  return (
    <motion.div
      className="flex flex-col bg-white/80 rounded-xl shadow-lg backdrop-blur-sm dark:bg-gray-800/60 duration-300 group hover:scale-105 hover:shadow-xl overflow-hidden transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex flex-col p-6 text-center items-center">
        <div className="bg-primary-100 p-4 rounded-full shadow-md text-primary dark:bg-primary-900/50 dark:group-hover:ring-primary-700 dark:shadow-primary-900/30 group-hover:ring-2 group-hover:ring-primary-300 mb-4 overflow-hidden relative transition-all">
          {/* 圓形背景動畫 */}
          <motion.div
            className="bg-gradient-to-tr absolute dark:from-primary-600/30 dark:to-primary-900/30 duration-300 from-primary-300/50 group-hover:opacity-100 inset-0 opacity-0 to-primary-600/50 transition-opacity"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          <div className="relative z-10">{icon}</div>
        </div>
        <h3 className="text-foreground text-xl font-bold group-hover:text-primary mb-3 transition-colors">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className="bg-gradient-to-r h-1 w-full duration-300 from-primary-300 group-hover:h-1.5 to-secondary-500 transition-all via-primary-500"></div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <LineChart className="h-6 text-primary w-6" />,
      title: "趨勢分析",
      description: "透過直觀的圖表，輕鬆掌握血壓變化趨勢，及早發現潛在問題",
    },
    {
      icon: <Bell className="h-6 text-primary w-6" />,
      title: "智能提醒",
      description: "自定義測量提醒，確保按時記錄，養成良好的健康管理習慣",
    },
    {
      icon: <Share2 className="h-6 text-primary w-6" />,
      title: "醫療分享",
      description: "一鍵生成專業報告，輕鬆與醫生分享，提升診療效率與準確性",
    },
    {
      icon: <Calendar className="h-6 text-primary w-6" />,
      title: "歷史記錄",
      description: "完整保存所有測量數據，隨時查閱，全面了解健康狀況變化",
    },
    {
      icon: <Cloud className="h-6 text-primary w-6" />,
      title: "雲端同步",
      description: "數據自動同步至雲端，多設備訪問，不怕資料遺失或設備更換",
    },
    {
      icon: <Smartphone className="h-6 text-primary w-6" />,
      title: "跨平台支援",
      description: "支援手機、平板與電腦，隨時隨地管理您的健康數據",
    },
  ];

  return (
    <section id="features" className="overflow-hidden py-24 relative">
      {/* 背景裝飾 */}
      <div className="-z-10 absolute inset-0 overflow-hidden">
        <div className="bg-gradient-to-r h-[1000px] rounded-full w-[1000px] -translate-x-1/2 -translate-y-1/2 absolute blur-3xl dark:from-primary-900/10 dark:to-secondary-900/10 from-primary-100/30 left-1/2 to-secondary-100/30 top-1/2"></div>
        <div className="bg-gradient-to-b h-24 absolute from-background left-0 right-0 to-transparent top-0"></div>
        <div className="bg-gradient-to-t h-24 absolute bottom-0 from-background left-0 right-0 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            className="bg-primary-100 rounded-full text-primary-700 text-sm dark:bg-primary-950 dark:text-primary-300 font-semibold inline-block mb-6 md:text-base px-3 py-1 tracking-wide uppercase mr-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            完整功能
          </motion.span>
          <motion.h2
            className="text-4xl text-foreground font-bold inline-block mb-6 md:text-5xl relative tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            功能特點
            <div className="bg-gradient-to-r h-1 -bottom-3 absolute from-primary-500/80 left-0 right-0 to-secondary-500/80 dark:from-primary-400 dark:to-secondary-400"></div>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl md:text-xl mt-4 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            我們的血壓管理應用提供全方位的功能，幫助您輕鬆追蹤、分析和管理血壓數據
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 relative" ref={ref}>
          {/* 左側功能列表 */}
          <div className="order-2 lg:col-span-4 lg:order-1">
            <div className="grid grid-cols-1 gap-8">
              {features.slice(0, 3).map((feature, index) => (
                <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} delay={0.3 + index * 0.1} />
              ))}
            </div>
          </div>

          {/* 中間應用截圖 */}
          <motion.div
            className="flex order-1 justify-center lg:col-span-4 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="border-[6px] border-gray-900 h-[550px] rounded-[2.8rem] shadow-2xl w-full dark:border-gray-800 dark:shadow-primary-900/30 max-w-[300px] md:h-[600px] md:max-w-[320px] overflow-hidden relative">
              {/* iPhone 16 Pro 動態島 */}
              <div className="flex bg-black h-[38px] justify-center rounded-b-3xl w-[120px] -translate-x-1/2 absolute items-center left-1/2 top-0 z-30">
                <div className="flex bg-black h-[26px] rounded-full w-[90px] items-center px-2 space-x-2">
                  <div className="bg-gray-800 h-3 rounded-full w-3 relative ring-1 ring-gray-700">
                    <div className="bg-blue-400/40 h-1 rounded-full w-1 absolute right-0.5 top-0.5"></div>
                  </div>
                  <div className="bg-gray-800/80 h-2 rounded-full w-2"></div>
                </div>
              </div>

              {/* iPhone 16 Pro 側邊按鈕 */}
              <div className="bg-gray-800 h-12 rounded-l-md w-[6px] -left-[6px] absolute dark:bg-gray-700 top-24 z-30"></div>
              <div className="bg-gray-800 h-16 rounded-l-md w-[6px] -left-[6px] absolute dark:bg-gray-700 top-40 z-30"></div>
              <div className="bg-gray-800 h-16 rounded-l-md w-[6px] -left-[6px] absolute dark:bg-gray-700 top-60 z-30"></div>

              {/* iPhone 16 Pro 右側按鈕 */}
              <div className="bg-gray-800 h-16 rounded-r-md w-[6px] -right-[6px] absolute dark:bg-gray-700 top-32 z-30"></div>

              <div className="bg-gradient-radial absolute dark:from-primary-900/20 dark:to-secondary-900/20 from-primary-500/5 inset-0 to-secondary-500/10"></div>

              {/* 發光效果 */}
              <motion.div
                className="bg-gradient-to-tr -inset-10 -z-10 absolute blur-3xl dark:from-primary-600/10 dark:to-accent-600/10 dark:via-secondary-600/10 from-primary-500/20 opacity-60 to-accent-500/20 via-secondary-500/20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <div className="absolute inset-0">
                <AppScreenshotCarousel />
              </div>

              {/* 裝飾元素 - 簡約圓點 */}
              <div className="bg-secondary-400/20 h-16 rounded-full w-16 -right-8 -top-8 absolute blur-xl dark:bg-secondary-600/10"></div>
              <div className="bg-primary-400/20 h-16 rounded-full w-16 -bottom-8 -left-8 absolute blur-xl dark:bg-primary-600/10"></div>
            </div>
          </motion.div>

          {/* 右側功能列表 */}
          <div className="order-3 lg:col-span-4">
            <div className="grid grid-cols-1 gap-8">
              {features.slice(3, 6).map((feature, index) => (
                <Feature key={index + 3} icon={feature.icon} title={feature.title} description={feature.description} delay={0.3 + (index + 3) * 0.1} />
              ))}
            </div>
          </div>

          {/* 底部裝飾元素 */}
          <div className="bg-gradient-to-t h-16 absolute bottom-0 from-background left-0 right-0 to-transparent"></div>
          <div className="bg-gradient-to-r h-1 rounded-full w-48 -translate-x-1/2 absolute bottom-4 from-primary-500/20 left-1/2 to-accent-500/20 via-secondary-500/60"></div>
        </div>
      </div>
    </section>
  );
}
