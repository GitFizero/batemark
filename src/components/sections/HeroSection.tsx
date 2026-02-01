import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award, Zap } from "lucide-react";
import montagne from "@/assets/montagne.svg";

const stats = [
  { icon: Award, value: "+7 ans", label: "d'expérience" },
  { icon: TrendingUp, value: "+300", label: "campagnes en 2025" },
  { icon: Users, value: "97%", label: "de rétention client" },
  { icon: TrendingUp, value: "3.2x", label: "ROI moyen" },
];

const CAL_LINK = "https://cal.com/gaetan-batemark/15min";

// Calculate time until next Sunday midnight
const getTimeUntilSunday = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
  
  const nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + daysUntilSunday);
  nextSunday.setHours(23, 59, 59, 999);
  
  const diff = nextSunday.getTime() - now.getTime();
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds };
};

export const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilSunday());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilSunday());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src={montagne} 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Générez des{" "}
            <span className="text-gradient-copper">leads qualifiés</span>
            <br />
            pour votre entreprise locale
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            Expert en publicité digitale locale avec +7 ans d'expérience. 
            Accompagnement complet, statistiques claires, aucun engagement.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                Audit gratuit de 15 min
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#pricing">
                Découvrir l'offre
              </a>
            </Button>
          </motion.div>

          {/* Flash Offer Badge with Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex flex-col sm:flex-row items-center gap-3 px-5 py-3 rounded-2xl bg-card/80 border border-primary/30 backdrop-blur-sm mb-16"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold">Offre Flash -100€</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Expire dans</span>
              <div className="flex gap-1">
                <span className="bg-background px-2 py-1 rounded font-mono font-bold text-foreground">{timeLeft.days}j</span>
                <span className="bg-background px-2 py-1 rounded font-mono font-bold text-foreground">{String(timeLeft.hours).padStart(2, '0')}h</span>
                <span className="bg-background px-2 py-1 rounded font-mono font-bold text-foreground">{String(timeLeft.minutes).padStart(2, '0')}m</span>
                <span className="bg-background px-2 py-1 rounded font-mono font-bold text-foreground">{String(timeLeft.seconds).padStart(2, '0')}s</span>
              </div>
            </div>
          </motion.div>

          {/* Proof Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="card-premium text-center group hover:border-primary/30 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl md:text-3xl font-bold text-gradient-copper mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};