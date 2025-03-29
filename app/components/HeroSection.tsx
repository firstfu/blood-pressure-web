// @ Author: firstfu
// @ Create Time: 2024-08-05 12:08:31
// @ Description: Hero Section - 首頁主視覺區塊，包含產品介紹和手機預覽效果

"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Activity, Share2, ChevronDown, Star, Droplets, BarChart2, Shield, Smartphone, ChevronLeft, ChevronRight, Users, Clock, Lock } from "lucide-react";
import { motion, useScroll, useTransform, useInView, AnimatePresence, useMotionTemplate, useSpring } from "framer-motion";
import { Input } from "@/components/ui/input";
import AppScreenshotCarousel from "./AppScreenshotCarousel";
import { useLocale } from "../i18n/context";

// 輪播圖片集
const heroImages = [
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
  //   {
  //     src: "/images/screen5.png",
  //     alt: "血壓記錄App畫面 - 個人設定",
  //   },
  //   {
  //     src: "/images/screen6.png",
  //     alt: "血壓記錄App畫面 - 智能提醒",
  //   },
];

// 動畫配置
const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  },
  item: {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  },
  floating: {
    y: [0, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  },
};

// 手機預覽元件
const PhonePreview = ({ y }) => (
  <motion.div className="bg-gray-800 border-[14px] border-gray-900 h-[620px] rounded-[3rem] shadow-2xl w-[300px] dark:border-gray-800 mx-auto overflow-hidden relative">
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-full w-full relative">
        <AppScreenshotCarousel />
      </div>
    </div>
    <PhoneButtons />
    <ReflectionEffect />
  </motion.div>
);

// 手機按鈕元件
const PhoneButtons = () => (
  <>
    <div className="bg-gray-900 h-8 rounded-l w-1 -right-[14px] absolute dark:bg-gray-800 top-[140px]"></div>
    <div className="bg-gray-900 h-12 rounded-r w-1 -left-[14px] absolute dark:bg-gray-800 top-[120px]"></div>
    <div className="bg-gray-900 h-12 rounded-r w-1 -left-[14px] absolute dark:bg-gray-800 top-[170px]"></div>
  </>
);

// 反光效果元件
const ReflectionEffect = () => (
  <motion.div
    className="bg-gradient-to-tr absolute from-transparent inset-0 pointer-events-none to-transparent via-white/10"
    animate={{
      opacity: [0.5, 0.8, 0.5],
      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);

export default function HeroSection() {
  const { dictionary, locale } = useLocale();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: false, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // 社會證明數據 - 使用字典中的翻譯
  const socialProofs = [
    {
      icon: <Shield className="h-7 w-7 md:h-5 md:w-5" />,
      count: "100%",
      text: dictionary?.首頁?.社會證明?.隱私保障 || "隱私保障技術",
    },
    {
      icon: <Heart className="h-7 w-7 md:h-5 md:w-5" />,
      count: locale === "en" ? "Professional" : "專業",
      text: dictionary?.首頁?.社會證明?.醫療顧問 || "醫療顧問團隊監製",
    },
    {
      icon: <Clock className="h-7 w-7 md:h-5 md:w-5" />,
      count: locale === "en" ? "Early" : "提前",
      text: dictionary?.首頁?.社會證明?.搶先使用 || "獲得搶先使用資格",
    },
  ];

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const handlePreRegister = async () => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      console.error("註冊失敗", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" ref={heroRef} className="md:pt-20 mt-0 overflow-hidden pb-20 pt-12 relative">
      <BackgroundDecorations />

      <div className="container md:px-8 mx-auto px-5">
        <motion.div style={{ opacity }} className="flex flex-col gap-8 md:gap-16 items-center lg:flex-row pt-0">
          {/* 左側內容 */}
          <motion.div className="-mt-4 lg:w-1/2 md:space-y-8 space-y-4" variants={animations.container} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <BadgeSection dictionary={dictionary} />
            <HeadingSection dictionary={dictionary} />
            <motion.p className="text-base md:text-lg text-muted-foreground text-optimized font-sans leading-relaxed max-w-2xl tracking-wide" variants={animations.item}>
              <strong className="text-foreground hidden md:inline">每4個成年人就有1人</strong>
              <span className="md:hidden">{dictionary?.首頁?.英雄區塊?.手機版副標題 || "每4人就有1人有高血壓風險。智能血壓管家助您輕鬆記錄、分析血壓，守護健康。"}</span>
              <span className="hidden md:inline">
                {dictionary?.首頁?.英雄區塊?.副標題 || "面臨高血壓風險。我們的智能血壓管家為您提供簡便的記錄工具和專業的分析功能，幫助您更有效地監測和管理血壓數值。"}
              </span>
            </motion.p>
            <ActionButtons handlePreRegister={handlePreRegister} isSubmitting={isSubmitting} isSuccess={isSuccess} email={email} setEmail={setEmail} dictionary={dictionary} />
          </motion.div>

          {/* 右側 App 預覽 */}
          <motion.div
            className="flex justify-center items-center lg:-translate-y-10 lg:mt-0 lg:translate-x-5 lg:w-1/2 mt-8 relative"
            style={{ y }}
            variants={animations.container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <PhonePreview y={y} />
            <BackgroundGlow />
          </motion.div>
        </motion.div>
      </div>

      {/* 成功提示 */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg shadow-lg text-center -translate-x-1/2 bottom-5 dark:bg-gray-800 fixed left-1/2 px-4 py-3 transform z-50"
          >
            <div className="flex gap-2 items-center">
              <div className="bg-green-100 p-1.5 rounded-full text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-base">{dictionary?.首頁?.英雄區塊?.註冊成功訊息 || "預先註冊成功！您將獲得產品發布通知，並享有首批測試資格與專屬優惠。"}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 頁尾權益展示 - 整體區塊置中，文字左對齊 */}
      <div className="bg-transparent relative mt-8 md:mt-4 mb-12 md:mb-0 flex justify-center w-full">
        <div className="container flex justify-center">
          <motion.div className="max-w-xs" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <div className="border-t border-gray-100 dark:border-gray-800 py-6 w-full">
              {/* 社會證明區塊 - 整體置中但文字靠左對齊 */}
              <div className="flex flex-col space-y-5">
                {socialProofs.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-8 h-8 mr-3 flex items-center justify-center">
                      <div className="text-teal-600 dark:text-teal-400">{item.icon}</div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-teal-700 dark:text-teal-300 font-semibold mr-1.5">{item.count}</span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* BETA標籤 - 置於底部中心 */}
              <div className="flex justify-center w-full mt-8">
                <motion.span animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} className="flex items-center">
                  <span className="mr-2 bg-emerald-100 text-emerald-800 py-0.5 px-2 rounded-full dark:bg-emerald-900/30 dark:text-emerald-400 text-xs">BETA</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{dictionary?.首頁?.英雄區塊?.即將發布 || "即將推出"}</span>
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// 背景裝飾元件
const BackgroundDecorations = () => (
  <>
    <div className="bg-gradient-to-br -z-10 absolute dark:from-background dark:to-background/80 from-primary-50 inset-0 to-white top-0" />
    <motion.div
      className="bg-gradient-to-br h-1/3 w-1/3 -z-10 absolute blur-3xl dark:from-primary-600/10 dark:to-secondary-600/10 from-primary-200/30 right-0 to-secondary-200/30 top-0"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.7, 0.5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
    <motion.div
      className="bg-gradient-to-tr h-1/3 w-1/3 -z-10 absolute blur-3xl bottom-0 dark:from-primary-600/10 dark:to-accent-600/10 from-primary-200/30 left-0 to-accent-200/30"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
    <div className="bg-[linear-gradient(rgba(176,238,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(176,238,250,0.03)_1px,transparent_1px)] bg-[size:40px_40px] -z-10 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] absolute dark:bg-[linear-gradient(rgba(56,199,237,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(56,199,237,0.01)_1px,transparent_1px)] inset-0" />
  </>
);

// 徽章區塊元件
const BadgeSection = ({ dictionary }) => (
  <motion.div className="inline-flex" variants={animations.item}>
    <div className="bg-white dark:bg-gray-800 relative border-gradient-badge font-medium py-1 px-3 rounded-full text-xs uppercase tracking-wider">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500 dark:from-teal-300 dark:to-emerald-400">
        {dictionary?.首頁?.英雄區塊?.徽章文字 || "專業健康監測"}
      </span>
      <div className="absolute inset-px rounded-full border-gradient-glow animate-pulse"></div>
    </div>
  </motion.div>
);

// 標題區塊元件
const HeadingSection = ({ dictionary }) => (
  <motion.h1 className="font-bold heading-title lg:text-5xl md:text-4xl text-3xl !leading-tight tracking-tight font-display" variants={animations.item}>
    <span className="block">
      <motion.span
        className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500 dark:from-teal-300 dark:to-emerald-500"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      >
        {dictionary?.首頁?.英雄區塊?.主標題 || "智能血壓管理助手"}
      </motion.span>
    </span>
  </motion.h1>
);

// 動作按鈕元件
const ActionButtons = ({ handlePreRegister, isSubmitting, isSuccess, email, setEmail, dictionary }) => (
  <motion.div className="flex flex-col sm:flex-row gap-3 sm:items-center mt-2 sm:mt-0" variants={animations.item}>
    <div className="relative flex-grow">
      <Input
        type="email"
        placeholder={dictionary?.首頁?.英雄區塊?.輸入框文字 || "您的電子郵件"}
        className="shadow-sm border-slate-200 dark:border-slate-800 h-12 px-4 pr-24 rounded-full transition-all hover:border-teal-300 focus:border-teal-500 dark:focus:border-teal-400"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <div className="absolute right-[3px] top-[3px]">
        <Button
          onClick={() => email && handlePreRegister()}
          disabled={isSubmitting || isSuccess}
          className={`rounded-full !px-3 md:px-5 py-5 transition-all !h-10 ${
            isSuccess ? "bg-emerald-600 hover:bg-emerald-700" : "bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
          }`}
        >
          {isSubmitting ? (
            <div className="h-5 w-5 rounded-full border-2 animate-spin border-r-transparent border-white"></div>
          ) : isSuccess ? (
            <span className="flex items-center">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              {dictionary?.首頁?.英雄區塊?.已註冊 || "已預先註冊"}
            </span>
          ) : (
            <span>{dictionary?.首頁?.英雄區塊?.註冊按鈕 || "預先註冊"}</span>
          )}
        </Button>
      </div>
    </div>
  </motion.div>
);

// 背景光暈效果元件
const BackgroundGlow = () => (
  <motion.div
    className="bg-gradient-to-tr h-[300px] rounded-full w-[300px] -translate-x-1/2 -translate-y-1/2 -z-10 absolute blur-2xl dark:from-primary-500/10 dark:to-accent-500/10 dark:via-secondary-500/10 from-primary-500/30 left-1/2 to-accent-500/30 top-1/2 via-secondary-500/30"
    animate={{
      scale: [1, 1.1, 1],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);
