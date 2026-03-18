import { motion } from "framer-motion";
import caseAtlantica from "@/assets/case-atlantica.jpg";
import caseFunelin from "@/assets/case-funelin.jpg";
import caseMediacast from "@/assets/case-mediacast-new.jpg";
import caseV8 from "@/assets/case-v8.jpg";
import caseLocomedia from "@/assets/case-locomedia.jpg";
import caseFiguerolles from "@/assets/figuerolles.jpg";

const caseStudies = [
  {
    name: "Atlantica Minceur",
    context: "Beauté & bien-être — Système d'acquisition client IA complet : prospection automatisée, landing pages intelligentes et séquences de mailing personnalisées par l'IA pour un institut de beauté et minceur",
    result: "15 000€ générés dès le 1er mois pour 350€ investis",
    tag: "Acquisition",
    image: caseAtlantica,
  },
  {
    name: "Funel-In",
    context: "Conseil B2B — Prospection LinkedIn automatisée par intelligence artificielle, lead nurturing IA et qualification automatique des prospects pour une agence de consulting",
    result: "6 800€ générés le 1er mois pour 380€ investis",
    tag: "Prospection",
    image: caseFunelin,
  },
  {
    name: "MediaCast",
    context: "Studio podcast — Portail client boosté à l'IA avec onboarding automatisé, suivi de projet intelligent et gestion centralisée des épisodes pour un studio de production audio",
    result: "8 nouveaux clients onboardés, 8h/semaine économisées",
    tag: "Process opérationnel",
    image: caseMediacast,
  },
  {
    name: "V8 Equipment",
    context: "E-commerce outdoor — Système d'acquisition IA complet : mailing automatisé, ciblage intelligent et retargeting piloté par l'IA pour une boutique en ligne d'équipement de camping et van",
    result: "24 500€ générés en 1 mois — 9 tentes de toit vendues",
    tag: "Acquisition",
    image: caseV8,
  },
  {
    name: "Loco Media",
    context: "Agence marketing — Portail de gestion de campagnes IA pour plus de 200 clients avec reporting automatisé, dashboards décisionnels et pilotage centralisé des performances",
    result: "6h économisées/semaine par membre d'équipe (x5)",
    tag: "Process opérationnel",
    image: caseLocomedia,
  },
  {
    name: "La République Indépendante de Figuerolles",
    context: "Hôtellerie-restauration — Système IA d'acquisition pour un hôtel-restaurant indépendant : campagnes optimisées par l'IA, stratégie de réservation directe automatisée et ciblage intelligent hors saison",
    result: "+43% de taux de remplissage hors saison",
    tag: "Acquisition",
    image: caseFiguerolles,
  },
];

const tagColors: Record<string, string> = {
  "Acquisition": "bg-[#c4956e] text-white",
  "Prospection": "bg-[#5a8f7b] text-white",
  "Process opérationnel": "bg-[#7a8fb5] text-white",
};

export const CaseStudiesSection = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
            Résultats clients
          </h2>
          <p className="text-sm text-white/50">
            Des systèmes IA livrés, des chiffres mesurés.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={cs.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-white/8 bg-white/[0.04] overflow-hidden flex flex-col"
            >
              {/* Image + tag */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className={`absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${tagColors[cs.tag] || "bg-white/20 text-white"}`}>
                  {cs.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-sm font-bold text-white mb-2">{cs.name}</h3>
                <p className="text-xs text-white/45 leading-relaxed mb-3 flex-1">
                  {cs.context}
                </p>
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
