import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionFade } from "@/components/ui/SectionFade";

export const SimulateurSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <SectionFade position="top" />
      <SectionFade position="bottom" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Quelle stratégie IA pour{" "}
            <span className="text-gradient-copper">votre entreprise</span> ?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Répondez à 5 questions en 2 minutes. On vous recommande une stratégie
            + les outils adaptés à votre activité.
          </p>
          <Button variant="hero" size="xl" className="group" asChild>
            <a href="/simulateur-ia">
              Lancer le simulateur
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
