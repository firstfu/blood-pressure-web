import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "資料安全 | 血壓管理系統",
  description: "了解我們如何保護您的健康資料安全",
};

export default function DataSecurity() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">資料安全</h1>
      <p className="text-gray-500 mb-6">最後更新日期：{new Date().toLocaleDateString("zh-TW")}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">我們對資料安全的承諾</h2>
        <p className="mb-4">
          在血壓管理系統（以下簡稱「本系統」、「我們」或「我們的」），我們深知您的健康資料的敏感性和重要性。保護您信任託付給我們的個人和健康資訊是我們的首要任務。本文檔概述了我們為保護您的資料所採取的安全措施和做法。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">資料加密</h2>
        <p className="mb-4">我們使用強大的加密技術來保護您的資料：</p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>
            <strong>傳輸中加密</strong>：我們使用 SSL/TLS 加密技術（HTTPS）來確保當資料在您的設備和我們的伺服器之間傳輸時的安全；
          </li>
          <li>
            <strong>靜態加密</strong>：存儲在我們資料庫中的敏感資料在靜態時也會被加密，即使在極少數的資料庫安全漏洞情況下，您的資料仍然受到保護；
          </li>
          <li>
            <strong>端到端加密</strong>：對於特定類型的通訊和高度敏感的資料，我們實施端到端加密，確保只有您和您授權的收件人可以訪問資訊。
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">基礎設施安全</h2>
        <p className="mb-4">我們的技術基礎設施設計有多層安全控制：</p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>
            <strong>安全伺服器</strong>：我們的資料存儲在由領先的雲服務提供商託管的安全伺服器上，這些提供商符合最嚴格的安全標準；
          </li>
          <li>
            <strong>防火牆保護</strong>：我們使用最先進的防火牆技術來監控和控制進出我們網路的資料流量；
          </li>
          <li>
            <strong>入侵檢測</strong>：我們的系統配備入侵檢測機制，可以識別和阻止可疑活動；
          </li>
          <li>
            <strong>定期安全掃描</strong>：我們進行定期安全掃描和弱點評估，以主動識別和解決潛在的安全問題。
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">訪問控制</h2>
        <p className="mb-4">我們實施嚴格的訪問控制措施，以確保只有經授權的人員可以訪問用戶資料：</p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>
            <strong>嚴格的權限管理</strong>：我們遵循最小權限原則，確保員工只能訪問履行其特定工作角色所必需的資料；
          </li>
          <li>
            <strong>多因素認證</strong>：我們的系統和重要應用程式需要多因素認證，為訪問敏感資料增加額外的安全層；
          </li>
          <li>
            <strong>定期訪問審查</strong>：我們定期審查訪問權限，確保訪問權限僅授予需要的人員；
          </li>
          <li>
            <strong>詳細訪問日誌</strong>：我們維護系統訪問的詳細日誌，以便在可疑活動的情況下進行審查和調查。
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">應用程式安全</h2>
        <p className="mb-4">我們的應用程式開發遵循安全最佳實踐：</p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>
            <strong>安全開發生命週期</strong>：我們在整個開發過程中整合安全實踐，從設計到部署；
          </li>
          <li>
            <strong>定期代碼審查</strong>：我們的代碼經過定期安全審查，確保遵守最佳實踐並識別潛在的弱點；
          </li>
          <li>
            <strong>第三方安全審計</strong>：我們聘請獨立安全專家對我們的系統進行審計和滲透測試；
          </li>
          <li>
            <strong>自動化安全測試</strong>：我們使用自動化工具進行持續的安全測試，作為我們開發和部署管道的一部分。
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">員工安全意識和培訓</h2>
        <p className="mb-4">我們的安全策略包括全面的員工意識和培訓計劃：</p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>
            <strong>定期安全培訓</strong>：所有員工都接受定期的資料保護和安全最佳實踐培訓；
          </li>
          <li>
            <strong>安全政策</strong>：我們有全面的安全政策，所有員工必須遵守；
          </li>
          <li>
            <strong>保密協議</strong>：我們的員工簽署保密協議，承諾保護用戶資料。
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">事件響應</h2>
        <p className="mb-4">我們制定了全面的事件響應計劃，以應對潛在的安全事件：</p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>
            <strong>事件響應團隊</strong>：我們有專門的安全事件響應團隊，準備在需要時立即採取行動；
          </li>
          <li>
            <strong>定期測試</strong>：我們定期測試和演練我們的事件響應計劃，確保其有效性；
          </li>
          <li>
            <strong>通知程序</strong>：我們有明確的程序，在安全事件發生時通知受影響的用戶和相關監管機構；
          </li>
          <li>
            <strong>持續改進</strong>：我們從每次安全事件中學習，不斷改進我們的安全實踐和程序。
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">資料備份和復原</h2>
        <p className="mb-4">為保護資料免受意外丟失或損壞，我們實施了強大的備份策略：</p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>
            <strong>定期備份</strong>：用戶資料定期備份到安全位置；
          </li>
          <li>
            <strong>加密備份</strong>：所有備份都經過加密，以確保額外的保護層；
          </li>
          <li>
            <strong>備份測試</strong>：我們定期測試備份恢復過程，確保資料可以在需要時被恢復；
          </li>
          <li>
            <strong>地理分散</strong>：備份存儲在地理上分散的位置，提供額外的冗餘和保護。
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">法規遵循</h2>
        <p className="mb-4">我們致力於遵守適用的數據保護法規和標準：</p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>
            <strong>法規合規</strong>：我們的資料安全做法符合相關的數據保護法規；
          </li>
          <li>
            <strong>行業標準</strong>：我們遵循健康資訊保護的業界最佳實踐和標準；
          </li>
          <li>
            <strong>隱私保護</strong>：我們尊重並保護您的隱私權，如我們的隱私政策所詳述的；
          </li>
          <li>
            <strong>定期審查</strong>：我們定期審查和更新我們的做法，以確保持續遵守不斷演變的法規和標準。
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">您在保護數據中的角色</h2>
        <p className="mb-4">雖然我們投入大量資源保護您的資料，但您也在保護自己的資訊方面發揮著重要作用：</p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>
            <strong>強密碼</strong>：使用強密碼並定期更改；
          </li>
          <li>
            <strong>啟用多因素認證</strong>：在可用時使用我們提供的多因素認證選項；
          </li>
          <li>
            <strong>保持設備安全</strong>：確保您用於訪問我們服務的設備有適當的安全措施；
          </li>
          <li>
            <strong>警惕可疑活動</strong>：報告任何可疑活動或未經授權的帳戶訪問；
          </li>
          <li>
            <strong>定期檢查</strong>：定期查看您的帳戶活動和設置。
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">資料安全更新</h2>
        <p className="mb-4">
          我們不斷改進我們的安全措施，以應對新出現的威脅和技術進步。我們可能會更新這個資料安全文檔，以反映我們實踐的變化。我們鼓勵您定期查看此頁面以了解我們如何保護您的資料的最新信息。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">聯繫我們</h2>
        <p className="mb-4">如果您對我們的資料安全做法有任何疑問、疑慮或建議，請通過以下方式聯繫我們：</p>
        <p>
          電子郵件：security@bloodpressureapp.com
          <br />
          電話：+886-2-1234-5678
          <br />
          地址：台灣台北市信義區信義路五段7號
        </p>
      </section>
    </div>
  );
}
