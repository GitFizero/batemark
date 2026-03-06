import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, ShieldCheck, Users } from "lucide-react";

const CAL_LINK = "https://cal.com/gaetan-batemark/30min";

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
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Prêt à intégrer l'IA{" "}
            <span className="text-gradient-copper">dans votre entreprise</span> ?
          </h2>
          <p className="text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Réservez un appel découverte de 30 minutes. On analyse ensemble vos process
            et je vous donne des premières pistes concrètes. Sans engagement.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-lg text-muted-foreground">
              <Clock className="w-6 h-6 text-primary" />
              <span>30 min d'appel découverte</span>
            </div>
            <div className="flex items-center gap-2 text-lg text-muted-foreground">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2 text-lg text-muted-foreground">
              <Users className="w-6 h-6 text-primary" />
              <span>5-6 clients max en simultané</span>
            </div>
          </div>

          <Button variant="hero" size="xl" className="group animate-pulse-glow" asChild>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Réserver mon appel découverte
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
