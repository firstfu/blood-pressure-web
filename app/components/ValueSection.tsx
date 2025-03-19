"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Shield, Clock, Zap, Heart } from "lucide-react";

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function Value({ icon, title, description, delay }: ValueProps) {
  return (
    <motion.div className="flex flex-col p-6 text-center items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
      <div className="bg-primary-100 p-3 rounded-full dark:bg-primary-900/30 mb-4">{icon}</div>
      <h3 className="text-foreground text-xl font-semibold heading-modern mb-2">{title}</h3>
      <p className="text-muted-foreground text-optimized font-sans">{description}</p>
    </motion.div>
  );
}

export default function ValueSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      icon: <Heart className="h-6 text-primary w-6" />,
      title: "精確測試",
      description: "我們的首要任務是提供精確的血壓測試記錄工具，幫助您掌握血壓狀況",
    },
    {
      icon: <Shield className="h-6 text-primary w-6" />,
      title: "資料安全",
      description: "您的血壓數據受到嚴格保護，確保個人測試記錄的隱私和安全",
    },
    {
      icon: <Clock className="h-6 text-primary w-6" />,
      title: "便捷記錄",
      description: "簡化血壓測試記錄流程，讓您輕鬆追蹤每次測量結果",
    },
    {
      icon: <Zap className="h-6 text-primary w-6" />,
      title: "數據分析",
      description: "分析您的血壓測試數據，提供清晰的數值變化趨勢報告",
    },
  ];

  return (
    <section id="values" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl text-foreground font-bold heading-serif mb-4 md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            為什麼選擇<span className="text-gradient-primary">血壓管家</span>？
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-optimized font-rounded max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            血壓管家專注於提供便捷的血壓記錄功能，幫助您清晰記錄和分析血壓數值，智能管理您的健康數據。
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          {values.map((value, index) => (
            <Value key={index} icon={value.icon} title={value.title} description={value.description} delay={0.3 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
