import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import CGV from "./pages/CGV";
import Confidentialite from "./pages/Confidentialite";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogArticleHotellerie from "./pages/BlogArticleHotellerie";
import BlogArticleFormationIA from "./pages/BlogArticleFormationIA";
import BlogArticleSpa from "./pages/BlogArticleSpa";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import LibrairieIA from "./pages/LibrairieIA";
import BlogArticleEcommerce from "./pages/BlogArticleEcommerce";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/ia-hotellerie-restauration" element={<BlogArticleHotellerie />} />
            <Route path="/blog/formation-intelligence-artificielle" element={<BlogArticleFormationIA />} />
            <Route path="/blog/ia-spa-centre-bien-etre" element={<BlogArticleSpa />} />
            <Route path="/blog/ia-e-commerce" element={<BlogArticleEcommerce />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/librairie-ia" element={<LibrairieIA />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
