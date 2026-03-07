import { motion } from "framer-motion";
import { Zap, TrendingUp, Target } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const benefits = [
  {
    icon: Zap,
    title: "Automatisez vos process, libérez du temps",
    description:
      "Chaque entreprise perd des dizaines d'heures par semaine sur des tâches répétitives : saisie de données, relances, reporting, gestion administrative. L'IA prend en charge ces tâches à faible valeur ajoutée pour que vos équipes se concentrent enfin sur ce qui compte : la stratégie, la créativité, la relation client.",
    highlight: "Résultat : 6 à 8h récupérées par personne et par semaine.",
  },
  {
    icon: TrendingUp,
    title: "Améliorez votre productivité globale",
    description:
      "L'IA ne remplace pas vos équipes — elle les rend plus efficaces. En automatisant les workflows internes (onboarding client, suivi de projet, dashboards en temps réel), chaque collaborateur traite plus de volume avec moins d'effort. Moins d'erreurs humaines, des décisions plus rapides, et une vision claire de la performance à chaque instant.",
    highlight: "Vos équipes font plus, mieux, et avec moins de friction.",
  },
  {
    icon: Target,
    title: "Mettez en place une vraie stratégie d'acquisition",
    description:
      "Vos concurrents utilisent déjà l'IA pour prospecter, qualifier et convertir des leads — en automatique. Prospection LinkedIn, séquences email personnalisées, campagnes Meta optimisées par l'IA : ceux qui intègrent ces systèmes aujourd'hui prennent une avance décisive. L'IA n'est plus un avantage, c'est une nécessité pour rester dans le top 10% de votre secteur.",
    highlight: "Ne subissez pas la vague — surfez-la avant vos concurrents.",
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
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            L'intelligence artificielle n'est pas un buzzword. C'est un levier opérationnel qui transforme la façon dont votre entreprise fonctionne — dès le premier mois.
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
              className="card-premium group hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="p-4 rounded-2xl bg-primary/10 w-fit mb-5">
                <benefit.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-base sm:text-lg mb-4 flex-1">
                {benefit.description}
              </p>
              <p className="text-primary font-bold text-base sm:text-lg pt-4 border-t border-border">
                {benefit.highlight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
