import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CCTVPage from "./pages/solutions/CCTV";
import AccessControlPage from "./pages/solutions/AccessControl";
import FireAlarmPage from "./pages/solutions/FireAlarm";
import PublicAddressPage from "./pages/solutions/PublicAddress";
import BuildingAutomationPage from "./pages/solutions/BuildingAutomation";
import ITInfrastructurePage from "./pages/solutions/ITInfrastructure";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions/cctv" element={<CCTVPage />} />
          <Route path="/solutions/access-control" element={<AccessControlPage />} />
          <Route path="/solutions/fire-alarm" element={<FireAlarmPage />} />
          <Route path="/solutions/public-address" element={<PublicAddressPage />} />
          <Route path="/solutions/building-automation" element={<BuildingAutomationPage />} />
          <Route path="/solutions/it-infrastructure" element={<ITInfrastructurePage />} />
          <Route path="/about" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
