import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

export const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
            Prêt à intégrer l'IA ?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-lg mx-auto">
            Appel gratuit de 30 minutes. On analyse vos process et on vous propose un plan d'action concret.
          </p>

          <Button variant="hero" size="lg" className="group" asChild>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Réserver un audit gratuit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
