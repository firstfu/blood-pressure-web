// @ Author: firstfu
// @ Create Time: 2024-03-18 16:15:42
// @ Description: Hero Section - 首頁主視覺區塊，包含產品介紹和手機預覽效果

"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Activity, Share2, ChevronDown, Star, Droplets, BarChart2, Shield, Smartphone, ChevronLeft, ChevronRight } from "lucide-react";
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

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: false, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // 視差效果 - 減少移動幅度，保持清晰
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // 滑鼠跟隨效果
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { damping: 50, stiffness: 300 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlayHero, setAutoPlayHero] = useState(true);

  // 自動輪播
  useEffect(() => {
    if (!autoPlayHero) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlayHero]);

  // 暫停自動輪播（當用戶交互時）
  const pauseAutoPlayHero = () => {
    setAutoPlayHero(false);
    // 4秒後恢復自動輪播
    setTimeout(() => setAutoPlayHero(true), 4000);
  };

  const goToNextImage = () => {
    pauseAutoPlayHero();
    setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
  };

  const goToPrevImage = () => {
    pauseAutoPlayHero();
    setCurrentImageIndex(prev => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToImage = (index: number) => {
    pauseAutoPlayHero();
    setCurrentImageIndex(index);
  };

  const handleQuickSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("請輸入您的電子郵件");
      return;
    }

    // 簡單的電子郵件格式驗證
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("請輸入有效的電子郵件地址");
      return;
    }

    setIsSubmitting(true);

    // 模擬 API 請求
    try {
      // 在實際應用中，這裡會是一個真正的 API 請求
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setEmail("");

      // 3秒後重置成功狀態
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      setError("註冊失敗，請稍後再試");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const targetX = clientX / window.innerWidth - 0.5;
      const targetY = clientY / window.innerHeight - 0.5;

      setMousePosition({ x: targetX, y: targetY });
      mouseX.set(targetX * 20); // 減少移動幅度
      mouseY.set(targetY * 20); // 減少移動幅度
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const features = [
    {
      icon: <Heart className="w-6 h-6" />, // 增加圖標大小
      text: "簡單記錄",
      description: "一鍵記錄血壓數據",
      color: "bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />, // 增加圖標大小
      text: "智能分析",
      description: "AI 趨勢預測",
      color: "bg-secondary-100 text-secondary-600 dark:bg-secondary-900/40 dark:text-secondary-300",
    },
    {
      icon: <Share2 className="w-6 h-6" />, // 增加圖標大小
      text: "醫療連結",
      description: "與醫生即時分享",
      color: "bg-accent-100 text-accent-600 dark:bg-accent-900/40 dark:text-accent-300",
    },
  ];

  // 動畫變體
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  return (
    <section id="hero" ref={heroRef} className="relative pt-0 pb-28 overflow-hidden mt-0">
      {/* 背景裝飾 - 延伸到頂部 */}
      <div className="absolute inset-0 top-0 bg-gradient-to-br from-primary-50 to-white dark:from-background dark:to-background/80 -z-10" />

      {/* 動態背景圖形 - 確保覆蓋頂部 */}
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

      {/* 裝飾元素 - 浮動圓點 */}
      <motion.div className="absolute top-1/4 left-[10%] w-4 h-4 rounded-full bg-primary-300/50 dark:bg-primary-400/20" animate={floatingAnimation} />
      <motion.div
        className="absolute top-1/3 right-[15%] w-6 h-6 rounded-full bg-secondary-300/60 dark:bg-secondary-400/20"
        animate={{
          ...floatingAnimation,
          transition: {
            ...floatingAnimation.transition,
            delay: 1,
          },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[20%] w-5 h-5 rounded-full bg-accent-300/50 dark:bg-accent-400/20"
        animate={{
          ...floatingAnimation,
          transition: {
            ...floatingAnimation.transition,
            delay: 2,
          },
        }}
      />

      {/* 網格背景 - 減少透明度 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(176,238,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(176,238,250,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(56,199,237,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(56,199,237,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div style={{ opacity }} className="flex flex-col lg:flex-row items-center gap-12 pt-10">
          {/* 左側內容 */}
          <motion.div className="lg:w-2/3 space-y-8" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div
              className="inline-block px-4 py-1.5 bg-primary-50 dark:bg-primary-900/20 rounded-full text-base font-medium mb-4" // 適配暗黑模式
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="flex items-center">
                <Star className="w-5 h-5 mr-1.5 text-accent-500 dark:text-accent-400" /> {/* 適配暗黑模式 */}
                <span className="text-gradient-primary-to-secondary">2025 年最佳健康管理應用</span>
              </span>
            </motion.div>

            <motion.div className="space-y-4  " variants={itemVariants}>
              <h1 className="heading-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
                {" "}
                {/* 增加標題字體大小 */}
                <span className="text-foreground">健康守護：您的個人</span>
                <div className="relative inline-block mt-2">
                  <span className="relative z-10 text-gradient-primary">血壓管理</span>
                  <motion.span
                    className="absolute bottom-2 left-0 h-4 w-full bg-primary-200/50 dark:bg-primary-600/20 -z-0 rounded-full" // 適配暗黑模式
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>
                <span className="text-foreground block md:inline">助手</span>
              </h1>
              <p className="font-rounded text-2xl text-muted-foreground">簡單紀錄，智能分析，連結醫療專業</p> {/* 使用主題變量 */}
            </motion.div>

            <motion.p
              className="text-optimized font-sans text-xl text-muted-foreground max-w-2xl" // 增加最大寬度
              variants={itemVariants}
            >
              透過直覺式介面輕鬆記錄血壓數據，查看趨勢圖表分析健康狀況，並與醫療團隊分享完整報告，讓血壓管理變得簡單有效。
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button
                size="lg"
                onClick={() => {
                  const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
                  if (emailInput) emailInput.focus();
                }}
                className="rounded-full gradient-primary-to-accent shadow-medium hover:shadow-lg transition-all duration-300 group py-7 text-lg" // 增加按鈕大小和文字大小
              >
                <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  立即預先註冊
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      repeatDelay: 1,
                    }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5 inline-block" /> {/* 增加圖標大小 */}
                  </motion.span>
                </motion.span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border-primary-300 dark:border-primary-800/60 hover:bg-primary-50 dark:hover:bg-primary-900/20 group bg-background py-7 text-lg" // 適配暗黑模式
              >
                <motion.a href="#features" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  了解更多
                  <motion.span
                    animate={{ y: [0, 3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                    className="ml-1 inline-block"
                  >
                    <ChevronDown className="h-5 w-5" /> {/* 增加圖標大小 */}
                  </motion.span>
                </motion.a>
              </Button>
            </motion.div>

            {/* 快速註冊表單 */}
            <motion.form onSubmit={handleQuickSignup} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl" variants={itemVariants}>
              <div className="flex-1 relative">
                <Input
                  type="email"
                  placeholder="您的電子郵件"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="h-12 pr-24 rounded-full border-primary-200 dark:border-primary-800/40 bg-white dark:bg-card"
                />
                <Button type="submit" disabled={isSubmitting} className="absolute right-1 top-1 h-10 rounded-full px-4">
                  {isSubmitting ? "處理中..." : "預先註冊"}
                </Button>
              </div>
              {error && <p className="text-sm text-red-500 dark:text-red-400 mt-1">{error}</p>}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-green-600 dark:text-green-400 mt-1 absolute -bottom-6 left-0"
                >
                  註冊成功！我們將在產品發布時通知您。
                </motion.div>
              )}
            </motion.form>

            <motion.div
              className="pt-8 border-t border-border" // 使用主題變量
              variants={itemVariants}
            >
              <div className="flex flex-wrap gap-4 items-center">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <Card className="flex flex-col items-center gap-2 px-5 py-4 bg-background hover:bg-background transition-all duration-300 border-none shadow-soft">
                      {" "}
                      {/* 使用主題變量 */}
                      <div className={`${feature.color} p-3 rounded-full`}>
                        {" "}
                        {/* 增加圖標容器大小 */}
                        {feature.icon}
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-base font-medium text-foreground">{feature.text}</span> {/* 使用主題變量 */}
                        <span className="text-sm text-muted-foreground">{feature.description}</span> {/* 使用主題變量 */}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 信任徽章 */}
            {/* <motion.div
              className="flex flex-wrap items-center gap-4 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <span className="text-base text-muted-foreground">受到信賴：</span>
              <div className="flex flex-wrap gap-4">
                <div className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image src="/images/trust-badge-1.svg" alt="信任徽章" width={100} height={40} />
                </div>
                <div className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image src="/images/trust-badge-2.svg" alt="信任徽章" width={100} height={40} />
                </div>
                <div className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image src="/images/trust-badge-3.svg" alt="信任徽章" width={100} height={40} />
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* 右側 App 預覽 */}
          <motion.div className="lg:w-5/12 relative lg:translate-x-8" style={{ y }} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            {/* 手機外框 */}
            <motion.div
              className="relative mx-auto w-[280px] h-[580px] rounded-[3rem] border-[14px] border-gray-900 dark:border-gray-800 overflow-hidden shadow-2xl bg-gray-800"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* 手機螢幕 */}
              <div className="absolute inset-0 overflow-hidden">
                {/* 狀態欄 */}
                <div className="h-6 w-full bg-[#2A7FD5] dark:bg-[#2A7FD5] flex items-center justify-between px-4">
                  <div className="text-xs text-white">8:45</div>
                  <div className="flex items-center space-x-1">
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
                  </div>
                </div>

                {/* App 內容 */}
                <div className="relative h-full w-full">
                  <AppScreenshotCarousel />
                </div>
              </div>

              {/* 手機按鈕 */}
              <div className="absolute -right-[14px] top-[120px] h-6 w-1 bg-gray-900 dark:bg-gray-800 rounded-l"></div>
              <div className="absolute -left-[14px] top-[100px] h-12 w-1 bg-gray-900 dark:bg-gray-800 rounded-r"></div>
              <div className="absolute -left-[14px] top-[150px] h-12 w-1 bg-gray-900 dark:bg-gray-800 rounded-r"></div>

              {/* 反光效果 */}
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
            </motion.div>

            {/* 裝飾元素 */}
            <motion.div
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-primary-500/30 via-secondary-500/30 to-accent-500/30 dark:from-primary-500/10 dark:via-secondary-500/10 dark:to-accent-500/10 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
