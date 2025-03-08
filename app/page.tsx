import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ValueSection from "./components/ValueSection";
import ProblemSolutionSection from "./components/ProblemSolutionSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SubscriptionForm from "./components/SubscriptionForm";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueSection />
      <ProblemSolutionSection />
      <SubscriptionForm />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
