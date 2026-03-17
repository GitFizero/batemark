import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
  { label: "Méthode Batemark", href: "/#methode" },
  { label: "Librairie IA", href: "/librairie-ia" },
  { label: "Secteurs", href: "/#secteurs" },
  { label: "Blog", href: "/blog" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="BATEMARK — Consultant IA & Automatisation" className="h-10 sm:h-12 w-auto" width={148} height={48} />
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium"
                aria-current={location.pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <ContactFormDialog
              trigger={
                <Button variant="hero" size="lg">
                  Demander un audit
                </Button>
              }
            />
          </div>

          {/* Mobile menu trigger */}
          <button
            className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Sheet Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="right" className="w-[85vw] max-w-sm bg-background border-l border-border p-0 flex flex-col">
          <SheetHeader className="p-6 pb-4 border-b border-border">
            <SheetTitle className="text-left">
              <img src={logo} alt="BATEMARK" className="h-10 w-auto" width={148} height={40} />
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col flex-1 p-6 gap-2" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.label}>
                <a
                  href={link.href}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-colors min-h-[48px] flex items-center ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-muted"
                  }`}
                  aria-current={location.pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </a>
              </SheetClose>
            ))}
          </nav>

          <div className="p-6 pt-0 mt-auto">
            <ContactFormDialog
              trigger={
                <Button variant="hero" size="lg" className="w-full min-h-[52px] text-base">
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
