import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Librairie IA", href: "/librairie-ia" },
  { label: "Simulateur", href: "/simulateur-ia" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "CGV", href: "/cgv" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border" role="contentinfo">
      <div className="container-custom py-10 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src={logo} alt="BATEMARK" className="h-7 w-auto" width={148} height={28} loading="lazy" />
            </Link>
            <a
              href="https://www.linkedin.com/in/gaetanfizero/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center gap-5" aria-label="Footer">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <span className="hidden sm:inline text-border">|</span>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="text-[11px] text-muted-foreground mt-6">
          © {new Date().getFullYear()} BATEMARK — Gaëtan Fizero. Consultant IA & Automatisation.
        </p>
      </div>
    </footer>
  );
};
