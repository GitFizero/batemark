import { motion } from "framer-motion";
import { Brain, Layers, Unplug, BarChart3 } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const problems = [
  {
    icon: Brain,
    title: "Confusion face à l'IA",
    description: "Tout le monde en parle, personne ne sait par où commencer. Les possibilités semblent infinies, mais concrètement, rien n'avance.",
  },
  {
    icon: Layers,
    title: "Outils qui s'empilent",
    description: "Un outil pour ci, un autre pour ça. Des abonnements qui s'accumulent sans vraie cohérence ni gain de productivité mesurable.",
  },
  {
    icon: Unplug,
    title: "Manque d'intégration",
    description: "Les solutions ne communiquent pas entre elles. Vos équipes passent leur temps à faire du copier-coller entre les plateformes.",
  },
  {
    icon: BarChart3,
    title: "Pas de gain mesurable",
    description: "Vous avez investi dans des outils mais impossible de quantifier le temps gagné ou l'impact réel sur votre chiffre d'affaires.",
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
            Le vrai <span className="text-gradient-copper">problème</span> avec l'IA en entreprise
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Vous reconnaissez-vous dans ces situations ?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium group hover:border-destructive/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-destructive/10 shrink-0">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground text-lg">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
