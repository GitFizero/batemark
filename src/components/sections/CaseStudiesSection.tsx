import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import caseAtlantica from "@/assets/case-atlantica.jpg";
import caseFunelin from "@/assets/case-funelin.jpg";
import caseMediacast from "@/assets/case-mediacast-new.jpg";
import caseV8 from "@/assets/case-v8.jpg";
import caseLocomedia from "@/assets/case-locomedia.jpg";
import caseFiguerolles from "@/assets/figuerolles.jpg";

const caseStudies = [
  {
    name: "Atlantica Minceur",
    sector: "Beauté & bien-être",
    before: "Acquisition 100% manuelle, pas de système de relance",
    after: "Prospection automatisée + séquences mailing IA",
    result: "15 000€ générés dès le 1er mois pour 350€ investis",
    tag: "Acquisition",
    image: caseAtlantica,
  },
  {
    name: "Funel-In",
    sector: "Conseil B2B",
    before: "Prospection LinkedIn manuelle, leads non qualifiés",
    after: "Prospection IA automatisée + qualification intelligente",
    result: "6 800€ générés le 1er mois pour 380€ investis",
    tag: "Prospection",
    image: caseFunelin,
  },
  {
    name: "MediaCast",
    sector: "Studio podcast",
    before: "Onboarding clients chronophage, suivi projet dispersé",
    after: "Portail client IA + onboarding automatisé",
    result: "8 nouveaux clients onboardés, 8h/semaine économisées",
    tag: "Process",
    image: caseMediacast,
  },
  {
    name: "V8 Equipment",
    sector: "E-commerce outdoor",
    before: "Acquisition irrégulière, pas de retargeting",
    after: "Mailing automatisé + ciblage IA + retargeting",
    result: "24 500€ en 1 mois — 9 tentes de toit vendues",
    tag: "Acquisition",
    image: caseV8,
  },
  {
    name: "Loco Media",
    sector: "Agence marketing",
    before: "Reporting manuel pour 200+ clients, dashboards inexistants",
    after: "Portail IA + reporting automatisé + dashboards décisionnels",
    result: "6h économisées/semaine par membre d'équipe (x5)",
    tag: "Process",
    image: caseLocomedia,
  },
  {
    name: "La République de Figuerolles",
    sector: "Hôtellerie-restauration",
    before: "Remplissage hors saison très faible, pas de stratégie digitale",
    after: "Système IA d'acquisition + réservation directe automatisée",
    result: "+43% de taux de remplissage hors saison",
    tag: "Acquisition",
    image: caseFiguerolles,
  },
];

const tagColors: Record<string, string> = {
  Acquisition: "bg-[#c4956e]/20 text-[#c4956e]",
  Prospection: "bg-[#5a8f7b]/20 text-[#5a8f7b]",
  Process: "bg-[#7a8fb5]/20 text-[#7a8fb5]",
};

export const CaseStudiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
            Résultats clients
          </h2>
          <p className="text-sm text-white/50">
            Des systèmes IA livrés, des chiffres mesurés.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={cs.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card overflow-hidden flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                <span
                  className={`absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm ${
                    tagColors[cs.tag] || "bg-white/10 text-white/60"
                  }`}
                >
                  {cs.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-white">{cs.name}</h3>
                  <span className="text-[11px] text-white/50">{cs.sector}</span>
                </div>

                {/* Before / After */}
                <div className="space-y-2 mb-4 flex-1">
                  <div className="rounded-lg bg-red-500/[0.07] border border-red-500/10 px-3 py-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-red-400/70 block mb-0.5">
                      Avant
                    </span>
                    <p className="text-[11px] text-white/65 leading-relaxed">
                      {cs.before}
                    </p>
                  </div>
                  <div className="rounded-lg bg-emerald-500/[0.07] border border-emerald-500/10 px-3 py-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400/70 block mb-0.5">
                      Après
                    </span>
                    <p className="text-[11px] text-white/65 leading-relaxed">
                      {cs.after}
                    </p>
                  </div>
                </div>

                {/* Result */}
                <div className="border-t border-white/8 pt-3">
                  <p className="text-[#c4956e] font-bold text-xs sm:text-sm">
                    {cs.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
