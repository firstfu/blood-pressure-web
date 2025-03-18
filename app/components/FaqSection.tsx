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
          answer: "我們提供免費版和專業版兩種選擇。免費版包含基本的血壓記錄和簡單圖表功能。專業版提供高級分析、無限數據存儲、多設備同步等功能，按月或按年訂閱，並提供7天免費試用。",
        },
        {
          question: "我是否需要創建帳戶才能使用應用？",
          answer: "您可以在不創建帳戶的情況下使用應用的基本功能。但是，我們建議創建帳戶，以便您的數據能夠安全備份，並在更換設備時保持同步。創建帳戶還可以解鎖更多高級功能。",
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
          question: "如何將我的血壓計與應用連接？",
          answer: "我們的應用支援多種藍牙血壓計連接。只需在應用設置中選擇「連接設備」，然後按照指示將您的血壓計與手機配對即可。對於不支援藍牙的血壓計，您也可以手動輸入測量結果。",
        },
        {
          question: "應用是否提供血壓異常警報？",
          answer: "是的，我們的應用提供可自定義的血壓警報功能。您可以設置個人化的血壓閾值，當測量結果超出這些範圍時，應用會立即通知您。這有助於及時發現潛在的健康問題。",
        },
        {
          question: "如何與我的醫生分享我的血壓數據？",
          answer:
            "我們提供多種方式分享您的健康數據。您可以生成專業的PDF報告，通過電子郵件發送給您的醫生；也可以在就診時直接展示應用中的趨勢圖表；還可以通過應用直接與已註冊的醫療專業人員分享您的數據。",
        },
        {
          question: "應用支持哪些設備型號？",
          answer:
            "我們支持大多數主流品牌的藍牙血壓計，包括Omron、iHealth、Withings、Beurer等。您可以在應用的「支持設備」列表中查看完整的兼容設備清單。如果您的設備不在列表中，您仍然可以通過手動輸入使用我們的應用。",
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
          question: "如果藍牙連接有問題怎麼辦？",
          answer:
            "藍牙連接問題通常可以通過以下步驟解決：1) 確保血壓計電量充足；2) 重啟藍牙設備和手機；3) 在手機藍牙設置中忘記該設備，然後重新配對；4) 確保血壓計和手機距離足夠近（10米以內）；5) 更新至最新版本的應用。",
        },
        {
          question: "我可以在多個設備上使用同一個帳戶嗎？",
          answer: "是的，您可以在多個設備上使用同一帳戶。所有數據將自動同步，確保您在任何設備上都能看到最新的健康記錄。這對於家庭成員共同管理或醫患溝通特別有用。",
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
                className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg relative overflow-hidden p-0.5 w-full max-w-xl"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 via-transparent to-primary-100/20 dark:from-primary-900/10 dark:via-transparent dark:to-primary-900/10"></div>

                <div className="relative rounded-xl overflow-hidden p-1 bg-white/95 dark:bg-gray-800/95">
                  <TabsList className="relative z-10 bg-transparent dark:bg-transparent w-full flex items-center justify-between p-0 gap-1 h-11 border-0">
                    {faqCategories.map((category, index) => (
                      <motion.div
                        key={category.id}
                        className="flex-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                      >
                        <TabsTrigger
                          value={category.id}
                          className="relative text-base font-medium w-full h-full py-2 rounded-lg data-[state=active]:text-white data-[state=active]:dark:text-white data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground transition-all duration-300"
                        >
                          {activeTab === category.id && (
                            <motion.div
                              layoutId="activeTabBackground"
                              className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg shadow-sm z-0"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                          <span className="relative z-10">{category.title}</span>
                        </TabsTrigger>
                      </motion.div>
                    ))}
                  </TabsList>
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
