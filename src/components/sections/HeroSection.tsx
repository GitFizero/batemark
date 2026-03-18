import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import montagneBg from "@/assets/montagne.svg";
import vagueBg from "@/assets/Vague.svg";
import trainBg from "@/assets/Train.png";

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

const SLIDE_DURATION = 6000;

interface Slide {
  id: string;
  image: string;
  subtitle: string;
  overlay: string;
  textGradient: string;
  btnClass: string;
  btnOutlineClass: string;
  accentClass: string;
}

const slides: Slide[] = [
  {
    id: "mountain",
    image: montagneBg,
    subtitle: "La puissance de l'IA pour vous amener au sommet",
    overlay: "bg-gradient-to-b from-white/80 via-white/70 to-white/85",
    textGradient: "text-gradient-mountain",
    btnClass: "hero-btn-mountain",
    btnOutlineClass: "hero-btn-outline-mountain",
    accentClass: "hero-accent-mountain",
  },
  {
    id: "wave",
    image: vagueBg,
    subtitle: "Pour ne pas être balayé par la vague de l'IA, apprenez à la surfer",
    overlay: "bg-gradient-to-b from-[#e8f0f8]/80 via-[#d0e0f0]/70 to-white/85",
    textGradient: "text-gradient-ocean",
    btnClass: "hero-btn-ocean",
    btnOutlineClass: "hero-btn-outline-ocean",
    accentClass: "hero-accent-ocean",
  },
  {
    id: "train",
    image: trainBg,
    subtitle: "Montez dans le train de l'IA pour ne pas rester à quai",
    overlay: "bg-gradient-to-b from-[#f5efe8]/80 via-[#ede5da]/70 to-white/85",
    textGradient: "text-gradient-train",
    btnClass: "hero-btn-train",
    btnOutlineClass: "hero-btn-outline-train",
    accentClass: "hero-accent-train",
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
    <section className="relative min-h-[85vh] flex items-center py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background images with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${slide.overlay}`} />
        </motion.div>
      </AnimatePresence>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`font-medium text-sm sm:text-base mb-4 tracking-widest uppercase transition-colors duration-1000 ${slide.accentClass}`}
          >
            Consultant IA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-[1.1] text-foreground"
          >
            Intégrez l'IA dans votre entreprise
          </motion.h1>

          {/* Rotating subtitle */}
          <div className="h-[2.5rem] sm:h-[3rem] mb-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.id}
                initial={{ y: 16, opacity: 0, filter: "blur(6px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -16, opacity: 0, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className={`text-base sm:text-lg md:text-xl font-medium ${slide.textGradient}`}
              >
                {slide.subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              variant="hero"
              size="lg"
              className={`group transition-all duration-700 ${slide.btnClass}`}
              asChild
            >
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                Réserver un audit gratuit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className={`transition-all duration-700 ${slide.btnOutlineClass}`}
              asChild
            >
              <a href="#cas-clients">
                Voir les réalisations
              </a>
            </Button>
          </motion.div>

          {/* Slide indicators */}
          <div className="flex items-center justify-center gap-2.5 mt-12">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { setCurrentSlide(i); setProgress(0); }}
                className="relative h-1 rounded-full overflow-hidden transition-all duration-500 cursor-pointer"
                style={{ width: i === currentSlide ? 40 : 20 }}
                aria-label={`Slide ${i + 1}`}
              >
                <div className="absolute inset-0 bg-foreground/15 rounded-full" />
                {i === currentSlide && (
                  <div
                    className="absolute inset-y-0 left-0 bg-foreground/50 rounded-full"
                    style={{ width: `${progress * 100}%` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
