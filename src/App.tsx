import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";

// Lazy-loaded routes for code splitting
const CGV = lazy(() => import("./pages/CGV"));
const Confidentialite = lazy(() => import("./pages/Confidentialite"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticleHotellerie = lazy(() => import("./pages/BlogArticleHotellerie"));
const BlogArticleFormationIA = lazy(() => import("./pages/BlogArticleFormationIA"));
const BlogArticleSpa = lazy(() => import("./pages/BlogArticleSpa"));
const BlogArticleEcommerce = lazy(() => import("./pages/BlogArticleEcommerce"));
const BlogArticleRestaurant = lazy(() => import("./pages/BlogArticleRestaurant"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const LibrairieIA = lazy(() => import("./pages/LibrairieIA"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
