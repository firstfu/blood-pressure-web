// @ Author: firstfu
// @ Create Time: 2024-07-29 14:28:32
// @ Description: FAQ 頁面內容區塊，提供用戶常見問題解答

"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// 自定義 CSS 類
const customStyles = {
  textShadow: "0 1px 1px rgba(255, 255, 255, 0.3)",
};

export default function FaqSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState("general");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const faqCategories = [
    {
      id: "general",
      title: "一般問題",
      icon: "✨",
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
      icon: "📱",
      items: [
        {
          question: "應用是否提供血壓異常警報？",
          answer: "是的，我們的應用提供可自定義的血壓警報功能。您可以設置個人化的血壓閾值，當測量結果超出這些範圍時，應用會立即通知您。這有助於及時發現潛在的健康問題。",
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
      icon: "🔧",
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
          answer: "是的，您可以在多個設備上使用同一帳戶。所有數據將自動同步，確保您在任何設備上都能看到最新的健康記錄。這對於家庭成員共同管理或醫患溝通特別有用。",
        },
      ],
    },
  ];

  return (
    <section id="faq" className="bg-gradient-to-b dark:from-background/95 dark:to-background/90 from-neutral-50/95 overflow-hidden py-32 relative to-neutral-100/90">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] h-full w-full absolute from-primary-400/5 left-0 opacity-60 to-transparent top-0 via-transparent"></div>
        <div className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] h-full w-full absolute bottom-0 from-secondary-400/5 opacity-60 right-0 to-transparent via-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            className="bg-primary-50/50 rounded-full text-primary-500 text-sm dark:bg-primary-900/30 dark:text-primary-400 font-semibold inline-block mb-4 px-3 py-1 tracking-wider uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            幫助中心
          </motion.span>
          <motion.h2
            className="bg-clip-text bg-gradient-to-r text-4xl text-foreground text-transparent font-bold from-foreground mb-6 md:text-5xl to-foreground/80 via-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            常見問題解答
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-xl max-w-3xl md:text-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            我們整理了用戶最常詢問的問題，希望能幫助您更好地了解我們的服務
          </motion.p>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto relative">
          <motion.div
            className="bg-primary-400/10 h-80 rounded-full w-80 -left-40 -top-32 absolute blur-3xl dark:bg-primary-600/5 filter opacity-70"
            animate={{
              x: [0, 10, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="bg-secondary-400/10 h-80 rounded-full w-80 -bottom-32 -right-40 absolute blur-3xl dark:bg-secondary-600/5 filter opacity-70"
            animate={{
              x: [0, -10, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <Tabs defaultValue="general" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <motion.div
                className="bg-gradient-to-br p-[2px] rounded-2xl shadow-xl w-full backdrop-blur-md
                  dark:from-gray-800/80 dark:to-gray-800/80 dark:via-gray-800/60
                  from-white/95 to-white/90 via-blue-50/80
                  max-w-xl overflow-hidden relative
                  ring-1 ring-gray-200/50 dark:ring-gray-700/50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="bg-[conic-gradient(from_90deg_at_50%_50%,var(--tw-gradient-stops))] absolute opacity-10 inset-0
                  dark:from-primary-500/10 dark:via-blue-500/10 dark:to-secondary-500/10
                  from-primary-200/20 via-blue-200/20 to-secondary-200/20"
                ></div>

                <div className="bg-white/70 p-1 rounded-2xl backdrop-blur-md dark:bg-gray-900/70 overflow-hidden relative">
                  <div className="flex bg-transparent border-0 h-14 justify-between p-0 w-full gap-1 items-center relative z-10">
                    <div className="absolute inset-0 z-0">
                      <motion.div
                        layoutId="activeTabBackground"
                        className="bg-gradient-to-r rounded-xl shadow-lg absolute
                          from-primary-200/95 via-primary-100/95 to-primary-200/95
                          dark:from-primary-300/95 dark:via-primary-200/95 dark:to-primary-300/95"
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

                    <TabsList className="flex bg-transparent border-0 h-full justify-between w-full gap-1 overflow-visible relative z-10">
                      {faqCategories.map(category => (
                        <TabsTrigger
                          key={category.id}
                          value={category.id}
                          className="relative flex-1 text-base font-medium h-full py-2 rounded-xl
                            data-[state=active]:shadow-md data-[state=active]:font-bold
                            data-[state=active]:text-primary-700 dark:data-[state=active]:text-primary-900
                            data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:text-gray-900
                            dark:data-[state=inactive]:text-gray-300 dark:data-[state=inactive]:hover:text-gray-100
                            data-[state=inactive]:hover:bg-gray-100/70 dark:data-[state=inactive]:hover:bg-gray-800/30
                            data-[state=active]:scale-[0.98] data-[state=active]:transform
                            transition-all duration-300 bg-transparent z-10 overflow-hidden"
                        >
                          <div className="flex justify-center items-center pointer-events-none relative space-x-2">
                            <span className="flex-shrink-0 text-lg">{category.icon}</span>
                            <span className="font-medium relative whitespace-nowrap z-10" style={activeTab === category.id ? customStyles : {}}>
                              {category.title}
                            </span>
                          </div>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {faqCategories.map(category => (
                  <TabsContent key={category.id} value={category.id} className="focus-visible:outline-none focus-visible:ring-0 relative space-y-4">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {category.items.map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView && activeTab === category.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="group"
                        >
                          <AccordionItem
                            value={`item-${index}`}
                            className="bg-white dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/40
                              rounded-xl shadow-sm backdrop-blur-md
                              group-hover:shadow-md group-hover:border-primary-200/50 dark:group-hover:border-primary-700/40
                              mb-5 overflow-hidden transition-all duration-300"
                          >
                            <AccordionTrigger
                              className="text-foreground text-left text-lg duration-300
                              font-medium hover:text-primary-600 dark:hover:text-primary-400
                              px-6 py-5 transition-all group-hover:bg-gray-50/80 dark:group-hover:bg-gray-900/50"
                            >
                              <span className="pr-8">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent
                              className="border-gray-200/50 dark:border-gray-700/30 border-t
                              text-base text-muted-foreground leading-relaxed pb-6 pt-4 px-6
                              bg-gradient-to-b from-white/50 to-white dark:from-gray-800/30 dark:to-gray-800/80"
                            >
                              <div className="dark:prose-invert max-w-none prose prose-gray">{faq.answer}</div>
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </div>
          </Tabs>

          <motion.div className="text-center mt-12 opacity-0" animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.8 }}>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-primary-600 dark:text-primary-400
              hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 space-x-1.5 group"
            >
              <span>還有其他問題？</span>
              <span className="duration-200 group-hover:translate-x-1 transition-transform">聯絡我們 →</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
