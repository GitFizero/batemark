import { motion } from "framer-motion";
import { Target, Cog, TrendingUp } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";
import bgImage from "@/assets/bg-2.svg";

const principles = [
  {
    icon: Target,
    title: "Identifier les frictions",
    description: "Repérer les tâches répétitives, chronophages, à faible valeur ajoutée dans vos process existants.",
  },
  {
    icon: Cog,
    title: "Automatiser avec précision",
    description: "Automatiser exactement ces tâches, sans tout réinventer. On part de ce qui existe déjà.",
  },
  {
    icon: TrendingUp,
    title: "Mesurer l'impact",
    description: "Intégrer l'IA là où elle crée un gain mesurable, pas là où elle impressionne.",
  },
];

export const PhilosophySection = () => {
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
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Mon <span className="text-gradient-copper">approche</span>
          </h2>
          <blockquote className="text-3xl md:text-4xl font-display italic text-foreground max-w-4xl mx-auto mb-6">
            "Avec l'IA, tout est possible.
            <br />
            <span className="text-gradient-copper">Mais ce n'est pas parce que tout est possible qu'il faut tout faire.</span>"
          </blockquote>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            L'IA ne doit pas s'ajouter au-dessus de votre organisation. Elle doit s'intégrer à l'intérieur.
            L'objectif est de rendre vos équipes plus efficaces, vos décisions mieux informées, vos opérations plus fluides.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-premium text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-4 rounded-2xl bg-primary/10 w-fit mx-auto mb-5">
                <principle.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{principle.title}</h3>
              <p className="text-muted-foreground text-lg">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
