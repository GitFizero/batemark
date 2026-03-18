import { motion } from "framer-motion";
import { Search, ListChecks, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit",
    description: "On cartographie vos process et on identifie les leviers IA.",
    duration: "Semaine 1",
  },
  {
    icon: ListChecks,
    number: "02",
    title: "Stratégie",
    description: "Plan d'action, outils à connecter et KPIs à suivre.",
    duration: "Semaine 2",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Déploiement",
    description: "Livraison des automatisations et mise en production.",
    duration: "Semaines 3-6",
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Optimisation",
    description: "Suivi des performances et ajustements continus.",
    duration: "En continu",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-[#0a0a0a]">
            La méthode
          </h2>
          <p className="text-sm text-[#0a0a0a]/50">
            4 étapes pour intégrer l'IA dans votre activité.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0a0a0a]/5 mb-3">
                <step.icon className="w-5 h-5 text-[#c4956e]" />
              </div>
              <span className="block text-[10px] font-semibold text-[#c4956e] uppercase tracking-wider mb-1.5">
                {step.duration}
              </span>
              <h3 className="text-sm font-semibold mb-1 text-[#0a0a0a]">{step.title}</h3>
              <p className="text-xs text-[#0a0a0a]/50 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
