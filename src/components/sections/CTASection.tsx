import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

export const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#0a0a0a]">
            Prêt à intégrer l'IA ?
          </h2>
          <p className="text-sm text-[#0a0a0a]/50 mb-6">
            Appel gratuit de 30 min. Plan d'action concret.
          </p>

          <Button size="default" className="group rounded-full px-6 text-sm bg-[#0a0a0a] text-white hover:bg-[#0a0a0a]/90" asChild>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Réserver un audit
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
