import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import type { PropsWithChildren, ReactNode } from "react";
import Index from "./pages/Index";
import Episodes from "./pages/Episodes";
import Sponsors from "./pages/Sponsors";
import Host from "./pages/Host";
import FamilyResources from "./pages/FamilyResources";
import FamilyReflection from "./pages/FamilyReflection";
import FearInventory from "./pages/FearInventory";
import ConversationStarters from "./pages/ConversationStarters";
import Press from "./pages/Press";
import StartHere from "./pages/StartHere";
import HelpNow from "./pages/HelpNow";
import NextStep from "./pages/NextStep";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import NewsletterPopup from "./components/NewsletterPopup";
import StickyContactForm from "./components/StickyContactForm";

const queryClient = new QueryClient();

interface AppProps {
  Router?: React.ComponentType<PropsWithChildren>;
}

const DefaultRouter = ({ children }: PropsWithChildren): ReactNode => (
  <BrowserRouter>{children}</BrowserRouter>
);

export const App = ({ Router = DefaultRouter }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <NewsletterPopup />
      <StickyContactForm />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/help-now" element={<HelpNow />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/next-step" element={<NextStep />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/host" element={<Host />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/family-resources" element={<FamilyResources />} />
          <Route path="/family-reflection" element={<FamilyReflection />} />
          <Route path="/fear-inventory" element={<FearInventory />} />
          <Route path="/conversation-starters" element={<ConversationStarters />} />
          <Route path="/press" element={<Press />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
