/**
 * @ Author: firstfu
 * @ Create Time: 2024-06-05 15:35:00
 * @ Description: 等待名單訂閱表單組件，提供電子郵件訂閱功能和表單驗證
 */
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
import { useLocale } from "../i18n/context";
import Link from "next/link";

export default function SubscriptionForm() {
  const { dictionary } = useLocale();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError(dictionary?.錯誤?.請輸入您的電子郵件 || "請輸入您的電子郵件");
      return;
    }

    // 簡單的電子郵件格式驗證
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(dictionary?.錯誤?.請輸入有效的電子郵件地址 || "請輸入有效的電子郵件地址");
      return;
    }

    // 檢查是否同意條款
    if (!acceptTerms) {
      setError("請同意我們的條款和條件");
      return;
    }

    setIsSubmitting(true);
    const requestData = {
      email,
      accepted_terms: acceptTerms,
    };

    try {
      // 呼叫等待名單 API
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "加入等待名單失敗");
      }

      setIsSuccess(true);
      setEmail("");
      setAcceptTerms(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : dictionary?.錯誤?.["訂閱失敗，請稍後再試"] || "訂閱失敗，請稍後再試");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="subscribe" className="py-10 relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary-100/30 to-secondary-100/30 dark:from-primary-900/10 dark:to-secondary-900/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{dictionary?.訂閱表單?.標題 || "加入等待名單"}</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {dictionary?.訂閱表單?.副標題 || "填寫更多資訊，獲取產品發布優先體驗資格、專屬折扣碼及個人化血壓管理建議"}
            </p>
          </motion.div>

          <motion.div
            className="bg-background dark:bg-card rounded-xl p-10 shadow-2xl dark:shadow-primary-900/10 border border-primary-100 dark:border-primary-800/20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-10 w-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">{dictionary?.訂閱表單?.註冊成功標題 || "註冊成功！"}</h3>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto">
                  {dictionary?.訂閱表單?.註冊成功訊息 || "感謝您加入等待名單，我們將在產品發布時第一時間通知您，並提供獨家優惠。"}
                </p>
                <Button className="mt-8 text-lg h-12 px-6" onClick={() => setIsSuccess(false)}>
                  {dictionary?.訂閱表單?.返回按鈕 || "返回"}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-lg font-medium text-foreground">
                    {dictionary?.訂閱表單?.電子郵件 || "電子郵件"}
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder={dictionary?.訂閱表單?.輸入框文字 || "請輸入您的電子郵件"}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="flex-1 text-lg h-14 px-4"
                    />
                    <Button type="submit" disabled={isSubmitting} className="gap-2 text-lg h-14 px-6">
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                          </svg>
                          {"處理中"}
                        </span>
                      ) : (
                        <>
                          {dictionary?.訂閱表單?.預先註冊按鈕 || "加入等待名單"}
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                  {error && <p className="text-base text-red-500 dark:text-red-400 mt-2">{error}</p>}
                </div>

                <div className="flex items-start space-x-3 mt-6">
                  <Checkbox id="terms" className="mt-1" checked={acceptTerms} onCheckedChange={checked => setAcceptTerms(checked === true)} />
                  <div className="grid gap-1.5 leading-normal">
                    <Label htmlFor="terms" className="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground">
                      {dictionary?.訂閱表單?.接收通知說明 || "我同意接收產品發布通知、獨家優惠及健康管理建議"}
                    </Label>
                  </div>
                </div>

                <div className="text-base text-muted-foreground mt-6">
                  <p>
                    {dictionary?.訂閱表單?.隱私說明 || "我們重視您的隱私，您可以隨時取消訂閱。查看我們的"}{" "}
                    <Link href="/legal/privacy-policy" className="text-primary hover:underline">
                      {dictionary?.訂閱表單?.隱私政策連結 || "隱私政策"}
                    </Link>
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
