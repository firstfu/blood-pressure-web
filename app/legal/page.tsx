import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "法律文件 | 血壓管理系統",
  description: "血壓管理系統的法律文件、隱私政策和使用條款",
};

const LegalLinks = [
  {
    name: "隱私政策",
    href: "/legal/privacy-policy",
    description: "了解我們如何收集、使用和保護您的個人資料。",
  },
  {
    name: "使用條款",
    href: "/legal/terms-of-service",
    description: "使用我們服務所需遵守的條款與規定。",
  },
  {
    name: "Cookie 政策",
    href: "/legal/cookie-policy",
    description: "了解我們如何使用 Cookies 及追蹤技術。",
  },
  {
    name: "資料安全",
    href: "/legal/data-security",
    description: "我們如何保護您的健康資料安全。",
  },
];

export default function LegalPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">法律文件</h1>
      <p className="mb-8">以下是與血壓管理系統相關的重要法律文件。我們鼓勵您閱讀這些文件，以了解您的權利和我們的責任。</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LegalLinks.map(link => (
          <Link href={link.href} key={link.href} className="block p-6 border rounded-lg hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{link.name}</h2>
              <ArrowRight className="h-5 w-5 text-blue-600" />
            </div>
            <p className="mt-2 text-gray-600">{link.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">聯繫我們</h2>
        <p className="mb-4">如果您對我們的法律文件有任何疑問或需要進一步的說明，請隨時與我們聯繫。</p>
        <p>
          電子郵件：legal@bloodpressureapp.com
          <br />
          電話：+886-2-1234-5678
          <br />
          地址：台灣台北市信義區信義路五段7號
        </p>
      </div>
    </div>
  );
}
