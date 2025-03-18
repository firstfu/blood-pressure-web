"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, BarChart2, Bell, Upload, Settings, RefreshCw, UserPlus, Shield, LineChart, Calendar, Smartphone, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function GuidePage() {
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
          steps: [
            "啟動應用程式後，點擊「註冊」按鈕",
            "輸入您的電子郵件地址和創建一個安全密碼",
            "閱讀並接受隱私政策和服務條款",
            "點擊「完成註冊」按鈕",
            "檢查您的電子郵件並點擊驗證連結",
          ],
        },
        {
          title: "設置個人檔案",
          description: "完善您的個人健康檔案可以幫助應用提供更準確的分析和建議。",
          steps: [
            "在主畫面點擊「個人檔案」或「設置」圖標",
            "填寫基本信息：年齡、性別、身高和體重",
            "添加相關健康狀況（如高血壓、糖尿病等）",
            "設置個人血壓目標範圍",
            "點擊「保存」完成設置",
          ],
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
          steps: [
            "在主畫面點擊「+」或「新增記錄」按鈕",
            "輸入收縮壓（上壓）和舒張壓（下壓）數值",
            "輸入心率（如有測量）",
            "選擇測量時間或使用當前時間",
            "添加任何相關筆記（如感覺、活動或用藥情況）",
            "點擊「保存」完成記錄",
          ],
        },
        {
          title: "連接藍牙血壓計",
          description: "與兼容的藍牙血壓計連接可以自動記錄您的測量結果，無需手動輸入。",
          steps: [
            "確保您的藍牙血壓計已開啟並處於配對模式",
            "在應用中進入「設置」>「連接設備」",
            "點擊「搜索新設備」",
            "從列表中選擇您的血壓計型號",
            "按照螢幕上的指示完成配對",
            "成功連接後，測量數據將自動同步至應用",
          ],
        },
        {
          title: "添加相關健康指標",
          description: "除了血壓外，記錄其他健康指標可以幫助您更全面地了解自己的健康狀況。",
          steps: ["點擊「更多指標」或「健康數據」選項", "選擇要記錄的指標（如體重、血糖、睡眠時間等）", "輸入相應數值", "添加測量時間和備註", "點擊「保存」"],
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
            "點擊特定數據點可查看詳細信息",
          ],
        },
        {
          title: "生成健康報告",
          description: "應用可以生成詳細的健康報告，總結您的血壓數據和健康趨勢。",
          steps: [
            "進入「報告」或「統計」部分",
            "選擇要包含的時間範圍",
            "選擇報告類型（基本摘要、詳細分析或醫生專用）",
            "點擊「生成報告」",
            "報告生成後，您可以查看、下載或分享PDF檔案",
          ],
        },
        {
          title: "設置警報和提醒",
          description: "根據您的血壓數據設置智能警報和測量提醒，幫助您保持健康習慣。",
          steps: [
            "進入「設置」>「提醒和警報」",
            "點擊「新增提醒」設置血壓測量提醒時間",
            "點擊「設置警報閾值」為異常血壓值設置警報",
            "自定義警報嚴重程度和通知方式",
            "點擊「保存」啟用提醒和警報",
          ],
        },
      ],
    },
    {
      id: "advanced",
      title: "進階功能",
      icon: <LineChart className="h-5 w-5" />,
      content: [
        {
          title: "與醫療專業人員分享數據",
          description: "安全地與您的醫生或護士分享您的血壓記錄和健康報告。",
          steps: [
            "進入「設置」>「醫療連接」",
            "點擊「添加醫療專業人員」",
            "輸入醫生的電子郵件或應用使用者名稱",
            "設置分享權限（如只讀訪問或時間限制）",
            "點擊「發送邀請」",
            "醫生接受後，您的數據將被安全分享",
          ],
        },
        {
          title: "導出和備份數據",
          description: "將您的健康數據導出或備份，確保重要記錄永不丟失。",
          steps: [
            "進入「設置」>「數據管理」",
            "選擇「導出數據」或「創建備份」",
            "選擇格式（CSV、PDF或應用專用格式）",
            "選擇時間範圍和要包含的數據類型",
            "點擊「導出」或「備份」",
            "選擇存儲位置或雲端服務",
          ],
        },
        {
          title: "連接其他健康應用",
          description: "與其他健康應用和智能設備整合，獲得更全面的健康監測。",
          steps: [
            "進入「設置」>「連接與整合」",
            "瀏覽支持的應用和設備列表",
            "選擇要連接的健康應用（如Apple Health、Google Fit等）",
            "閱讀並接受數據共享許可",
            "點擊「確認連接」",
            "設置同步頻率和數據範圍",
          ],
        },
      ],
    },
    {
      id: "troubleshooting",
      title: "故障排除",
      icon: <RefreshCw className="h-5 w-5" />,
      content: [
        {
          title: "設備連接問題",
          description: "解決血壓計與應用連接時可能遇到的常見問題。",
          steps: [
            "確保您的藍牙已開啟且血壓計有電",
            "嘗試將血壓計重新啟動（關閉後再開啟）",
            "在手機設置中刪除血壓計的藍牙配對，然後重新配對",
            "確保血壓計與手機距離在10米範圍內",
            "檢查應用是否有最新更新",
            "如問題持續，嘗試聯繫客戶支援",
          ],
        },
        {
          title: "數據同步問題",
          description: "當不同設備之間的數據無法正確同步時的解決步驟。",
          steps: [
            "確保所有設備都已登入相同帳戶",
            "檢查網絡連接是否穩定",
            "在「設置」中找到「同步」選項並點擊「立即同步」",
            "檢查應用和系統是否為最新版本",
            "如果問題持續，嘗試登出後重新登入",
            "最後可嘗試清除應用快取（不會刪除數據）",
          ],
        },
        {
          title: "應用崩潰或運行緩慢",
          description: "當應用表現不佳時提高性能的方法。",
          steps: [
            "關閉應用後重新開啟",
            "重啟您的手機設備",
            "檢查並釋放設備存儲空間",
            "更新至最新版本的應用",
            "如問題持續，嘗試卸載並重新安裝應用（確保數據已備份）",
            "聯繫支援團隊並提供您的設備型號和系統版本",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50/50 dark:bg-background/30 pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回首頁
            </Link>
          </Button>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            使用指南
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            從入門到進階，全面了解「健康守護」應用的功能和使用方法，幫助您輕鬆管理血壓健康。
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
                        <h2 className="text-2xl font-bold mb-3 text-foreground">{section.title}</h2>
                        <p className="text-muted-foreground mb-6">{section.description}</p>

                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold text-foreground">步驟指引：</h3>
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

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-foreground">仍需幫助？</h2>
            <p className="text-lg text-muted-foreground mb-6">如果您在使用過程中遇到任何問題，歡迎隨時聯絡我們的客戶支援團隊</p>
            <Button asChild className="rounded-full px-6 py-6 shadow-medium gradient-primary-to-accent hover:shadow-lg transition-all duration-300 text-base">
              <Link href="#contact">
                <span className="flex items-center">
                  聯絡支援團隊
                  <Share2 className="ml-2 h-5 w-5" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
