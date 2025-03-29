/**
 * @ Author: firstfu
 * @ Create Time: 2024-05-04 19:12:30
 * @ Description: 顯示血壓管家應用個人設置頁面的SVG組件，包含用戶設置和偏好選項
 */

import React from "react";

export default function AppScreenshotSettings() {
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
        個人設置
      </text>

      {/* 用戶資料卡片 */}
      <rect x="20" y="140" width="320" height="100" rx="15" ry="15" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <circle cx="70" cy="190" r="30" fill="#0ea5e9" fillOpacity="0.2" />
      <text x="60" y="195" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#0ea5e9">
        王
      </text>
      <text x="120" y="180" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        王小明
      </text>
      <text x="120" y="205" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        編輯個人資料
      </text>
      <circle cx="300" cy="190" r="15" fill="#f1f5f9" className="dark:fill-gray-700" />
      <line x1="295" y1="190" x2="305" y2="190" stroke="#64748b" strokeWidth="2" className="dark:stroke-gray-300" />
      <line x1="300" y1="185" x2="300" y2="195" stroke="#64748b" strokeWidth="2" className="dark:stroke-gray-300" />

      {/* 設置選項 */}
      <rect x="20" y="260" width="320" height="60" rx="10" ry="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="40" y="295" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        測量提醒
      </text>
      <rect x="280" y="280" width="40" height="20" rx="10" ry="10" fill="#0ea5e9" />
      <circle cx="310" cy="290" r="10" fill="#ffffff" />

      <rect x="20" y="330" width="320" height="60" rx="10" ry="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="40" y="365" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        深色模式
      </text>
      <rect x="280" y="350" width="40" height="20" rx="10" ry="10" fill="#94a3b8" className="dark:fill-gray-600" />
      <circle cx="290" cy="360" r="10" fill="#ffffff" />

      <rect x="20" y="400" width="320" height="60" rx="10" ry="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="40" y="435" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        數據同步
      </text>
      <rect x="280" y="420" width="40" height="20" rx="10" ry="10" fill="#0ea5e9" />
      <circle cx="310" cy="430" r="10" fill="#ffffff" />

      <rect x="20" y="470" width="320" height="60" rx="10" ry="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="40" y="505" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        連接設備
      </text>
      <circle cx="300" cy="500" r="15" fill="#f1f5f9" className="dark:fill-gray-700" />
      <line x1="295" y1="500" x2="305" y2="500" stroke="#64748b" strokeWidth="2" className="dark:stroke-gray-300" />
      <line x1="300" y1="495" x2="300" y2="505" stroke="#64748b" strokeWidth="2" className="dark:stroke-gray-300" />

      {/* 版本信息 */}
      <text x="20" y="560" fontFamily="Arial, sans-serif" fontSize="14" fill="#94a3b8" className="dark:fill-gray-400">
        版本: 1.2.0
      </text>

      {/* 登出按鈕 */}
      <rect x="20" y="580" width="320" height="50" rx="25" ry="25" fill="#f43f5e" fillOpacity="0.1" stroke="#f43f5e" strokeWidth="1" />
      <text x="150" y="610" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#f43f5e">
        登出
      </text>

      {/* 底部導航欄 */}
      <rect x="20" y="650" width="320" height="50" rx="15" ry="15" fill="#f1f5f9" className="dark:fill-gray-800" />

      {/* 導航圖標 */}
      <circle cx="80" cy="675" r="10" fill="#94a3b8" className="dark:fill-gray-600" />
      <circle cx="180" cy="675" r="10" fill="#94a3b8" className="dark:fill-gray-600" />
      <circle cx="280" cy="675" r="10" fill="#0ea5e9" />
    </svg>
  );
}
