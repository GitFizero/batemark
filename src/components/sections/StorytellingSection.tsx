import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/gaetan-profile.jpg";

const milestones = [
  {
    label: "Profil scientifique",
    detail: "Un esprit analytique tourné vers la compréhension des systèmes complexes.",
  },
  {
    label: "Data Analyst — L'Équipe",
    detail: "Interpréter des données pour orienter des décisions stratégiques. Comprendre quels contenus fonctionnent, pourquoi, et comment adapter les choix.",
  },
  {
    label: "Marketing data-driven",
    detail: "Chaque campagne, chaque décision repose sur des KPIs clairs, des données réelles, des résultats mesurables. Pas de hasard.",
  },
  {
    label: "Profil hybride",
    detail: "Acquisition, technique et produit. CRM conçu et piloté, outils internes développés, équipes accompagnées pour améliorer leur productivité.",
  },
  {
    label: "Le déclic IA",
    detail: "Des stratégies autrefois longues et coûteuses peuvent aujourd'hui être mises en place rapidement. On peut enfin exécuter vite et bien.",
  },
];

export const StorytellingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
            Une approche basée sur la data,
            <br />
            <span className="text-[#c4956e]">pas sur l'intuition</span>
          </h2>
        </motion.div>

        {/* Photo + intro */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 max-w-5xl mx-auto">
          <motion.div style={{ y: photoY }} className="relative mx-auto lg:mx-0">
            <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={profilePhoto}
                alt="Gaëtan Fizero — Fondateur de BATEMARK"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-[#c4956e]/5 rounded-3xl blur-2xl -z-10" />
          </motion.div>

          <motion.div style={{ y: textY }}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white/60 text-sm sm:text-base leading-relaxed mb-6"
            >
              À l'origine, j'ai un profil scientifique. Puis j'ai découvert le marketing —
              pas comme un simple levier commercial, mais comme une discipline à la croisée
              de l'analyse de données, du comportement humain et de la prise de décision.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/60 text-sm sm:text-base leading-relaxed mb-6"
            >
              En tant que Data Analyst pour L'Équipe, j'ai appris une chose essentielle :
              <span className="text-white/80 font-medium"> les données ne servent à rien si elles ne sont pas exploitées intelligemment.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/60 text-sm sm:text-base leading-relaxed"
            >
              Avec le temps, j'ai développé un profil transversal : acquisition, technique et produit.
              J'ai conçu des CRM, développé des outils internes, accompagné des équipes.
              <span className="text-white/80 font-medium"> La performance ne dépend pas uniquement du marketing — elle dépend du système global.</span>
            </motion.p>
          </motion.div>
        </div>

        {/* Timeline milestones */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c4956e]/20 to-transparent" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 pb-8 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-[#c4956e]/30 border-2 border-[#c4956e]/50" />

                <h3 className="text-sm font-semibold text-white/80 mb-1">
                  {m.label}
                </h3>
                <p className="text-xs text-white/45 leading-relaxed">
                  {m.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 sm:p-10 text-center relative overflow-hidden">
            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,149,110,0.05)_0%,_transparent_70%)]" />

            <div className="relative z-10">
              <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-6">
                Aujourd'hui, tout le monde parle d'IA. Mais dans les faits, elle est souvent mal utilisée :
                gadgets sans impact, automatisations inutiles, perte de temps déguisée.
              </p>

              <p className="text-base sm:text-lg text-white/80 font-medium mb-8 leading-relaxed">
                Pour moi, l'IA n'a qu'un seul intérêt :
                <br />
                <span className="text-[#c4956e] font-semibold">
                  générer un impact concret sur le business.
                </span>
              </p>

              <div className="section-divider mb-8" />

              <p className="text-sm text-white/50 leading-relaxed">
                Avec BATEMARK, je ne vends pas de l'IA.
                <br />
                <span className="text-white/70 font-medium">
                  Je conçois et mets en place des systèmes concrets
                </span>
                {" "}— automatisations ciblées, outils internes, plateformes sur mesure — avec un seul objectif :
              </p>

              <p className="text-[#c4956e] font-semibold text-sm mt-4">
                Transformer du temps perdu en valeur.
                <br />
                Transformer des opportunités en résultats.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
