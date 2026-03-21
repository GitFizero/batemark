import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AmbientOrb } from "@/components/ui/AmbientGlow";
import profilePhoto from "@/assets/gaetan-profile.jpg";

export const StorytellingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <section className="section-padding relative overflow-hidden" ref={sectionRef}>
      <AmbientOrb color="copper" size="lg" position="top-right" intensity={0.05} />
      <AmbientOrb color="blue" size="md" position="bottom-left" intensity={0.04} />

      <div className="container-custom relative z-10">
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

        {/* Photo + Story intro — side by side */}
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
              <div className="absolute -inset-6 bg-[#c4956e]/[0.04] rounded-3xl blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Story — 3 cols */}
          <motion.div style={{ y: textY }} className="lg:col-span-3 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white/65 text-sm sm:text-[15px] leading-[1.8]"
            >
              Tout a commencé par un parcours scientifique. Des chiffres, des modèles, une rigueur
              analytique. Un chemin tout tracé vers la recherche — jusqu'au jour où j'ai découvert
              le marketing. Pas la pub, pas le branding. Le <span className="text-white/90 font-medium">marketing
              comme une science</span> : comprendre pourquoi les gens agissent, mesurer ce qui fonctionne,
              et prendre des décisions basées sur des données, jamais sur l'intuition.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/65 text-sm sm:text-[15px] leading-[1.8]"
            >
              Ma première expérience en tant que Data Analyst pour L'Équipe m'a appris quelque chose
              d'essentiel : <span className="text-white/90 font-medium">les données ne servent à rien
              si elles ne sont pas exploitées intelligemment.</span> Quels contenus fonctionnent ? Pourquoi ?
              Comment adapter les décisions en conséquence ? C'est là que tout a pris sens.
            </motion.p>
          </motion.div>
        </div>

        {/* Story continuation — full width narrative blocks */}
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white/65 text-sm sm:text-[15px] leading-[1.8]"
          >
            Ensuite, j'ai voulu aller plus loin. J'ai rejoint deux agences en tant que consultant,
            managé une équipe d'une dizaine de personnes, géré des campagnes d'acquisition,
            développé des outils internes. J'ai travaillé en <span className="text-white/90 font-medium">Europe,
            en Asie et aux États-Unis</span> — pas pour cocher des cases, mais pour comprendre ce qui
            fonctionne dans des marchés radicalement différents. Ce qui marche à Paris ne marche pas à
            Bangkok, et encore moins à New York. Mais les fondamentaux restent les mêmes : la data,
            la rigueur, et l'obsession du résultat.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-white/65 text-sm sm:text-[15px] leading-[1.8]"
          >
            Avec le temps, j'ai compris une chose que beaucoup d'entreprises ignorent encore :
            <span className="text-white/90 font-medium"> la performance ne dépend pas uniquement du
            marketing. Elle dépend du système global.</span> Les process, les outils, la façon dont
            les équipes travaillent au quotidien. Beaucoup cherchent à générer plus de chiffre d'affaires
            alors qu'ils n'ont pas encore structuré l'existant. Temps perdu, outils sous-exploités,
            process inefficaces — c'est par là qu'il faut commencer.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-white/65 text-sm sm:text-[15px] leading-[1.8]"
          >
            Et puis l'IA est arrivée. Et tout a changé.
            Des stratégies qui prenaient des semaines peuvent maintenant se déployer en quelques jours.
            Des tâches qui mobilisaient des équipes entières s'automatisent en un clic.
            Mais surtout, pour la première fois, <span className="text-white/90 font-medium">on peut
            enfin exécuter vite et bien</span> — à condition de savoir quoi automatiser, et pourquoi.
          </motion.p>
        </div>

        {/* Vision block — the conclusion */}
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
                Aujourd'hui, tout le monde parle d'IA. Mais dans les faits, elle est souvent mal utilisée :
                des gadgets sans impact, des automatisations inutiles, de la perte de temps déguisée en innovation.
              </p>

              <p className="text-base sm:text-lg text-white/85 font-medium mb-6 leading-relaxed">
                Pour moi, l'IA n'a qu'un seul intérêt :
                <br />
                <span className="text-[#c4956e] font-semibold text-lg sm:text-xl">
                  générer un impact concret sur votre business.
                </span>
              </p>

              <div className="section-divider mb-6" />

              <p className="text-sm text-white/55 leading-relaxed mb-4">
                C'est pour ça que j'ai créé BATEMARK. Pas pour vendre de l'IA —
                mais pour concevoir des systèmes qui transforment du temps perdu
                en valeur, et des opportunités en résultats.
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
