import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
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
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import NewsletterPopup from "./components/NewsletterPopup";
import StickyContactForm from "./components/StickyContactForm";

// Lazy load blog components
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const LoadingSpinner = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <NewsletterPopup />
      <StickyContactForm />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/host" element={<Host />} />
          <Route path="/blog" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogIndex />
            </Suspense>
          } />
          <Route path="/blog/:slug" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogPost />
            </Suspense>
          } />
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
