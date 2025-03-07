"use client";

import { useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, ArrowRight } from "lucide-react";

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("請輸入您的電子郵件");
      return;
    }

    // 簡單的電子郵件格式驗證
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("請輸入有效的電子郵件地址");
      return;
    }

    setIsSubmitting(true);

    // 模擬 API 請求
    try {
      // 在實際應用中，這裡會是一個真正的 API 請求
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError("訂閱失敗，請稍後再試");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="subscribe" className="py-20 relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary-100/30 to-secondary-100/30 dark:from-primary-900/10 dark:to-secondary-900/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">獲取最新健康資訊</h2>
            <p className="text-lg text-muted-foreground">訂閱我們的電子報，獲取血壓管理技巧、健康生活方式建議和產品更新</p>
          </motion.div>

          <motion.div
            className="bg-background dark:bg-card rounded-xl p-8 shadow-xl dark:shadow-primary-900/10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">訂閱成功！</h3>
                <p className="text-muted-foreground">感謝您的訂閱，我們將定期發送有價值的健康資訊給您。</p>
                <Button className="mt-6" onClick={() => setIsSuccess(false)}>
                  返回訂閱
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    電子郵件
                  </Label>
                  <div className="flex gap-2">
                    <Input id="email" type="email" placeholder="your.email@example.com" value={email} onChange={e => setEmail(e.target.value)} className="flex-1" />
                    <Button type="submit" disabled={isSubmitting} className="gap-2">
                      訂閱
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  {error && <p className="text-sm text-red-500 dark:text-red-400 mt-1">{error}</p>}
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground">
                      我同意接收健康資訊和產品更新的電子郵件
                    </Label>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>
                    我們重視您的隱私，您可以隨時取消訂閱。查看我們的{" "}
                    <a href="#" className="text-primary hover:underline">
                      隱私政策
                    </a>
                    。
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
