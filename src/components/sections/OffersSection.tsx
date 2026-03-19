import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap, Layers } from "lucide-react";

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

const offers = [
  {
    icon: Zap,
    name: "BATEMARK FLASH",
    headline: "Des résultats rapides",
    description:
      "Mise en place d'automatisations et d'optimisations concrètes en quelques jours.",
    examples: ["Automatisation CRM", "Relance prospects", "Workflows automatisés"],
    benefits: ["Rapide", "ROI immédiat", "Facile à mettre en place"],
    proof: "64 entreprises accompagnées",
    cta: "Lancer un projet Flash",
  },
  {
    icon: Layers,
    name: "BATEMARK HORIZON",
    headline: "Un système sur mesure",
    description:
      "Création d'outils et de plateformes adaptées à votre business.",
    examples: ["Application web", "Portail interne", "Outils métiers"],
    benefits: ["Sur mesure", "Scalable", "Avantage concurrentiel"],
    proof: "30+ projets réalisés",
    cta: "Discuter de mon projet",
    featured: true,
  },
];

export const OffersSection = () => {
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
            Deux offres, un objectif : vos résultats
          </h2>
          <p className="text-sm text-white/40">
            Choisissez l'accompagnement adapté à votre besoin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`glass-card p-6 sm:p-7 flex flex-col ${
                offer.featured
                  ? "border-[#c4956e]/20 bg-[#c4956e]/[0.03]"
                  : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    offer.featured
                      ? "bg-[#c4956e]/15 border border-[#c4956e]/20"
                      : "bg-white/[0.05] border border-white/8"
                  }`}
                >
                  <offer.icon
                    className={`w-5 h-5 ${
                      offer.featured ? "text-[#c4956e]" : "text-white/50"
                    }`}
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c4956e]">
                    {offer.name}
                  </span>
                  <h3 className="text-sm font-semibold text-white">
                    {offer.headline}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-white/40 mb-5 leading-relaxed">
                {offer.description}
              </p>

              {/* Examples */}
              <div className="mb-5">
                <span className="text-[10px] uppercase tracking-wider text-white/25 font-medium">
                  Exemples
                </span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {offer.examples.map((ex) => (
                    <span
                      key={ex}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] text-white/50 border border-white/6"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <ul className="space-y-2 mb-6 flex-1">
                {offer.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#c4956e]/70 flex-shrink-0" />
                    <span className="text-xs text-white/50">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Proof */}
              <p className="text-[11px] text-white/25 mb-4 text-center">
                {offer.proof}
              </p>

              {/* CTA */}
              <Button
                size="sm"
                className={`w-full text-xs group rounded-full ${
                  offer.featured
                    ? "bg-[#c4956e] text-white hover:bg-[#c4956e]/90"
                    : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                }`}
                asChild
              >
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                  {offer.cta}
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
