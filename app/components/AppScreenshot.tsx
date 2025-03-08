import React, { useEffect, useState } from "react";

export default function AppScreenshot() {
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
        血壓監測
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

      {/* 血壓趨勢圖 */}
      <rect x="20" y="320" width="320" height="200" rx="15" ry="15" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="dark:fill-gray-800 dark:stroke-gray-700" />
      <text x="40" y="350" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#334155" className="dark:fill-gray-100">
        血壓趨勢
      </text>

      {/* 圖表 X 軸 */}
      <line x1="40" y1="480" x2="300" y2="480" stroke="#cbd5e1" strokeWidth="1" className="dark:stroke-gray-600" />
      <text x="40" y="500" fontFamily="Arial, sans-serif" fontSize="12" fill="#94a3b8" className="dark:fill-gray-400">
        週一
      </text>
      <text x="100" y="500" fontFamily="Arial, sans-serif" fontSize="12" fill="#94a3b8" className="dark:fill-gray-400">
        週二
      </text>
      <text x="160" y="500" fontFamily="Arial, sans-serif" fontSize="12" fill="#94a3b8" className="dark:fill-gray-400">
        週三
      </text>
      <text x="220" y="500" fontFamily="Arial, sans-serif" fontSize="12" fill="#94a3b8" className="dark:fill-gray-400">
        週四
      </text>
      <text x="280" y="500" fontFamily="Arial, sans-serif" fontSize="12" fill="#94a3b8" className="dark:fill-gray-400">
        週五
      </text>

      {/* 收縮壓曲線 */}
      <path d="M40,420 L100,400 L160,430 L220,390 L280,410" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <animate
          attributeName="d"
          values="M40,420 L100,400 L160,430 L220,390 L280,410;M40,418 L100,402 L160,428 L220,392 L280,408;M40,420 L100,400 L160,430 L220,390 L280,410"
          dur="8s"
          repeatCount="indefinite"
        />
      </path>
      <circle cx="40" cy="420" r="4" fill="#0ea5e9">
        <animate attributeName="cy" values="420;418;420" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="400" r="4" fill="#0ea5e9">
        <animate attributeName="cy" values="400;402;400" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="430" r="4" fill="#0ea5e9">
        <animate attributeName="cy" values="430;428;430" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="220" cy="390" r="4" fill="#0ea5e9">
        <animate attributeName="cy" values="390;392;390" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="280" cy="410" r="4" fill="#0ea5e9">
        <animate attributeName="cy" values="410;408;410" dur="8s" repeatCount="indefinite" />
      </circle>

      {/* 舒張壓曲線 */}
      <path d="M40,450 L100,440 L160,460 L220,430 L280,450" fill="none" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <animate
          attributeName="d"
          values="M40,450 L100,440 L160,460 L220,430 L280,450;M40,448 L100,442 L160,458 L220,432 L280,448;M40,450 L100,440 L160,460 L220,430 L280,450"
          dur="8s"
          repeatCount="indefinite"
        />
      </path>
      <circle cx="40" cy="450" r="4" fill="#a855f7">
        <animate attributeName="cy" values="450;448;450" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="440" r="4" fill="#a855f7">
        <animate attributeName="cy" values="440;442;440" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="460" r="4" fill="#a855f7">
        <animate attributeName="cy" values="460;458;460" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="220" cy="430" r="4" fill="#a855f7">
        <animate attributeName="cy" values="430;432;430" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="280" cy="450" r="4" fill="#a855f7">
        <animate attributeName="cy" values="450;448;450" dur="8s" repeatCount="indefinite" />
      </circle>

      {/* 圖例 */}
      <circle cx="40" cy="380" r="4" fill="#0ea5e9" />
      <text x="50" y="385" fontFamily="Arial, sans-serif" fontSize="12" fill="#64748b" className="dark:fill-gray-300">
        收縮壓
      </text>
      <circle cx="120" cy="380" r="4" fill="#a855f7" />
      <text x="130" y="385" fontFamily="Arial, sans-serif" fontSize="12" fill="#64748b" className="dark:fill-gray-300">
        舒張壓
      </text>

      {/* 底部導航欄 */}
      <rect x="20" y="540" width="320" height="80" rx="15" ry="15" fill="#f1f5f9" className="dark:fill-gray-800" />

      {/* 導航圖標 */}
      <circle cx="80" cy="580" r="15" fill="#0ea5e9" />
      <circle cx="180" cy="580" r="15" fill="#94a3b8" className="dark:fill-gray-600" />
      <circle cx="280" cy="580" r="15" fill="#94a3b8" className="dark:fill-gray-600" />

      {/* 添加測量按鈕 */}
      <circle cx="180" cy="650" r="30" fill="#0ea5e9" stroke="#0284c7" strokeWidth="2">
        <animate attributeName="r" values="30;32;30" dur="3s" repeatCount="indefinite" />
      </circle>
      <line x1="165" y1="650" x2="195" y2="650" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      <line x1="180" y1="635" x2="180" y2="665" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
