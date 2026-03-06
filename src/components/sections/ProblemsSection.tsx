import { motion } from "framer-motion";
import { Clock, Target, BarChart3, HelpCircle } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const problems = [
  {
    icon: Clock,
    title: "Tâches répétitives",
    description: "Vous perdez des heures sur des tâches répétitives que l'IA pourrait faire à votre place.",
  },
  {
    icon: Target,
    title: "Acquisition manuelle",
    description: "Votre acquisition repose sur des actions manuelles, imprévisibles et non scalables.",
  },
  {
    icon: BarChart3,
    title: "Pilotage à l'aveugle",
    description: "Vous pilotez à l'aveugle — sans dashboard clair pour prendre les bonnes décisions.",
  },
  {
    icon: HelpCircle,
    title: "Par où commencer ?",
    description: "Vous voyez vos concurrents automatiser, mais vous ne savez pas par où commencer.",
  },
];

export const ProblemsSection = () => {
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Le vrai <span className="text-gradient-copper">problème</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-premium group hover:border-destructive/30 transition-all duration-300 flex items-start gap-5"
            >
              <div className="p-3 sm:p-4 rounded-2xl bg-destructive/10 shrink-0">
                <problem.icon className="w-6 h-6 sm:w-8 sm:h-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-semibold mb-1">{problem.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
