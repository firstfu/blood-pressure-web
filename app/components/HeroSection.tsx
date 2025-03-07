"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Activity, Share2, ChevronDown, Star, Droplets, BarChart2, Shield, Smartphone } from "lucide-react";
import { motion, useScroll, useTransform, useInView, AnimatePresence, useMotionTemplate, useSpring } from "framer-motion";

export default function HeroSection() {
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
      color: "bg-primary-100 text-primary-600",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />, // 增加圖標大小
      text: "智能分析",
      description: "AI 趨勢預測",
      color: "bg-secondary-100 text-secondary-600",
    },
    {
      icon: <Share2 className="w-6 h-6" />, // 增加圖標大小
      text: "醫療連結",
      description: "與醫生即時分享",
      color: "bg-accent-100 text-accent-600",
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
    <section id="hero" ref={heroRef} className="relative pt-28 pb-28 overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10" />

      {/* 動態背景圖形 */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 blur-3xl -z-10"
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
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary-200/30 to-accent-200/30 blur-3xl -z-10"
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
      <motion.div className="absolute top-1/4 left-[10%] w-4 h-4 rounded-full bg-primary-300/50" animate={floatingAnimation} />
      <motion.div
        className="absolute top-1/3 right-[15%] w-6 h-6 rounded-full bg-secondary-300/60"
        animate={{
          ...floatingAnimation,
          transition: {
            ...floatingAnimation.transition,
            delay: 1,
          },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[20%] w-5 h-5 rounded-full bg-accent-300/50"
        animate={{
          ...floatingAnimation,
          transition: {
            ...floatingAnimation.transition,
            delay: 2,
          },
        }}
      />

      {/* 網格背景 - 減少透明度 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(176,238,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(176,238,250,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div style={{ opacity }} className="flex flex-col lg:flex-row items-center gap-12">
          {/* 左側內容 */}
          <motion.div className="lg:w-1/2 space-y-8" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div
              className="inline-block px-4 py-1.5 bg-primary-50 rounded-full text-base font-medium mb-4" // 移除霧化效果，增加字體大小
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="flex items-center">
                <Star className="w-5 h-5 mr-1.5 text-accent-500" /> {/* 增加圖標大小 */}
                <span className="text-gradient-primary-to-secondary">2025 年最佳健康管理應用</span>
              </span>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                {" "}
                {/* 增加標題字體大小 */}
                <span className="text-neutral-800">健康守護：您的個人</span>
                <div className="relative inline-block mt-2">
                  <span className="relative z-10 text-gradient-primary">血壓管理</span>
                  <motion.span
                    className="absolute bottom-2 left-0 h-4 w-full bg-primary-200/50 -z-0 rounded-full" // 增加下劃線高度
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>
                <span className="text-neutral-800 block md:inline">助手</span>
              </h1>
              <p className="text-2xl text-neutral-600">簡單紀錄，智能分析，連結醫療專業</p> {/* 增加副標題字體大小 */}
            </motion.div>

            <motion.p className="text-xl text-neutral-600 max-w-lg" variants={itemVariants}>
              透過直覺式介面輕鬆記錄血壓數據，查看趨勢圖表分析健康狀況，並與醫療團隊分享完整報告，讓血壓管理變得簡單有效。
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button size="lg" asChild className="rounded-full gradient-primary-to-accent shadow-medium hover:shadow-lg transition-all duration-300 group py-7 text-lg">
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
                    <ArrowRight className="ml-2 h-5 w-5 inline-block" /> {/* 增加圖標大小 */}
                  </motion.span>
                </motion.a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-primary-300 hover:bg-primary-50 group bg-white py-7 text-lg">
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

            <motion.div className="pt-8 border-t border-neutral-200" variants={itemVariants}>
              <div className="flex flex-wrap gap-4 items-center">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <Card className="flex flex-col items-center gap-2 px-5 py-4 bg-white hover:bg-white transition-all duration-300 border-none shadow-soft">
                      {" "}
                      {/* 移除霧化效果，增加內邊距 */}
                      <div className={`${feature.color} p-3 rounded-full`}>
                        {" "}
                        {/* 增加圖標容器大小 */}
                        {feature.icon}
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-base font-medium text-neutral-800">{feature.text}</span> {/* 增加文字大小 */}
                        <span className="text-sm text-neutral-500">{feature.description}</span> {/* 增加文字大小 */}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 信任徽章 */}
            <motion.div className="flex flex-wrap items-center gap-4 pt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
              <span className="text-base text-neutral-500">受到信賴：</span> {/* 增加文字大小 */}
              <div className="flex flex-wrap gap-4">
                <div className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  {" "}
                  {/* 增加徽章大小 */}
                  <Image src="/images/trust-badge-1.svg" alt="信任徽章" width={100} height={40} /> {/* 增加圖片大小 */}
                </div>
                <div className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  {" "}
                  {/* 增加徽章大小 */}
                  <Image src="/images/trust-badge-2.svg" alt="信任徽章" width={100} height={40} /> {/* 增加圖片大小 */}
                </div>
                <div className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  {" "}
                  {/* 增加徽章大小 */}
                  <Image src="/images/trust-badge-3.svg" alt="信任徽章" width={100} height={40} /> {/* 增加圖片大小 */}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 右側 App 預覽 */}
          <motion.div className="lg:w-1/2" style={{ y }} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <motion.div
              className="relative max-w-[360px] mx-auto" // 增加手機模型大小
              style={{
                x: useMotionTemplate`${mouseX.get() * 0.1}deg`,
                y: useMotionTemplate`${mouseY.get() * 0.1}deg`,
                rotateX: useMotionTemplate`${mouseY.get() * 0.05}deg`,
                rotateY: useMotionTemplate`${mouseX.get() * -0.05}deg`,
              }}
            >
              {/* 裝飾元素 */}
              <motion.div
                className="absolute -inset-4 bg-gradient-primary-to-secondary rounded-2xl opacity-30 blur-2xl"
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
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 100, damping: 10 }} className="relative z-10">
                <Card className="relative overflow-hidden border-8 border-white shadow-hard rounded-[2.5rem] bg-white">
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
                className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-300/30 rounded-full blur-xl"
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
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-300/30 rounded-full blur-xl"
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
                className="absolute -right-10 top-1/4 bg-white rounded-xl shadow-medium p-4 z-10" // 移除霧化效果，增加內邊距
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center gap-3">
                  {" "}
                  {/* 增加間距 */}
                  <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                    {" "}
                    {/* 增加圖標容器大小 */}
                    <Activity className="w-5 h-5 text-secondary-600" /> {/* 增加圖標大小 */}
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">血壓趨勢</p> {/* 增加文字大小 */}
                    <p className="text-base font-semibold text-neutral-800">穩定下降</p> {/* 增加文字大小 */}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-12 bottom-1/4 bg-white rounded-xl shadow-medium p-4 z-10" // 移除霧化效果，增加內邊距
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center gap-3">
                  {" "}
                  {/* 增加間距 */}
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    {" "}
                    {/* 增加圖標容器大小 */}
                    <Heart className="w-5 h-5 text-primary-600" /> {/* 增加圖標大小 */}
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">今日血壓</p> {/* 增加文字大小 */}
                    <p className="text-base font-semibold text-neutral-800">120/80</p> {/* 增加文字大小 */}
                  </div>
                </div>
              </motion.div>

              {/* 新增的功能卡片 */}
              <motion.div
                className="absolute -right-16 bottom-10 bg-white rounded-xl shadow-medium p-4 z-10" // 移除霧化效果，增加內邊距
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center gap-3">
                  {" "}
                  {/* 增加間距 */}
                  <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                    {" "}
                    {/* 增加圖標容器大小 */}
                    <Shield className="w-5 h-5 text-accent-600" /> {/* 增加圖標大小 */}
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">健康評估</p> {/* 增加文字大小 */}
                    <p className="text-base font-semibold text-neutral-800">良好</p> {/* 增加文字大小 */}
                  </div>
                </div>
              </motion.div>

              {/* 3D 效果裝飾 - 減少陰影強度 */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -bottom-10 w-full h-10 bg-gradient-to-t from-neutral-200/30 to-transparent blur-sm"></div>
                <div className="absolute -right-10 h-full w-10 bg-gradient-to-l from-neutral-200/30 to-transparent blur-sm"></div>
              </div>
            </motion.div>

            {/* 功能標籤 */}
            <motion.div
              className="mt-12 flex justify-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <motion.div
                className="bg-white px-4 py-2 rounded-full text-base flex items-center gap-2 shadow-soft" // 移除霧化效果，增加文字大小和內邊距
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <Smartphone className="w-5 h-5 text-primary-500" /> {/* 增加圖標大小 */}
                <span className="text-neutral-700">iOS 與 Android 支援</span>
              </motion.div>
              <motion.div
                className="bg-white px-4 py-2 rounded-full text-base flex items-center gap-2 shadow-soft" // 移除霧化效果，增加文字大小和內邊距
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <Shield className="w-5 h-5 text-secondary-500" /> {/* 增加圖標大小 */}
                <span className="text-neutral-700">資料加密保護</span>
              </motion.div>
              <motion.div
                className="bg-white px-4 py-2 rounded-full text-base flex items-center gap-2 shadow-soft" // 移除霧化效果，增加文字大小和內邊距
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <Droplets className="w-5 h-5 text-accent-500" /> {/* 增加圖標大小 */}
                <span className="text-neutral-700">健康分析報告</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 向下滾動指示器 */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="text-base text-neutral-500 mb-2">向下滾動探索更多</span> {/* 增加文字大小 */}
          <motion.div
            className="w-8 h-12 border-2 border-neutral-300 rounded-full flex justify-center pt-1 bg-white" // 移除霧化效果，增加大小
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <motion.div
              className="w-2 h-2 bg-gradient-primary-to-secondary rounded-full" // 增加指示點大小
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
