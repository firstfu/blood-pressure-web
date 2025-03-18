import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "使用條款 | 血壓管理系統",
  description: "了解使用血壓管理系統的條款與規定",
};

export default function TermsOfService() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">使用條款</h1>
      <p className="text-gray-500 mb-6">最後更新日期：{new Date().toLocaleDateString("zh-TW")}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">接受條款</h2>
        <p className="mb-4">歡迎使用血壓管理系統（以下簡稱「本系統」、「我們」或「我們的」）。本使用條款（「條款」）規範您對我們網站、應用程式和服務的使用。</p>
        <p className="mb-4">通過訪問或使用我們的服務，您確認您已閱讀、理解並同意受這些條款的約束。如果您不同意這些條款的任何部分，則您不得使用我們的服務。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">服務描述</h2>
        <p className="mb-4">
          血壓管理系統提供一個平台，允許用戶記錄、追蹤和分析他們的血壓相關健康數據，並接收相關的健康見解和建議。我們的服務可能包括但不限於：
        </p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>血壓數據的記錄和追蹤；</li>
          <li>數據分析和趨勢可視化；</li>
          <li>健康見解和建議；</li>
          <li>提醒和通知功能；</li>
          <li>與醫療保健提供者分享數據的能力。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">帳戶註冊與安全</h2>
        <p className="mb-4">要使用我們服務的某些功能，您可能需要創建一個帳戶。您同意提供準確、完整且最新的資訊，並在需要時更新資訊以保持其準確性。</p>
        <p className="mb-4">您負責維護您帳戶的安全，包括保護您的密碼和限制對您帳戶的訪問。您同意對您帳戶下發生的所有活動負責。</p>
        <p className="mb-4">如果您發現或懷疑有任何未經授權使用您帳戶的情況，請立即通知我們。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">用戶責任與行為</h2>
        <p className="mb-4">使用我們的服務時，您同意：</p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>遵守所有適用的法律和法規；</li>
          <li>提供準確的個人和健康資訊；</li>
          <li>不會干擾或破壞服務或連接到服務的伺服器或網路；</li>
          <li>不會使用服務進行任何非法、有害、欺詐或侵權活動；</li>
          <li>不會上傳包含病毒、惡意軟體或有害代碼的內容；</li>
          <li>不會嘗試未經授權訪問其他用戶的帳戶或系統的任何部分。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">健康免責聲明</h2>
        <p className="mb-4">我們的服務提供的健康資訊和建議僅供參考，不能替代專業醫療建議、診斷或治療。服務不應被視為醫療服務或醫療設備。</p>
        <p className="mb-4">
          <strong>如果您正在經歷醫療緊急情況，請立即聯繫您的醫生或撥打急診電話。</strong>
        </p>
        <p className="mb-4">在做出任何可能影響您健康的決定之前，請諮詢合格的醫療專業人員。我們不對您基於服務中提供的資訊所做的決定或採取的行動承擔責任。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">知識產權</h2>
        <p className="mb-4">
          我們的服務和其中的內容（包括但不限於文本、圖形、標誌、圖像、軟體和代碼）由我們或我們的授權方擁有，並受著作權、商標和其他知識產權法的保護。
        </p>
        <p className="mb-4">
          我們授予您有限的、非排他性的、不可轉讓的許可，僅用於根據這些條款使用服務。未經我們明確許可，您不得複製、修改、分發、出售或租賃服務的任何部分。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">服務變更與終止</h2>
        <p className="mb-4">我們保留隨時修改、暫停或停止服務或其任何部分的權利，恕不另行通知。我們可能會定期更新服務以添加新功能或更改現有功能。</p>
        <p className="mb-4">我們保留在不事先通知的情況下，出於任何原因終止或限制您使用服務的權利，包括違反這些條款。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">免責聲明</h2>
        <p className="mb-4">服務按「現狀」和「可用」提供，不提供任何明示或暗示的保證。我們不保證服務將是不間斷的、及時的、安全的或無錯誤的。</p>
        <p className="mb-4">我們不保證服務提供的結果將是準確的或可靠的。服務可能包含錯誤，我們不保證這些錯誤會被更正。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">責任限制</h2>
        <p className="mb-4">
          在法律允許的最大範圍內，我們及我們的董事、員工、合作夥伴和代理人對於因使用或無法使用我們的服務而引起的任何直接、間接、偶然、特殊、懲罰性或後果性損害不承擔責任。
        </p>
        <p className="mb-4">
          即使我們已被告知此類損害的可能性，或者損害是可預見的，我們對任何損失或損害的責任也不會超過您在事件發生前 12 個月內支付給我們的金額（如有）。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">條款變更</h2>
        <p className="mb-4">
          我們可能會不時修改這些條款。修改後的條款將在此頁面上發布，並更新條款頂部的「最後更新日期」。我們鼓勵您定期查看這些條款以了解任何變更。
        </p>
        <p className="mb-4">在修改後繼續使用服務即表示您接受修改後的條款。如果您不同意新條款，您必須停止使用服務。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">一般條款</h2>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>
            <strong>完整協議</strong>：這些條款構成您與我們之間關於使用服務的完整協議，並取代之前或同時的所有通訊和提議，無論是口頭還是書面的。
          </li>
          <li>
            <strong>條款可分割性</strong>：如果這些條款的任何部分被認為無效或不可執行，該部分將被解釋為反映雙方的原意，剩餘部分將保持完全有效。
          </li>
          <li>
            <strong>棄權</strong>：我們未能執行這些條款的任何權利或規定不構成對該權利或規定的棄權。
          </li>
          <li>
            <strong>準據法</strong>：這些條款受台灣法律管轄，不考慮衝突法條款。
          </li>
          <li>
            <strong>爭議解決</strong>：因這些條款或服務引起的任何爭議將通過協商解決。如果協商不成，爭議將提交台灣台北地方法院作為第一審管轄法院。
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">聯繫我們</h2>
        <p className="mb-4">如果您對這些條款有任何疑問或意見，請通過以下方式聯繫我們：</p>
        <p>
          電子郵件：terms@bloodpressureapp.com
          <br />
          電話：+886-2-1234-5678
          <br />
          地址：台灣台北市信義區信義路五段7號
        </p>
      </section>
    </div>
  );
}
