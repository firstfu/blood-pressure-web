"use client";

/**
 * @ Author: firstfu
 * @ Create Time: 2024-03-28 16:42:45
 * @ Description: 法律頁面專用導航欄，包含語系切換器
 */

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronRight, Activity, Bell, BarChart2, Droplets } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeToggle } from "../components/theme-toggle";
import { useLocale } from "@/app/i18n/context";
import LanguageSwitcher from "../components/LanguageSwitcher";

// 這些導航項目鍵將使用翻譯
const navItemKeys = [
  { href: "#preview", labelKey: "產品預覽", icon: <BarChart2 className="w-5 h-5" /> },
  { href: "#features", labelKey: "功能特色", icon: <Activity className="w-5 h-5" /> },
  { href: "#testimonials", labelKey: "未來展望", icon: <Droplets className="w-5 h-5" /> },
  { href: "#faq", labelKey: "常見問題", icon: <Bell className="w-5 h-5" /> },
];

export default function LegalNavbar() {
  const { dictionary, locale } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const navRef = useRef<HTMLDivElement>(null);

  // 滾動進度動畫 - 移除透明度變化，保持清晰
  const { scrollYProgress } = useScroll();
  const navScale = useTransform(scrollYProgress, [0, 0.05], [1, 1]); // 移除縮放效果

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 導航項目動畫變體
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // 在法律頁面中，所有連結都指向首頁
  const getNavHref = (href: string) => {
    return "/";
  };

  // 使用字典的翻譯獲取導航項目標籤
  const getNavLabel = (key: string) => {
    return dictionary?.導航?.[key as keyof typeof dictionary.導航] || key;
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        style={{ scale: navScale }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-slate-50 dark:bg-slate-950 shadow-medium py-2" : "bg-slate-50 dark:bg-slate-950 py-3"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Link href="/" className="flex items-center space-x-2 group">
                <motion.div className="relative flex items-center" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <span className="heading-serif text-3xl font-bold relative flex items-center">
                    {" "}
                    <motion.span
                      className="text-gradient-primary mr-1"
                      animate={{
                        opacity: [0.8, 1, 0.8],
                        scale: [0.98, 1, 0.98],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <Droplets className="h-8 w-8 mr-1 text-teal-600 dark:text-teal-400" />
                    </motion.span>
                    {/* 確保客戶端和服務器渲染一致 */}
                    <div className={`flex ${locale === "en" ? "flex-col" : "flex-row"} items-center leading-tight whitespace-nowrap`}>
                      {locale === "en" ? (
                        <>
                          <span className="text-teal-600 dark:text-teal-400">{dictionary?.共用?.應用名稱_上 || "Blood Pressure"}</span>
                          <span className="text-emerald-600 dark:text-emerald-400">{dictionary?.共用?.應用名稱_下 || "Manager"}</span>
                        </>
                      ) : (
                        <span className="text-teal-600 dark:text-teal-400">血壓管家</span>
                      )}
                    </div>
                  </span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <motion.div
                className="flex items-center bg-white/90 dark:bg-slate-900/60 rounded-full px-1 py-1 shadow-soft backdrop-blur-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {navItemKeys.map((item, i) => (
                  <motion.div key={item.href} custom={i} initial="hidden" animate="visible" variants={itemVariants}>
                    <Link
                      href={getNavHref(item.href)}
                      className={`text-optimized relative px-4 py-2 text-base font-medium rounded-full flex items-center transition-all duration-300 ${
                        activeItem === item.href ? "text-teal-700 dark:text-teal-300" : "text-slate-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-300"
                      } hover:bg-slate-50/60 dark:hover:bg-slate-900/30`}
                      onClick={() => setActiveItem(item.href)}
                    >
                      <span className="mr-1">{item.icon}</span>
                      <span className="font-rounded">{getNavLabel(item.labelKey)}</span>
                      {activeItem === item.href && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-full bg-teal-100/80 dark:bg-teal-800/40 rounded-full -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* 語言切換器 */}
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <LanguageSwitcher />
              </motion.div>

              {/* 主題切換按鈕 */}
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <ThemeToggle />
              </motion.div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-slate-50 dark:bg-slate-950 border-none">
                  <nav className="flex flex-col gap-6 mt-12">
                    <motion.div className="flex items-center justify-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                      <span className="text-4xl font-bold">
                        {/* 確保客戶端和服務器渲染一致 */}
                        <div className={`flex ${locale === "en" ? "flex-col" : "flex-row"} items-center leading-tight whitespace-nowrap`}>
                          {locale === "en" ? (
                            <>
                              <span className="text-teal-600 dark:text-teal-400">{dictionary?.共用?.應用名稱_上 || "Blood Pressure"}</span>
                              <span className="text-emerald-600 dark:text-emerald-400">{dictionary?.共用?.應用名稱_下 || "Manager"}</span>
                            </>
                          ) : (
                            <span className="text-teal-600 dark:text-teal-400">血壓管家</span>
                          )}
                        </div>
                      </span>
                    </motion.div>

                    {navItemKeys.map((item, i) => (
                      <motion.div key={item.href} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1, duration: 0.4 }}>
                        <Link
                          href={getNavHref(item.href)}
                          className={`flex items-center space-x-3 px-5 py-4 rounded-xl text-xl transition-all duration-300 ${
                            activeItem === item.href
                              ? "bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-300"
                              : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900/30"
                          }`}
                          onClick={() => setActiveItem(item.href)}
                        >
                          <span>{item.icon}</span>
                          <span>{getNavLabel(item.labelKey)}</span>
                        </Link>
                      </motion.div>
                    ))}

                    {/* 移動端語言切換器 */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.4 }} className="mt-4 flex justify-center">
                      <LanguageSwitcher />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.4 }} className="mt-4 flex justify-center">
                      <ThemeToggle />
                    </motion.div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* 給導航欄留出空間 */}
      <div className="h-20" />
    </>
  );
}
