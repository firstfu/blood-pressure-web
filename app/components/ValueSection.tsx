"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout, BarChart3, Share2, Shield } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <Card ref={cardRef} className={`transition-all duration-700 ease-out hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default function ValueSection() {
  const features = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "簡單紀錄",
      description: "快速輸入血壓數據，支援手動輸入與藍牙血壓計同步，節省寶貴時間。",
      delay: 0,
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "智能分析",
      description: "自動生成趨勢圖表，異常值警示提醒，讓您輕鬆掌握健康變化趨勢。",
      delay: 150,
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "醫療連結",
      description: "一鍵分享專業報告給醫療團隊，支援多種格式，方便醫療諮詢。",
      delay: 300,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "資料安全",
      description: "符合醫療資料隱私標準，資料加密保護，確保您的健康數據安全無虞。",
      delay: 450,
    },
  ];

  return (
    <section id="value" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">為何選擇健康守護？</h2>
          <p className="text-muted-foreground text-lg">我們精心設計的功能，讓血壓管理變得簡單而有效，助您掌握健康狀況</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
