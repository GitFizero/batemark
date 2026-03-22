import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Apolline",
    company: "Griesser",
    date: "Février 2025",
    text: "Merci à Gaëtan qui a su répondre très rapidement à notre demande et mettre en place de façon optimale nos automatisations IA. Nous allons continuer à travailler avec lui, car son travail est impeccable et ses solutions accessibles.",
  },
  {
    name: "Marielle",
    company: "BelAvie",
    date: "Février 2025",
    text: "Bonne collaboration avec Gaëtan. Il a été réactif, à l'écoute et force de proposition pour l'optimisation de nos process internes grâce à l'IA. Ses analyses nous ont permis d'y voir plus clair.",
  },
  {
    name: "Luca",
    company: "Stan & les Anges",
    date: "Décembre 2024",
    text: "Il est professionnel, pédagogue, patient et compétent. La communication est facile et il a bien pris en compte mes besoins en me conseillant sur les meilleures solutions d'automatisation.",
  },
  {
    name: "Giuseppe",
    company: "InSolus",
    date: "Août 2024",
    text: "En une heure de consulting, Gaëtan a su mettre en lumière des points très pertinents et nous expliquer comment optimiser nos workflows grâce à l'IA. Il est bon pédagogue, en plus !",
  },
  {
    name: "Gregory",
    company: "SARL RIF",
    date: "Août 2024",
    text: "Gaëtan a été extraordinairement réactif. J'ai fait entièrement confiance à Gaëtan pour la mise en place de nos automatisations et l'intégration IA dans nos process. Résultat impeccable.",
  },
  {
    name: "Charlène",
    company: "Pur Bonheur",
    date: "Mars 2024",
    text: "Extrêmement satisfaite de ma collaboration avec Gaëtan pour l'automatisation de nos process. Sa capacité à optimiser chaque aspect a grandement contribué à notre efficacité. Je le recommande vivement.",
  },
  {
    name: "Amaury",
    company: "Bliche",
    date: "Janvier 2024",
    text: "Très bonne expérience avec Gaëtan, vraiment très professionnel et au-delà de ce que l'on attendait. Points récap, propositions de solutions concrètes, nous recommandons les yeux fermés.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
            Ce qu'ils en disent
          </h2>
          <p className="text-sm text-white/55">
            Avis vérifiés sur Malt — 5 étoiles.
          </p>
        </motion.div>
      </div>

      {/* Full-width scrolling area (breaks out of container) */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[hsl(0,0%,4%)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[hsl(0,0%,4%)] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-scroll-testimonials pl-8">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="glass-card p-6 w-[320px] flex-shrink-0 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 fill-[#c4956e] text-[#c4956e]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[13px] text-white/65 leading-relaxed mb-5 flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/8 pt-4">
                <div className="w-9 h-9 rounded-full bg-[#c4956e]/15 flex items-center justify-center text-[#c4956e] text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/85">{t.name}</p>
                  <p className="text-[11px] text-white/45">{t.company} — {t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
