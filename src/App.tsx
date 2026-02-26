import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Episodes from "./pages/Episodes";
import Sponsors from "./pages/Sponsors";
import Host from "./pages/Host";
import Blog from "./pages/Blog";
import FamilyResources from "./pages/FamilyResources";
import FamilyReflection from "./pages/FamilyReflection";
import FearInventory from "./pages/FearInventory";
import ConversationStarters from "./pages/ConversationStarters";
import Press from "./pages/Press";
import StartHere from "./pages/StartHere";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import NewsletterPopup from "./components/NewsletterPopup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <NewsletterPopup />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/host" element={<Host />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/family-resources" element={<FamilyResources />} />
          <Route path="/family-reflection" element={<FamilyReflection />} />
          <Route path="/fear-inventory" element={<FearInventory />} />
          <Route path="/conversation-starters" element={<ConversationStarters />} />
          <Route path="/press" element={<Press />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
