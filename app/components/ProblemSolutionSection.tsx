"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = ["紙本記錄容易遺失或忘記攜帶", "數據難以追蹤趨勢變化", "無法及時發現異常數值", "與醫生溝通缺乏完整資料"];

const solutions = ["數據雲端同步，隨時隨地查看", "智能圖表分析，清晰掌握趨勢", "異常提醒功能，及時關注健康", "一鍵生成報告，醫療溝通無障礙"];

export default function ProblemSolutionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="solution" className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            血壓管理的痛點與解決方案
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            我們了解血壓管理中常見的挑戰，並精心設計解決方案來幫您更有效地管理健康
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 痛點卡片 */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <Card className="h-full border-none shadow-medium dark:bg-card dark:shadow-lg dark:border-primary-900/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-red-500/10 dark:bg-red-900/20 p-4 flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-red-500 dark:text-red-400" />
                  <h3 className="text-xl font-semibold text-foreground">常見痛點</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {problems.map((problem, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      >
                        <XCircle className="h-5 w-5 text-red-500 dark:text-red-400 shrink-0 mt-0.5" />
                        <span>{problem}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 解決方案卡片 */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <Card className="h-full border-none shadow-medium dark:bg-card dark:shadow-lg dark:border-primary-900/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-green-500/10 dark:bg-green-900/20 p-4 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 dark:text-green-400" />
                  <h3 className="text-xl font-semibold text-foreground">我們的解決方案</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {solutions.map((solution, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 shrink-0 mt-0.5" />
                        <span>{solution}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
