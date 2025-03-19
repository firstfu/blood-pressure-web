// @ Author: firstfu
// @ Create Time: 2023-03-20 10:45:32
// @ Description: 隱私權政策頁面，提供使用者了解資料使用與保護方式

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隱私政策 | 血壓管家",
  description: "了解我們如何收集、使用和保護您的個人資料",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="bg-clip-text bg-gradient-to-r text-3xl text-transparent font-bold from-primary mb-6 to-secondary">隱私權政策</h1>
      <p className="text-muted-foreground mb-6">最後更新日期：{new Date().toLocaleDateString("zh-TW")}</p>

      <section className="mb-8">
        <h2 className="text-2xl text-foreground font-semibold mb-4">簡介</h2>
        <p className="text-foreground mb-4">
          歡迎使用血壓管家（以下簡稱「本系統」、「我們」或「我們的」）。我們非常重視您的隱私，並致力於保護您的個人資料。本隱私政策旨在告知您我們如何收集、使用、分享和保護您的資訊。
        </p>
        <p className="text-foreground mb-4">使用我們的服務即表示您同意本隱私政策中描述的做法。請仔細閱讀本政策，以了解我們如何處理您的資訊。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-foreground font-semibold mb-4">我們收集的資訊</h2>
        <p className="text-foreground mb-4">我們可能收集以下類型的資訊：</p>
        <ul className="list-disc text-foreground mb-4 pl-8 space-y-2">
          <li>
            <strong>個人識別資訊</strong>：包括您的姓名、電子郵件地址、電話號碼和其他您在註冊、設置個人檔案或使用我們服務時提供的資訊。
          </li>
          <li>
            <strong>健康相關資訊</strong>：包括您的血壓讀數、測量時間、用藥記錄、症狀記錄以及其他您輸入到系統中的健康資訊。
          </li>
          <li>
            <strong>使用資訊</strong>：關於您如何使用我們服務的資訊，包括訪問時間、訪問頁面、使用功能等。
          </li>
          <li>
            <strong>設備資訊</strong>：包括您的設備類型、操作系統、瀏覽器類型、IP 地址等技術資訊。
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-foreground font-semibold mb-4">我們如何使用收集的資訊</h2>
        <p className="text-foreground mb-4">我們使用收集的資訊以下列方式：</p>
        <ul className="list-disc text-foreground mb-4 pl-8 space-y-2">
          <li>提供、維護和改進我們的服務；</li>
          <li>創建和維護您的帳戶；</li>
          <li>處理和分析您的健康資訊，以提供個性化的健康見解和建議；</li>
          <li>與您溝通，回應您的詢問、請求或需求；</li>
          <li>向您發送有關服務更新、健康提醒和其他通知；</li>
          <li>監控和分析服務使用趨勢、活動和功能；</li>
          <li>偵測、預防和解決技術問題、安全問題或詐欺活動。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-foreground font-semibold mb-4">資訊分享與披露</h2>
        <p className="text-foreground mb-4">我們不會在未經您明確許可的情況下出售、交換或出租您的個人資訊給第三方。我們可能會在以下情況下分享您的資訊：</p>
        <ul className="list-disc text-foreground mb-4 pl-8 space-y-2">
          <li>
            <strong>服務提供商</strong>：與協助我們營運、提供或改進服務的第三方服務提供商分享，這些提供商受到保密協議的約束；
          </li>
          <li>
            <strong>法律要求</strong>：當我們認為披露是遵守法律、法規或法律程序（如法院命令或傳票）所必需的；
          </li>
          <li>
            <strong>保護權利</strong>：當我們認為披露是保護我們、我們的用戶或他人的權利、財產或安全所必需的；
          </li>
          <li>
            <strong>企業轉讓</strong>：在合併、收購、重組或出售資產的情況下，您的資訊可能作為交易的一部分被轉讓；
          </li>
          <li>
            <strong>同意分享</strong>：在您同意的情況下，我們可能會與醫療保健提供者或您指定的其他人分享您的健康資訊。
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-foreground font-semibold mb-4">資料安全</h2>
        <p className="text-foreground mb-4">
          我們實施適當的技術、物理和管理安全措施，以保護您的個人資訊免受未經授權的訪問、使用或披露。然而，請注意，沒有任何網絡傳輸或電子存儲方法是完全安全的。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-foreground font-semibold mb-4">您的權利與選擇</h2>
        <p className="text-foreground mb-4">您對自己的個人資訊擁有以下權利：</p>
        <ul className="list-disc text-foreground mb-4 pl-8 space-y-2">
          <li>
            <strong>訪問和更新</strong>：您可以通過帳戶設置訪問和更新您的個人資訊；
          </li>
          <li>
            <strong>資料導出</strong>：您可以請求導出您在我們服務中存儲的個人資訊的副本；
          </li>
          <li>
            <strong>刪除資料</strong>：您可以請求刪除您的帳戶和相關資訊；
          </li>
          <li>
            <strong>通知偏好</strong>：您可以通過帳戶設置或聯繫我們來更改您對通知和通訊的偏好；
          </li>
          <li>
            <strong>同意撤回</strong>：如果我們基於您的同意處理您的資訊，您有權隨時撤回同意。
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-foreground font-semibold mb-4">兒童隱私</h2>
        <p className="text-foreground mb-4">
          我們的服務不面向 16 歲以下的兒童。我們不會故意收集 16
          歲以下兒童的個人識別資訊。如果您是父母或監護人，並相信我們可能收集了您子女的資訊，請聯繫我們，我們將採取措施刪除這些資訊。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-foreground font-semibold mb-4">隱私政策變更</h2>
        <p className="text-foreground mb-4">
          我們可能會不時更新本隱私政策。更新後的政策將在此頁面上發布，並更新政策頂部的「最後更新日期」。我們鼓勵您定期查看本政策以了解任何變更。在重大變更的情況下，我們可能會通過電子郵件或服務內通知向您發送通知。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-foreground font-semibold mb-4">聯繫我們</h2>
        <p className="text-foreground mb-4">如果您對本隱私政策有任何疑問、意見或請求，請通過以下方式聯繫我們：</p>
        <div className="bg-card/50 border border-border p-6 rounded-lg shadow-sm">
          <p className="text-foreground">
            電子郵件：
            <a href="mailto:privacy@bloodpressureapp.com" className="text-primary hover:underline">
              privacy@bloodpressureapp.com
            </a>
            <br />
            電話：+886-2-1234-5678
            <br />
            地址：台灣台北市信義區信義路五段7號
          </p>
        </div>
      </section>
    </div>
  );
}
