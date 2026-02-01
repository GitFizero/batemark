import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, ShieldCheck } from "lucide-react";

const CAL_LINK = "https://cal.com/gaetan-batemark/15min";

export const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-copper/10 via-background to-gold/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-copper/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à générer des{" "}
            <span className="text-gradient-copper">leads qualifiés</span> ?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Réservez votre audit gratuit de 15 minutes et découvrez comment 
            la publicité digitale peut transformer votre acquisition client.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-copper" />
              <span>15 min d'audit offert</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="w-5 h-5 text-copper" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-5 h-5 text-copper" />
              <span>Réponse sous 24h</span>
            </div>
          </div>

          <Button variant="hero" size="xl" className="group animate-pulse-glow" asChild>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Réserver mon audit gratuit
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
