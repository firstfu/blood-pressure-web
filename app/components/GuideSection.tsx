"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, BarChart2, RefreshCw, UserPlus, LineChart } from "lucide-react";

export default function GuideSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const guideCategories = [
    {
      id: "getting-started",
      title: "入門指南",
      icon: <UserPlus className="h-5 w-5" />,
      content: [
        {
          title: "下載與安裝",
          description: "在App Store或Google Play上搜尋「健康守護」並下載應用。應用支援iOS 12.0以上和Android 8.0以上的系統版本。",
          steps: ["打開您的應用商店（App Store或Google Play）", "搜尋「健康守護」", "點擊「下載」或「安裝」按鈕", "等待應用下載完成後，點擊「打開」"],
        },
        {
          title: "創建帳戶",
          description: "首次使用時，您可以選擇創建一個帳戶，這將幫助您備份數據並在多設備之間同步。",
          steps: ["啟動應用程式後，點擊「註冊」按鈕", "輸入您的電子郵件地址和創建一個安全密碼", "閱讀並接受隱私政策和服務條款", "點擊「完成註冊」按鈕"],
        },
      ],
    },
    {
      id: "record-data",
      title: "記錄數據",
      icon: <Heart className="h-5 w-5" />,
      content: [
        {
          title: "手動記錄血壓",
          description: "即使沒有智能血壓計，您也可以輕鬆地手動記錄您的血壓讀數。",
          steps: ["在主畫面點擊「+」或「新增記錄」按鈕", "輸入收縮壓（上壓）和舒張壓（下壓）數值", "輸入心率（如有測量）", "選擇測量時間或使用當前時間"],
        },
        {
          title: "連接藍牙血壓計",
          description: "與兼容的藍牙血壓計連接可以自動記錄您的測量結果，無需手動輸入。",
          steps: ["確保您的藍牙血壓計已開啟並處於配對模式", "在應用中進入「設置」>「連接設備」", "點擊「搜索新設備」", "從列表中選擇您的血壓計型號"],
        },
      ],
    },
    {
      id: "analysis",
      title: "查看分析",
      icon: <BarChart2 className="h-5 w-5" />,
      content: [
        {
          title: "理解血壓圖表",
          description: "應用提供直觀的圖表視圖，幫助您追蹤血壓變化趨勢和識別異常模式。",
          steps: [
            "從主畫面點擊「趨勢」或「圖表」選項",
            "選擇時間範圍（日、週、月或自定義）",
            "觀察收縮壓和舒張壓的變化曲線",
            "綠色區域表示理想範圍，黃色和紅色表示需要注意和風險區域",
          ],
        },
        {
          title: "生成健康報告",
          description: "應用可以生成詳細的健康報告，總結您的血壓數據和健康趨勢。",
          steps: ["進入「報告」或「統計」部分", "選擇要包含的時間範圍", "選擇報告類型（基本摘要、詳細分析或醫生專用）", "點擊「生成報告」"],
        },
      ],
    },
  ];

  return (
    <section id="guide" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            使用指南
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            從入門到進階，全面了解「健康守護」應用的功能和使用方法
          </motion.p>
        </div>

        <div ref={ref} className="max-w-5xl mx-auto">
          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="w-full flex justify-between mb-8 bg-background/90 dark:bg-card/90 p-1 rounded-full overflow-x-auto max-w-full">
              {guideCategories.map((category, index) => (
                <motion.div key={category.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 * index }}>
                  <TabsTrigger
                    value={category.id}
                    className="text-optimized flex items-center gap-2 px-4 py-2 data-[state=active]:text-primary-600 rounded-full"
                  >
                    {category.icon}
                    <span className="whitespace-nowrap">{category.title}</span>
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>

            {guideCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                {category.content.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + sectionIndex * 0.1 }}
                  >
                    <Card className="border border-border dark:border-primary-900/20 overflow-hidden shadow-sm">
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-foreground">{section.title}</h3>
                        <p className="text-muted-foreground mb-6">{section.description}</p>

                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-foreground">步驟指引：</h4>
                          <ul className="space-y-2">
                            {section.steps.map((step, stepIndex) => (
                              <motion.li
                                key={stepIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.3, delay: 0.3 + sectionIndex * 0.1 + stepIndex * 0.05 }}
                                className="flex items-start"
                              >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3 mt-0.5">
                                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">{stepIndex + 1}</span>
                                </div>
                                <span className="text-foreground">{step}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
