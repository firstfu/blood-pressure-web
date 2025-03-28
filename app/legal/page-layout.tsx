"use client";

/**
 * @ Author: firstfu
 * @ Create Time: 2024-09-05 15:20:42
 * @ Description: 法律文件頁面佈局的客戶端組件，支援多語言側邊欄
 */

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocale } from "@/app/i18n/context";
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  const { dictionary, isLoading } = useLocale();

  // 如果字典還在加載中，顯示一個載入指示器
  if (isLoading || !dictionary) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  const LegalLinks = [
    { name: dictionary.法律.隱私政策, href: "/legal/privacy-policy" },
    { name: dictionary.法律.使用條款, href: "/legal/terms-of-service" },
    { name: dictionary.法律.Cookie政策, href: "/legal/cookie-policy" },
    { name: dictionary.法律.資料安全, href: "/legal/data-security" },
  ];

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {dictionary.法律.返回首頁}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <aside className="md:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold mb-4">{dictionary.法律.法律文件}</h3>
              <nav>
                <ul className="space-y-2">
                  {LegalLinks.map(link => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-600 hover:text-blue-600">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <main className="md:col-span-3">
            <div className="dark:prose-invert max-w-none prose">{children}</div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
