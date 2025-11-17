import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowToUseSection from "@/components/HowToUseSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import TargetUsersSection from "@/components/TargetUsersSection";
import SafetySection from "@/components/SafetySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <FeaturesSection />
        <HowToUseSection />
        <ScreenshotsSection />
        <TargetUsersSection />
        <SafetySection />
        {/* <FAQSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
