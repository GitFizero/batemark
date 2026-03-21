import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, TrendingUp, Target } from "lucide-react";
import { AmbientOrb } from "@/components/ui/AmbientGlow";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section className="section-padding relative overflow-hidden" ref={sectionRef}>
      <AmbientOrb color="copper" size="lg" position="center" intensity={0.04} />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
            Ce que l'IA change concrètement
          </h2>
          <p className="text-sm text-white/55">
            3 leviers activés pour chaque client.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover transition-all duration-300 p-6 sm:p-7 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#c4956e]/10 border border-[#c4956e]/15 flex items-center justify-center mb-5">
                <solution.icon className="w-6 h-6 text-[#c4956e]" />
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                {solution.title}
              </h3>
              <p className="text-sm text-white/55 mb-5">
                {solution.description}
              </p>

              <div className="w-full rounded-lg bg-[#c4956e]/8 border border-[#c4956e]/12 px-4 py-3 mt-auto">
                <p className="text-xs text-[#c4956e] font-medium leading-snug">
                  {solution.example}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
