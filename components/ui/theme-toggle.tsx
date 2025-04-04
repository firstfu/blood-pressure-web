/**
 * @ Author: firstfu
 * @ Create Time: 2024-04-08 14:35:25
 * @ Description: 主題切換按鈕，允許使用者在明亮和暗黑模式之間切換
 */

"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useDisplayMode } from "@/utils/useDisplayMode";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();
  const { mode } = useDisplayMode();
  const [mounted, setMounted] = React.useState(false);

  // 只在客戶端渲染，以避免 hydration 不匹配
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // 渲染一個占位符，確保佈局穩定
    return (
      <Button variant="ghost" size="icon" className={className} disabled>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">切換主題</span>
      </Button>
    );
  }

  // 切換主題時觸發動畫效果
  const toggleTheme = () => {
    // 暗黑模式切換到明亮模式
    if (theme === "dark") {
      // 添加一個全屏幕的過渡效果
      const transitionElement = document.createElement("div");
      transitionElement.className = "fixed inset-0 bg-white z-[9999] transition-opacity duration-300 opacity-0 pointer-events-none";
      document.body.appendChild(transitionElement);

      // 動畫淡入
      setTimeout(() => {
        transitionElement.style.opacity = "0.8";
      }, 10);

      // 進行主題切換
      setTimeout(() => {
        setTheme("light");
      }, 150);

      // 動畫淡出並移除元素
      setTimeout(() => {
        transitionElement.style.opacity = "0";
        setTimeout(() => {
          document.body.removeChild(transitionElement);
        }, 300);
      }, 300);
    }
    // 明亮模式切換到暗黑模式
    else {
      // 添加一個全屏幕的過渡效果
      const transitionElement = document.createElement("div");
      transitionElement.className = "fixed inset-0 bg-gray-950 z-[9999] transition-opacity duration-300 opacity-0 pointer-events-none";
      document.body.appendChild(transitionElement);

      // 動畫淡入
      setTimeout(() => {
        transitionElement.style.opacity = "0.9";
      }, 10);

      // 進行主題切換
      setTimeout(() => {
        setTheme("dark");
      }, 150);

      // 動畫淡出並移除元素
      setTimeout(() => {
        transitionElement.style.opacity = "0";
        setTimeout(() => {
          document.body.removeChild(transitionElement);
        }, 300);
      }, 300);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`relative overflow-hidden ${className}`}
      aria-label={theme === "light" ? "切換到暗黑模式" : "切換到明亮模式"}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">切換主題</span>

      {/* 增加一個動畫效果指示器 */}
      <span className="absolute inset-0 z-10 bg-primary-100 dark:bg-primary-900/20 opacity-0 transition-opacity duration-300 rounded-full scale-0 animate-ripple"></span>
    </Button>
  );
}
