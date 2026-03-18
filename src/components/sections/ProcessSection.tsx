import { motion } from "framer-motion";
import { Search, ListChecks, Rocket, RefreshCw } from "lucide-react";

const steps = [
  { icon: Search, title: "Audit", week: "S1" },
  { icon: ListChecks, title: "Stratégie", week: "S2" },
  { icon: Rocket, title: "Déploiement", week: "S3-6" },
  { icon: RefreshCw, title: "Optimisation", week: "∞" },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-[hsl(30_15%_96%)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
            La méthode
          </h2>
          <p className="text-sm text-muted-foreground">
            4 étapes pour intégrer l'IA.
          </p>
        </motion.div>

        <div className="flex items-start justify-center gap-6 sm:gap-10 md:gap-14 max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-11 h-11 rounded-2xl bg-primary/8 flex items-center justify-center mb-3">
                <step.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold mb-0.5">{step.title}</h3>
              <span className="text-[10px] text-muted-foreground font-medium">{step.week}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
