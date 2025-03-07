"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "健康守護 App 何時正式發布？",
    answer: "我們計劃在今年第四季度推出 Beta 版本，正式版預計在明年第一季度推出。訂閱我們的最新消息，您將第一時間獲得產品更新資訊。",
  },
  {
    question: "App 支援哪些作業系統？",
    answer: "健康守護將同時支援 iOS 和 Android 系統，並提供網頁版應用，讓您可以在任何裝置上存取您的健康數據。",
  },
  {
    question: "如何將我的血壓計與應用程式連接？",
    answer: "我們的 App 支援多種藍牙血壓計，使用時只需開啟藍牙並進行配對設定。我們計劃支援市場上主流的藍牙血壓計品牌，詳細支援清單將在正式推出前公布。",
  },
  {
    question: "我的健康數據安全嗎？",
    answer: "保護您的健康數據是我們的首要任務。所有數據都經過強加密處理，並存儲在符合醫療隱私標準的安全伺服器上。您擁有完全的數據控制權，可以隨時選擇刪除或匯出您的數據。",
  },
  {
    question: "App 是否提供免費版本？",
    answer: "是的，我們計劃提供基本功能的免費版本，以及具有更多進階功能的付費訂閱版本。早期訂閱者將獲得特別優惠價格。",
  },
  {
    question: "如何與我的醫生分享血壓報告？",
    answer: "App 提供多種分享選項，您可以生成 PDF 報告並通過電子郵件或直接分享連結的方式發送給您的醫生。我們還計劃與醫療機構合作，實現更便捷的數據共享。",
  },
  {
    question: "忘記測量血壓時，App 會提醒我嗎？",
    answer: "是的，App 提供可自訂的提醒功能，您可以根據自己的習慣或醫生建議設定測量時間和頻率，App 會通過推送通知提醒您按時測量。",
  },
  {
    question: "資料可以從其他應用導入嗎？",
    answer: "我們計劃提供多種導入選項，支援從常見的健康應用和設備導入數據，也可以通過表格批量導入歷史數據。具體支援的格式和應用將在產品發布前公布。",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">常見問題</h2>
          <p className="text-muted-foreground text-lg">關於健康守護 App 的常見問題解答</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 pt-6 border-t text-center">
              <p className="text-muted-foreground mb-4">還有其他問題？</p>
              <Button asChild>
                <a href="#contact">聯絡我們</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
