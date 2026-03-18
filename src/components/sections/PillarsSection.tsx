import { motion } from "framer-motion";
import { Megaphone, Cog, TrendingUp, Clock, CalendarCheck } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const metrics = [
  {
    icon: TrendingUp,
    stat: "×4.3",
    label: "Retour sur investissement moyen",
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
  "Prospection automatisée par l'IA : identification de prospects, séquences d'emails personnalisés et relances intelligentes — sans intervention manuelle",
  "Acquisition client pilotée par l'IA : tunnels de conversion, chatbots qualifiants et campagnes optimisées par intelligence artificielle",
  "Génération de leads pour tous secteurs : hôtellerie, immobilier, BTP, e-commerce, santé — l'IA qualifie et nourrit vos prospects en continu",
];

const offer2Deliverables = [
  "Automatisation administrative : génération de devis, factures, relances et suivi client — le tout piloté par l'IA sans intervention manuelle",
  "Dashboards décisionnels & reporting IA : visualisez vos KPIs en temps réel, prenez des décisions éclairées grâce à l'analyse intelligente de vos données",
  "Portails clients & onboarding IA : centralisez vos process, automatisez l'intégration de nouveaux clients ou collaborateurs avec des workflows intelligents",
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
            Services d'intégration <span className="text-gradient-copper">IA et automatisation</span> pour entreprises
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Deux leviers pour transformer votre entreprise grâce à l'IA : attirer plus de clients en automatique, et gagner du temps sur vos opérations quotidiennes. Résultat : vous travaillez plus efficacement et votre activité se développe sans multiplier les efforts.
          </p>
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
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Automatisation de l'acquisition client par l'IA</h3>
            <p className="text-muted-foreground text-base sm:text-lg mb-6">
              Attirez plus de clients sans effort supplémentaire grâce à l'intelligence artificielle. L'IA identifie vos prospects idéaux, personnalise vos messages et automatise tout le parcours — de la prise de contact à la conversion. Plus besoin d'une équipe commerciale dédiée : vos systèmes IA travaillent pour vous 24h/24.
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
                En moyenne : ×4.3 de retour sur investissement grâce à l'IA
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
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Automatisation des processus opérationnels avec l'IA</h3>
            <p className="text-muted-foreground text-base sm:text-lg mb-6">
              Gagnez du temps et travaillez plus efficacement grâce à l'automatisation IA. Vos tâches répétitives — devis, factures, relances, reporting, gestion de stock — sont prises en charge par des systèmes intelligents. Vos équipes se concentrent sur les missions à forte valeur ajoutée pendant que l'IA gère le reste.
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
