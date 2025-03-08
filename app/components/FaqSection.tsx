"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: "這款應用適合哪些人使用？",
      answer:
        "我們的血壓管理應用適合所有需要監測血壓的人群，包括高血壓患者、心臟病患者、孕婦、老年人，以及關注健康的普通人群。無論您是需要長期監測還是偶爾檢查，我們的應用都能滿足您的需求。",
    },
    {
      question: "如何將我的血壓計與應用連接？",
      answer: "我們的應用支援多種藍牙血壓計連接。只需在應用設置中選擇「連接設備」，然後按照指示將您的血壓計與手機配對即可。對於不支援藍牙的血壓計，您也可以手動輸入測量結果。",
    },
    {
      question: "我的健康數據安全嗎？",
      answer:
        "保護您的隱私是我們的首要任務。所有數據都經過端到端加密，並存儲在符合醫療級別安全標準的伺服器上。我們絕不會未經您的明確許可分享您的個人健康數據。您可以隨時查看、下載或刪除您的數據。",
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
      question: "應用是否需要付費？有哪些訂閱計劃？",
      answer: "我們提供免費版和專業版兩種選擇。免費版包含基本的血壓記錄和簡單圖表功能。專業版提供高級分析、無限數據存儲、多設備同步等功能，按月或按年訂閱，並提供7天免費試用。",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-50/50 dark:bg-background/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
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

        <div ref={ref} className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}>
                <AccordionItem value={`item-${index}`} className="border border-border dark:border-primary-900/20 rounded-lg mb-4 overflow-hidden shadow-sm">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-medium text-foreground hover:text-primary px-6 py-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg text-muted-foreground px-6 pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
