"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Heart, Activity, Bell, BarChart2, Droplets } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "#features", label: "功能特色", icon: <Activity className="w-5 h-5" /> },
  { href: "#preview", label: "產品預覽", icon: <BarChart2 className="w-5 h-5" /> },
  { href: "#faq", label: "常見問題", icon: <Bell className="w-5 h-5" /> },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // 滾動進度動畫 - 移除透明度變化，保持清晰
  const { scrollYProgress } = useScroll();
  const navScale = useTransform(scrollYProgress, [0, 0.05], [1, 1]); // 移除縮放效果

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // 檢測當前滾動位置，更新活動項目
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveItem(`#${section}`);
          break;
        }
      }
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

  // 滾動指示器動畫
  const scrollIndicatorWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.nav
        ref={navRef}
        style={{ scale: navScale }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 dark:bg-card/95 shadow-medium py-2" // 使用主題變量
            : "bg-transparent py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Link href="/" className="flex items-center space-x-2 group">
                <motion.div className="relative flex items-center" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <span className="heading-serif text-3xl font-bold relative flex items-center">
                    {" "}
                    {/* 增加 Logo 字體大小 */}
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
                      <Droplets className="h-8 w-8 mr-1" />
                    </motion.span>
                    健康
                    <span className="text-gradient-secondary">守護</span>
                  </span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <motion.div
                className="flex items-center bg-background/90 dark:bg-card/90 rounded-full px-1 py-1 shadow-soft" // 適配暗黑模式
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {navItems.map((item, i) => (
                  <motion.div key={item.href} custom={i} initial="hidden" animate="visible" variants={itemVariants}>
                    <Link
                      href={item.href}
                      className={`text-optimized relative px-4 py-2 text-base font-medium rounded-full flex items-center transition-all duration-300 ${
                        activeItem === item.href
                          ? "text-primary-600 dark:text-primary-400"
                          : "text-foreground/80 hover:text-foreground dark:text-foreground/70 dark:hover:text-foreground"
                      } hover:bg-background-hover dark:hover:bg-background-hover`}
                      onClick={() => setActiveItem(item.href)}
                    >
                      <span className="mr-1 opacity-70">{item.icon}</span>
                      <span className="font-rounded">{item.label}</span>
                      {activeItem === item.href && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-full bg-primary-100 dark:bg-primary-900/20 rounded-full -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* 主題切換按鈕 */}
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <ThemeToggle />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="rounded-full px-6 py-6 shadow-medium gradient-primary-to-accent hover:shadow-lg transition-all duration-300 text-base" // 增加按鈕大小和文字大小
                >
                  <Link href="#subscribe">
                    <motion.span
                      className="flex items-center space-x-1"
                      initial={{ opacity: 0.9 }}
                      animate={{
                        opacity: [0.9, 1, 0.9],
                        scale: [0.98, 1, 0.98],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <span>立即訂閱</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                          repeatDelay: 1,
                        }}
                      >
                        <ChevronRight className="h-5 w-5 ml-1" /> {/* 增加圖標大小 */}
                      </motion.span>
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              {/* 移動端主題切換按鈕 */}
              <ThemeToggle />

              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative bg-background/90 dark:bg-card/90 rounded-full p-2" // 適配暗黑模式
                  >
                    <AnimatePresence mode="wait">
                      {isMobileMenuOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <X className="h-6 w-6 text-foreground" /> {/* 使用主題變量 */}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Menu className="h-6 w-6 text-foreground" /> {/* 使用主題變量 */}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background dark:bg-card border-none">
                  {" "}
                  {/* 適配暗黑模式 */} {/* 使用主題變量 */}
                  <nav className="flex flex-col gap-6 mt-12">
                    <motion.div className="flex items-center justify-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                      <span className="text-4xl font-bold">
                        {" "}
                        {/* 增加字體大小 */}
                        <span className="text-gradient-primary">健康</span>
                        <span className="text-gradient-secondary">守護</span>
                      </span>
                    </motion.div>

                    {navItems.map((item, i) => (
                      <motion.div key={item.href} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1, duration: 0.4 }}>
                        <Link
                          href={item.href}
                          className={`flex items-center space-x-3 px-5 py-4 rounded-xl text-xl transition-all duration-300 ${
                            activeItem === item.href
                              ? "gradient-primary-to-secondary text-white font-medium shadow-medium"
                              : "text-foreground hover:text-primary hover:bg-muted dark:hover:bg-muted/50" // 適配暗黑模式
                          }`}
                          onClick={() => {
                            setActiveItem(item.href);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <span className={activeItem === item.href ? "text-white" : "text-primary dark:text-primary"}>{item.icon}</span>
                          <span>{item.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.4 }} className="mt-8">
                      <Button
                        className="w-full rounded-xl gradient-primary-to-accent shadow-medium hover:shadow-lg transition-all duration-300 py-6 text-lg" // 增加按鈕大小和文字大小
                        asChild
                      >
                        <Link href="#subscribe" onClick={() => setIsMobileMenuOpen(false)}>
                          <span className="flex items-center justify-center space-x-2">
                            <span>立即訂閱</span>
                            <motion.span
                              animate={{ x: [0, 5, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                              }}
                            >
                              <ChevronRight className="h-5 w-5" /> {/* 增加圖標大小 */}
                            </motion.span>
                          </span>
                        </Link>
                      </Button>
                    </motion.div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* 滾動進度指示器 */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-primary-to-secondary" // 增加指示器高度
          style={{ width: scrollIndicatorWidth }}
        />
      </motion.nav>

      {/* 頂部間隔，防止內容被固定導航欄遮擋 */}
      <div className="h-20"></div>
    </>
  );
}
