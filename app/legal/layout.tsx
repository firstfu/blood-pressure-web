// @ Author: firstfu
// @ Create Time: 2024-03-27 14:42:34
// @ Description: 法律文件頁面佈局，支援多國語系顯示法律相關文件

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LegalContextProvider from "./LegalContextProvider";
import { getDictionary } from "../i18n/dictionaries";
import { i18n } from "../i18n/settings";

export async function generateMetadata({ params }: { params: { locale?: string } }): Promise<Metadata> {
  // 如果沒有指定語言，使用預設語言
  const locale = params.locale || i18n.defaultLocale;
  // 確保語言在支援列表中
  const validLocale = i18n.locales.includes(locale as any) ? locale : i18n.defaultLocale;
  const dictionary = await getDictionary(validLocale as any);

  return {
    title: `${dictionary.法律.法律文件} | ${dictionary.共用.應用名稱_上}${dictionary.共用.應用名稱_下}`,
    description: `${dictionary.共用.應用名稱_上}${dictionary.共用.應用名稱_下}${dictionary.頁腳.隱私政策}、${dictionary.頁腳.使用條款}和${dictionary.頁腳.Cookie政策}`,
  };
}

export default async function LegalLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: { locale?: string };
}>) {
  // 如果沒有指定語言，使用預設語言
  const locale = params?.locale || i18n.defaultLocale;
  // 確保語言在支援列表中
  const validLocale = i18n.locales.includes(locale as any) ? locale : i18n.defaultLocale;
  const dictionary = await getDictionary(validLocale as any);

  const LegalLinks = [
    { name: dictionary.法律.隱私政策, href: "/legal/privacy-policy" },
    { name: dictionary.法律.使用條款, href: "/legal/terms-of-service" },
    { name: dictionary.法律.Cookie政策, href: "/legal/cookie-policy" },
    { name: dictionary.法律.資料安全, href: "/legal/data-security" },
  ];

  return (
    <LegalContextProvider>
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
    </LegalContextProvider>
  );
}
