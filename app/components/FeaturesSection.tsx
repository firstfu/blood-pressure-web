"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PenLine, BarChart3, Bell, Share2 } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  subFeatures: string[];
  image: string;
}

const features: Feature[] = [
  {
    id: "record",
    title: "簡易記錄",
    icon: <PenLine className="w-5 h-5" />,
    description: "簡潔的記錄介面，支援手動輸入與智能血壓計連接，讓您輕鬆追蹤血壓數據。",
    subFeatures: ["快速記錄模板", "一鍵記錄功能", "多人數據管理", "日曆視圖查看"],
    image: "/images/feature-record.png",
  },
  {
    id: "analyze",
    title: "數據分析",
    icon: <BarChart3 className="w-5 h-5" />,
    description: "多維度數據視覺化，清晰呈現血壓趨勢，協助您和醫生更好地了解您的健康狀況。",
    subFeatures: ["週/月/年趨勢圖表", "異常值提示", "數據篩選功能", "健康指標對比"],
    image: "/images/feature-analyze.png",
  },
  {
    id: "remind",
    title: "智能提醒",
    icon: <Bell className="w-5 h-5" />,
    description: "智能提醒系統，根據您的作息與醫囑設定提醒，確保按時測量血壓和服藥。",
    subFeatures: ["定時測量提醒", "個性化提醒設置", "用藥提醒功能", "重要事項推送通知"],
    image: "/images/feature-remind.png",
  },
  {
    id: "share",
    title: "報告分享",
    icon: <Share2 className="w-5 h-5" />,
    description: "一鍵生成專業醫療報告，支援多種分享方式，方便您與醫療團隊溝通。",
    subFeatures: ["PDF報告導出", "多格式支援", "醫生直接訪問權限", "報告加密保護"],
    image: "/images/feature-share.png",
  },
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState("record");

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">強大功能，簡單操作</h2>
          <p className="text-muted-foreground text-lg">健康守護提供多種實用功能，幫助您輕鬆管理血壓健康</p>
        </div>

        <Tabs defaultValue="record" className="w-full" onValueChange={setActiveFeature}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-muted/50">
              {features.map(feature => (
                <TabsTrigger key={feature.id} value={feature.id} className="flex items-center gap-2 data-[state=active]:bg-white">
                  <span className="hidden md:inline">{feature.icon}</span>
                  {feature.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {features.map(feature => (
            <TabsContent key={feature.id} value={feature.id} className="mt-0">
              <Card>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* 左側功能說明 */}
                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 text-2xl font-semibold mb-4">
                          <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">{feature.icon}</span>
                          {feature.title}
                        </div>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {feature.subFeatures.map((subFeature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                              <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm text-muted-foreground">{subFeature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 右側功能螢幕截圖 */}
                    <div className="md:w-1/2 bg-muted/10">
                      <div className="p-6 md:p-8 h-full flex items-center justify-center">
                        <div className="relative max-w-sm mx-auto">
                          <div className="bg-background rounded-[2rem] p-3 shadow-xl">
                            <div className="aspect-[9/19] relative rounded-[1.5rem] overflow-hidden border-[6px] border-muted">
                              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                                <p className="text-muted-foreground">App 截圖範例</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
