import { motion } from "framer-motion";
import { Search, ListChecks, Rocket, RefreshCw } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";
import bgImage from "@/assets/bg-3.svg";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit & diagnostic",
    description: "Analyse de vos outils, process et flux existants. Identification des frictions et opportunités prioritaires.",
  },
  {
    icon: ListChecks,
    number: "02",
    title: "Plan d'action priorisé",
    description: "Sélection des chantiers selon leur impact potentiel et leur faisabilité rapide. On ne fait pas tout en même temps.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Exécution",
    description: "Mise en place concrète, en parallèle de votre équipe, sans perturber les opérations courantes.",
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Suivi & itération",
    description: "Reporting régulier, ajustements, et montée en compétences progressive de l'équipe interne.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <SectionFade position="top" />
      <SectionFade position="bottom" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Comment ça <span className="text-gradient-copper">marche</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement structuré, en retainer mensuel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="card-premium text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-gradient-copper mb-4">{step.number}</div>
              <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                <step.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
