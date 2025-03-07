"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

interface ProblemSolutionItemProps {
  problem: string;
  solution: string;
}

function ProblemSolutionItem({ problem, solution }: ProblemSolutionItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-8">
      <Card className="flex-1 border-red-100">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <span className="shrink-0 mt-1">
              <XCircle className="w-6 h-6 text-red-500" />
            </span>
            <p className="text-gray-700">{problem}</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex md:justify-center items-center">
        <ArrowRight className="hidden md:block w-6 h-6 text-gray-400" />
        <div className="md:hidden w-full border-t border-gray-200 my-2" />
      </div>

      <Card className="flex-1 border-green-100">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <span className="shrink-0 mt-1">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            </span>
            <p className="text-gray-700">{solution}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ProblemSolutionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const problemSolutions = [
    {
      problem: "紙本記錄容易遺失或忘記攜帶，造成數據不連續。",
      solution: "數據雲端同步，隨時隨地透過手機或電腦查看完整歷史紀錄。",
    },
    {
      problem: "難以追蹤長期血壓變化趨勢，無法及時發現潛在問題。",
      solution: "智能圖表分析，清晰掌握日、週、月血壓變化，一目了然。",
    },
    {
      problem: "向醫生報告時數據不完整，無法提供準確的健康狀況。",
      solution: "專業醫療報告生成，完整呈現測量歷史，輕鬆分享給醫師。",
    },
    {
      problem: "忘記定時測量血壓，導致數據缺失或不規律。",
      solution: "智能提醒系統，根據您的習慣設定提醒，不錯過任何測量。",
    },
  ];

  return (
    <section id="solution" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">血壓管理的痛點與解決方案</h2>
          <p className="text-muted-foreground text-lg">我們了解血壓管理中常見的挑戰，並精心設計解決方案來幫助您更有效地管理健康</p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {problemSolutions.map((item, index) => (
            <ProblemSolutionItem key={index} problem={item.problem} solution={item.solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
