import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AmbientOrb } from "@/components/ui/AmbientGlow";

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

export const CTASection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 relative overflow-hidden">
      <AmbientOrb color="copper" size="lg" position="center" intensity={0.07} />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
            Réserver un audit gratuit
          </h2>
          <p className="text-sm text-white/55 mb-8">
            En 30 minutes, identifiez les opportunités concrètes
            d'automatisation et de croissance pour votre entreprise.
          </p>

          <Button
            size="default"
            className="group rounded-full px-8 py-3 text-sm bg-[#c4956e] text-white hover:bg-[#c4956e]/90"
            asChild
          >
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Réserver mon créneau
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <p className="text-[11px] text-white/40 mt-4">
            Gratuit • Sans engagement • 30 min
          </p>
        </motion.div>
      </div>
    </section>
  );
};
