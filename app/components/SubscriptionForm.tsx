"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Mail, Loader2 } from "lucide-react";

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !acceptTerms) {
      toast.error("請填寫電子郵件並同意條款");
      return;
    }

    setIsLoading(true);
    // 模擬 API 呼叫
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubscribed(true);
      toast.success("感謝訂閱！我們會將最新消息發送給您。");
      setEmail("");
      setAcceptTerms(false);
    } catch (error) {
      toast.error("訂閱失敗，請稍後再試");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="subscribe" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">搶先體驗</h2>
          <p className="text-muted-foreground text-lg">訂閱我們的最新消息，獲得產品發布通知和早鳥優惠</p>
        </div>

        <Card className="max-w-xl mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">電子郵件</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input id="email" type="email" placeholder="您的電子郵件地址" value={email} onChange={e => setEmail(e.target.value)} className="pl-10" required />
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" checked={acceptTerms} onCheckedChange={checked => setAcceptTerms(checked as boolean)} />
              <Label htmlFor="terms" className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                我同意接收產品相關的電子郵件，並已閱讀{" "}
                <a href="#" className="text-primary underline">
                  隱私權政策
                </a>
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading || !email || !acceptTerms}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  處理中...
                </>
              ) : (
                "立即訂閱"
              )}
            </Button>
          </form>

          {isSubscribed && (
            <div className="mt-6 p-4 bg-primary/10 rounded-lg text-center">
              <p className="text-primary font-medium">感謝您的訂閱！我們會將最新消息發送給您。</p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
