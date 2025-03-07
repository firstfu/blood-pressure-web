"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Activity, Share2, ChevronDown, Star } from "lucide-react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: false, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // 視差效果
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Heart className="w-5 h-5" />,
      text: "簡單記錄",
      description: "一鍵記錄血壓數據",
    },
    {
      icon: <Activity className="w-5 h-5" />,
      text: "智能分析",
      description: "AI 趨勢預測",
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      text: "醫療連結",
      description: "與醫生即時分享",
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
    <section id="hero" ref={heroRef} className="relative pt-28 pb-20 overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />

      {/* 動態背景圖形 */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl -z-10"
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
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl -z-10"
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
      <motion.div className="absolute top-1/4 left-[10%] w-4 h-4 rounded-full bg-primary/30" animate={floatingAnimation} />
      <motion.div
        className="absolute top-1/3 right-[15%] w-6 h-6 rounded-full bg-secondary/40"
        animate={{
          ...floatingAnimation,
          transition: {
            ...floatingAnimation.transition,
            delay: 1,
          },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[20%] w-5 h-5 rounded-full bg-yellow-400/30"
        animate={{
          ...floatingAnimation,
          transition: {
            ...floatingAnimation.transition,
            delay: 2,
          },
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div style={{ opacity }} className="flex flex-col lg:flex-row items-center gap-12">
          {/* 左側內容 */}
          <motion.div className="lg:w-1/2 space-y-8" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div
              className="inline-block px-4 py-1.5 bg-primary-50 text-primary rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-1.5" />
                <span>2025 年最佳健康管理應用</span>
              </span>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                健康守護：您的個人
                <div className="relative inline-block">
                  <span className="relative z-10 text-primary">血壓管理</span>
                  <motion.span
                    className="absolute bottom-2 left-0 h-3 w-full bg-primary/20 -z-0"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>
                助手
              </h1>
              <p className="text-xl text-muted-foreground">簡單紀錄，智能分析，連結醫療專業</p>
            </motion.div>

            <motion.p className="text-gray-600 text-lg max-w-lg" variants={itemVariants}>
              透過直覺式介面輕鬆記錄血壓數據，查看趨勢圖表分析健康狀況，並與醫療團隊分享完整報告，讓血壓管理變得簡單有效。
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg group">
                <motion.a href="#subscribe" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  立即加入
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
                    <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                  </motion.span>
                </motion.a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-primary/30 hover:bg-primary-50 group">
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
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </motion.a>
              </Button>
            </motion.div>

            <motion.div className="pt-8 border-t border-gray-200" variants={itemVariants}>
              <div className="flex flex-wrap gap-4 items-center">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <Card className="flex flex-col items-center gap-2 px-4 py-3 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
                      <div className="text-primary bg-primary-50 p-2 rounded-full">{feature.icon}</div>
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-medium">{feature.text}</span>
                        <span className="text-xs text-gray-500">{feature.description}</span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 右側 App 預覽 */}
          <motion.div className="lg:w-1/2" style={{ y }} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <div className="relative max-w-[320px] mx-auto">
              {/* 裝飾元素 */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-2xl opacity-30 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* App 預覽 */}
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 100, damping: 10 }}>
                <Card className="relative overflow-hidden border-8 border-white shadow-2xl rounded-[2.5rem] bg-white">
                  <div className="aspect-[9/19] relative">
                    <Image src="/images/app-mockup.svg" alt="血壓記錄App畫面" fill className="object-contain" priority />
                  </div>

                  {/* 螢幕反光效果 */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0"
                    animate={{
                      opacity: [0, 0.5, 0],
                      left: ["-100%", "100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                  />
                </Card>
              </motion.div>

              {/* 浮動元素 */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* 數據指標浮動卡片 */}
              <motion.div
                className="absolute -right-10 top-1/4 bg-white rounded-xl shadow-lg p-3 z-10"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Activity className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">血壓趨勢</p>
                    <p className="text-sm font-semibold">穩定下降</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-12 bottom-1/4 bg-white rounded-xl shadow-lg p-3 z-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">今日血壓</p>
                    <p className="text-sm font-semibold">120/80</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* 向下滾動指示器 */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="text-sm text-gray-500 mb-2">向下滾動探索更多</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-1"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{
                y: [0, 4, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
