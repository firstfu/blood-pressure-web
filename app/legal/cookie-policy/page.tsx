import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie 政策 | 血壓管理系統",
  description: "了解血壓管理系統如何使用 Cookies 及其他追蹤技術",
};

export default function CookiePolicy() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Cookie 政策</h1>
      <p className="text-gray-500 mb-6">最後更新日期：{new Date().toLocaleDateString("zh-TW")}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">關於本政策</h2>
        <p className="mb-4">
          本 Cookie 政策說明血壓管理系統（以下簡稱「本系統」、「我們」或「我們的」）如何使用 cookies
          及其他類似技術來識別您在訪問我們的網站和服務時的信息。本政策解釋了這些技術是什麼、為什麼我們使用它們，以及您如何控制我們對它們的使用。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">什麼是 Cookies</h2>
        <p className="mb-4">
          Cookies
          是小型資料檔案，當您訪問網站時，會存儲在您的設備上（電腦、手機或平板）。它們被廣泛用於使網站正常運作，或更有效地運作，以及為網站所有者提供信息。
        </p>
        <p className="mb-4">
          Cookies 使網站能夠「記住」您的操作和偏好設置（如登錄、語言、字體大小和其他顯示偏好）一段時間，因此您不必在每次訪問頁面時重新輸入這些信息。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">我們使用的 Cookies 類型</h2>
        <p className="mb-4">我們可能會使用以下類型的 cookies：</p>

        <h3 className="text-xl font-medium mt-6 mb-3">必要的 Cookies</h3>
        <p className="mb-4">
          這些 cookies
          對於提供我們網站的基本功能至關重要，無法在我們的系統中關閉。它們通常僅針對您所做的對應於服務請求的操作而設置，如設置您的隱私偏好、登錄或填寫表格。您可以設置瀏覽器以阻止這些
          cookies 或提醒您有關這些 cookies，但這可能會導致網站的某些部分無法正常工作。
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">功能性 Cookies</h3>
        <p className="mb-4">
          這些 cookies 使我們能夠提供增強的功能和個性化。它們可能由我們或我們放置在頁面上的第三方提供商設置。如果您不允許這些
          cookies，則這些或全部服務可能無法正常運作。
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">分析性 Cookies</h3>
        <p className="mb-4">
          這些 cookies
          允許我們統計訪問量和流量來源，以便我們可以測量和改善我們網站的性能。它們幫助我們了解哪些頁面最受歡迎和最不受歡迎，並了解訪問者如何在網站上移動。這些
          cookies 收集的所有信息都是匯總的，因此是匿名的。
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">定向 Cookies</h3>
        <p className="mb-4">
          這些 cookies
          可能由我們的廣告合作伙伴通過我們的網站設置。這些公司可能會使用它們來建立您的興趣檔案，並在其他網站上向您顯示相關廣告。它們不直接存儲個人信息，但基於唯一標識您的瀏覽器和互聯網設備。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">我們如何使用 Cookies</h2>
        <p className="mb-4">我們使用 cookies 出於各種原因，包括：</p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>驗證用戶並記住他們的偏好和設置；</li>
          <li>提供安全的登錄和維護帳戶安全；</li>
          <li>分析我們的網站流量和使用模式；</li>
          <li>改善我們網站的性能和用戶體驗；</li>
          <li>識別和解決技術問題；</li>
          <li>根據用戶的瀏覽習慣提供個性化內容；</li>
          <li>提供和評估廣告的效果（如適用）。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">第三方 Cookies</h2>
        <p className="mb-4">
          除了我們設置的 cookies 外，第三方也可能會在您訪問我們的服務時設置 cookies。例如，我們可能使用 Google Analytics
          等第三方分析服務，這些服務會在您的設備上放置 cookies 以收集有關您如何使用我們網站的信息。
        </p>
        <p className="mb-4">我們無法控制第三方網站或服務設置的 cookies。我們建議您查看這些第三方的隱私政策，以了解他們如何使用 cookies。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">管理您的 Cookie 偏好</h2>
        <p className="mb-4">
          大多數網頁瀏覽器預設為接受 cookies。如果您希望，您可以通常通過更改瀏覽器設置來阻止或刪除
          cookies。每個瀏覽器的方法略有不同，請參考您使用的瀏覽器的「説明」部分了解如何管理 cookies。
        </p>
        <p className="mb-4">請注意，阻止或刪除 cookies 可能會影響我們網站的用戶體驗，並可能使某些功能和服務無法正常工作。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">其他追蹤技術</h2>
        <p className="mb-4">除了 cookies，我們可能還使用其他類似的技術來追蹤我們網站的使用情況：</p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>
            <strong>網絡信標（Web Beacons）</strong>：也被稱為「像素標籤」或「清除 GIF」，這些小型圖像文件可用於計數訪問特定頁面的用戶數量或訪問次數；
          </li>
          <li>
            <strong>本地存儲對象（Local Storage Objects）</strong>：如 Flash cookies 或 HTML5 本地存儲，用於存儲偏好或用戶行為數據；
          </li>
          <li>
            <strong>腳本（Scripts）</strong>：瀏覽器執行的代碼，可收集關於用戶如何與我們網站互動的信息。
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">我們的 Cookie 政策變更</h2>
        <p className="mb-4">
          我們可能會不時更新本 Cookie 政策，以反映我們的做法變更或出於其他運營、法律或監管原因。我們鼓勵您定期查看本政策，以了解我們如何使用 cookies
          和相關技術。更新後的政策將在此頁面上發布，並更新政策頂部的「最後更新日期」。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">聯繫我們</h2>
        <p className="mb-4">如果您對我們的 Cookie 政策有任何疑問或意見，請通過以下方式聯繫我們：</p>
        <p>
          電子郵件：privacy@bloodpressureapp.com
          <br />
          電話：+886-2-1234-5678
          <br />
          地址：台灣台北市信義區信義路五段7號
        </p>
      </section>
    </div>
  );
}
