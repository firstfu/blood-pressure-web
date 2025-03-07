"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface TestimonialProps {
  name: string;
  age: string;
  comment: string;
  rating: number;
  delay: number;
}

function Testimonial({ name, age, comment, rating, delay }: TestimonialProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
      <Card className="h-full border-none shadow-medium dark:bg-card dark:shadow-lg dark:border-primary-900/20 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`} />
            ))}
          </div>
          <p className="text-muted-foreground mb-4">{comment}</p>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary font-semibold">{name.charAt(0)}</div>
            <div className="ml-3">
              <p className="font-medium text-foreground">{name}</p>
              <p className="text-sm text-muted-foreground">{age}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: "王先生",
      age: "65歲，高血壓患者",
      comment: "使用這款應用後，我終於能夠清楚地追蹤我的血壓變化。醫生也很讚賞我能提供完整的血壓記錄，讓治療更有針對性。",
      rating: 5,
    },
    {
      name: "李女士",
      age: "58歲，心臟病康復者",
      comment: "介面簡單易用，即使我這個不太懂科技的人也能輕鬆操作。提醒功能很貼心，讓我養成了定時測量血壓的好習慣。",
      rating: 4,
    },
    {
      name: "張醫師",
      age: "42歲，家庭醫生",
      comment: "我向我的患者推薦這款應用，因為它提供的數據報告非常專業，讓我能更全面地了解患者的血壓狀況，提供更精準的治療建議。",
      rating: 5,
    },
    {
      name: "陳小姐",
      age: "35歲，健康管理愛好者",
      comment: "雖然我沒有血壓問題，但我用這款應用來監測家人的健康狀況。介面美觀，功能齊全，是一款非常實用的健康管理工具。",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-neutral-50/50 dark:bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            用戶評價
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            聽聽我們的用戶怎麼說，他們的真實體驗是我們最好的見證
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} name={testimonial.name} age={testimonial.age} comment={testimonial.comment} rating={testimonial.rating} delay={0.3 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
