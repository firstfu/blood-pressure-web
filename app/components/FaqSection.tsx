"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FaqSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState("general");

  const faqCategories = [
    {
      id: "general",
      title: "一般問題",
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
        {
          question: "我的健康數據安全嗎？",
          answer:
            "保護您的隱私是我們的首要任務。所有數據都經過端到端加密，並存儲在符合醫療級別安全標準的伺服器上。我們絕不會未經您的明確許可分享您的個人健康數據。您可以隨時查看、下載或刪除您的數據。",
        },
      ],
    },
    {
      id: "usage",
      title: "使用問題",
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
      ],
    },
    {
      id: "technical",
      title: "技術問題",
      items: [
        {
          question: "我的數據如何備份和恢復？",
          answer:
            "只要您創建了帳戶並保持登入狀態，您的數據會自動同步至雲端。如果您更換設備，只需登入您的帳戶，所有數據將自動下載至新設備。您也可以通過「設置」>「數據管理」手動導出備份文件。",
        },
        {
          question: "應用需要什麼系統要求？",
          answer:
            "我們的應用適用於iOS 12.0及以上版本和Android 8.0及以上版本。為了獲得最佳體驗，我們建議使用最新版本的操作系統。應用本身佔用空間較小，但隨著數據增長，可能需要更多存儲空間。",
        },
        {
          question: "我可以在多個設備上使用同一個帳戶嗎？",
          answer:
            "是的，您可以在多個設備上使用同一帳戶。所有數據將自動同步，確保您在任何設備上都能看到最新的健康記錄。這對於家庭成員共同管理或醫患溝通特別有用。",
        },
      ],
    },
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-50/50 dark:bg-background/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            常見問題
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            我們整理了用戶最常詢問的問題，希望能幫助您更好地了解我們的服務
          </motion.p>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <Tabs defaultValue="general" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-10">
              <motion.div
                className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-800/60 dark:via-gray-800/40 dark:to-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg relative overflow-hidden p-0.5 w-full max-w-xl"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-primary-100/10 to-blue-200/20 dark:from-primary-900/20 dark:via-transparent dark:to-primary-900/20 animate-gradient-x"></div>

                <div className="relative rounded-xl overflow-hidden p-1 bg-gradient-to-br from-white/90 via-white/95 to-white/90 dark:from-gray-800/90 dark:via-gray-800/95 dark:to-gray-800/90">
                  <div className="relative z-10 bg-transparent w-full flex items-center justify-between p-0 gap-1 h-11 border-0">
                    <div className="absolute inset-0 z-0">
                      <motion.div
                        layoutId="activeTabBackground"
                        className="absolute rounded-lg bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 shadow-md"
                        initial={false}
                        animate={{
                          x: `${faqCategories.findIndex(c => c.id === activeTab) * (100 / faqCategories.length)}%`,
                          width: `${100 / faqCategories.length}%`,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    </div>

                    <TabsList className="relative w-full h-full flex justify-between gap-1 border-0 bg-transparent overflow-visible z-10">
                      {faqCategories.map(category => (
                        <TabsTrigger
                          key={category.id}
                          value={category.id}
                          className="relative flex-1 text-base font-medium h-full py-2 rounded-lg
                            data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:font-bold
                            data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900
                            dark:data-[state=inactive]:text-gray-400 dark:data-[state=inactive]:hover:text-gray-200
                            data-[state=inactive]:hover:bg-blue-50/50 dark:data-[state=inactive]:hover:bg-gray-700/30
                            data-[state=active]:scale-[0.98] data-[state=active]:transform
                            transition-all duration-300 bg-transparent z-10"
                        >
                          <span className="relative z-10 text-shadow-sm">{category.title}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                </div>
              </motion.div>
            </div>

            {faqCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="space-y-4 focus-visible:outline-none focus-visible:ring-0">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {category.items.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView && activeTab === category.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <AccordionItem
                        value={`item-${index}`}
                        className="border border-border dark:border-primary-900/20 rounded-lg mb-4 overflow-hidden shadow-md backdrop-blur-sm hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/60"
                      >
                        <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary px-6 py-5 transition-all duration-300">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground px-6 pb-6 leading-relaxed border-t border-border/50 dark:border-primary-900/10 pt-2">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
