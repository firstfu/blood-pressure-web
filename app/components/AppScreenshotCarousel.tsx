/**
 * @ Author: firstfu
 * @ Create Time: 2024-06-28 10:15:23
 * @ Description: 螢幕截圖輪播元件，支援左右滿版顯示在 iPhone 模型中
 */

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLocale } from "../i18n/context";
import { getLocalizedImages } from "@/utils/localeImages";
import { useDisplayMode } from "@/utils/useDisplayMode";

// 基本截圖集合，實際使用時會根據語系進行轉換
const baseScreenshots = [
  {
    id: 1,
    src: "/images/screen1.png",
    title: "簡單記錄",
    description: "直覺的介面設計，輕鬆記錄血壓數據",
  },
  {
    id: 2,
    src: "/images/screen2.png",
    title: "數據分析",
    description: "智能分析血壓趨勢，掌握健康狀況",
  },
  {
    id: 3,
    src: "/images/screen3.png",
    title: "歷史記錄",
    description: "完整的測量歷史，隨時查看過往數據",
  },
  {
    id: 4,
    src: "/images/screen4.png",
    title: "健康報告",
    description: "專業的健康報告，輕鬆與醫生分享",
  },
  //   {
  //     id: 5,
  //     src: "/images/screen5.png",
  //     title: "個人設定",
  //     description: "個性化的設定選項，符合使用習慣",
  //   },
  //   {
  //     id: 6,
  //     src: "/images/screen6.png",
  //     title: "智能提醒",
  //     description: "貼心的測量提醒，養成紀錄習慣",
  //   },
];

export default function AppScreenshotCarousel() {
  const { locale, dictionary } = useLocale();
  const { mode } = useDisplayMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // 根據當前語系和顯示模式獲取語系化的圖片路徑
  const screenshots = getLocalizedImages(baseScreenshots, locale, mode);

  // 自動輪播
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, screenshots.length]);

  // 暫停自動輪播（當用戶交互時）
  const pauseAutoPlay = () => {
    setAutoPlay(false);
    // 5秒後恢復自動輪播
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const goToNext = () => {
    pauseAutoPlay();
    setCurrentIndex(prev => (prev + 1) % screenshots.length);
  };

  const goToPrev = () => {
    pauseAutoPlay();
    setCurrentIndex(prev => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    pauseAutoPlay();
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col h-full w-full relative">
      {/* 截圖展示區 */}
      <div className="h-full w-full overflow-hidden relative">
        {/* 側邊提示陰影 - 移除避免影響全滿版顯示 */}

        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ x: currentIndex === 0 ? 0 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="h-full w-full absolute inset-0 overflow-hidden"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) > 100 || Math.abs(velocity.x) > 300;
              if (swipe) {
                if (offset.x > 0) {
                  goToPrev();
                } else {
                  goToNext();
                }
              }
            }}
          >
            <div className="flex flex-col h-full justify-center w-full absolute inset-0 items-center">
              <div className="w-full max-h-full relative" style={{ aspectRatio: "9/19.5" }}>
                <Image src={screenshots[currentIndex].src} alt={screenshots[currentIndex].title} fill className="object-fill" sizes="100vw" quality={100} priority />
              </div>
            </div>

            {/* 螢幕反光效果 - 增強光澤 */}
            <motion.div
              className="bg-gradient-to-tr absolute from-transparent inset-0 to-transparent via-white/15"
              initial={{ left: "-100%" }}
              animate={{
                left: ["100%", "-100%"],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 8,
                ease: "linear",
              }}
            />

            {/* 增加更柔和的發光效果 */}
            <div className="bg-gradient-radial absolute from-primary-500/5 inset-0 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 左右箭頭 */}
      <button
        onClick={goToPrev}
        className="flex bg-white/50 h-6 justify-center rounded-full shadow-lg w-6 -translate-y-1/2 absolute dark:bg-gray-800/50 dark:hover:bg-gray-800/70 duration-300 hover:bg-white/70 hover:scale-110 items-center left-1 top-1/2 transition-all z-30"
        aria-label="上一張"
      >
        <ChevronLeft className="h-3.5 text-gray-700 w-3.5 dark:text-gray-200" />
      </button>
      <button
        onClick={goToNext}
        className="flex bg-white/50 h-6 justify-center rounded-full shadow-lg w-6 -translate-y-1/2 absolute dark:bg-gray-800/50 dark:hover:bg-gray-800/70 duration-300 hover:bg-white/70 hover:scale-110 items-center right-1 top-1/2 transition-all z-30"
        aria-label="下一張"
      >
        <ChevronRight className="h-3.5 text-gray-700 w-3.5 dark:text-gray-200" />
      </button>

      {/* 底部導航條 */}
      <div className="flex h-2 justify-center absolute bottom-1 left-0 right-0 z-10">
        <div className="bg-black/15 h-[4px] rounded-full w-[90px] dark:bg-white/15"></div>
      </div>

      {/* 指示器 */}
      <div className="flex justify-center -bottom-16 absolute left-0 right-0 z-10">
        <div className="flex space-x-3">
          {screenshots.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary-500 shadow-sm shadow-primary-500/30 scale-125" : "bg-gray-300/40 dark:bg-gray-600/30"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              animate={index === currentIndex ? { scale: [1.2, 1.4, 1.2] } : {}}
              transition={
                index === currentIndex
                  ? {
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }
                  : {}
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
