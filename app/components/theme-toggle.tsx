"use client";

// @ Author: firstfu
// @ Create Time: 2024-03-20 16:45:17
// @ Description: 主題切換按鈕組件 - 優化切換動畫效果

import { useTheme } from "@/app/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // 使用 useCallback 確保切換函數的穩定性
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }, [theme, setTheme]);

  return (
    <Button
      variant="ghost"
      size="lg"
      className="relative bg-background/90 h-auto p-3 rounded-full shadow-soft w-auto dark:bg-card/90 dark:hover:bg-muted/50 hover:bg-muted backdrop-blur-sm"
      onClick={toggleTheme}
    >
      <div className="relative h-7 w-7">
        <AnimatePresence mode="popLayout" initial={false}>
          {theme === "light" ? (
            <motion.div
              key="moon"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Moon className="text-slate-700 dark:text-slate-200" size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sun className="text-amber-400" size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className="sr-only">切換主題</span>
    </Button>
  );
}
