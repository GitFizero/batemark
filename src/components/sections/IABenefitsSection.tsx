import { motion } from "framer-motion";
import { Zap, TrendingUp, Target, Clock, Bot, Rocket } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const benefits = [
  {
    icon: Zap,
    secondaryIcon: Clock,
    title: "Automatisez vos process",
    description:
      "L'IA prend en charge les tâches répétitives — relances, reporting, saisie — pour que vos équipes se concentrent sur ce qui compte.",
    highlight: "6 à 8h récupérées par personne / semaine",
  },
  {
    icon: TrendingUp,
    secondaryIcon: Bot,
    title: "Boostez votre productivité",
    description:
      "Automatisez les workflows internes pour traiter plus de volume, avec moins d'effort et zéro erreur humaine.",
    highlight: "Plus de résultats, moins de friction",
  },
  {
    icon: Target,
    secondaryIcon: Rocket,
    title: "Accélérez votre acquisition",
    description:
      "Prospection, qualification, conversion — en automatique. Ceux qui intègrent l'IA aujourd'hui prennent une avance décisive.",
    highlight: "Surfez la vague avant vos concurrents",
  },
];

export const IABenefitsSection = () => {
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
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Ce que l'IA change{" "}
            <span className="text-gradient-copper">concrètement</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
            Un levier opérationnel qui transforme votre entreprise — dès le premier mois.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="card-premium group hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Icon cluster */}
              <div className="relative mb-6">
                <div className="p-5 rounded-2xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <benefit.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-background border border-border shadow-lg">
                  <benefit.secondaryIcon className="w-4 h-4 text-primary/70" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-5 flex-1">
                {benefit.description}
              </p>
              <div className="w-full pt-4 border-t border-border">
                <p className="text-primary font-bold text-sm sm:text-base">
                  {benefit.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
