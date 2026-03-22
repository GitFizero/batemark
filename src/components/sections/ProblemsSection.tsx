import { motion } from "framer-motion";
import { Clock, Wrench, Users, TrendingDown } from "lucide-react";
import { AmbientOrb } from "@/components/ui/AmbientGlow";

const problems = [
  { icon: Clock, text: "Trop de tâches manuelles" },
  { icon: Wrench, text: "Des outils mal exploités" },
  { icon: Users, text: "Des équipes sous-optimisées" },
  { icon: TrendingDown, text: "Une acquisition irrégulière" },
];

export const ProblemsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <AmbientOrb color="copper" size="md" position="top-right" intensity={0.06} />
      <AmbientOrb color="neutral" size="sm" position="bottom-left" intensity={0.05} />
      <div className="container-custom max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
            Vous perdez du temps… et donc de l'argent
          </h2>
          <p className="text-sm text-white/55 max-w-lg mx-auto">
            La majorité des entreprises perd un temps considérable sur des tâches
            répétitives, mal structurées ou non optimisées.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card flex items-center gap-3 p-4"
            >
              <div className="w-9 h-9 rounded-lg bg-red-500/8 border border-red-500/10 flex items-center justify-center flex-shrink-0">
                <problem.icon className="w-4 h-4 text-red-400/70" />
              </div>
              <span className="text-sm text-white/75">{problem.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-sm font-medium text-white/70"
        >
          Le problème n'est pas votre équipe.{" "}
          <span className="text-[#c4956e]">C'est votre système.</span>
        </motion.p>
      </div>
    </section>
  );
};
