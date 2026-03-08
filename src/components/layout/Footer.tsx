import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/logo.svg";

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "CGV", href: "/cgv" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-custom py-10 md:py-12 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="BATEMARK" className="h-10 sm:h-12 w-auto" width={148} height={48} loading="lazy" />
            <p className="text-muted-foreground text-sm sm:text-base max-w-xs text-center md:text-left">
              Consultant IA & automatisation pour TPE/PME. Intégration intelligente dans vos opérations existantes.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/gaetanfizero/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Profil LinkedIn de Gaëtan Fizero"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6" aria-label="Liens utiles">
              <Link to="/blog" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center">
                Blog IA & Automatisation
              </Link>
              <Link to="/librairie-ia" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center">
                Librairie d'outils IA
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-base text-muted-foreground">
            © {new Date().getFullYear()} BATEMARK. Tous droits réservés. — Consultant IA & Automatisation en France.
          </p>
        </div>
      </div>
    </footer>
  );
};
