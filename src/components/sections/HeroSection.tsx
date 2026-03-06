import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import montagneBg from "@/assets/montagne.svg";

const CAL_LINK = "https://cal.com/gaetan-batemark/15min";

const rotatingWords = ["acquisition", "process", "décisions", "opérations"];

export const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(wordTimer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={montagneBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-semibold text-base sm:text-xl mb-4 md:mb-6 tracking-wide uppercase"
          >
            IA & Automatisation pour TPE / PME
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight"
          >
            Automatisez votre{" "}
            <span className="relative inline-flex min-w-[120px] sm:min-w-[180px] md:min-w-[280px] lg:min-w-[340px] justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 30, opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -30, opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="text-gradient-copper"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            et regardez vos résultats décoller
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl md:text-3xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto"
          >
            J'implémente des systèmes IA sur-mesure pour les PME qui veulent générer plus, sans travailler plus.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                Réserver un appel découverte
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#cas-clients">
                Voir mes réalisations
              </a>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
