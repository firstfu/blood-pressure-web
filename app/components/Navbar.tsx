"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Heart, Activity, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#features", label: "功能特色", icon: <Activity className="w-4 h-4" /> },
  { href: "#preview", label: "產品預覽", icon: <Heart className="w-4 h-4" /> },
  { href: "#faq", label: "常見問題", icon: <Bell className="w-4 h-4" /> },
  { href: "#contact", label: "聯絡我們", icon: <ChevronRight className="w-4 h-4" /> },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 shadow-lg backdrop-blur-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.span className="text-2xl font-bold relative" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <span className="text-primary">健康</span>
                <span className="text-green-500">守護</span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-green-500 group-hover:w-full"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-1 py-1 shadow-sm">
              {navItems.map((item, i) => (
                <motion.div key={item.href} custom={i} initial="hidden" animate="visible" variants={itemVariants}>
                  <Link
                    href={item.href}
                    className={`relative flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeItem === item.href ? "text-white bg-primary shadow-md" : "text-gray-600 hover:text-primary hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveItem(item.href)}
                  >
                    <span className="hidden sm:inline-block">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="rounded-full px-6 shadow-md bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700">
                <Link href="#subscribe">
                  <span className="flex items-center space-x-1">
                    <span>立即訂閱</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-md">
                <nav className="flex flex-col gap-6 mt-8">
                  {navItems.map((item, i) => (
                    <motion.div key={item.href} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1, duration: 0.4 }}>
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-lg transition-all duration-300 ${
                          activeItem === item.href ? "text-primary bg-primary-50 font-medium" : "text-gray-600 hover:text-primary hover:bg-gray-50"
                        }`}
                        onClick={() => {
                          setActiveItem(item.href);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <span className="text-primary">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.4 }} className="mt-4">
                    <Button className="w-full rounded-lg bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-md" asChild>
                      <Link href="#subscribe" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="flex items-center justify-center space-x-2">
                          <span>立即訂閱</span>
                          <ChevronRight className="h-4 w-4" />
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
    </motion.nav>
  );
}
