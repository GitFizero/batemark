import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Méthode", href: "/#methode" },
  { label: "Réalisations", href: "/#cas-clients" },
  { label: "Librairie IA", href: "/librairie-ia" },
  { label: "Blog", href: "/blog" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // On homepage before scroll: white text on dark hero
  const isTransparentDark = isHome && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="BATEMARK"
              className={`h-8 sm:h-9 w-auto transition-all duration-300 ${isTransparentDark ? "brightness-0 invert" : ""}`}
              width={148}
              height={36}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors text-sm font-medium ${
                  isTransparentDark
                    ? "text-white/80 hover:text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={location.pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <ContactFormDialog
              trigger={
                <Button
                  variant={isTransparentDark ? "outline" : "hero"}
                  size="default"
                  className={`text-sm ${
                    isTransparentDark
                      ? "border-white/30 text-white hover:bg-white/10 bg-transparent"
                      : ""
                  }`}
                >
                  Demander un audit
                </Button>
              }
            />
          </div>

          <button
            className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className={`w-5 h-5 transition-colors ${isTransparentDark ? "text-white" : ""}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="right" className="w-[80vw] max-w-xs bg-background border-l border-border p-0 flex flex-col">
          <SheetHeader className="p-5 pb-3 border-b border-border">
            <SheetTitle className="text-left">
              <img src={logo} alt="BATEMARK" className="h-8 w-auto" width={148} height={32} />
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col flex-1 p-5 gap-1" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.label}>
                <a
                  href={link.href}
                  className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors min-h-[44px] flex items-center ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:bg-muted"
                  }`}
                  aria-current={location.pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </a>
              </SheetClose>
            ))}
          </nav>

          <div className="p-5 pt-0 mt-auto">
            <ContactFormDialog
              trigger={
                <Button variant="hero" size="default" className="w-full min-h-[44px] text-sm">
                  Demander un audit
                </Button>
              }
            />
          </div>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
};
