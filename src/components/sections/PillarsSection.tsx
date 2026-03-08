import { motion } from "framer-motion";
import { Megaphone, Cog, TrendingUp, Clock, CalendarCheck } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const metrics = [
  {
    icon: TrendingUp,
    stat: "×4.3",
    label: "Augmentation du ROAS en moyenne",
  },
  {
    icon: Clock,
    stat: "6-8h",
    label: "Gagnées en moyenne par semaine par personne",
  },
  {
    icon: CalendarCheck,
    stat: "3-5",
    label: "Entreprises accompagnées par trimestre maximum",
  },
];

const offer1Deliverables = [
  "Système de leads entrants automatisés (Meta, Google, mailing IA)",
  "Prospection LinkedIn automatisée + lead nurturing",
  "Séquences de mailing IA personnalisées",
];

const offer2Deliverables = [
  "Portail client IA (onboarding, suivi, pilotage)",
  "Gestion centralisée de campagnes ou de clients",
  "Dashboards décisionnels connectés à vos données",
];

export const PillarsSection = () => {
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Ce que je fais <span className="text-gradient-copper">concrètement</span>
          </h2>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-gradient-copper mb-2">
                {m.stat}
              </div>
              <p className="text-sm sm:text-base text-muted-foreground uppercase tracking-wide font-medium">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Two offer blocks */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Offer 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-premium group hover:border-primary/30 transition-all duration-300 flex flex-col"
          >
            <div className="p-4 rounded-2xl bg-primary/10 w-fit mb-5">
              <Megaphone className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Automatisation de l'acquisition</h3>
            <p className="text-muted-foreground text-base sm:text-lg mb-6">
              Générez des leads et des ventes en automatique — sans dépendre d'une équipe commerciale.
            </p>
            <ul className="space-y-3 mb-6 flex-1">
              {offer1Deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-border">
              <p className="text-primary font-bold text-lg sm:text-xl">
                ROAS moyen constaté : ×4.3 sur vos investissements publicitaires
              </p>
            </div>
          </motion.div>

          {/* Offer 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="card-premium group hover:border-primary/30 transition-all duration-300 flex flex-col"
          >
            <div className="p-4 rounded-2xl bg-primary/10 w-fit mb-5">
              <Cog className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Automatisation des process opérationnels</h3>
            <p className="text-muted-foreground text-base sm:text-lg mb-6">
              Libérez vos équipes des tâches répétitives — pour qu'elles se concentrent sur ce qui crée de la valeur.
            </p>
            <ul className="space-y-3 mb-6 flex-1">
              {offer2Deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-border">
              <p className="text-primary font-bold text-lg sm:text-xl">
                6 à 8h économisées par semaine et par personne
              </p>
            </div>
          </motion.div>
        </div>

        {/* Liaison phrase */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-lg sm:text-xl md:text-2xl italic text-secondary mt-12 max-w-4xl mx-auto"
        >
          Un système qui attire les clients. Un système qui les gère efficacement. C'est ça, une entreprise qui scale avec l'IA.
        </motion.p>
      </div>
    </section>
  );
};
