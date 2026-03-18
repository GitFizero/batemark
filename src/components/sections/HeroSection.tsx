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
    overlay: "bg-gradient-to-b from-background/70 via-background/60 to-background/80",
    textGradient: "text-gradient-mountain",
    btnClass: "hero-btn-mountain",
    btnOutlineClass: "hero-btn-outline-mountain",
    accentClass: "hero-accent-mountain",
  },
  {
    id: "wave",
    image: vagueBg,
    subtitle: "Pour ne pas être balayé par la vague de l'IA, apprenez à la surfer",
    overlay: "bg-gradient-to-b from-[#0a1628]/70 via-[#0f2847]/50 to-background/80",
    textGradient: "text-gradient-ocean",
    btnClass: "hero-btn-ocean",
    btnOutlineClass: "hero-btn-outline-ocean",
    accentClass: "hero-accent-ocean",
  },
  {
    id: "train",
    image: trainBg,
    subtitle: "Montez dans le train de l'IA pour ne pas rester à quai",
    overlay: "bg-gradient-to-b from-[#0a0e1a]/60 via-[#111b33]/50 to-background/80",
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

  // Progress bar animation
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
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Background images with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Surtitre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`font-semibold text-base sm:text-xl mb-4 md:mb-6 tracking-wide uppercase transition-colors duration-1000 ${slide.accentClass}`}
          >
            Consultant IA indépendant
          </motion.p>

          {/* H1 - stays the same */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight"
          >
            Intégrez l'IA dans votre entreprise
          </motion.h1>

          {/* Subtitle that changes with each slide */}
          <div className="h-[3.5rem] sm:h-[4rem] md:h-[4.5rem] mb-6 md:mb-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.id}
                initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold ${slide.textGradient}`}
              >
                {slide.subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="hero"
              size="xl"
              className={`group transition-all duration-1000 ${slide.btnClass}`}
              asChild
            >
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                Réserver un audit IA gratuit
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className={`transition-all duration-1000 ${slide.btnOutlineClass}`}
              asChild
            >
              <a href="#cas-clients">
                Voir mes réalisations
              </a>
            </Button>
          </motion.div>

          {/* Slide indicators + progress */}
          <div className="flex items-center justify-center gap-3 mt-10 md:mt-14">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { setCurrentSlide(i); setProgress(0); }}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-500 cursor-pointer"
                style={{ width: i === currentSlide ? 48 : 24 }}
                aria-label={`Slide ${i + 1}`}
              >
                <div className="absolute inset-0 bg-white/20 rounded-full" />
                {i === currentSlide && (
                  <div
                    className="absolute inset-y-0 left-0 bg-white/80 rounded-full"
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
