"use client";

// @ Author: firstfu
// @ Create Time: 2023-10-19 15:30:00
// @ Description: 調整切換 theme 時太陽和月亮圖示的位置。

import { useTheme } from "@/app/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // 使用 useCallback 確保切換函數的穩定性
  const toggleTheme = useCallback(() => {
    // 明確判斷當前主題並設置為相反的主題
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }, [theme, setTheme]);

  return (
    <Button
      variant="ghost"
      size="lg"
      className="bg-background/90 h-auto p-3 rounded-full shadow-soft w-auto dark:bg-card/90 dark:hover:bg-muted/50 hover:bg-muted"
      onClick={toggleTheme}
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
            className="flex h-7 justify-center w-7 items-center"
          >
            <Moon className="text-neutral-700" size={28} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3 }}
            className="flex h-7 justify-center w-7 items-center"
          >
            <Sun className="text-amber-300" size={28} />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">切換主題</span>
    </Button>
  );
}
