/**
 * @ Author: firstfu
 * @ Create Time: 2024-06-05 15:27:00
 * @ Description: 網站根佈局組件，設定全局字體、主題和國際化配置
 */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_TC, Noto_Serif_TC, Inter, IBM_Plex_Sans_JP } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import { getDictionary } from "./i18n/dictionaries";
import { LocaleProvider } from "./i18n/context";
import { i18n } from "./i18n/settings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexSansJP = IBM_Plex_Sans_JP({
  variable: "--font-ibm-plex-sans-jp",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "血壓管家 - 簡單記錄血壓數值",
  description: "血壓管家幫您記錄和分析血壓數值，提供簡便的記錄工具，專注於血壓監測與數據分析。",
};

async function getInitialDictionary() {
  // 獲取默認語言字典作為初始值
  return getDictionary(i18n.defaultLocale);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 預加載默認語言字典
  const initialDictionary = await getInitialDictionary();

  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;500;700&family=Zen+Maru+Gothic:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansTC.variable} ${notoSerifTC.variable} ${inter.variable} ${ibmPlexSansJP.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="blood-pressure-theme">
          <LocaleProvider initialLocale={i18n.defaultLocale} initialDictionary={initialDictionary}>
            {children}
            <Toaster position="top-center" />
            <Analytics />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
