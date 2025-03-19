"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-border border-t dark:bg-card dark:border-primary-900/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="bg-clip-text bg-gradient-to-r text-2xl text-transparent font-bold from-primary to-secondary">血壓管家</span>
            </Link>
            <p className="text-muted-foreground mt-4">專注於血壓記錄的應用，幫助您輕鬆記錄和分析血壓數值，智能管理您的健康數據。</p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-foreground text-lg font-semibold mb-4">產品</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  功能特點
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  價格方案
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  下載應用
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  更新日誌
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground text-lg font-semibold mb-4">支援</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  常見問題
                </Link>
              </li>
              <li>
                <Link href="/legal/guide" className="text-muted-foreground hover:text-primary transition-colors">
                  使用指南
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  聯絡我們
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  意見反饋
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground text-lg font-semibold mb-4">法律</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  隱私政策
                </Link>
              </li>
              <li>
                <Link href="/legal/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
                  使用條款
                </Link>
              </li>
              <li>
                <Link href="/legal/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie 政策
                </Link>
              </li>
              <li>
                <Link href="/legal/data-security" className="text-muted-foreground hover:text-primary transition-colors">
                  資料安全
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col border-border border-t justify-between dark:border-primary-900/20 items-center md:flex-row mt-12 pt-8">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">&copy; {currentYear} 血壓管家. 保留所有權利.</p>
          <div className="flex items-center space-x-4">
            <span className="flex text-muted-foreground text-sm items-center">
              以 <Heart className="h-4 text-red-500 w-4 mx-1" /> 製作
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
