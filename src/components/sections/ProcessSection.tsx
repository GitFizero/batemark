import { motion } from "framer-motion";
import { Search, ListChecks, Rocket, RefreshCw } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";
import bgImage from "@/assets/bg-3.svg";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit & diagnostic",
    description: "On analyse vos outils et vos process existants.",
    duration: "Semaine 1",
  },
  {
    icon: ListChecks,
    number: "02",
    title: "Plan d'action",
    description: "Priorisation par impact et faisabilité rapide.",
    duration: "Semaine 2",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Exécution",
    description: "Mise en place concrète, en parallèle de votre équipe.",
    duration: "Semaines 3-6",
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Suivi & itération",
    description: "Ajustements et montée en compétences de votre équipe.",
    duration: "En continu",
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
        </motion.div>

        {/* Timeline visual */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-center gap-6 mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="card-premium group hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3 justify-start">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-primary/20 items-center justify-center border-2 border-primary/40 z-10">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Spacer */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
