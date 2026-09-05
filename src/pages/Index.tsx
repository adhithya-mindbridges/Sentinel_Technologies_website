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
        title="Sentinel Technologies | Security, ELV & AI Automation"
        description="Sentinel Technologies designs and installs CCTV, access control, fire alarm, building automation and AI-powered security systems for enterprises across India."
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
