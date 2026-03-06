import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, FileText, TrendingUp } from "lucide-react";

const CAL_LINK = "https://cal.com/gaetan-batemark/15min";

export const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-copper/10 via-background to-copper-dark/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-copper/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-copper-dark/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Prêt à implémenter l'IA{" "}
            <span className="text-gradient-copper">dans votre entreprise</span> ?
          </h2>
          <p className="text-lg sm:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
            Réservez un appel découverte de 30 minutes. J'analyse vos process et vous propose
            un plan d'action concret — gratuit, sans engagement.
          </p>

          <Button variant="hero" size="xl" className="group animate-pulse-glow mb-8 md:mb-10" asChild>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Réserver mon appel découverte
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span>Appel gratuit de 30 min</span>
            </div>
            <div className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span>Plan d'action personnalisé</span>
            </div>
            <div className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span>Résultats mesurables dès le 1er mois</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
