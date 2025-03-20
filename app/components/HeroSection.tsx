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
  {
    src: "/images/screen5.png",
    alt: "血壓記錄App畫面 - 個人設定",
  },
  {
    src: "/images/screen6.png",
    alt: "血壓記錄App畫面 - 智能提醒",
  },
];

// 社會證明數據
const socialProofs = [
  {
    icon: <Shield className="h-7 w-7 md:h-5 md:w-5" />,
    count: "100%",
    text: "隱私保障技術",
  },
  {
    icon: <Heart className="h-7 w-7 md:h-5 md:w-5" />,
    count: "專業",
    text: "醫療顧問團隊監製",
  },
  {
    icon: <Clock className="h-7 w-7 md:h-5 md:w-5" />,
    count: "提前",
    text: "獲得搶先使用資格",
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: false, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

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
            <BadgeSection />
            <HeadingSection />
            <motion.p className="text-base md:text-lg text-muted-foreground text-optimized font-sans leading-relaxed max-w-2xl tracking-wide" variants={animations.item}>
              <strong className="text-foreground hidden md:inline">每4個成年人就有1人</strong>
              <span className="md:hidden">每4人就有1人有高血壓風險。</span>
              <span className="hidden md:inline">面臨高血壓風險。我們的智能血壓管家為您提供簡便的記錄工具和專業的分析功能，幫助您更有效地監測和管理血壓數值。</span>
              <span className="md:hidden">智能血壓管家助您輕鬆記錄、分析血壓，守護健康。</span>
            </motion.p>
            <ActionButtons handlePreRegister={handlePreRegister} isSubmitting={isSubmitting} isSuccess={isSuccess} email={email} setEmail={setEmail} />
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
              <span className="text-base">
                預先註冊成功！您將獲得產品發布通知，並享有<strong>首批測試資格與專屬優惠</strong>。
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 頁尾權益展示 */}
      <div className="bg-transparent absolute bottom-0 left-0 right-0">
        <div className="container mx-auto">
          <motion.div className="flex justify-center items-center px-4 py-4" initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{ duration: 0.8, delay: 1.2 }}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center lg:gap-12">
              {socialProofs.map((proof, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 md:gap-2 items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                >
                  <div className="text-primary-400/80">{proof.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-foreground/80 text-base md:text-sm font-medium">{proof.count}</span>
                    <span className="text-muted-foreground/70 text-sm md:text-xs">{proof.text}</span>
                  </div>
                </motion.div>
              ))}
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
const BadgeSection = () => (
  <motion.div
    className="bg-accent-50 border border-accent-200 rounded-full dark:bg-accent-900/30 dark:border-accent-800 inline-flex items-center mb-3 px-3 py-1.5"
    variants={animations.item}
  >
    <span className="flex items-center">
      <Star className="h-4 text-yellow-500 w-4 dark:text-yellow-400 mr-1 fill-current" />
      <span className="text-base text-gradient-primary-to-secondary font-medium md:text-lg">2025 年血壓記錄應用 | 產品即將上線，開放預先註冊</span>
    </span>
  </motion.div>
);

// 標題區塊元件
const HeadingSection = () => (
  <motion.div className="space-y-4" variants={animations.item}>
    <h1 className="text-4xl font-bold heading-serif leading-[1.1] lg:text-6xl max-w-4xl md:text-5xl tracking-tight xl:text-7xl">
      <span className="text-foreground">輕鬆監測</span>
      <div className="inline-block md:mt-4 mt-2 relative">
        <span className="text-gradient-primary relative z-10">您的血壓數值</span>
        <motion.span
          className="bg-primary-200/50 h-3 rounded-full w-full -z-0 absolute bottom-1 dark:bg-primary-600/20 left-0"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>
      <span className="text-foreground block md:inline">，簡單又實用</span>
    </h1>
    <p className="text-muted-foreground text-xl font-rounded md:text-2xl mt-2 tracking-wide">記錄、分析、管理血壓，追蹤測試結果</p>
  </motion.div>
);

// 動作按鈕元件
const ActionButtons = ({ handlePreRegister, isSubmitting, isSuccess, email, setEmail }) => (
  <motion.div className="space-y-4" variants={animations.item}>
    <div className="flex flex-col gap-2 sm:flex-row">
      <div className="flex-1 relative">
        <Input
          type="email"
          placeholder="您的電子郵件"
          className="bg-background border-primary-200 rounded-full text-base dark:border-primary-800 px-5 py-6"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <Button
        size="lg"
        onClick={handlePreRegister}
        disabled={isSubmitting}
        className="rounded-full shadow-medium text-base duration-300 font-medium gradient-primary-to-accent group hover:shadow-lg px-8 py-6 transition-all"
      >
        <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="h-5 text-white w-5 -ml-1 animate-spin mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              處理中...
            </span>
          ) : (
            <>
              預先註冊
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
              >
                <ArrowRight className="h-5 w-5 inline-block ml-2" />
              </motion.span>
            </>
          )}
        </motion.span>
      </Button>
    </div>

    <p className="text-center text-muted-foreground text-sm md:text-left mx-auto">✓ 優先獲得上線通知 | ✓ 首發優惠資格 </p>

    <Button
      size="lg"
      variant="outline"
      asChild
      className="bg-background border-primary-300 rounded-full text-base w-full dark:border-primary-800/60 dark:hover:bg-primary-900/20 font-medium group hover:bg-primary-50 mt-2 px-6 py-6 sm:w-auto"
    >
      <motion.a href="#features" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        了解產品特色
        <motion.span
          animate={{ y: [0, 2, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="inline-block ml-2"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </Button>
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
