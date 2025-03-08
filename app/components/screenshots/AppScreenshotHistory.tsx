import React from "react";

export default function AppScreenshotHistory() {
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
        歷史記錄
      </text>

      {/* 日期選擇器 */}
      <rect x="20" y="140" width="320" height="50" rx="10" ry="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="40" y="170" fontFamily="Arial, sans-serif" fontSize="16" fill="#64748b" className="dark:fill-gray-300">
        2024年3月
      </text>
      <circle cx="300" cy="165" r="15" fill="#f1f5f9" className="dark:fill-gray-700" />
      <line x1="295" y1="165" x2="305" y2="165" stroke="#64748b" strokeWidth="2" className="dark:stroke-gray-300" />
      <line x1="300" y1="160" x2="300" y2="170" stroke="#64748b" strokeWidth="2" className="dark:stroke-gray-300" />

      {/* 歷史記錄列表 */}
      {/* 記錄 1 */}
      <rect x="20" y="210" width="320" height="80" rx="10" ry="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="40" y="235" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        3月9日 上午 8:30
      </text>
      <text x="40" y="260" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        收縮壓: 120 mmHg 舒張壓: 80 mmHg
      </text>
      <text x="40" y="280" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        心率: 72 bpm
      </text>
      <rect x="260" y="230" width="60" height="25" rx="12.5" ry="12.5" fill="#10b981" fillOpacity="0.2" />
      <text x="270" y="247" fontFamily="Arial, sans-serif" fontSize="12" fill="#10b981">
        正常
      </text>

      {/* 記錄 2 */}
      <rect x="20" y="300" width="320" height="80" rx="10" ry="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="40" y="325" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        3月8日 晚上 9:15
      </text>
      <text x="40" y="350" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        收縮壓: 135 mmHg 舒張壓: 85 mmHg
      </text>
      <text x="40" y="370" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        心率: 78 bpm
      </text>
      <rect x="260" y="320" width="60" height="25" rx="12.5" ry="12.5" fill="#fbbf24" fillOpacity="0.2" />
      <text x="270" y="337" fontFamily="Arial, sans-serif" fontSize="12" fill="#fbbf24">
        偏高
      </text>

      {/* 記錄 3 */}
      <rect x="20" y="390" width="320" height="80" rx="10" ry="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="40" y="415" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        3月8日 下午 2:45
      </text>
      <text x="40" y="440" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        收縮壓: 118 mmHg 舒張壓: 78 mmHg
      </text>
      <text x="40" y="460" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        心率: 70 bpm
      </text>
      <rect x="260" y="410" width="60" height="25" rx="12.5" ry="12.5" fill="#10b981" fillOpacity="0.2" />
      <text x="270" y="427" fontFamily="Arial, sans-serif" fontSize="12" fill="#10b981">
        正常
      </text>

      {/* 記錄 4 */}
      <rect x="20" y="480" width="320" height="80" rx="10" ry="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="40" y="505" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        3月8日 上午 8:30
      </text>
      <text x="40" y="530" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        收縮壓: 122 mmHg 舒張壓: 82 mmHg
      </text>
      <text x="40" y="550" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        心率: 74 bpm
      </text>
      <rect x="260" y="500" width="60" height="25" rx="12.5" ry="12.5" fill="#10b981" fillOpacity="0.2" />
      <text x="270" y="517" fontFamily="Arial, sans-serif" fontSize="12" fill="#10b981">
        正常
      </text>

      {/* 底部導航欄 */}
      <rect x="20" y="580" width="320" height="80" rx="15" ry="15" fill="#f1f5f9" className="dark:fill-gray-800" />

      {/* 導航圖標 */}
      <circle cx="80" cy="620" r="15" fill="#94a3b8" className="dark:fill-gray-600" />
      <circle cx="180" cy="620" r="15" fill="#0ea5e9" />
      <circle cx="280" cy="620" r="15" fill="#94a3b8" className="dark:fill-gray-600" />

      {/* 添加測量按鈕 */}
      <circle cx="180" cy="670" r="30" fill="#0ea5e9" stroke="#0284c7" strokeWidth="2" />
      <line x1="165" y1="670" x2="195" y2="670" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      <line x1="180" y1="655" x2="180" y2="685" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
