import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回首頁
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
          <div className="prose max-w-none">{children}</div>
        </main>
      </div>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} 血壓管理系統。保留所有權利。</p>
      </footer>
    </div>
  );
}
