import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const CAL_LINK = "https://cal.com/gaetan-batemark/15min";

const rotatingWords = ["process", "décisions", "opérations", "équipes"];

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
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary font-semibold text-xl mb-6 tracking-wide uppercase"
            >
              IA & Automatisation pour TPE / PME
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              L'IA au service de vos{" "}
              <span className="relative inline-flex min-w-[180px] md:min-w-[280px] lg:min-w-[340px] justify-center lg:justify-start">
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
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0"
            >
              J'aide les entreprises à ne pas être balayées par la vague de l'IA, et à apprendre à la surfer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" className="group" asChild>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                  Réserver un appel découverte
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#services">
                  Découvrir les services
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <img
              src={heroIllustration}
              alt="Automatisation et IA pour entreprises"
              className="w-full max-w-lg rounded-3xl shadow-2xl animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
