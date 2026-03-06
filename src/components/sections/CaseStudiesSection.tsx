import { motion } from "framer-motion";
import { SectionFade } from "@/components/ui/SectionFade";
import caseAtlantica from "@/assets/case-atlantica.jpg";
import caseFunelin from "@/assets/case-funelin.jpg";
import caseMediacast from "@/assets/case-mediacast.jpg";
import caseV8 from "@/assets/case-v8.jpg";
import caseLocomedia from "@/assets/case-locomedia.jpg";

const caseStudies = [
  {
    name: "Atlantica Minceur",
    context: "Mise en place d'un système d'acquisition de leads automatisé",
    result: "15 000€ générés dès le 1er mois pour 350€ d'investissement",
    tag: "Acquisition",
    image: caseAtlantica,
  },
  {
    name: "Funel-In",
    context: "Automatisation de la prospection LinkedIn + lead nurturing sur Notion",
    result: "6 800€ générés le 1er mois pour 380€ investis",
    tag: "Prospection",
    image: caseFunelin,
  },
  {
    name: "MediaCast",
    context: "Portail client boosté à l'IA pour un studio de podcast",
    result: "8 nouveaux clients onboardés, 8h/semaine économisées",
    tag: "Process opérationnel",
    image: caseMediacast,
  },
  {
    name: "V8 Equipment",
    context: "Automatisation mailing IA + système d'acquisition Meta",
    result: "9 tentes de toit vendues — 24 500€ générés en 1 mois",
    tag: "Acquisition",
    image: caseV8,
  },
  {
    name: "Loco Media",
    context: "Portail de gestion de campagnes Meta & Google pour 200+ clients",
    result: "6h économisées/semaine par membre d'équipe (x5 personnes)",
    tag: "Process opérationnel",
    image: caseLocomedia,
  },
];

const tagColors: Record<string, string> = {
  "Acquisition": "bg-primary/15 text-primary",
  "Prospection": "bg-secondary/20 text-secondary-foreground",
  "Process opérationnel": "bg-accent/20 text-accent-foreground",
};

export const CaseStudiesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <SectionFade position="top" />
      <SectionFade position="bottom" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Résultats <span className="text-gradient-copper">réels</span>
          </h2>
          <p className="text-lg sm:text-2xl text-muted-foreground">
            Des systèmes livrés, des chiffres mesurés.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={cs.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-premium group hover:border-primary/30 transition-all duration-300 flex flex-col overflow-hidden"
              style={{
                background: "linear-gradient(145deg, hsl(220 12% 10%), hsl(220 15% 7%))",
              }}
            >
              <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
                <img
                  src={cs.image}
                  alt={`Projet ${cs.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_15%_7%)] via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${tagColors[cs.tag] || "bg-primary/15 text-primary"}`}>
                  {cs.tag}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{cs.name}</h3>
              <p className="text-muted-foreground text-base sm:text-lg mb-4 flex-1">{cs.context}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-foreground font-bold text-lg sm:text-xl">
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
