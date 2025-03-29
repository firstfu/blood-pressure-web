// @ Author: firstfu
// @ Create Time: 2024-03-27 14:47:35
// @ Description: 法律主頁面，提供法律文件的概述和連結，支援多國語系

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "../i18n/dictionaries";
import { i18n } from "../i18n/settings";

export default async function LegalPage() {
  // 使用默認語言
  const locale = i18n.defaultLocale;
  // 確保語言在支援列表中
  const validLocale = i18n.locales.includes(locale as any) ? locale : i18n.defaultLocale;
  const dictionary = await getDictionary(validLocale as any);

  const LegalLinks = [
    {
      name: dictionary.法律.隱私政策,
      href: "/legal/privacy-policy",
      description: dictionary.法律.隱私政策描述,
    },
    {
      name: dictionary.法律.使用條款,
      href: "/legal/terms-of-service",
      description: dictionary.法律.使用條款描述,
    },
    {
      name: dictionary.法律.Cookie政策,
      href: "/legal/cookie-policy",
      description: dictionary.法律.Cookie政策描述,
    },
    {
      name: dictionary.法律.資料安全,
      href: "/legal/data-security",
      description: dictionary.法律.資料安全描述,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{dictionary.法律.法律文件}</h1>
      <p className="mb-8">{dictionary.法律.說明文字}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">{dictionary.法律.聯繫我們標題}</h2>
        <p className="mb-4">{dictionary.法律.聯繫我們說明}</p>
        <p className="whitespace-pre-line">{dictionary.法律.聯繫信息}</p>
      </div>
    </div>
  );
}
