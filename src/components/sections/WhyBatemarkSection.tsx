import { motion } from "framer-motion";
import { User, Crosshair, GraduationCap, Shield, Users } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const differentiators = [
  {
    icon: User,
    title: "Un seul interlocuteur",
    description: "Ads, CRM, automatisation, IA — je maîtrise l'ensemble de la chaîne. Pas de découpage en silos.",
  },
  {
    icon: Shield,
    title: "Pas une agence",
    description: "Vous travaillez directement avec le consultant, sans chef de projet intermédiaire, sans junior qui exécute.",
  },
  {
    icon: Crosshair,
    title: "Approche chirurgicale",
    description: "Pas de package standard. On part de ce qui existe déjà dans votre entreprise et on l'optimise.",
  },
  {
    icon: GraduationCap,
    title: "Transfert de compétences",
    description: "L'objectif est que votre équipe gagne en autonomie au fil du temps, pas de créer une dépendance.",
  },
  {
    icon: Users,
    title: "Disponibilité garantie",
    description: "5 à 6 clients maximum en simultané, pour garantir la qualité de l'accompagnement et la réactivité.",
  },
];

export const WhyBatemarkSection = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pourquoi <span className="text-gradient-copper">Batemark</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ce qui me différencie d'une agence classique.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
