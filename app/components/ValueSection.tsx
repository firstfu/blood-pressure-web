/**
 * @ Author: firstfu
 * @ Create Time: 2024-05-04 18:52:35
 * @ Description: 顯示血壓管家應用的核心價值主張部分組件
 */

"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Shield, Clock, Zap, Heart } from "lucide-react";
import { useLocale } from "../i18n/context";

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function Value({ icon, title, description, delay }: ValueProps) {
  return (
    <motion.div
      className="flex flex-col p-6 md:p-6 text-center items-center bg-background/50 backdrop-blur-sm rounded-2xl md:rounded-none hover:bg-primary-50/50 dark:hover:bg-primary-950/10 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="bg-primary-100 p-5 md:p-3 rounded-2xl md:rounded-full dark:bg-primary-900/30 mb-6 md:mb-4">
        <div className="text-primary-600 dark:text-primary-400 w-10 h-10 md:w-6 md:h-6">{icon}</div>
      </div>
      <h3 className="text-2xl md:text-xl text-foreground font-bold heading-modern mb-4 md:mb-2">{title}</h3>
      <p className="text-lg md:text-base text-muted-foreground/90 text-optimized font-sans leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function ValueSection() {
  const { dictionary } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      icon: <Heart className="h-full w-full" />,
      title: dictionary?.價值主張?.精確測試 || "精確測試",
      description: dictionary?.價值主張?.精確測試描述 || "我們的首要任務是提供精確的血壓測試記錄工具，幫助您掌握血壓狀況",
    },
    {
      icon: <Shield className="h-full w-full" />,
      title: dictionary?.價值主張?.資料安全 || "資料安全",
      description: dictionary?.價值主張?.資料安全描述 || "您的血壓數據受到嚴格保護，確保個人測試記錄的隱私和安全",
    },
    {
      icon: <Clock className="h-full w-full" />,
      title: dictionary?.價值主張?.便捷記錄 || "便捷記錄",
      description: dictionary?.價值主張?.便捷記錄描述 || "簡化血壓測試記錄流程，讓您輕鬆追蹤每次測量結果",
    },
    {
      icon: <Zap className="h-full w-full" />,
      title: dictionary?.價值主張?.數據分析 || "數據分析",
      description: dictionary?.價值主張?.數據分析描述 || "分析您的血壓測試數據，提供清晰的數值變化趨勢報告",
    },
  ];

  return (
    <section id="values" className="md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className="text-4xl md:text-3xl text-foreground font-bold heading-serif mb-6 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {dictionary?.價值主張?.標題 || "為什麼選擇"}
            <span className="text-gradient-primary">血壓管家</span>?
          </motion.h2>
          <motion.p
            className="text-xl md:text-lg text-muted-foreground text-optimized font-rounded max-w-3xl mx-auto px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {dictionary?.價值主張?.副標題 || "血壓管家專注於提供便捷的血壓記錄功能，幫助您清晰記錄和分析血壓數值，智能管理您的健康數據。"}
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-4 md:grid-cols-2">
          {values.map((value, index) => (
            <Value key={index} icon={value.icon} title={value.title} description={value.description} delay={0.3 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
