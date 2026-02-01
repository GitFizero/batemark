import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap, Clock, Star } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const CAL_LINK = "https://cal.com/gaetan-batemark/15min";

const baseFeatures = [
  "Accompagnement complet A à Z",
  "Création et gestion des campagnes publicitaires",
  "Veille concurrentielle locale",
  "Mise en place du tracking complet",
  "Optimisation continue des performances",
  "Conseils lead management",
  "Reporting hebdomadaire détaillé",
  "Support réactif sous 24h",
];

const bonusFeatures = [
  "Automation Marketing",
  "Point Stratégique mensuel",
];

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

export const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilSunday());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilSunday());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Fade Effects */}
      <SectionFade position="top" />
      <SectionFade position="bottom" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Des offres <span className="text-gradient-copper">transparentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des tarifs clairs, sans surprise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Offer 1 - No Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-premium border-copper/30 relative overflow-hidden h-full flex flex-col">
              {/* Flash Badge with Timer */}
              <div className="absolute top-0 right-0">
                <div className="gradient-copper text-background px-4 py-2 font-bold text-sm rounded-bl-xl">
                  <Zap className="w-4 h-4 inline mr-1" />
                  Offre Flash -100€
                </div>
              </div>

              <div className="pt-14 pb-6 px-6 text-center border-b border-border">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-copper" />
                  <span className="text-sm text-muted-foreground font-medium">Sans engagement</span>
                </div>
                
                {/* Timer */}
                <div className="flex justify-center gap-1 mb-4">
                  <span className="bg-muted px-2 py-1 rounded text-xs font-mono font-bold">{timeLeft.days}j</span>
                  <span className="bg-muted px-2 py-1 rounded text-xs font-mono font-bold">{String(timeLeft.hours).padStart(2, '0')}h</span>
                  <span className="bg-muted px-2 py-1 rounded text-xs font-mono font-bold">{String(timeLeft.minutes).padStart(2, '0')}m</span>
                  <span className="bg-muted px-2 py-1 rounded text-xs font-mono font-bold">{String(timeLeft.seconds).padStart(2, '0')}s</span>
                </div>

                {/* Pricing */}
                <div className="mb-2">
                  <span className="text-xl text-muted-foreground line-through">490€</span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-gradient-copper">390€</span>
                  <span className="text-lg text-muted-foreground">/mois</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Hors frais publicitaires
                </p>
              </div>

              {/* Features */}
              <div className="p-6 flex-grow">
                <ul className="space-y-3 mb-6">
                  {baseFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full gradient-copper flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-background" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <span className="text-sm">Aucun engagement - Résiliation libre</span>
                  </li>
                </ul>

                <Button variant="hero" size="lg" className="w-full group" asChild>
                  <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                    Réserver mon audit gratuit
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Offer 2 - 3 Months Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card-premium relative overflow-hidden h-full flex flex-col border-2 border-copper/50">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-copper text-background px-4 py-2 font-bold text-sm rounded-bl-xl">
                  <Star className="w-4 h-4 inline mr-1" />
                  Recommandé
                </div>
              </div>

              <div className="pt-14 pb-6 px-6 text-center border-b border-border">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-sm text-copper font-semibold">Engagement 3 mois</span>
                </div>

                {/* Pricing */}
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-gradient-copper">350€</span>
                  <span className="text-lg text-muted-foreground">/mois</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Hors frais publicitaires
                </p>
                <div className="p-3 rounded-xl bg-muted/50 border border-border">
                  <p className="text-xs text-muted-foreground">
                    Paiement trimestriel de <span className="font-bold text-foreground">1 050€</span>
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="p-6 flex-grow">
                <ul className="space-y-3 mb-6">
                  {baseFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full gradient-copper flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-background" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                  {/* Bonus Features */}
                  {bonusFeatures.map((feature, index) => (
                    <li key={`bonus-${index}`} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-copper flex items-center justify-center shrink-0">
                        <Star className="w-3 h-3 text-background" />
                      </div>
                      <span className="text-sm text-copper font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="hero" size="lg" className="w-full group" asChild>
                  <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                    Réserver mon audit gratuit
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Budget Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mt-12 text-center"
        >
          <div className="p-6 rounded-2xl bg-muted/50 border border-border">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Budget publicitaire recommandé :</strong><br />
              20 à 30€/jour • Soit 1 500 à 2 000€/mois tout compris
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
