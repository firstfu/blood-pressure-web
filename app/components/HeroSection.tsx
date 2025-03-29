/**
 * @ Author: firstfu
 * @ Create Time: 2024-08-05 12:08:31
 * @ Description: Hero Section - 首頁主視覺區塊，包含產品介紹和手機預覽效果
 */

"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  Activity,
  Share2,
  ChevronDown,
  Star,
  Droplets,
  BarChart2,
  Shield,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Users,
  Clock,
  Lock,
  Loader2,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView, AnimatePresence, useMotionTemplate, useSpring } from "framer-motion";
import { Input } from "@/components/ui/input";
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

// SVG手機預覽元件
const PhonePreviewSVG = ({ y }) => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const screenImages = heroImages;

  // 自動輪播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenIndex(prev => (prev + 1) % screenImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [screenImages.length]);

  return (
    <motion.div className="w-[280px] h-[560px] md:w-[320px] md:h-[640px] lg:w-[360px] lg:h-[720px] mx-auto relative" style={{ y }}>
      <svg viewBox="0 0 360 720" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        {/* 手機外框 */}
        <defs>
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#222" />
            <stop offset="100%" stopColor="#333" />
          </linearGradient>
          <clipPath id="screenClip">
            <rect x="18" y="18" width="324" height="684" rx="32" ry="32" />
          </clipPath>
        </defs>

        {/* 手機框架 */}
        <rect x="0" y="0" width="360" height="720" rx="54" ry="54" className="fill-gray-900 dark:fill-gray-800" />

        {/* 手機內框 */}
        <rect x="18" y="18" width="324" height="684" rx="44" ry="44" fill="#f8fafc" className="dark:fill-gray-900" />

        {/* 手機按鈕 */}
        {/* 電源鍵 */}
        <rect x="359" y="160" width="4" height="90" rx="2" ry="2" className="fill-gray-800 dark:fill-gray-700" />
        {/* 音量上鍵 */}
        <rect x="-3" y="140" width="4" height="70" rx="2" ry="2" className="fill-gray-800 dark:fill-gray-700" />
        {/* 音量下鍵 */}
        <rect x="-3" y="220" width="4" height="70" rx="2" ry="2" className="fill-gray-800 dark:fill-gray-700" />

        {/* 頂部瀏海 */}
        <rect x="135" y="18" width="90" height="25" rx="12" ry="12" className="fill-gray-900 dark:fill-gray-800" />

        {/* 屏幕内容区域 */}
        <g clipPath="url(#screenClip)">
          <rect x="18" y="18" width="324" height="684" fill="url(#screenGradient)" />

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
    </motion.div>
  );
};

// SVG背景光暈效果元件
const BackgroundGlowSVG = () => (
  <motion.div
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
    animate={{
      scale: [1, 1.1, 1],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="var(--color-primary-500)" stopOpacity="0.3" className="dark:stop-opacity-[0.1]" />
          <stop offset="50%" stopColor="var(--color-secondary-500)" stopOpacity="0.2" className="dark:stop-opacity-[0.08]" />
          <stop offset="100%" stopColor="var(--color-accent-500)" stopOpacity="0.1" className="dark:stop-opacity-[0.03]" />
        </radialGradient>
      </defs>
      <circle cx="250" cy="250" r="230" fill="url(#glowGradient)" className="blur-2xl" />
    </svg>
  </motion.div>
);

// 社會證明項目元件
const SocialProofItem = ({ icon, count, text, className = "" }) => (
  <div className={`flex items-start ${className}`}>
    <div className="w-7 h-7 mr-3 flex-shrink-0 flex items-center justify-center">
      <div className="text-teal-600 dark:text-teal-400">{icon}</div>
    </div>
    <div className="text-left">
      <span className="text-teal-700 dark:text-teal-300 font-semibold block leading-tight text-lg md:text-base">{count}</span>
      <span className="text-slate-500 dark:text-slate-400 text-base md:text-sm block">{text}</span>
    </div>
  </div>
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
      icon: <Shield className="h-5 w-5" />,
      count: "100%",
      text: dictionary?.首頁?.社會證明?.隱私保障 || "隱私保障技術",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      count: locale === "en" ? "Professional" : "專業",
      text: dictionary?.首頁?.社會證明?.醫療顧問 || "醫療顧問團隊監製",
    },
    {
      icon: <Clock className="h-5 w-5" />,
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
    <section id="hero" ref={heroRef} className="md:pt-20 mt-0 overflow-hidden pb-16 pt-10 lg:pt-20 relative">
      <BackgroundDecorations />

      <div className="container md:px-8 mx-auto px-4">
        <motion.div style={{ opacity }} className="flex flex-col gap-6 md:gap-16 items-center lg:flex-row pt-0">
          {/* 左側內容 */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left"
            variants={animations.container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <BadgeSection dictionary={dictionary} />
            <HeadingSection dictionary={dictionary} />
            <motion.p
              className="text-lg md:text-lg text-muted-foreground text-optimized font-sans leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0 tracking-wide"
              variants={animations.item}
            >
              <strong className="text-foreground font-medium md:hidden">每4人就有1人</strong>
              <strong className="text-foreground hidden md:inline">每4個成年人就有1人</strong>
              <span className="md:hidden"> {dictionary?.首頁?.英雄區塊?.手機版副標題 || "有高血壓風險。智能血壓管家助您輕鬆記錄、分析血壓，守護健康。"}</span>
              <span className="hidden md:inline">
                {dictionary?.首頁?.英雄區塊?.副標題 || "面臨高血壓風險。我們的智能血壓管家為您提供簡便的記錄工具和專業的分析功能，幫助您更有效地監測和管理血壓數值。"}
              </span>
            </motion.p>
            <ActionButtons handlePreRegister={handlePreRegister} isSubmitting={isSubmitting} isSuccess={isSuccess} email={email} setEmail={setEmail} dictionary={dictionary} />
          </motion.div>

          {/* 右側 App 預覽 */}
          <motion.div
            className="flex justify-center items-center lg:translate-y-0 lg:mt-2 lg:translate-x-0 lg:w-1/2 mt-8 md:mt-6 pt-2 relative max-w-[280px] md:max-w-[320px] lg:max-w-none mx-auto"
            style={{ y }}
            variants={animations.container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <PhonePreviewSVG y={y} />
            <BackgroundGlowSVG />
          </motion.div>
        </motion.div>

        {/* 社會證明區塊 */}
        <div className="border-t border-gray-100 dark:border-gray-800 mt-10 pt-8">
          {/* 桌面版 - 水平排列 */}
          <div className="hidden md:flex justify-center items-start gap-16">
            {socialProofs.map((item, index) => (
              <SocialProofItem key={index} icon={item.icon} count={item.count} text={item.text} />
            ))}
          </div>

          {/* 移動版 - 垂直排列 */}
          <div className="flex flex-col items-center gap-6 md:hidden">
            {socialProofs.map((item, index) => (
              <SocialProofItem key={index} icon={item.icon} count={item.count} text={item.text} className="w-64" />
            ))}
          </div>
        </div>
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
  <motion.div className="inline-flex justify-center lg:justify-start" variants={animations.item}>
    <div className="bg-white dark:bg-gray-800 relative border-gradient-badge shadow-md font-medium py-3 px-7 md:py-2.5 md:px-6 rounded-full text-xl md:text-lg uppercase tracking-wider">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500 dark:from-teal-300 dark:to-emerald-400 font-semibold">
        {dictionary?.首頁?.英雄區塊?.徽章文字 || "專業健康監測"}
      </span>
      <motion.div
        className="absolute inset-px rounded-full border-gradient-glow"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
    </div>
  </motion.div>
);

// 標題區塊元件
const HeadingSection = ({ dictionary }) => (
  <motion.h1 className="font-bold heading-title text-4xl md:text-4xl lg:text-5xl !leading-tight tracking-tight font-display" variants={animations.item}>
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
  <motion.div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-3 sm:mt-0 mx-auto lg:mx-0 max-w-md lg:max-w-none" variants={animations.item}>
    <div className="relative flex-grow">
      <Input
        type="email"
        placeholder={dictionary?.首頁?.英雄區塊?.輸入框文字 || "您的電子郵件"}
        className="shadow-sm border-slate-200 dark:border-slate-800 h-14 sm:h-12 text-base px-5 pr-28 rounded-full transition-all hover:border-teal-300 focus:border-teal-500 dark:focus:border-teal-400"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <div className="absolute right-1 top-1">
        <Button
          onClick={() => email && handlePreRegister()}
          disabled={isSubmitting || isSuccess}
          className={`rounded-full px-5 h-12 sm:h-10 transition-all ${
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
              <span className="text-base font-medium">{dictionary?.首頁?.英雄區塊?.已註冊 || "已註冊"}</span>
            </span>
          ) : (
            <span className="text-base font-medium">{dictionary?.首頁?.英雄區塊?.註冊按鈕 || "預先註冊"}</span>
          )}
        </Button>
      </div>
    </div>
  </motion.div>
);
