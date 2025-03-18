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
      className="flex flex-col items-center text-center p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-4 p-3 rounded-full bg-primary-100 dark:bg-primary-900/30">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
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
    <section id="features" className="py-20 relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary-100/30 to-secondary-100/30 dark:from-primary-900/10 dark:to-secondary-900/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            功能特點
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            我們的血壓管理應用提供全方位的功能，幫助您輕鬆追蹤、分析和管理血壓數據
          </motion.p>
        </div>

        <div ref={ref} className="relative">
          {/* 應用截圖 */}
          <motion.div
            className="mb-32 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-[380px] md:max-w-[420px] h-[680px] md:h-[750px] rounded-[2.5rem] overflow-hidden shadow-2xl dark:shadow-primary-900/20">
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
            </div>
          </motion.div>

          {/* 功能列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} delay={0.3 + index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
