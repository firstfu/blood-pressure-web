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

// 特色功能列表
const features = [
  {
    icon: <Heart className="w-6 h-6" />,
    text: "簡單記錄",
    description: "快速輸入並管理血壓數據",
    color: "bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300",
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    text: "數據趨勢",
    description: "清晰視覺化健康數據",
    color: "bg-secondary-100 text-secondary-600 dark:bg-secondary-900/40 dark:text-secondary-300",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    text: "醫療連結",
    description: "方便與醫生分享報告",
    color: "bg-accent-100 text-accent-600 dark:bg-accent-900/40 dark:text-accent-300",
  },
];

// 社會證明數據
const socialProofs = [
  {
    icon: <Shield className="w-5 h-5" />,
    count: "100%",
    text: "隱私保障技術",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    count: "專業",
    text: "醫療顧問團隊監製",
  },
  {
    icon: <Clock className="w-5 h-5" />,
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

// 特色功能卡片元件
const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
    whileHover={{ y: -3, boxShadow: "0 6px 15px -5px rgba(0, 0, 0, 0.1)" }}
    className="w-full h-full"
  >
    <Card className="flex flex-col items-center gap-3 px-5 py-6 h-full bg-background hover:bg-accent-50 dark:hover:bg-accent-900/5 transition-all duration-300 border-none shadow-soft">
      <div className={`${feature.color} p-4 rounded-full mb-1`}>{feature.icon}</div>
      <div className="flex flex-col items-center text-center">
        <span className="text-lg md:text-xl font-semibold text-foreground mb-2">{feature.text}</span>
        <span className="text-sm md:text-base text-muted-foreground">{feature.description}</span>
      </div>
    </Card>
  </motion.div>
);

// 手機預覽元件
const PhonePreview = ({ y }) => (
  <motion.div className="relative mx-auto w-[300px] h-[620px] rounded-[3rem] border-[14px] border-gray-900 dark:border-gray-800 overflow-hidden shadow-2xl bg-gray-800">
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-6 w-full bg-[#2A7FD5] flex items-center justify-between px-3">
        <div className="text-xs text-white">8:45</div>
        <div className="flex items-center space-x-1">
          <StatusBarIcons />
        </div>
      </div>
      <div className="relative h-full w-full">
        <AppScreenshotCarousel />
      </div>
    </div>
    <PhoneButtons />
    <ReflectionEffect />
  </motion.div>
);

// 狀態欄圖標元件
const StatusBarIcons = () => (
  <>
    <div className="w-3 h-3">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-white">
        <path d="M12 20.9l-1.4-1.4c-4.4-4.4-7.3-7.3-7.3-10.8C3.3 5.9 5.9 3.3 9 3.3c1.7 0 3.3.8 4.4 2.1 1-1.3 2.7-2.1 4.4-2.1 3.1 0 5.7 2.6 5.7 5.7 0 3.5-2.9 6.4-7.3 10.8L12 20.9z" />
      </svg>
    </div>
    <div className="w-3 h-3">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-white">
        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
      </svg>
    </div>
    <div className="w-3 h-3">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-white">
        <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z" />
      </svg>
    </div>
  </>
);

// 手機按鈕元件
const PhoneButtons = () => (
  <>
    <div className="absolute -right-[14px] top-[140px] h-8 w-1 bg-gray-900 dark:bg-gray-800 rounded-l"></div>
    <div className="absolute -left-[14px] top-[120px] h-12 w-1 bg-gray-900 dark:bg-gray-800 rounded-r"></div>
    <div className="absolute -left-[14px] top-[170px] h-12 w-1 bg-gray-900 dark:bg-gray-800 rounded-r"></div>
  </>
);

// 反光效果元件
const ReflectionEffect = () => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"
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
    <section id="hero" ref={heroRef} className="relative pt-20 md:pt-28 pb-20 overflow-hidden mt-0">
      <BackgroundDecorations />

      <div className="container mx-auto px-5 md:px-8">
        <motion.div style={{ opacity }} className="flex flex-col lg:flex-row items-center gap-16 pt-4">
          {/* 左側內容 */}
          <motion.div className="lg:w-1/2 space-y-8 md:space-y-10" variants={animations.container} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <BadgeSection />
            <HeadingSection />
            <motion.p className="text-optimized font-sans text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed tracking-wide" variants={animations.item}>
              <strong className="text-foreground">每4個成年人就有1人</strong>
              面臨高血壓風險。我們的智能血壓管理平台為您提供簡便的記錄工具、專業的分析功能，並能與醫療團隊協作，幫助您更有效地監測和管理血壓健康。
            </motion.p>
            <ActionButtons handlePreRegister={handlePreRegister} isSubmitting={isSubmitting} isSuccess={isSuccess} email={email} setEmail={setEmail} />
            <SocialProofSection />
            <FeaturesSection />
          </motion.div>

          {/* 右側 App 預覽 */}
          <motion.div
            className="lg:w-1/2 relative lg:translate-x-5 mt-12 lg:mt-0 lg:-translate-y-60 flex items-center justify-center"
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
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-lg z-50 text-center"
          >
            <div className="flex items-center gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-1.5 rounded-full">
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
    </section>
  );
}

// 背景裝飾元件
const BackgroundDecorations = () => (
  <>
    <div className="absolute inset-0 top-0 bg-gradient-to-br from-primary-50 to-white dark:from-background dark:to-background/80 -z-10" />
    <motion.div
      className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 dark:from-primary-600/10 dark:to-secondary-600/10 blur-3xl -z-10"
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
      className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary-200/30 to-accent-200/30 dark:from-primary-600/10 dark:to-accent-600/10 blur-3xl -z-10"
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
    <div className="absolute inset-0 bg-[linear-gradient(rgba(176,238,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(176,238,250,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(56,199,237,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(56,199,237,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
  </>
);

// 徽章區塊元件
const BadgeSection = () => (
  <motion.div
    className="inline-flex items-center px-3 py-1.5 border border-accent-200 dark:border-accent-800 rounded-full bg-accent-50 dark:bg-accent-900/30 mb-3"
    variants={animations.item}
  >
    <span className="flex items-center">
      <Star className="w-4 h-4 mr-1 text-accent-500 dark:text-accent-400" />
      <span className="text-gradient-primary-to-secondary text-base md:text-lg font-medium">2025 年健康管理應用 | 產品即將上線，開放預先註冊</span>
    </span>
  </motion.div>
);

// 標題區塊元件
const HeadingSection = () => (
  <motion.div className="space-y-4" variants={animations.item}>
    <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1]">
      <span className="text-foreground">輕鬆管理</span>
      <div className="relative inline-block mt-2 md:mt-4">
        <span className="relative z-10 text-gradient-primary">您的血壓健康</span>
        <motion.span
          className="absolute bottom-1 left-0 h-3 w-full bg-primary-200/50 dark:bg-primary-600/20 -z-0 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>
      <span className="text-foreground block md:inline">，簡單又實用</span>
    </h1>
    <p className="font-rounded text-xl md:text-2xl text-muted-foreground mt-2 tracking-wide">記錄、分析、管理血壓，助您掌握心血管健康</p>
  </motion.div>
);

// 動作按鈕元件
const ActionButtons = ({ handlePreRegister, isSubmitting, isSuccess, email, setEmail }) => (
  <motion.div className="space-y-4" variants={animations.item}>
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="relative flex-1">
        <Input
          type="email"
          placeholder="您的電子郵件"
          className="rounded-full py-6 px-5 bg-background border-primary-200 dark:border-primary-800 text-base"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <Button
        size="lg"
        onClick={handlePreRegister}
        disabled={isSubmitting}
        className="rounded-full gradient-primary-to-accent shadow-medium hover:shadow-lg transition-all duration-300 group py-6 px-8 text-base font-medium"
      >
        <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </motion.span>
            </>
          )}
        </motion.span>
      </Button>
    </div>

    <p className="text-sm text-muted-foreground mx-auto text-center md:text-left">✓ 優先獲得上線通知 | ✓ 首發優惠資格 | ✓ 免費產品更新</p>

    <Button
      size="lg"
      variant="outline"
      asChild
      className="rounded-full border-primary-300 dark:border-primary-800/60 hover:bg-primary-50 dark:hover:bg-primary-900/20 group bg-background py-6 px-6 text-base font-medium w-full sm:w-auto mt-2"
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
          className="ml-2 inline-block"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </Button>
  </motion.div>
);

// 特色功能區塊元件
const FeaturesSection = () => (
  <motion.div className="pt-8 mt-4 border-t border-border" variants={animations.item}>
    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
      產品特色：<span className="text-primary-600 dark:text-primary-400">簡單、直觀、實用</span>
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} index={index} />
      ))}
    </div>
  </motion.div>
);

// 背景光暈效果元件
const BackgroundGlow = () => (
  <motion.div
    className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-primary-500/30 via-secondary-500/30 to-accent-500/30 dark:from-primary-500/10 dark:via-secondary-500/10 dark:to-accent-500/10 blur-2xl"
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

// 社會證明區塊元件
const SocialProofSection = () => (
  <motion.div className="py-2" variants={animations.item}>
    <h3 className="text-base font-medium text-foreground mb-3">預先註冊獨享權益：</h3>
    <div className="flex flex-wrap justify-between gap-4 md:gap-6">
      {socialProofs.map((proof, index) => (
        <div key={index} className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-1 space-x-2">
            <div className="text-primary-600 dark:text-primary-400">{proof.icon}</div>
            <span className="text-lg md:text-xl font-bold text-foreground">{proof.count}</span>
          </div>
          <span className="text-sm text-muted-foreground">{proof.text}</span>
        </div>
      ))}
    </div>
  </motion.div>
);
