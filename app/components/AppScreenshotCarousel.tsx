import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AppScreenshotDashboard from "@/app/components/screenshots/AppScreenshotDashboard";
import AppScreenshotHistory from "@/app/components/screenshots/AppScreenshotHistory";
import AppScreenshotAnalytics from "@/app/components/screenshots/AppScreenshotAnalytics";
import AppScreenshotSettings from "@/app/components/screenshots/AppScreenshotSettings";

const screenshots = [
  {
    id: 1,
    component: <AppScreenshotDashboard />,
    title: "主控台",
    description: "一目了然的血壓數據概覽",
  },
  {
    id: 2,
    component: <AppScreenshotHistory />,
    title: "歷史記錄",
    description: "詳細的測量歷史和趨勢分析",
  },
  {
    id: 3,
    component: <AppScreenshotAnalytics />,
    title: "數據分析",
    description: "深入的血壓數據統計和報告",
  },
  {
    id: 4,
    component: <AppScreenshotSettings />,
    title: "個人設置",
    description: "個性化的應用設置和提醒",
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
      {/* 標題和描述 - 移至頂部 */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-white/90 to-white/60 dark:from-gray-900/90 dark:to-gray-900/60 pt-2 pb-4 px-4 rounded-t-xl backdrop-blur-sm">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 text-center">{screenshots[currentIndex].title}</h3>
        <p className="text-xs text-gray-600 dark:text-gray-300 text-center">{screenshots[currentIndex].description}</p>
      </div>

      {/* 截圖展示區 - 增加上邊距 */}
      <div className="relative w-full h-full overflow-hidden pt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            {screenshots[currentIndex].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 左右箭頭 */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-md z-10 hover:bg-white dark:hover:bg-gray-800 transition-colors"
        aria-label="上一張"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-md z-10 hover:bg-white dark:hover:bg-gray-800 transition-colors"
        aria-label="下一張"
      >
        <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </button>

      {/* 指示器 - 移至截圖外部 */}
      <div className="absolute -bottom-10 left-0 right-0 flex justify-center z-10">
        <div className="flex space-x-3">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary-500 scale-125" : "bg-gray-300 dark:bg-gray-600"}`}
              aria-label={`前往第 ${index + 1} 張截圖`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
