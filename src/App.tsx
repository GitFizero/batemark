import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
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
const SimulateurIAPage = lazy(() => import("./pages/SimulateurIAPage"));
const BlogArticleProspectionB2B = lazy(() => import("./pages/BlogArticleProspectionB2B"));
const BlogArticleImmobilier = lazy(() => import("./pages/BlogArticleImmobilier"));
const BlogArticleChatbot = lazy(() => import("./pages/BlogArticleChatbot"));
const BlogArticleAvisGoogle = lazy(() => import("./pages/BlogArticleAvisGoogle"));
const BlogArticleCabinetComptable = lazy(() => import("./pages/BlogArticleCabinetComptable"));
const BlogArticleRecrutement = lazy(() => import("./pages/BlogArticleRecrutement"));
const BlogArticleArtisan = lazy(() => import("./pages/BlogArticleArtisan"));
const BlogArticleServiceClient = lazy(() => import("./pages/BlogArticleServiceClient"));
const BlogArticleAvocat = lazy(() => import("./pages/BlogArticleAvocat"));
const BlogArticleReporting = lazy(() => import("./pages/BlogArticleReporting"));
const BlogArticleSalonCoiffure = lazy(() => import("./pages/BlogArticleSalonCoiffure"));
const BlogArticleGestionStock = lazy(() => import("./pages/BlogArticleGestionStock"));
const BlogArticleCoachConsultant = lazy(() => import("./pages/BlogArticleCoachConsultant"));
const BlogArticleTunnelVente = lazy(() => import("./pages/BlogArticleTunnelVente"));
const BlogArticleFranchise = lazy(() => import("./pages/BlogArticleFranchise"));
const BlogArticleAgenceCom = lazy(() => import("./pages/BlogArticleAgenceCom"));
const BlogArticleComptaEcommerce = lazy(() => import("./pages/BlogArticleComptaEcommerce"));
const BlogArticleMedecin = lazy(() => import("./pages/BlogArticleMedecin"));
const BlogArticleVeille = lazy(() => import("./pages/BlogArticleVeille"));
const BlogArticleAssociation = lazy(() => import("./pages/BlogArticleAssociation"));
const BlogArticleContenuMarketing = lazy(() => import("./pages/BlogArticleContenuMarketing"));
const BlogArticleSyndic = lazy(() => import("./pages/BlogArticleSyndic"));
const BlogArticleOnboardingEmploye = lazy(() => import("./pages/BlogArticleOnboardingEmploye"));
const BlogArticleAutoEcole = lazy(() => import("./pages/BlogArticleAutoEcole"));
const BlogArticleGestionLocative = lazy(() => import("./pages/BlogArticleGestionLocative"));
const SecteurBienEtre = lazy(() => import("./pages/SecteurBienEtre"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

const App = () => (
  <ErrorBoundary>
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
              <Route path="/blog/ia-restaurant-intelligence-artificielle" element={<BlogArticleRestaurant />} />
              <Route path="/blog/automatiser-prospection-b2b-ia" element={<BlogArticleProspectionB2B />} />
              <Route path="/blog/ia-agence-immobiliere" element={<BlogArticleImmobilier />} />
              <Route path="/blog/chatbot-ia-site-web-conversion" element={<BlogArticleChatbot />} />
              <Route path="/blog/automatiser-avis-google-ia" element={<BlogArticleAvisGoogle />} />
              <Route path="/blog/ia-cabinet-comptable" element={<BlogArticleCabinetComptable />} />
              <Route path="/blog/ia-recrutement-pme" element={<BlogArticleRecrutement />} />
              <Route path="/blog/ia-artisan-automatisation" element={<BlogArticleArtisan />} />
              <Route path="/blog/ia-automatiser-service-client" element={<BlogArticleServiceClient />} />
              <Route path="/blog/ia-avocat-cabinet" element={<BlogArticleAvocat />} />
              <Route path="/blog/ia-automatiser-reporting" element={<BlogArticleReporting />} />
              <Route path="/blog/ia-salon-coiffure-beaute" element={<BlogArticleSalonCoiffure />} />
              <Route path="/blog/ia-gestion-stock-automatique" element={<BlogArticleGestionStock />} />
              <Route path="/blog/ia-coach-consultant" element={<BlogArticleCoachConsultant />} />
              <Route path="/blog/ia-tunnel-vente-automatise" element={<BlogArticleTunnelVente />} />
              <Route path="/blog/ia-franchise-multi-sites" element={<BlogArticleFranchise />} />
              <Route path="/blog/ia-agence-communication" element={<BlogArticleAgenceCom />} />
              <Route path="/blog/ia-comptabilite-ecommerce" element={<BlogArticleComptaEcommerce />} />
              <Route path="/blog/ia-medecin-cabinet-sante" element={<BlogArticleMedecin />} />
              <Route path="/blog/ia-veille-concurrentielle" element={<BlogArticleVeille />} />
              <Route path="/blog/ia-association-ong" element={<BlogArticleAssociation />} />
              <Route path="/blog/ia-contenu-marketing-automatise" element={<BlogArticleContenuMarketing />} />
              <Route path="/blog/ia-syndic-copropriete" element={<BlogArticleSyndic />} />
              <Route path="/blog/ia-onboarding-employe" element={<BlogArticleOnboardingEmploye />} />
              <Route path="/blog/ia-auto-ecole" element={<BlogArticleAutoEcole />} />
              <Route path="/blog/ia-gestion-locative" element={<BlogArticleGestionLocative />} />
              <Route path="/secteur/bien-etre" element={<SecteurBienEtre />} />
              <Route path="/cgv" element={<CGV />} />
              <Route path="/confidentialite" element={<Confidentialite />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/librairie-ia" element={<LibrairieIA />} />
              <Route path="/simulateur-ia" element={<SimulateurIAPage />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
