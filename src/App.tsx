import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConsortiumVehicles from "./pages/ConsortiumVehicles";
import ConsortiumProperty from "./pages/ConsortiumProperty";
import ConsortiumMotorcycle from "./pages/ConsortiumMotorcycle";
import ConsortiumHeavy from "./pages/ConsortiumHeavy";
import ConsortiumInvestment from "./pages/ConsortiumInvestment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consorcio-veiculos" element={<ConsortiumVehicles />} />
          <Route path="/consorcio-imoveis" element={<ConsortiumProperty />} />
          <Route path="/consorcio-motos" element={<ConsortiumMotorcycle />} />
          <Route path="/consorcio-pesados" element={<ConsortiumHeavy />} />
          <Route path="/consorcio-investimentos" element={<ConsortiumInvestment />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-condicoes" element={<TermsConditions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
