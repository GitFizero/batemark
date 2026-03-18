import { motion } from "framer-motion";
import { Megaphone, Cog, TrendingUp, Clock, Users } from "lucide-react";

const metrics = [
  { icon: TrendingUp, stat: "×4.3", label: "ROI moyen" },
  { icon: Clock, stat: "6-8h", label: "Gagnées / semaine" },
  { icon: Users, stat: "3-5", label: "Clients / trimestre" },
];

const offers = [
  {
    icon: Megaphone,
    title: "Acquisition client",
    description: "Prospection automatisée, tunnels de conversion et campagnes IA qui tournent 24h/24.",
    result: "×4.3 de ROI en moyenne",
  },
  {
    icon: Cog,
    title: "Automatisation opérationnelle",
    description: "Devis, factures, relances, reporting — vos tâches répétitives gérées par l'IA.",
    result: "6 à 8h économisées / semaine",
  },
];

export const PillarsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
            Deux leviers pour transformer votre entreprise
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Attirer plus de clients et gagner du temps sur vos opérations.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-14">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-copper mb-1">
                {m.stat}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">{m.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-premium group hover:border-primary/20 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-primary/8 w-fit mb-4">
                <offer.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{offer.description}</p>
              <p className="text-primary font-semibold text-sm">{offer.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
