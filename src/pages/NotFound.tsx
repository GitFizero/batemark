import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page introuvable"
        description="La page que vous recherchez n'existe pas ou a été déplacée. Retrouvez nos services IA & automatisation sur la page d'accueil."
        noindex
      />
      <Header />
      <main id="main-content" className="flex min-h-screen items-center justify-center bg-background pt-20">
        <div className="text-center px-4 max-w-lg">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <p className="mb-2 text-2xl font-semibold text-foreground">Page introuvable</p>
          <p className="mb-8 text-muted-foreground">
            La page que vous recherchez n'existe pas ou a été déplacée. Voici quelques liens utiles :
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity min-h-[44px]"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              Retour à l'accueil
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors min-h-[44px]"
            >
              Consulter le blog
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link to="/librairie-ia" className="hover:text-primary transition-colors">Librairie IA</Link>
            <span>·</span>
            <Link to="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
