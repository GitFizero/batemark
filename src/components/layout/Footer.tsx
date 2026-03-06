import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "CGV", href: "/cgv" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-custom py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="BATEMARK" className="h-12 w-auto" />
            <p className="text-muted-foreground text-base max-w-xs text-center md:text-left">
              Consultant IA & automatisation pour TPE/PME. Intégration intelligente dans vos opérations existantes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-base text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-base text-muted-foreground">
            © {new Date().getFullYear()} BATEMARK. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
