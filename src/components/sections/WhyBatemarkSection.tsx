import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const comparisonRows = [
  { criteria: "Interlocuteur", batemark: "Un seul consultant senior", agency: "Chef de projet + juniors" },
  { criteria: "Approche", batemark: "Sur-mesure, on part de l'existant", agency: "Packages standardisés" },
  { criteria: "Compétences", batemark: "Ads + CRM + IA + Automatisation", agency: "Découpé en silos" },
  { criteria: "Autonomie", batemark: "Transfert de compétences inclus", agency: "Dépendance créée" },
  { criteria: "Disponibilité", batemark: "5-6 clients max", agency: "Dizaines de clients en parallèle" },
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
            Pourquoi <span className="text-gradient-copper">Batemark</span>
          </h2>
          <p className="text-lg sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Consultant solo vs agence classique
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto hidden md:block"
        >
          <div className="card-premium overflow-hidden !p-0">
            <div className="grid grid-cols-3 border-b border-border">
              <div className="p-5" />
              <div className="p-5 text-center border-x border-border bg-primary/5">
                <span className="text-xl font-bold text-gradient-copper">Batemark</span>
              </div>
              <div className="p-5 text-center">
                <span className="text-xl font-bold text-muted-foreground">Agence</span>
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
                <div className="p-5 border-x border-border bg-primary/5 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-base">{row.batemark}</span>
                </div>
                <div className="p-5 flex items-center gap-2 text-muted-foreground">
                  <X className="w-5 h-5 text-destructive/60 shrink-0" />
                  <span className="text-base">{row.agency}</span>
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
      </div>
    </section>
  );
};
