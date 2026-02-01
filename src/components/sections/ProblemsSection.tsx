import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Users, Clock } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const problems = [
  {
    icon: AlertTriangle,
    title: "Publicité locale non mesurable",
    description: "Flyers, affichage, cinéma... Impossible de savoir combien de clients viennent de vos campagnes.",
  },
  {
    icon: TrendingDown,
    title: "ROI flou et incertain",
    description: "Vous dépensez sans savoir si cela génère vraiment du chiffre d'affaires pour votre activité.",
  },
  {
    icon: Users,
    title: "Leads non qualifiés",
    description: "Des contacts qui ne correspondent pas à votre cible, des curieux qui ne convertissent jamais.",
  },
  {
    icon: Clock,
    title: "Dépendance au bouche-à-oreille",
    description: "Une croissance lente et imprévisible, sans contrôle sur votre flux de nouveaux clients.",
  },
];

export const ProblemsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Fade Effects */}
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
            Les <span className="text-gradient-copper">défis</span> des entreprises locales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                  <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
