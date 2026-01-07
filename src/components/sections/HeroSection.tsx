import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";

const stats = [
  { icon: Award, value: "+7 ans", label: "d'expérience" },
  { icon: TrendingUp, value: "+300", label: "campagnes en 2025" },
  { icon: Users, value: "97%", label: "de rétention client" },
  { icon: TrendingUp, value: "3.2x", label: "ROI moyen" },
];

const CAL_LINK = "https://cal.com/gaetan-batemark/15min";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-copper/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl" />
      
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
            Expert Meta Ads avec +7 ans d'expérience. Accompagnement complet, 
            statistiques claires, aucun engagement.
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

          {/* Promo Badge - Moved below buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper/10 border border-copper/30 mb-16"
          >
            <span className="text-copper font-semibold">-26%</span>
            <span className="text-muted-foreground">Offre Nouvelle Année — valable jusqu'à fin janvier</span>
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
                className="card-premium text-center group hover:border-copper/30 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-copper mx-auto mb-3 group-hover:scale-110 transition-transform" />
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
