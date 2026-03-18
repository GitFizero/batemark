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
    title: "Acquisition",
    description: "Prospection automatisée et campagnes IA 24h/24.",
  },
  {
    icon: Cog,
    title: "Automatisation",
    description: "Vos tâches répétitives gérées par l'IA.",
  },
];

export const PillarsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
            Deux leviers de croissance
          </h2>
          <p className="text-sm text-muted-foreground">
            Plus de clients, moins de tâches manuelles.
          </p>
        </motion.div>

        {/* Metrics row */}
        <div className="flex items-center justify-center gap-8 sm:gap-14 mb-12">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <m.icon className="w-4 h-4 text-primary mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-0.5">
                {m.stat}
              </div>
              <p className="text-xs text-muted-foreground">{m.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors"
            >
              <div className="p-2.5 rounded-xl bg-primary/8 shrink-0">
                <offer.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1">{offer.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{offer.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
