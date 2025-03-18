import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const screenshots = [
  {
    id: 1,
    image: "/images/screen1.png",
    title: "簡單記錄",
    description: "直覺的介面設計，輕鬆記錄血壓數據",
  },
  {
    id: 2,
    image: "/images/screen2.png",
    title: "數據分析",
    description: "智能分析血壓趨勢，掌握健康狀況",
  },
  {
    id: 3,
    image: "/images/screen3.png",
    title: "歷史記錄",
    description: "完整的測量歷史，隨時查看過往數據",
  },
  {
    id: 4,
    image: "/images/screen4.png",
    title: "健康報告",
    description: "專業的健康報告，輕鬆與醫生分享",
  },
  {
    id: 5,
    image: "/images/screen5.png",
    title: "個人設定",
    description: "個性化的設定選項，符合使用習慣",
  },
  {
    id: 6,
    image: "/images/screen6.png",
    title: "智能提醒",
    description: "貼心的測量提醒，養成紀錄習慣",
  },
];

export default function AppScreenshotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // 自動輪播
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

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
    <div className="relative w-full h-full flex flex-col">
      {/* 截圖展示區 */}
      <div className="relative w-full h-full overflow-hidden">
        {/* 側邊提示陰影 */}
        <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/10 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/10 to-transparent z-20 pointer-events-none"></div>

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
            className="w-full h-full relative overflow-hidden"
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
            <Image
              src={screenshots[currentIndex].image}
              alt={screenshots[currentIndex].title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
              priority
            />

            {/* 螢幕反光效果 - 增強光澤 */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent"
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
            <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 左右箭頭 */}
      <button
        onClick={goToPrev}
        className="absolute left-0.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/50 dark:bg-gray-800/50 flex items-center justify-center shadow-lg z-30 hover:bg-white/70 hover:scale-110 dark:hover:bg-gray-800/70 transition-all duration-300"
        aria-label="上一張"
      >
        <ChevronLeft className="w-3.5 h-3.5 text-gray-700 dark:text-gray-200" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/50 dark:bg-gray-800/50 flex items-center justify-center shadow-lg z-30 hover:bg-white/70 hover:scale-110 dark:hover:bg-gray-800/70 transition-all duration-300"
        aria-label="下一張"
      >
        <ChevronRight className="w-3.5 h-3.5 text-gray-700 dark:text-gray-200" />
      </button>

      {/* 底部導航條 */}
      <div className="absolute bottom-1 left-0 right-0 flex justify-center z-10 h-2">
        <div className="w-[90px] h-[4px] bg-black/15 dark:bg-white/15 rounded-full"></div>
      </div>

      {/* 指示器 */}
      <div className="absolute -bottom-16 left-0 right-0 flex justify-center z-10">
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
