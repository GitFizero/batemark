import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { AmbientOrb } from "@/components/ui/AmbientGlow";

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

const FlashIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
    <rect x="10" y="30" width="100" height="60" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <rect x="18" y="38" width="35" height="6" rx="3" fill="currentColor" opacity="0.2" />
    <rect x="18" y="50" width="50" height="4" rx="2" fill="currentColor" opacity="0.1" />
    <rect x="18" y="58" width="40" height="4" rx="2" fill="currentColor" opacity="0.1" />
    <path d="M75 45 L85 45 L80 55 L88 55 L72 72 L76 60 L68 60 Z" fill="currentColor" opacity="0.5" />
    <circle cx="95" cy="40" r="3" fill="currentColor" opacity="0.3" />
    <path d="M90 70 L100 70" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
    <path d="M85 76 L100 76" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
  </svg>
);

const HorizonIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
    <rect x="15" y="20" width="90" height="80" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <rect x="15" y="20" width="90" height="16" rx="8" fill="currentColor" opacity="0.05" />
    <circle cx="26" cy="28" r="3" fill="currentColor" opacity="0.3" />
    <circle cx="36" cy="28" r="3" fill="currentColor" opacity="0.2" />
    <circle cx="46" cy="28" r="3" fill="currentColor" opacity="0.15" />
    <rect x="25" y="45" width="30" height="20" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <rect x="65" y="45" width="30" height="20" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <rect x="25" y="72" width="70" height="8" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <path d="M30 52 L38 52 M30 56 L45 56" stroke="currentColor" strokeWidth="1" opacity="0.25" />
    <path d="M70 52 L85 52 M70 56 L78 56" stroke="currentColor" strokeWidth="1" opacity="0.25" />
    <rect x="25" y="86" width="16" height="5" rx="2.5" fill="currentColor" opacity="0.3" />
  </svg>
);

const offers = [
  {
    illustration: FlashIllustration,
    name: "FLASH",
    headline: "Des résultats rapides",
    description:
      "Mise en place d'automatisations et d'optimisations concrètes en quelques jours.",
    examples: ["Automatisation CRM", "Relance prospects", "Workflows automatisés"],
    benefits: ["Rapide", "ROI immédiat", "Facile à mettre en place"],
    proof: "64 entreprises accompagnées",
    cta: "Lancer un projet Flash",
  },
  {
    illustration: HorizonIllustration,
    name: "HORIZON",
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
    <section className="section-padding relative overflow-hidden">
      <AmbientOrb color="copper" size="md" position="top-left" intensity={0.05} />
      <AmbientOrb color="blue" size="md" position="bottom-right" intensity={0.04} />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
            Deux offres, un objectif : vos résultats
          </h2>
          <p className="text-sm text-white/55">
            Choisissez l'accompagnement adapté à votre besoin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-6 sm:p-7 flex flex-col relative overflow-hidden ${
                offer.featured
                  ? "border-[#c4956e]/20"
                  : ""
              }`}
            >
              {/* Subtle radial glow for featured */}
              {offer.featured && (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(196,149,110,0.06)_0%,_transparent_60%)]" />
              )}

              <div className="relative z-10 flex flex-col flex-1">
                {/* Illustration */}
                <div className={`w-24 h-24 mx-auto mb-5 ${offer.featured ? "text-[#c4956e]" : "text-white/50"}`}>
                  <offer.illustration />
                </div>

                {/* Name + Headline */}
                <div className="text-center mb-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c4956e] block mb-1">
                    {offer.name}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {offer.headline}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-white/55 mb-5 leading-relaxed text-center">
                  {offer.description}
                </p>

                {/* Examples */}
                <div className="mb-5">
                  <div className="flex flex-wrap justify-center gap-2">
                    {offer.examples.map((ex) => (
                      <span
                        key={ex}
                        className="text-[11px] px-3 py-1.5 rounded-full bg-white/[0.05] text-white/65 border border-white/8"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {offer.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#c4956e] flex-shrink-0" />
                      <span className="text-sm text-white/65">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Proof */}
                <p className="text-xs text-white/45 mb-4 text-center">
                  {offer.proof}
                </p>

                {/* CTA */}
                <Button
                  size="default"
                  className={`w-full text-sm group rounded-full ${
                    offer.featured
                      ? "bg-[#c4956e] text-white hover:bg-[#c4956e]/90"
                      : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                  }`}
                  asChild
                >
                  <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                    {offer.cta}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
