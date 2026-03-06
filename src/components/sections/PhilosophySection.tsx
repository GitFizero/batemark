import { motion } from "framer-motion";
import { Target, Cog, TrendingUp, ArrowDown } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";
import bgImage from "@/assets/bg-2.svg";

const principles = [
  {
    icon: Target,
    title: "Identifier",
    description: "Les tâches répétitives et chronophages dans vos process.",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: Cog,
    title: "Automatiser",
    description: "Précisément ces tâches, sans tout réinventer.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TrendingUp,
    title: "Mesurer",
    description: "L'impact réel sur votre productivité et votre CA.",
    color: "bg-success/10 text-success",
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
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8">
            Mon <span className="text-gradient-copper">approche</span>
          </h2>
          <blockquote className="text-xl sm:text-3xl md:text-4xl font-display italic text-foreground max-w-4xl mx-auto mb-4">
            "Tout est possible avec l'IA.
            <br />
            <span className="text-gradient-copper">Mais tout faire n'est pas la réponse.</span>"
          </blockquote>
        </motion.div>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {principles.map((principle, index) => (
            <div key={principle.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="card-premium flex items-center gap-5 group hover:border-primary/30 transition-all duration-300"
              >
                <div className={`p-3 sm:p-4 rounded-2xl shrink-0 ${principle.color}`}>
                  <principle.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">Étape {index + 1}</span>
                  <h3 className="text-lg sm:text-2xl font-bold">{principle.title}</h3>
                  <p className="text-muted-foreground text-base sm:text-lg">{principle.description}</p>
                </div>
              </motion.div>
              {index < principles.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-6 h-6 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
