import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Librairie IA", href: "/librairie-ia" },
  { label: "Simulateur", href: "/simulateur-ia" },
];

const expertiseLinks = [
  { label: "Consultant n8n", href: "/consultant-n8n" },
  { label: "Consultant Make", href: "/consultant-make" },
  { label: "Consultant Zapier", href: "/consultant-zapier" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "CGV", href: "/cgv" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/6" role="contentinfo">
      <div className="container-custom py-10 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src={logo} alt="BATEMARK" className="h-7 w-auto brightness-0 invert" width={148} height={28} loading="lazy" />
            </Link>
            <a
              href="https://www.linkedin.com/in/gaetanfizero/"
              target="_blank"
              rel="noopener noreferrer me"
              className="text-white/40 hover:text-[#c4956e] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.malt.fr/profile/gaetanfizero"
              target="_blank"
              rel="noopener noreferrer me"
              className="text-[11px] text-white/40 hover:text-[#c4956e] transition-colors uppercase tracking-wider"
              aria-label="Profil Malt"
            >
              Malt
            </a>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center gap-5" aria-label="Footer">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <span className="hidden sm:inline text-white/10">|</span>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Expertise links — internal SEO mesh */}
        <nav
          aria-label="Expertise"
          className="mt-6 pt-6 border-t border-white/5 flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          <span className="text-[11px] uppercase tracking-wider text-white/30">
            Expertise outils
          </span>
          {expertiseLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-[11px] text-white/25 mt-6">
          © {new Date().getFullYear()} BATEMARK — Gaëtan Fizero. Consultant IA & Automatisation.
        </p>
      </div>
    </footer>
  );
};
