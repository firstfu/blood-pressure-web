"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const navigation = {
  product: [
    { name: "功能特色", href: "#features" },
    { name: "價格方案", href: "#pricing" },
    { name: "常見問題", href: "#faq" },
    { name: "使用教學", href: "#" },
  ],
  support: [
    { name: "聯絡我們", href: "#contact" },
    { name: "意見回饋", href: "#" },
    { name: "技術支援", href: "#" },
    { name: "使用條款", href: "#" },
  ],
  company: [
    { name: "關於我們", href: "#" },
    { name: "最新消息", href: "#" },
    { name: "合作夥伴", href: "#" },
    { name: "徵才資訊", href: "#" },
  ],
  legal: [
    { name: "隱私權政策", href: "#" },
    { name: "服務條款", href: "#" },
    { name: "資料安全", href: "#" },
    { name: "免責聲明", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "Youtube",
      href: "#",
      icon: Youtube,
    },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-semibold mb-4">產品</h3>
            <ul className="space-y-3">
              {navigation.product.map(item => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">支援</h3>
            <ul className="space-y-3">
              {navigation.support.map(item => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">公司</h3>
            <ul className="space-y-3">
              {navigation.company.map(item => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">法務</h3>
            <ul className="space-y-3">
              {navigation.legal.map(item => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {navigation.social.map(item => {
              const Icon = item.icon;
              return (
                <a key={item.name} href={item.href} className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <p className="text-sm text-slate-400">© 2024 健康守護. 保留所有權利.</p>
            <div className="flex space-x-4">
              <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                隱私權政策
              </Button>
              <Button variant="link" className="text-slate-400 hover:text-white p-0 h-auto">
                服務條款
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
