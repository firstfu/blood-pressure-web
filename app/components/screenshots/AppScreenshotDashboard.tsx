import React, { useEffect, useState } from "react";

export default function AppScreenshotDashboard() {
  const [systolic, setSystolic] = useState(120);
  const [diastolic, setDiastolic] = useState(80);
  const [heartRate, setHeartRate] = useState(72);

  // 模擬數據輕微變化的動畫效果
  useEffect(() => {
    const interval = setInterval(() => {
      setSystolic(prev => Math.floor(prev + (Math.random() * 4 - 2)));
      setDiastolic(prev => Math.floor(prev + (Math.random() * 4 - 2)));
      setHeartRate(prev => Math.floor(prev + (Math.random() * 3 - 1.5)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
        主控台
      </text>

      {/* 血壓數據卡片 */}
      <rect x="20" y="140" width="320" height="160" rx="15" ry="15" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />

      {/* 收縮壓 */}
      <text x="40" y="170" fontFamily="Arial, sans-serif" fontSize="16" fill="#64748b" className="dark:fill-gray-300">
        收縮壓 (mmHg)
      </text>
      <text x="40" y="210" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="#0ea5e9">
        {systolic}
      </text>

      {/* 舒張壓 */}
      <text x="180" y="170" fontFamily="Arial, sans-serif" fontSize="16" fill="#64748b" className="dark:fill-gray-300">
        舒張壓 (mmHg)
      </text>
      <text x="180" y="210" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="#0ea5e9">
        {diastolic}
      </text>

      {/* 心率 */}
      <text x="40" y="260" fontFamily="Arial, sans-serif" fontSize="16" fill="#64748b" className="dark:fill-gray-300">
        心率 (bpm)
      </text>
      <text x="40" y="290" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#f43f5e">
        {heartRate}
      </text>

      {/* 心跳動畫 */}
      <circle cx="100" cy="275" r="8" fill="#f43f5e" opacity="0.8">
        <animate attributeName="r" values="8;10;8" dur="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" />
      </circle>

      {/* 今日狀態卡片 */}
      <rect x="20" y="320" width="320" height="100" rx="15" ry="15" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="40" y="350" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        今日狀態
      </text>
      <text x="40" y="380" fontFamily="Arial, sans-serif" fontSize="16" fill="#10b981">
        ✓ 血壓正常
      </text>
      <text x="40" y="405" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" className="dark:fill-gray-300">
        已完成 1/3 次測量
      </text>

      {/* 下一次測量提醒 */}
      <rect x="20" y="440" width="320" height="100" rx="15" ry="15" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="40" y="470" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        下一次測量
      </text>
      <text x="40" y="500" fontFamily="Arial, sans-serif" fontSize="16" fill="#64748b" className="dark:fill-gray-300">
        今天 18:00
      </text>
      <rect x="220" y="480" width="100" height="30" rx="15" ry="15" fill="#0ea5e9" />
      <text x="245" y="500" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff">
        提醒我
      </text>

      {/* 底部導航欄 */}
      <rect x="20" y="560" width="320" height="80" rx="15" ry="15" fill="#f1f5f9" className="dark:fill-gray-800" />

      {/* 導航圖標 */}
      <circle cx="80" cy="600" r="15" fill="#0ea5e9" />
      <circle cx="180" cy="600" r="15" fill="#94a3b8" className="dark:fill-gray-600" />
      <circle cx="280" cy="600" r="15" fill="#94a3b8" className="dark:fill-gray-600" />

      {/* 添加測量按鈕 */}
      <circle cx="180" cy="670" r="30" fill="#0ea5e9" stroke="#0284c7" strokeWidth="2">
        <animate attributeName="r" values="30;32;30" dur="3s" repeatCount="indefinite" />
      </circle>
      <line x1="165" y1="670" x2="195" y2="670" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      <line x1="180" y1="655" x2="180" y2="685" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
