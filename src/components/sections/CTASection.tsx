import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, FileText, TrendingUp, Users, CheckCircle } from "lucide-react";

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

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
            Réservez votre{" "}
            <span className="text-gradient-copper">audit IA gratuit</span> —
            hôtellerie, BTP, e-commerce, santé et plus
          </h2>
          <p className="text-lg sm:text-2xl text-muted-foreground mb-4 md:mb-6 max-w-3xl mx-auto">
            Que vous soyez dans l'hôtellerie-restauration, le BTP, l'immobilier,
            le e-commerce, la santé, le juridique, la beauté ou tout autre secteur,
            notre consultant IA analyse vos process et vous propose un plan
            d'action concret pour intégrer l'intelligence artificielle —
            gratuitement, en 30 minutes, sans engagement.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-8 md:mb-10">
            <div className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="font-semibold">Plus de 15 entreprises accompagnées</span>
            </div>
            <div className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="font-semibold">Résultats dès le 1er mois</span>
            </div>
          </div>

          <Button variant="hero" size="xl" className="group animate-pulse-glow mb-8 md:mb-10" asChild>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Réserver mon audit IA gratuit
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
              <span>ROI mesurable garanti</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
