import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/gaetan-profile.jpg";

const milestones = [
  {
    year: "Origine",
    label: "Un esprit scientifique",
    detail: "Avant tout, un profil analytique. La rigueur des données, la précision des modèles, la quête de vérité dans les chiffres.",
  },
  {
    year: "Data",
    label: "Data Analyst — L'Équipe",
    detail: "Faire parler les données pour orienter des décisions stratégiques. Comprendre ce qui fonctionne, pourquoi, et comment l'amplifier.",
  },
  {
    year: "Marketing",
    label: "Marketing piloté par les KPIs",
    detail: "Chaque campagne, chaque décision repose sur des données réelles et des résultats mesurables. Jamais d'intuition approximative.",
  },
  {
    year: "Agences",
    label: "Consultant pour 2 agences",
    detail: "Management d'une équipe d'une dizaine de personnes. Acquisition, technique et produit. CRM conçus et pilotés, outils internes développés.",
  },
  {
    year: "International",
    label: "Europe, Asie, États-Unis",
    detail: "Travailler sur trois continents pour comprendre les tendances, les différences culturelles et les stratégies qui fonctionnent partout.",
  },
  {
    year: "IA",
    label: "Le déclic de l'intelligence artificielle",
    detail: "Ce qui prenait des semaines peut désormais se faire en quelques jours. L'IA a tout changé — mais seuls ceux qui l'utilisent intelligemment en tirent profit.",
  },
];

export const StorytellingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
            Une approche basée sur la data,
            <br />
            <span className="text-[#c4956e]">pas sur l'intuition</span>
          </h2>
        </motion.div>

        {/* Photo + intro — side by side */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center mb-20 max-w-5xl mx-auto">
          {/* Photo — 2 cols */}
          <motion.div style={{ y: photoY }} className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-56 sm:w-64 aspect-[3/4] rounded-2xl overflow-hidden glass-card p-1">
                <img
                  src={profilePhoto}
                  alt="Gaëtan Fizero — Fondateur de BATEMARK"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-6 bg-[#c4956e]/[0.04] rounded-3xl blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Intro text — 3 cols */}
          <motion.div style={{ y: textY }} className="lg:col-span-3 space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white/65 text-sm sm:text-[15px] leading-relaxed"
            >
              J'ai commencé avec un profil scientifique. Puis j'ai découvert le marketing —
              pas comme un levier commercial, mais comme une
              <span className="text-white/90 font-medium"> discipline à la croisée de l'analyse de données, du comportement humain et de la prise de décision.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/65 text-sm sm:text-[15px] leading-relaxed"
            >
              Data Analyst pour L'Équipe, consultant pour deux agences, manager d'une équipe de dix personnes.
              J'ai travaillé en <span className="text-white/90 font-medium">Europe, en Asie et aux États-Unis</span> pour
              comprendre ce qui fonctionne, partout.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/65 text-sm sm:text-[15px] leading-relaxed"
            >
              CRM conçus et pilotés, outils internes développés, process optimisés.
              Une conviction :
              <span className="text-white/90 font-medium"> la performance ne dépend pas du marketing seul — elle dépend du système global.</span>
            </motion.p>
          </motion.div>
        </div>

        {/* Timeline milestones */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-[#c4956e]/30 via-[#c4956e]/10 to-transparent" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-14 pb-8 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute left-3 top-1 w-3 h-3 rounded-full bg-[#c4956e]/40 border-2 border-[#c4956e]/60" />

                {/* Year badge */}
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#c4956e]/70 block mb-1">
                  {m.year}
                </span>
                <h3 className="text-sm font-semibold text-white/85 mb-1.5">
                  {m.label}
                </h3>
                <p className="text-[13px] text-white/50 leading-relaxed">
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
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,149,110,0.04)_0%,_transparent_70%)]" />

            <div className="relative z-10">
              <p className="text-sm sm:text-[15px] text-white/60 leading-relaxed mb-6">
                Aujourd'hui, tout le monde parle d'IA. Mais dans les faits :
                gadgets sans impact, automatisations inutiles, perte de temps déguisée.
              </p>

              <p className="text-base sm:text-lg text-white/85 font-medium mb-6 leading-relaxed">
                L'IA n'a qu'un seul intérêt :
                <br />
                <span className="text-[#c4956e] font-semibold text-lg sm:text-xl">
                  générer un impact concret sur votre business.
                </span>
              </p>

              <div className="section-divider mb-6" />

              <p className="text-sm text-white/55 leading-relaxed mb-4">
                Avec BATEMARK, je conçois des systèmes concrets — automatisations ciblées,
                outils internes, plateformes sur mesure.
              </p>

              <p className="text-[#c4956e] font-semibold text-sm">
                Transformer du temps perdu en valeur.
                <br />
                Transformer des opportunités en résultats.
              </p>

              <p className="text-xs text-white/35 mt-6">
                Gaëtan Fizero — Fondateur de BATEMARK
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
