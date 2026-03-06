import { motion } from "framer-motion";
import { Target, Cog, TrendingUp, ArrowDown } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";
import bgImage from "@/assets/bg-2.svg";
import solutionIllustration from "@/assets/solution-illustration.png";

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
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Mon <span className="text-gradient-copper">approche</span>
          </h2>
          <blockquote className="text-3xl md:text-4xl font-display italic text-foreground max-w-4xl mx-auto mb-4">
            "Tout est possible avec l'IA.
            <br />
            <span className="text-gradient-copper">Mais tout faire n'est pas la réponse.</span>"
          </blockquote>
        </motion.div>

        {/* Visual flow: 3 steps with arrows */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="flex flex-col gap-4">
            {principles.map((principle, index) => (
              <div key={principle.title}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="card-premium flex items-center gap-5 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className={`p-4 rounded-2xl shrink-0 ${principle.color}`}>
                    <principle.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Étape {index + 1}</span>
                    <h3 className="text-2xl font-bold">{principle.title}</h3>
                    <p className="text-muted-foreground text-lg">{principle.description}</p>
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex justify-center"
          >
            <img
              src={solutionIllustration}
              alt="IA intégrée dans vos process existants"
              className="w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
