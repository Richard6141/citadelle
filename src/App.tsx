import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Performance from "./pages/Performance";
import Licenses from "./pages/Licenses";
import About from "./pages/About";
import MentionsLegales from "./pages/MentionsLegales";
import CGU from "./pages/CGU";
import CGV from "./pages/CGV";
import Disclaimer from "./pages/Disclaimer";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancelled from "./pages/PaymentCancelled";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/comment-ca-marche" element={<HowItWorks />} />
          <Route path="/performances" element={<Performance />} />
          <Route path="/licences" element={<Licenses />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/paiement/succes" element={<PaymentSuccess />} />
          <Route path="/paiement/annule" element={<PaymentCancelled />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

