import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { initAnalytics, trackPageView } from "@/lib/analytics";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CCTVPage from "./pages/solutions/CCTV";
import AccessControlPage from "./pages/solutions/AccessControl";
import FireAlarmPage from "./pages/solutions/FireAlarm";
import PublicAddressPage from "./pages/solutions/PublicAddress";
import BuildingAutomationPage from "./pages/solutions/BuildingAutomation";
import ITInfrastructurePage from "./pages/solutions/ITInfrastructure";
import SentinelXLabsPage from "./pages/solutions/SentinelXLabs";
import VMSPage from "./pages/solutions/VMS";
import GateAutomationPage from "./pages/solutions/GateAutomation";
import AIVideoAnalyticsPage from "./pages/solutions/AIVideoAnalytics";
import IndustriesPage from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import CaseStudiesPage from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import AboutPage from "./pages/About";
import SolutionsPage from "./pages/Solutions";
import PartnersPage from "./pages/Partners";
import ContactPage from "./pages/Contact";

const queryClient = new QueryClient();

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  // Take control of scroll position ourselves - otherwise the browser's
  // native scroll restoration can re-apply an old scroll offset after our
  // own reset-to-top runs, especially on back/forward navigation.
  window.history.scrollRestoration = "manual";
}

const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  // Reset scroll position on every route change so a new page (e.g. a case
  // study or industry detail page) always opens at the top, rather than
  // inheriting the scroll position from the page navigated away from. A
  // link carrying a hash (e.g. /solutions#solution-02 from the mega menu)
  // scrolls to that element instead, once the lazy-loaded page has mounted.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteTracker />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/solutions/cctv" element={<CCTVPage />} />
              <Route path="/solutions/access-control" element={<AccessControlPage />} />
              <Route path="/solutions/fire-alarm" element={<FireAlarmPage />} />
              <Route path="/solutions/public-address" element={<PublicAddressPage />} />
              <Route path="/solutions/building-automation" element={<BuildingAutomationPage />} />
              <Route path="/solutions/it-infrastructure" element={<ITInfrastructurePage />} />
              <Route path="/solutions/sentinel-x-labs" element={<SentinelXLabsPage />} />
              <Route path="/solutions/vms" element={<VMSPage />} />
              <Route path="/solutions/gate-automation" element={<GateAutomationPage />} />
              <Route path="/solutions/ai-video-analytics" element={<AIVideoAnalyticsPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/industries/:slug" element={<IndustryDetail />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
