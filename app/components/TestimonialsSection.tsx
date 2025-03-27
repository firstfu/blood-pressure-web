// @ Author: firstfu
// @ Create Time: 2024-08-13 10:36:21
// @ Description: 未來展望區塊 - 以未來願景替代尚未存在的用戶評價

"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Sparkles, LineChart, Heart, Shield, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useLocale } from "../i18n/context";

interface FutureVisionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function FutureVision({ title, description, icon, delay }: FutureVisionProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
      <Card className="h-full border-none shadow-medium dark:bg-card dark:shadow-lg dark:border-primary-900/20 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center mb-4 text-primary-600 dark:text-primary-400">{icon}</div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const { dictionary } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const futureVisions = [
    {
      title: dictionary?.首頁?.未來展望?.標題1 || "智能健康分析",
      description: dictionary?.首頁?.未來展望?.描述1 || "未來版本將融合更多健康指標，提供個人化的健康趨勢分析與建議，幫助您從各方面守護心血管健康。",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      title: dictionary?.首頁?.未來展望?.標題2 || "醫療資源整合",
      description: dictionary?.首頁?.未來展望?.描述2 || "我們計劃與更多醫療機構合作，讓您能輕鬆與專業醫師交流，獲得及時的健康建議與照護。",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      title: dictionary?.首頁?.未來展望?.標題3 || "資料安全保障",
      description: dictionary?.首頁?.未來展望?.描述3 || "我們承諾採用最高標準的加密技術，保護您的健康數據安全，讓您能安心使用而無需擔憂隱私問題。",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: dictionary?.首頁?.未來展望?.標題4 || "持續更新優化",
      description: dictionary?.首頁?.未來展望?.描述4 || "團隊將根據用戶反饋持續改進產品體驗，預先註冊用戶將獲得第一手的功能更新與專屬優惠。",
      icon: <Clock className="h-6 w-6" />,
    },
  ];

  return (
    <section id="testimonials" className="py-10 bg-neutral-50/50 dark:bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {dictionary?.導航?.未來展望 || "未來展望"}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {dictionary?.首頁?.未來展望?.副標題 || "我們正不斷創新，打造更完善的血壓健康管理體驗"}
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {futureVisions.map((vision, index) => (
            <FutureVision key={index} title={vision.title} description={vision.description} icon={vision.icon} delay={0.3 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
