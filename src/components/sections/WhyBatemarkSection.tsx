import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const comparisonRows = [
  { criteria: "Interlocuteur", batemark: "Un seul consultant IA senior et dédié", agency: "Chef de projet + exécutants juniors" },
  { criteria: "Approche", batemark: "Sur-mesure, adaptée à votre secteur (hôtellerie, BTP, e-commerce…)", agency: "Packages standardisés, peu personnalisés" },
  { criteria: "Compétences", batemark: "Ads + CRM + IA + Automatisation + Stratégie métier", agency: "Compétences découpées en silos, faible expertise IA" },
  { criteria: "Autonomie", batemark: "Transfert de compétences inclus — vous devenez autonome", agency: "Dépendance créée pour justifier l'abonnement" },
  { criteria: "Disponibilité", batemark: "5-6 clients max pour une qualité irréprochable", agency: "Dizaines de clients en parallèle, attention diluée" },
  { criteria: "Résultats", batemark: "Mesurables dès le 1er mois, KPIs clairs", agency: "Délais longs, reporting flou et peu actionnable" },
  { criteria: "Spécialisation IA", batemark: "Intelligence artificielle appliquée à vos process métier", agency: "Généraliste digital, maîtrise IA superficielle" },
  { criteria: "Connaissance métier", batemark: "Immersion dans vos process réels, connaissance sectorielle", agency: "Vision externe standardisée, peu d'adaptation" },
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
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Pourquoi choisir un{" "}
            <span className="text-gradient-copper">consultant IA spécialisé</span>{" "}
            plutôt qu'une agence
          </h2>
          <p className="text-lg sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Expert en intégration IA pour l'hôtellerie, le BTP, l'e-commerce,
            l'immobilier, la santé, le juridique et les PME françaises —
            un accompagnement sur-mesure qui produit des résultats concrets
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto hidden md:block"
        >
          <div className="card-premium overflow-hidden !p-0">
            <div className="grid grid-cols-3 border-b border-border">
              <div className="p-6" />
              <div className="p-6 text-center border-x border-border bg-primary/5">
                <span className="text-2xl font-bold text-gradient-copper">Batemark</span>
              </div>
              <div className="p-6 text-center">
                <span className="text-2xl font-bold text-muted-foreground">Agence</span>
              </div>
            </div>

            {comparisonRows.map((row, index) => (
              <div
                key={row.criteria}
                className={`grid grid-cols-3 ${index < comparisonRows.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="p-5 flex items-center">
                  <span className="font-semibold text-lg">{row.criteria}</span>
                </div>
                <div className="p-5 border-x border-border bg-primary/5 flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-base lg:text-lg">{row.batemark}</span>
                </div>
                <div className="p-5 flex items-center gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-destructive/60 shrink-0" />
                  <span className="text-base lg:text-lg">{row.agency}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4 max-w-lg mx-auto">
          {comparisonRows.map((row, index) => (
            <motion.div
              key={row.criteria}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-premium !p-4"
            >
              <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">{row.criteria}</p>
              <div className="flex items-start gap-2 mb-2">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{row.batemark}</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <X className="w-4 h-4 text-destructive/60 shrink-0 mt-0.5" />
                <span className="text-sm">{row.agency}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO paragraph below comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-12 md:mt-16 text-center"
        >
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Un consultant IA spécialisé comme Batemark vous apporte une expertise
            pointue en intelligence artificielle appliquée à votre secteur
            d'activité. Contrairement aux agences digitales généralistes qui
            diluent leurs efforts sur des dizaines de clients, un consultant
            indépendant s'immerge dans vos process métier — qu'il s'agisse de
            la gestion hôtelière, du suivi de chantier BTP, de l'optimisation
            e-commerce ou de l'automatisation comptable — pour déployer des
            solutions IA qui génèrent un retour sur investissement mesurable
            dès le premier mois. C'est la différence entre un prestataire qui
            vend des heures et un partenaire qui livre des résultats.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
