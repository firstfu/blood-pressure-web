/**
 * @ Author: firstfu
 * @ Create Time: 2024-05-04 19:14:05
 * @ Description: 顯示血壓管家應用數據分析頁面的SVG組件，展示血壓趨勢圖和統計數據
 */

import React from "react";

export default function AppScreenshotAnalytics() {
  return (
    <svg viewBox="0 0 360 720" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ maxHeight: "100%", maxWidth: "100%" }}>
      {/* 手機外框 */}
      <rect x="0" y="0" width="360" height="720" rx="40" ry="40" fill="#f8f9fa" stroke="#e2e8f0" strokeWidth="2" className="dark:fill-gray-900 dark:stroke-gray-700" />

      {/* 狀態欄 */}
      <rect x="0" y="0" width="360" height="40" rx="40" ry="40" fill="#f1f5f9" className="dark:fill-gray-800" />
      <circle cx="180" cy="20" r="10" fill="#e2e8f0" className="dark:fill-gray-700" />

      {/* 應用標題 */}
      <rect x="20" y="60" width="320" height="60" rx="10" ry="10" fill="#f1f5f9" className="dark:fill-gray-800" />
      <text x="40" y="100" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        數據分析
      </text>

      {/* 時間範圍選擇器 */}
      <rect x="20" y="140" width="320" height="40" rx="20" ry="20" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <rect x="20" y="140" width="106" height="40" rx="20" ry="20" fill="#0ea5e9" />
      <text x="55" y="165" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff">
        週
      </text>
      <text x="140" y="165" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        月
      </text>
      <text x="220" y="165" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        季
      </text>
      <text x="300" y="165" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        年
      </text>

      {/* 血壓趨勢圖 */}
      <rect x="20" y="200" width="320" height="200" rx="15" ry="15" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="40" y="230" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        血壓趨勢
      </text>

      {/* Y軸標籤 */}
      <text x="30" y="260" fontFamily="Arial, sans-serif" fontSize="10" fill="#94a3b8" className="dark:fill-gray-400">
        150
      </text>
      <text x="30" y="300" fontFamily="Arial, sans-serif" fontSize="10" fill="#94a3b8" className="dark:fill-gray-400">
        120
      </text>
      <text x="30" y="340" fontFamily="Arial, sans-serif" fontSize="10" fill="#94a3b8" className="dark:fill-gray-400">
        90
      </text>
      <text x="30" y="380" fontFamily="Arial, sans-serif" fontSize="10" fill="#94a3b8" className="dark:fill-gray-400">
        60
      </text>

      {/* X軸標籤 */}
      <text x="70" y="390" fontFamily="Arial, sans-serif" fontSize="10" fill="#94a3b8" className="dark:fill-gray-400">
        週一
      </text>
      <text x="120" y="390" fontFamily="Arial, sans-serif" fontSize="10" fill="#94a3b8" className="dark:fill-gray-400">
        週二
      </text>
      <text x="170" y="390" fontFamily="Arial, sans-serif" fontSize="10" fill="#94a3b8" className="dark:fill-gray-400">
        週三
      </text>
      <text x="220" y="390" fontFamily="Arial, sans-serif" fontSize="10" fill="#94a3b8" className="dark:fill-gray-400">
        週四
      </text>
      <text x="270" y="390" fontFamily="Arial, sans-serif" fontSize="10" fill="#94a3b8" className="dark:fill-gray-400">
        週五
      </text>
      <text x="320" y="390" fontFamily="Arial, sans-serif" fontSize="10" fill="#94a3b8" className="dark:fill-gray-400">
        週六
      </text>

      {/* 網格線 */}
      <line x1="50" y1="260" x2="320" y2="260" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2,2" className="dark:stroke-gray-700" />
      <line x1="50" y1="300" x2="320" y2="300" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2,2" className="dark:stroke-gray-700" />
      <line x1="50" y1="340" x2="320" y2="340" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2,2" className="dark:stroke-gray-700" />
      <line x1="50" y1="380" x2="320" y2="380" stroke="#e2e8f0" strokeWidth="1" className="dark:stroke-gray-700" />

      {/* 收縮壓曲線 */}
      <path d="M70,280 L120,260 L170,290 L220,250 L270,270 L320,265" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <animate
          attributeName="d"
          values="
            M70,280 L120,260 L170,290 L220,250 L270,270 L320,265;
            M70,278 L120,262 L170,288 L220,252 L270,268 L320,267;
            M70,280 L120,260 L170,290 L220,250 L270,270 L320,265
          "
          dur="8s"
          repeatCount="indefinite"
        />
      </path>

      {/* 舒張壓曲線 */}
      <path d="M70,350 L120,340 L170,360 L220,330 L270,350 L320,345" fill="none" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <animate
          attributeName="d"
          values="
            M70,350 L120,340 L170,360 L220,330 L270,350 L320,345;
            M70,348 L120,342 L170,358 L220,332 L270,348 L320,347;
            M70,350 L120,340 L170,360 L220,330 L270,350 L320,345
          "
          dur="8s"
          repeatCount="indefinite"
        />
      </path>

      {/* 圖例 */}
      <circle cx="60" cy="230" r="4" fill="#0ea5e9" />
      <text x="70" y="234" fontFamily="Arial, sans-serif" fontSize="12" fill="#64748b" className="dark:fill-gray-300">
        收縮壓
      </text>
      <circle cx="140" cy="230" r="4" fill="#a855f7" />
      <text x="150" y="234" fontFamily="Arial, sans-serif" fontSize="12" fill="#64748b" className="dark:fill-gray-300">
        舒張壓
      </text>

      {/* 統計數據卡片 */}
      <rect x="20" y="420" width="150" height="100" rx="15" ry="15" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="40" y="450" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        平均收縮壓
      </text>
      <text x="40" y="485" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#0ea5e9">
        122
      </text>
      <text x="90" y="485" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        mmHg
      </text>

      <rect x="190" y="420" width="150" height="100" rx="15" ry="15" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="210" y="450" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        平均舒張壓
      </text>
      <text x="210" y="485" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#a855f7">
        81
      </text>
      <text x="245" y="485" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        mmHg
      </text>

      {/* 分享報告按鈕 */}
      <rect x="20" y="540" width="320" height="50" rx="25" ry="25" fill="#0ea5e9" />
      <text x="130" y="570" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#ffffff">
        分享報告
      </text>

      {/* 底部導航欄 */}
      <rect x="20" y="610" width="320" height="80" rx="15" ry="15" fill="#f1f5f9" className="dark:fill-gray-800" />

      {/* 導航圖標 */}
      <circle cx="80" cy="650" r="15" fill="#94a3b8" className="dark:fill-gray-600" />
      <circle cx="180" cy="650" r="15" fill="#94a3b8" className="dark:fill-gray-600" />
      <circle cx="280" cy="650" r="15" fill="#0ea5e9" />
    </svg>
  );
}
