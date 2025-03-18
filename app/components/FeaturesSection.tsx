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
      className="flex flex-col bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-4 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary shadow-md dark:shadow-primary-900/30 relative overflow-hidden group-hover:ring-2 group-hover:ring-primary-300 dark:group-hover:ring-primary-700 transition-all">
          {/* 圓形背景動畫 */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-primary-300/50 to-primary-600/50 dark:from-primary-600/30 dark:to-primary-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-primary-300 via-primary-500 to-secondary-500 group-hover:h-1.5 transition-all duration-300"></div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "趨勢分析",
      description: "透過直觀的圖表，輕鬆掌握血壓變化趨勢，及早發現潛在問題",
    },
    {
      icon: <Bell className="h-6 w-6 text-primary" />,
      title: "智能提醒",
      description: "自定義測量提醒，確保按時記錄，養成良好的健康管理習慣",
    },
    {
      icon: <Share2 className="h-6 w-6 text-primary" />,
      title: "醫療分享",
      description: "一鍵生成專業報告，輕鬆與醫生分享，提升診療效率與準確性",
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "歷史記錄",
      description: "完整保存所有測量數據，隨時查閱，全面了解健康狀況變化",
    },
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: "雲端同步",
      description: "數據自動同步至雲端，多設備訪問，不怕資料遺失或設備更換",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "跨平台支援",
      description: "支援手機、平板與電腦，隨時隨地管理您的健康數據",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-primary-100/30 to-secondary-100/30 dark:from-primary-900/10 dark:to-secondary-900/10 blur-3xl"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-primary text-sm md:text-base font-semibold tracking-wide uppercase mb-3 px-3 py-1 bg-primary-50 dark:bg-primary-900/20 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            完整功能
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            功能特點
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            我們的血壓管理應用提供全方位的功能，幫助您輕鬆追蹤、分析和管理血壓數據
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative" ref={ref}>
          {/* 左側功能列表 */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-8">
              {features.slice(0, 3).map((feature, index) => (
                <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} delay={0.3 + index * 0.1} />
              ))}
            </div>
          </div>

          {/* 中間應用截圖 */}
          <motion.div
            className="lg:col-span-4 flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-[300px] md:max-w-[320px] h-[550px] md:h-[600px] rounded-[2.8rem] overflow-hidden shadow-2xl dark:shadow-primary-900/30 border-[6px] border-gray-900 dark:border-gray-800">
              {/* iPhone 16 Pro 動態島 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[38px] bg-black rounded-b-3xl z-30 flex justify-center items-center">
                <div className="w-[90px] h-[26px] rounded-full bg-black flex items-center space-x-2 px-2">
                  <div className="w-3 h-3 rounded-full bg-gray-800 ring-1 ring-gray-700 relative">
                    <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-blue-400/40"></div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gray-800/80"></div>
                </div>
              </div>

              {/* iPhone 16 Pro 側邊按鈕 */}
              <div className="absolute top-24 -left-[6px] w-[6px] h-12 bg-gray-800 dark:bg-gray-700 rounded-l-md z-30"></div>
              <div className="absolute top-40 -left-[6px] w-[6px] h-16 bg-gray-800 dark:bg-gray-700 rounded-l-md z-30"></div>
              <div className="absolute top-60 -left-[6px] w-[6px] h-16 bg-gray-800 dark:bg-gray-700 rounded-l-md z-30"></div>

              {/* iPhone 16 Pro 右側按鈕 */}
              <div className="absolute top-32 -right-[6px] w-[6px] h-16 bg-gray-800 dark:bg-gray-700 rounded-r-md z-30"></div>

              <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 to-secondary-500/10 dark:from-primary-900/20 dark:to-secondary-900/20"></div>

              {/* 發光效果 */}
              <motion.div
                className="absolute -z-10 -inset-10 bg-gradient-to-tr from-primary-500/20 via-secondary-500/20 to-accent-500/20 dark:from-primary-600/10 dark:via-secondary-600/10 dark:to-accent-600/10 blur-3xl opacity-60"
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
              <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-secondary-400/20 dark:bg-secondary-600/10 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-primary-400/20 dark:bg-primary-600/10 blur-xl"></div>
            </div>
          </motion.div>

          {/* 右側功能列表 */}
          <div className="lg:col-span-4 order-3">
            <div className="grid grid-cols-1 gap-8">
              {features.slice(3, 6).map((feature, index) => (
                <Feature key={index + 3} icon={feature.icon} title={feature.title} description={feature.description} delay={0.3 + (index + 3) * 0.1} />
              ))}
            </div>
          </div>

          {/* 底部裝飾元素 */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-primary-500/20 via-secondary-500/60 to-accent-500/20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
