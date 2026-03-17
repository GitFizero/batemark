import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/logo.svg";

const sectorLinks = [
  { label: "IA Hôtellerie & Restauration", href: "/blog/ia-hotellerie-restauration" },
  { label: "IA Restaurant", href: "/blog/ia-restaurant-intelligence-artificielle" },
  { label: "IA Agence immobilière", href: "/blog/ia-agence-immobiliere" },
  { label: "IA E-commerce", href: "/blog/ia-e-commerce" },
  { label: "IA Artisan & BTP", href: "/blog/ia-artisan-automatisation" },
  { label: "IA Cabinet comptable", href: "/blog/ia-cabinet-comptable" },
  { label: "IA Avocat", href: "/blog/ia-avocat-cabinet" },
  { label: "IA Médecin", href: "/blog/ia-medecin-cabinet-sante" },
  { label: "IA Salon de coiffure", href: "/blog/ia-salon-coiffure-beaute" },
  { label: "IA Spa & Bien-être", href: "/blog/ia-spa-centre-bien-etre" },
];

const useCaseLinks = [
  { label: "Automatiser la prospection B2B", href: "/blog/automatiser-prospection-b2b-ia" },
  { label: "Chatbot IA conversion", href: "/blog/chatbot-ia-site-web-conversion" },
  { label: "Automatiser le service client", href: "/blog/ia-automatiser-service-client" },
  { label: "Gestion de stock IA", href: "/blog/ia-gestion-stock-automatique" },
  { label: "Tunnel de vente automatisé", href: "/blog/ia-tunnel-vente-automatise" },
  { label: "Avis Google automatisés", href: "/blog/automatiser-avis-google-ia" },
  { label: "Reporting IA", href: "/blog/ia-automatiser-reporting" },
  { label: "Contenu marketing IA", href: "/blog/ia-contenu-marketing-automatise" },
  { label: "Recrutement IA", href: "/blog/ia-recrutement-pme" },
  { label: "Onboarding employé IA", href: "/blog/ia-onboarding-employe" },
];

const resourceLinks = [
  { label: "Blog IA & Automatisation", href: "/blog" },
  { label: "Librairie d'outils IA", href: "/librairie-ia" },
  { label: "Simulateur IA", href: "/simulateur-ia" },
  { label: "Formation IA entreprise", href: "/blog/formation-intelligence-artificielle" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "CGV", href: "/cgv" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border" role="contentinfo">
      <div className="container-custom py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/">
              <img src={logo} alt="BATEMARK — Consultant IA & Automatisation" className="h-10 sm:h-12 w-auto mb-4" width={148} height={48} loading="lazy" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-4">
              Consultant spécialisé en intégration de l'IA et automatisation des process pour TPE, PME et indépendants en France. Hôtellerie, restauration, immobilier, BTP, e-commerce, santé et plus.
            </p>
            <div className="flex items-center gap-4">
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

          {/* IA par secteur */}
          <nav aria-label="IA par secteur d'activité">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">IA par secteur</h3>
            <ul className="space-y-2">
              {sectorLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Cas d'usage */}
          <nav aria-label="Cas d'usage IA">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Cas d'usage</h3>
            <ul className="space-y-2">
              {useCaseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Ressources & Légal */}
          <div>
            <nav aria-label="Ressources">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Ressources</h3>
              <ul className="space-y-2 mb-8">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Informations légales">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Légal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar with additional SEO text */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center mb-4">
            BATEMARK accompagne les professionnels de l'hôtellerie, la restauration, l'immobilier, le BTP, le e-commerce, la santé, le juridique et bien d'autres secteurs dans l'intégration de l'intelligence artificielle et l'automatisation de leurs process.
          </p>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} BATEMARK — Gaëtan Fizero. Tous droits réservés. Consultant IA & Automatisation en France.
          </p>
        </div>
      </div>
    </footer>
  );
};
