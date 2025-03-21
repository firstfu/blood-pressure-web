// @ Author: firstfu
// @ Create Time: 2024-03-13 16:16:42
// @ Description: 法律文件頁面佈局

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LegalContextProvider from "./LegalContextProvider";

export const metadata: Metadata = {
  title: "法律文件 | 血壓管理系統",
  description: "血壓管理系統的法律文件、隱私政策和使用條款",
};

const LegalLinks = [
  { name: "隱私政策", href: "/legal/privacy-policy" },
  { name: "使用條款", href: "/legal/terms-of-service" },
  { name: "Cookie 政策", href: "/legal/cookie-policy" },
  { name: "資料安全", href: "/legal/data-security" },
];

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LegalContextProvider>
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回首頁
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <aside className="md:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold mb-4">法律文件</h3>
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
    </LegalContextProvider>
  );
}
