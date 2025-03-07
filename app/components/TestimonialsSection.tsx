"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

function Testimonial({ name, role, comment, rating }: TestimonialProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-lg font-semibold text-primary">{name[0]}</span>
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
          ))}
        </div>
        <blockquote className="text-muted-foreground">"{comment}"</blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "王先生",
      role: "高血壓患者，使用 3 個月",
      comment: "使用健康守護 App 讓我的血壓管理變得輕鬆許多。我特別喜歡它的趨勢圖表功能，讓我清楚了解自己的血壓變化。現在我的醫生也能獲得更完整的數據，大大改善了治療效果。",
      rating: 5,
      avatar: "/avatars/avatar-1.jpg",
    },
    {
      name: "李女士",
      role: "長者的照護者",
      comment: "幫父母安裝了這款 App 後，我不用每天去他們家查看血壓紀錄了。App 的提醒功能確保他們準時測量，而且我可以遠端查看結果，真的減輕了我的照護壓力。",
      rating: 4,
      avatar: "/avatars/avatar-2.jpg",
    },
    {
      name: "張醫師",
      role: "心臟科醫生",
      comment: "我向許多需要長期監測血壓的患者推薦這款 App。它生成的報告非常專業，提供了我需要的所有數據，幫助我更準確地評估患者的治療效果。",
      rating: 5,
      avatar: "/avatars/avatar-3.jpg",
    },
    {
      name: "林小姐",
      role: "預防性健康管理者",
      comment: "雖然我沒有高血壓問題，但家族有心血管疾病史，所以定期監測很重要。這款 App 界面簡潔、操作直覺，讓健康管理變成一種習慣而非負擔。",
      rating: 5,
      avatar: "/avatars/avatar-4.jpg",
    },
  ];

  const slideCount = Math.ceil(testimonials.length / 2);

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

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev + 1) % slideCount);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev - 1 + slideCount) % slideCount);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">使用者心得分享</h2>
          <p className="text-muted-foreground text-lg">來聽聽我們的使用者如何評價健康守護 App</p>
        </div>

        <div className={`relative transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* 行動裝置輪播 (單欄) */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Testimonial {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 桌面版輪播 (雙欄) */}
          <div className="hidden md:block">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {Array.from({ length: slideCount }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                        <Testimonial key={index} {...testimonial} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 輪播控制按鈕 */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={prevSlide} aria-label="上一則評價" className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: slideCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? "bg-primary" : "bg-primary/20"}`}
                  aria-label={`前往第 ${index + 1} 則評價`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextSlide} aria-label="下一則評價" className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
