import { motion } from "framer-motion";

const caseStudies = [
  {
    name: "Atlantica Minceur",
    sector: "Beauté & bien-être",
    before: "Acquisition 100% manuelle, pas de système de relance",
    after: "Prospection automatisée + séquences mailing IA",
    result: "15 000€ générés dès le 1er mois pour 350€ investis",
    tag: "Acquisition",
  },
  {
    name: "MediaCast",
    sector: "Studio podcast",
    before: "Onboarding clients chronophage, suivi projet dispersé",
    after: "Portail client IA + onboarding automatisé",
    result: "8 nouveaux clients onboardés, 8h/semaine économisées",
    tag: "Process",
  },
  {
    name: "V8 Equipment",
    sector: "E-commerce outdoor",
    before: "Acquisition irrégulière, pas de retargeting",
    after: "Mailing automatisé + ciblage IA + retargeting",
    result: "24 500€ en 1 mois — 9 tentes de toit vendues",
    tag: "Acquisition",
  },
];

const tagColors: Record<string, string> = {
  Acquisition: "bg-[#c4956e]/20 text-[#c4956e]",
  Process: "bg-[#7a8fb5]/20 text-[#7a8fb5]",
};

export const CaseStudiesSection = () => {
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
            Résultats clients
          </h2>
          <p className="text-sm text-white/40">
            Des systèmes livrés, des chiffres mesurés.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={cs.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card p-5 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-sm font-semibold text-white">{cs.name}</h3>
                  <span className="text-[11px] text-white/30">{cs.sector}</span>
                </div>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    tagColors[cs.tag] || "bg-white/10 text-white/50"
                  }`}
                >
                  {cs.tag}
                </span>
              </div>

              {/* Before / After */}
              <div className="space-y-2.5 mb-5 flex-1">
                <div className="rounded-lg bg-red-500/5 border border-red-500/10 px-3 py-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-red-400/60 block mb-0.5">
                    Avant
                  </span>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {cs.before}
                  </p>
                </div>
                <div className="rounded-lg bg-emerald-500/5 border border-emerald-500/10 px-3 py-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400/60 block mb-0.5">
                    Après
                  </span>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {cs.after}
                  </p>
                </div>
              </div>

              {/* Result */}
              <div className="border-t border-white/6 pt-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-white/20 block mb-1">
                  Résultat
                </span>
                <p className="text-[#c4956e] font-bold text-xs sm:text-sm">
                  {cs.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
