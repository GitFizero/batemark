import { motion } from "framer-motion";
import { Brain, Layers, Unplug, BarChart3 } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";
import problemIllustration from "@/assets/problem-illustration.png";

const problems = [
  {
    icon: Brain,
    title: "Confusion face à l'IA",
    description: "Tout le monde en parle, personne ne sait par où commencer.",
  },
  {
    icon: Layers,
    title: "Outils qui s'empilent",
    description: "Des abonnements qui s'accumulent sans vraie cohérence.",
  },
  {
    icon: Unplug,
    title: "Manque d'intégration",
    description: "Les solutions ne communiquent pas entre elles.",
  },
  {
    icon: BarChart3,
    title: "Pas de gain mesurable",
    description: "Impossible de quantifier le temps réellement gagné.",
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Le vrai <span className="text-gradient-copper">problème</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={problemIllustration}
              alt="Confusion face à l'IA en entreprise"
              className="w-full max-w-sm"
            />
          </motion.div>

          <div className="grid gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-premium group hover:border-destructive/30 transition-all duration-300 flex items-center gap-5"
              >
                <div className="p-4 rounded-2xl bg-destructive/10 shrink-0">
                  <problem.icon className="w-8 h-8 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{problem.title}</h3>
                  <p className="text-muted-foreground text-lg">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
