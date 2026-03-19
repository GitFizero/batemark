import { motion } from "framer-motion";
import { Zap, TrendingUp, Target } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Gagner du temps",
    description: "Automatisation des tâches répétitives",
    example: "Relances clients automatisées → 8h/semaine économisées",
  },
  {
    icon: TrendingUp,
    title: "Améliorer la productivité",
    description: "Optimisation des process internes",
    example: "Reporting automatisé → décisions 2x plus rapides",
  },
  {
    icon: Target,
    title: "Générer plus de chiffre",
    description: "Amélioration de l'acquisition et de la conversion",
    example: "Prospection IA → +30% de leads qualifiés",
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
          className="text-center mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
            Ce que l'IA change concrètement
          </h2>
          <p className="text-sm text-white/40">
            3 leviers activés pour chaque client.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card glass-card-hover transition-all duration-300 p-6 text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#c4956e]/10 border border-[#c4956e]/15 flex items-center justify-center mb-4">
                <solution.icon className="w-5 h-5 text-[#c4956e]" />
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                {solution.title}
              </h3>
              <p className="text-xs text-white/40 mb-5">
                {solution.description}
              </p>

              <div className="w-full rounded-lg bg-[#c4956e]/6 border border-[#c4956e]/10 px-3 py-2.5 mt-auto">
                <p className="text-[11px] text-[#c4956e]/80 font-medium leading-snug">
                  {solution.example}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
