import { motion } from "framer-motion";
import { FlaskConical, BarChart3, Megaphone, Cpu } from "lucide-react";

const journey = [
  { icon: FlaskConical, label: "Profil scientifique" },
  { icon: BarChart3, label: "Data analyse" },
  { icon: Megaphone, label: "Marketing data-driven" },
  { icon: Cpu, label: "Arrivée de l'IA" },
];

export const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
            Qui est derrière BATEMARK ?
          </h2>
          <p className="text-sm text-white/40">
            Un parcours tourné vers les résultats.
          </p>
        </motion.div>

        {/* Journey pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {journey.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="glass-card flex items-center gap-2.5 px-4 py-2.5"
            >
              <step.icon className="w-4 h-4 text-[#c4956e]/70" />
              <span className="text-xs text-white/60 font-medium">{step.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-6 sm:p-8 text-center"
        >
          <blockquote className="text-sm sm:text-base text-white/70 leading-relaxed">
            <span className="text-white/30 text-lg">"</span>
            <br />
            Je ne vends pas de l'IA.
            <br />
            <span className="text-[#c4956e] font-medium">
              Je mets en place des systèmes qui génèrent des résultats.
            </span>
            <br />
            <span className="text-white/30 text-lg">"</span>
          </blockquote>
          <p className="text-xs text-white/30 mt-4">
            Gaëtan Fizero — Fondateur de BATEMARK
          </p>
        </motion.div>
      </div>
    </section>
  );
};
