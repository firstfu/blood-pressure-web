"use client";

import { useTheme } from "@/app/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full bg-background/90 dark:bg-card/90 hover:bg-muted dark:hover:bg-muted/50 shadow-soft"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
            className="relative w-5 h-5"
          >
            <Moon className="absolute inset-0 text-neutral-700" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3 }}
            className="relative w-5 h-5"
          >
            <Sun className="absolute inset-0 text-amber-300" />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">切換主題</span>
    </Button>
  );
}
