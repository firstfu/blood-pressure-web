"use client";

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
      className="rounded-full bg-background/90 dark:bg-card/90 hover:bg-muted dark:hover:bg-muted/50 shadow-soft p-3 h-auto w-auto"
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
            className="relative w-7 h-7"
          >
            <Moon className="absolute inset-0 text-neutral-700 w-full h-full" size={28} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3 }}
            className="relative w-7 h-7"
          >
            <Sun className="absolute inset-0 text-amber-300 w-full h-full" size={28} />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">切換主題</span>
    </Button>
  );
}
