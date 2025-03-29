/**
 * @ Author: firstfu
 * @ Create Time: 2024-05-04 18:53:45
 * @ Description: 顯示血壓管家應用功能特色的部分組件
 */

"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { LineChart, Bell, Share2, Calendar, Cloud, Smartphone } from "lucide-react";
import Image from "next/image";
import { useLocale } from "../i18n/context";

// 輪播圖片集
const featureImages = [
  {
    src: "/images/screen1.png",
    alt: "血壓記錄App畫面 - 主頁",
  },
  {
    src: "/images/screen2.png",
    alt: "血壓記錄App畫面 - 數據分析",
  },
  {
    src: "/images/screen3.png",
    alt: "血壓記錄App畫面 - 歷史記錄",
  },
  {
    src: "/images/screen4.png",
    alt: "血壓記錄App畫面 - 健康報告",
  },
];

// SVG手機預覽元件
const PhonePreviewSVG = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const screenImages = featureImages;

  // 自動輪播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenIndex(prev => (prev + 1) % screenImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [screenImages.length]);

  return (
    <div className="h-full w-full relative">
      <svg viewBox="0 0 360 720" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        {/* 手機外框 */}
        <defs>
          <linearGradient id="featureScreenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="featurePhoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#222" />
            <stop offset="100%" stopColor="#333" />
          </linearGradient>
          <clipPath id="featureScreenClip">
            <rect x="18" y="18" width="324" height="684" rx="32" ry="32" />
          </clipPath>
        </defs>

        {/* 手機框架 */}
        <rect x="0" y="0" width="360" height="720" rx="54" ry="54" className="fill-gray-900 dark:fill-gray-800" />

        {/* 手機內框 */}
        <rect x="18" y="18" width="324" height="684" rx="44" ry="44" fill="#f8fafc" className="dark:fill-gray-900" />

        {/* 動態島 */}
        <rect x="120" y="18" width="120" height="40" rx="20" ry="20" className="fill-black" />
        <rect x="135" y="24" width="90" height="28" rx="14" ry="14" className="fill-black" />

        {/* 前置鏡頭等 */}
        <circle cx="160" cy="38" r="3.5" className="fill-gray-800" />
        <circle cx="160.5" cy="38.5" r="1.2" className="fill-blue-400/40" />
        <circle cx="174" cy="38" r="2.5" className="fill-gray-800/80" />

        {/* 手機按鈕 */}
        {/* 電源鍵 */}
        <rect x="359" y="160" width="8" height="90" rx="3" ry="3" className="fill-gray-800 dark:fill-gray-700" />

        {/* 音量上鍵 */}
        <rect x="-7" y="140" width="8" height="70" rx="3" ry="3" className="fill-gray-800 dark:fill-gray-700" />

        {/* 音量下鍵 */}
        <rect x="-7" y="220" width="8" height="70" rx="3" ry="3" className="fill-gray-800 dark:fill-gray-700" />

        {/* 靜音鍵 */}
        <rect x="-7" y="300" width="8" height="45" rx="3" ry="3" className="fill-gray-800 dark:fill-gray-700" />

        {/* 屏幕内容区域 */}
        <g clipPath="url(#featureScreenClip)">
          <rect x="18" y="18" width="324" height="684" fill="url(#featureScreenGradient)" />

          {/* 使用圖片 */}
          <image href={screenImages[currentScreenIndex].src} x="18" y="18" width="324" height="684" preserveAspectRatio="xMidYMid slice" />
        </g>

        {/* 反射效果 */}
        <rect
          x="18"
          y="18"
          width="324"
          height="684"
          rx="44"
          ry="44"
          fill="transparent"
          className="opacity-20"
          style={{
            mixBlendMode: "soft-light",
          }}
        >
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="5s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>
  );
};

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
  const { dictionary } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <LineChart className="h-6 text-primary w-6" />,
      title: dictionary?.首頁?.功能特色?.特色標題1 || "趨勢分析",
      description: dictionary?.首頁?.功能特色?.特色描述1 || "透過直觀的圖表，輕鬆掌握血壓變化趨勢，及早發現潛在問題",
    },
    {
      icon: <Bell className="h-6 text-primary w-6" />,
      title: dictionary?.首頁?.功能特色?.特色標題2 || "智能提醒",
      description: dictionary?.首頁?.功能特色?.特色描述2 || "自定義測量提醒，確保按時記錄，養成良好的健康管理習慣",
    },
    {
      icon: <Share2 className="h-6 text-primary w-6" />,
      title: dictionary?.首頁?.功能特色?.特色標題3 || "醫療分享",
      description: dictionary?.首頁?.功能特色?.特色描述3 || "一鍵生成專業報告，輕鬆與醫生分享，提升診療效率與準確性",
    },
    {
      icon: <Calendar className="h-6 text-primary w-6" />,
      title: dictionary?.首頁?.功能特色?.特色標題4 || "歷史記錄",
      description: dictionary?.首頁?.功能特色?.特色描述4 || "完整保存所有測量數據，隨時查閱，全面了解健康狀況變化",
    },
    {
      icon: <Cloud className="h-6 text-primary w-6" />,
      title: dictionary?.首頁?.功能特色?.特色標題5 || "雲端同步",
      description: dictionary?.首頁?.功能特色?.特色描述5 || "數據自動同步至雲端，多設備訪問，不怕資料遺失或設備更換",
    },
    {
      icon: <Smartphone className="h-6 text-primary w-6" />,
      title: dictionary?.首頁?.功能特色?.特色標題6 || "跨平台支援",
      description: dictionary?.首頁?.功能特色?.特色描述6 || "支援手機、平板與電腦，隨時隨地管理您的健康數據",
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
            {dictionary?.首頁?.功能特色?.徽章文字 || "完整功能"}
          </motion.span>
          <motion.h2
            className="text-4xl text-foreground font-bold inline-block mb-6 md:text-5xl relative tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {dictionary?.首頁?.功能特色?.標題 || "功能特點"}
            <div className="bg-gradient-to-r h-1 -bottom-3 absolute from-primary-500/80 left-0 right-0 to-secondary-500/80 dark:from-primary-400 dark:to-secondary-400"></div>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl md:text-xl mt-4 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {dictionary?.首頁?.功能特色?.副標題 || "我們的血壓管理應用提供全方位的功能，幫助您輕鬆追蹤、分析和管理血壓數據"}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 relative" ref={ref}>
          {/* 左側功能列表 */}
          <div className="order-2 lg:col-span-4 lg:order-1 lg:pr-4">
            <div className="grid grid-cols-1 gap-10">
              {features.slice(0, 3).map((feature, index) => (
                <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} delay={0.3 + index * 0.1} />
              ))}
            </div>
          </div>

          {/* 中間應用截圖 */}
          <motion.div
            className="flex order-1 justify-center items-center lg:col-span-4 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="h-[620px] w-full max-w-[350px] md:h-[680px] md:max-w-[380px] overflow-hidden relative">
              {/* 發光效果 */}
              <motion.div
                className="bg-gradient-to-tr -inset-20 -z-10 absolute blur-3xl dark:from-primary-600/20 dark:to-accent-600/20 dark:via-secondary-600/20 from-primary-500/30 opacity-80 to-accent-500/30 via-secondary-500/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <PhonePreviewSVG />

              {/* 裝飾元素 - 簡約圓點 */}
              <div className="bg-secondary-400/30 h-20 rounded-full w-20 -right-10 -top-10 absolute blur-xl dark:bg-secondary-600/20"></div>
              <div className="bg-primary-400/30 h-20 rounded-full w-20 -bottom-10 -left-10 absolute blur-xl dark:bg-primary-600/20"></div>
            </div>
          </motion.div>

          {/* 右側功能列表 */}
          <div className="order-3 lg:col-span-4 lg:pl-4">
            <div className="grid grid-cols-1 gap-10">
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
