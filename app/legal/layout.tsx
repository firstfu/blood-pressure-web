/**
 * @ Author: firstfu
 * @ Create Time: 2024-03-27 14:42:34
 * @ Description: 法律文件頁面佈局，支援多國語系顯示法律相關文件
 */

import type { Metadata } from "next";
import LegalContextProvider from "./LegalContextProvider";
import PageLayout from "./PageLayout";

// 靜態產生的 metadata
export const metadata: Metadata = {
  title: `法律文件 | 血壓管家`,
  description: `血壓管家隱私政策、使用條款和Cookie政策`,
};

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LegalContextProvider>
      <PageLayout>{children}</PageLayout>
    </LegalContextProvider>
  );
}
