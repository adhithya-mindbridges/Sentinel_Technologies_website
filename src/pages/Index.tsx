import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import CustomerLogos from "@/components/CustomerLogos";
import SEO, { SITE_URL } from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Sentinel Technologies - Security, ELV & AI Automation Solutions"
        description="Sentinel Technologies engineers CCTV, access control, fire alarm, public address, building automation, IT infrastructure and AI-powered security solutions for enterprises across India."
        canonical={SITE_URL + "/"}
      />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SolutionsSection />
      <CaseStudiesPreview />
      <CustomerLogos />
    </main>
  );
};

export default Index;
