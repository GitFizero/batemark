import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import montagneBg from "@/assets/montagne.svg";
import vagueBg from "@/assets/Vague.svg";
import trainBg from "@/assets/Train.png";

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

const SLIDE_DURATION = 4000;

interface Slide {
  id: string;
  image: string;
  tagline: string;
}

const slides: Slide[] = [
  {
    id: "mountain",
    image: montagneBg,
    tagline: "La puissance de l'IA pour vous amener au sommet",
  },
  {
    id: "wave",
    image: vagueBg,
    tagline: "Pour ne pas être balayé par la vague de l'IA, apprenez à la surfer",
  },
  {
    id: "train",
    image: trainBg,
    tagline: "Montez dans le train de l'IA pour ne pas rester à quai",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(elapsed / SLIDE_DURATION, 1);
      setProgress(p);
      if (p < 1) requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* All background images stacked - opacity controlled individually for smooth crossfade */}
      {slides.map((s, i) => (
        <motion.div
          key={s.id}
          className="absolute inset-0"
          animate={{ opacity: i === currentSlide ? 1 : 0 }}
          transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Permanent dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white/70 text-xs tracking-[0.25em] uppercase font-medium mb-6"
        >
          Consultant IA & Automatisation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-white leading-[1.15] mb-5"
        >
          Intégrez l'IA dans
          <br />
          votre entreprise
        </motion.h1>

        {/* Rotating tagline */}
        <div className="h-12 sm:h-8 mb-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={slide.id}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-white/60 text-sm sm:text-base font-medium"
            >
              {slide.tagline}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 rounded-full px-8 py-3 text-sm font-medium group"
            asChild
          >
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Réserver un audit gratuit
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* Slide indicators */}
        <div className="flex items-center justify-center gap-2 mt-14">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { setCurrentSlide(i); setProgress(0); }}
              className="relative h-[3px] rounded-full overflow-hidden transition-all duration-500 cursor-pointer"
              style={{ width: i === currentSlide ? 32 : 16 }}
              aria-label={`Slide ${i + 1}`}
            >
              <div className="absolute inset-0 bg-white/25 rounded-full" />
              {i === currentSlide && (
                <div
                  className="absolute inset-y-0 left-0 bg-white/70 rounded-full"
                  style={{ width: `${progress * 100}%` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
