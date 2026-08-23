import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import CustomerLogos from "@/components/CustomerLogos";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SolutionsSection />
      <CustomerLogos />
      <ContactSection />
    </main>
  );
};

export default Index;
