"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FaqPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const faqCategories = [
    {
      category: "一般問題",
      items: [
        {
          question: "這款應用適合哪些人使用？",
          answer:
            "我們的血壓管理應用適合所有需要監測血壓的人群，包括高血壓患者、心臟病患者、孕婦、老年人，以及關注健康的普通人群。無論您是需要長期監測還是偶爾檢查，我們的應用都能滿足您的需求。",
        },
        {
          question: "應用是否需要付費？有哪些訂閱計劃？",
          answer:
            "我們提供免費版和專業版兩種選擇。免費版包含基本的血壓記錄和簡單圖表功能。專業版提供高級分析、無限數據存儲、多設備同步等功能，按月或按年訂閱，並提供7天免費試用。",
        },
        {
          question: "我是否需要創建帳戶才能使用應用？",
          answer:
            "您可以在不創建帳戶的情況下使用應用的基本功能。但是，我們建議創建帳戶，以便您的數據能夠安全備份，並在更換設備時保持同步。創建帳戶還可以解鎖更多高級功能。",
        },
      ],
    },
    {
      category: "技術與連接",
      items: [
        {
          question: "如何將我的血壓計與應用連接？",
          answer:
            "我們的應用支援多種藍牙血壓計連接。只需在應用設置中選擇「連接設備」，然後按照指示將您的血壓計與手機配對即可。對於不支援藍牙的血壓計，您也可以手動輸入測量結果。",
        },
        {
          question: "應用支持哪些設備型號？",
          answer:
            "我們支持大多數主流品牌的藍牙血壓計，包括Omron、iHealth、Withings、Beurer等。您可以在應用的「支持設備」列表中查看完整的兼容設備清單。如果您的設備不在列表中，您仍然可以通過手動輸入使用我們的應用。",
        },
        {
          question: "如果我的測量數據沒有自動同步怎麼辦？",
          answer:
            "首先，請確保您的血壓計已正確連接至應用，並且藍牙功能已啟用。如果問題仍然存在，您可以嘗試重新連接設備，或重啟應用和血壓計。作為備選方案，您還可以手動輸入測量結果。",
        },
      ],
    },
    {
      category: "數據安全與隱私",
      items: [
        {
          question: "我的健康數據安全嗎？",
          answer:
            "保護您的隱私是我們的首要任務。所有數據都經過端到端加密，並存儲在符合醫療級別安全標準的伺服器上。我們絕不會未經您的明確許可分享您的個人健康數據。您可以隨時查看、下載或刪除您的數據。",
        },
        {
          question: "我可以刪除我的帳戶和所有數據嗎？",
          answer:
            "是的，您可以隨時在應用設置中選擇「刪除帳戶」。這將永久刪除您的所有個人信息和健康數據。刪除後，這些信息將無法恢復，因此我們建議您在刪除前導出您需要保留的數據。",
        },
        {
          question: "應用如何處理我的個人健康信息？",
          answer:
            "我們嚴格遵守國際健康數據保護標準，包括HIPAA合規要求。您的數據僅用於提供您要求的服務，如記錄血壓、生成趨勢報告等。我們不會將您的個人健康數據用於廣告或銷售給第三方。",
        },
      ],
    },
    {
      category: "功能與使用",
      items: [
        {
          question: "應用是否提供血壓異常警報？",
          answer:
            "是的，我們的應用提供可自定義的血壓警報功能。您可以設置個人化的血壓閾值，當測量結果超出這些範圍時，應用會立即通知您。這有助於及時發現潛在的健康問題。",
        },
        {
          question: "如何與我的醫生分享我的血壓數據？",
          answer:
            "我們提供多種方式分享您的健康數據。您可以生成專業的PDF報告，通過電子郵件發送給您的醫生；也可以在就診時直接展示應用中的趨勢圖表；還可以通過應用直接與已註冊的醫療專業人員分享您的數據。",
        },
        {
          question: "應用可以設置提醒我測量血壓嗎？",
          answer:
            "是的，您可以在應用中設置自定義的測量提醒。您可以按日期、時間和頻率（如每天、每週或特定日期）設置提醒。這些提醒將通過手機通知發送，幫助您養成定期監測的習慣。",
        },
        {
          question: "應用能識別血壓的趨勢和模式嗎？",
          answer:
            "是的，我們的智能分析系統可以識別您血壓數據中的趨勢和模式，如晨峰現象、白大衣效應或夜間血壓下降不足等。專業版用戶還可以獲得更詳細的分析報告和個性化的健康建議。",
        },
      ],
    },
    {
      category: "客戶支持",
      items: [
        {
          question: "如果我遇到技術問題，如何獲取幫助？",
          answer:
            "您可以通過多種方式獲取支持：在應用內的「幫助中心」查找常見問題解答；通過「聯繫我們」功能發送問題描述；或發送電子郵件至support@healthguard.com。我們的支持團隊通常會在24小時內回復您的問題。",
        },
        {
          question: "我能否提出新功能建議？",
          answer:
            "非常歡迎！我們重視用戶的反饋和建議。您可以通過應用內的「反饋」功能提交您的想法，或發送郵件至feedback@healthguard.com。我們定期審核用戶建議，並將其納入我們的產品開發計劃。",
        },
        {
          question: "如何退訂專業版？",
          answer:
            "您可以在應用的「訂閱設置」中隨時取消您的訂閱。根據您的訂閱平台（如App Store或Google Play），退訂後您仍可以使用專業版功能直到當前訂閱期結束。之後，您的帳戶將自動降級為免費版，但所有歷史數據仍會保留。",
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
            常見問題
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            我們整理了詳細的常見問題解答，幫助您更好地了解「健康守護」應用的功能、使用方法和解決方案。
          </motion.p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">{category.category}</h2>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                  >
                    <AccordionItem
                      value={`${categoryIndex}-${itemIndex}`}
                      className="border border-border dark:border-primary-900/20 rounded-lg mb-4 overflow-hidden shadow-sm"
                    >
                      <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary px-6 py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground px-6 pb-6">{item.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
