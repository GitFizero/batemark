import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap } from "lucide-react";

const CAL_LINK = "https://cal.com/gaetan-batemark/15min";

const features = [
  "Accompagnement complet A à Z",
  "Création et gestion des campagnes Meta Ads",
  "Veille concurrentielle locale",
  "Mise en place du tracking complet",
  "Optimisation continue des performances",
  "Conseils lead management",
  "Reporting hebdomadaire détaillé",
  "Support réactif sous 24h",
  "Aucun engagement - Résiliation libre",
];

export const PricingSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Une offre <span className="text-gradient-copper">transparente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un tarif clair, sans surprise, sans engagement
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card-premium border-copper/30 relative overflow-hidden">
            {/* Promo Badge */}
            <div className="absolute top-0 right-0">
              <div className="gradient-copper text-background px-6 py-2 font-bold text-sm">
                <Zap className="w-4 h-4 inline mr-1" />
                -26% Nouvelle Année
              </div>
            </div>

            <div className="pt-12 pb-8 px-8 text-center border-b border-border">
              {/* Pricing */}
              <div className="mb-4">
                <span className="text-2xl text-muted-foreground line-through">390€</span>
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-6xl font-bold text-gradient-copper">280€</span>
                <span className="text-xl text-muted-foreground">/mois</span>
              </div>
              <p className="text-muted-foreground">
                Hors frais publicitaires Meta
              </p>
              
              <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Budget publicitaire recommandé :</strong><br />
                  20 à 30€/jour • Soit 1 500 à 2 000€/mois tout compris
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-copper flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-background" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="xl" className="w-full group" asChild>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                  Réserver mon audit gratuit
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Offre valable jusqu'à fin janvier
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
