import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-white">
            La méthode
          </h2>
          <p className="text-sm text-white/55">
            4 étapes pour intégrer l'IA dans votre activité.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card p-5 text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#c4956e]/10 border border-[#c4956e]/15 mb-3">
                <step.icon className="w-4 h-4 text-[#c4956e]" />
              </div>
              <span className="block text-[10px] font-semibold text-[#c4956e]/70 uppercase tracking-wider mb-1.5">
                {step.duration}
              </span>
              <h3 className="text-sm font-semibold mb-1 text-white">{step.title}</h3>
              <p className="text-xs text-white/55 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
