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

// 添加 Zen 字體
const zenOldMincho = Noto_Serif_TC({
  // 暫時使用 Noto_Serif_TC 代替，實際使用時需要更換為正確的 Zen Old Mincho 導入
  variable: "--font-zen-old-mincho",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const zenMaruGothic = Noto_Sans_TC({
  // 暫時使用 Noto_Sans_TC 代替，實際使用時需要更換為正確的 Zen Maru Gothic 導入
  variable: "--font-zen-maru-gothic",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

async function getInitialDictionary() {
  // 獲取默認語言字典作為初始值
  return getDictionary(i18n.defaultLocale);
}

export async function generateMetadata({ params }: { params: { lang?: string } }): Promise<Metadata> {
  // 檢測目前使用的語言
  const lang = params.lang || "zh-TW";
  const isEnglish = lang === "en";

  //   return {
  //     title: isEnglish ? "Blood Pressure Manager - Simple Blood Pressure Tracking" : "血壓管家 - 簡單記錄血壓數值",
  //     description: isEnglish
  //       ? "Blood Pressure Manager helps you record and analyze blood pressure values, providing a simple recording tool focused on blood pressure monitoring and data analysis."
  //       : "血壓管家幫您記錄和分析血壓數值，提供簡便的記錄工具，專注於血壓監測與數據分析。",
  //   };

  return {
    title: "Blood Pressure Manager",
    description:
      "Blood Pressure Manager helps you record and analyze blood pressure values, providing a simple recording tool focused on blood pressure monitoring and data analysis.",
  };
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansTC.variable} ${notoSerifTC.variable} ${inter.variable} ${ibmPlexSansJP.variable} ${zenOldMincho.variable} ${zenMaruGothic.variable} antialiased`}
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
