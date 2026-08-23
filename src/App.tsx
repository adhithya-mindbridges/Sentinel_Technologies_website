import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { initAnalytics, trackPageView } from "@/lib/analytics";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CCTVPage = lazy(() => import("./pages/solutions/CCTV"));
const AccessControlPage = lazy(() => import("./pages/solutions/AccessControl"));
const FireAlarmPage = lazy(() => import("./pages/solutions/FireAlarm"));
const PublicAddressPage = lazy(() => import("./pages/solutions/PublicAddress"));
const BuildingAutomationPage = lazy(() => import("./pages/solutions/BuildingAutomation"));
const ITInfrastructurePage = lazy(() => import("./pages/solutions/ITInfrastructure"));
const IndustriesPage = lazy(() => import("./pages/Industries"));
const IndustryDetail = lazy(() => import("./pages/IndustryDetail"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const AboutPage = lazy(() => import("./pages/About"));
const SolutionsPage = lazy(() => import("./pages/Solutions"));
const PartnersPage = lazy(() => import("./pages/Partners"));
const ContactPage = lazy(() => import("./pages/Contact"));

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
        <Header />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solutions/cctv" element={<CCTVPage />} />
            <Route path="/solutions/access-control" element={<AccessControlPage />} />
            <Route path="/solutions/fire-alarm" element={<FireAlarmPage />} />
            <Route path="/solutions/public-address" element={<PublicAddressPage />} />
            <Route path="/solutions/building-automation" element={<BuildingAutomationPage />} />
            <Route path="/solutions/it-infrastructure" element={<ITInfrastructurePage />} />
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
        </Suspense>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
