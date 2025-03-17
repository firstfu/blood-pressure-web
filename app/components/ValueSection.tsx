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
    <motion.div className="flex flex-col items-center text-center p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
      <div className="mb-4 p-3 rounded-full bg-primary-100 dark:bg-primary-900/30">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

export default function ValueSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "健康至上",
      description: "我們的首要任務是幫助您維護心血管健康，提供專業的血壓管理工具",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "資料安全",
      description: "您的健康數據受到嚴格保護，符合醫療級別的隱私和安全標準",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "便捷管理",
      description: "簡化血壓記錄和分析流程，節省您的寶貴時間，讓健康管理更輕鬆",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "智能分析",
      description: "運用先進技術分析您的血壓數據，提供個性化的健康洞察和建議",
    },
  ];

  return (
    <section id="values" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            為什麼選擇<span className="text-gradient-primary">健康守護</span>？
          </motion.h2>
          <motion.p
            className="text-optimized text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            健康守護不僅僅是一個記錄血壓的應用，而是您全方位的健康管理助手，將數據、分析和醫療專業完美結合。
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Value key={index} icon={value.icon} title={value.title} description={value.description} delay={0.3 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
