import { motion } from "framer-motion";
import { SectionFade } from "@/components/ui/SectionFade";

const caseStudies = [
  {
    name: "Atlantica Minceur",
    context: "Mise en place d'un système d'acquisition de leads automatisé",
    result: "15 000€ générés dès le 1er mois pour 350€ d'investissement",
    tag: "Acquisition",
  },
  {
    name: "Funel-In",
    context: "Automatisation de la prospection LinkedIn + lead nurturing sur Notion",
    result: "6 800€ générés le 1er mois pour 380€ investis",
    tag: "Prospection",
  },
  {
    name: "MediaCast",
    context: "Portail client boosté à l'IA pour un studio de podcast",
    result: "8 nouveaux clients onboardés, 8h/semaine économisées",
    tag: "Process opérationnel",
  },
  {
    name: "V8 Equipment",
    context: "Automatisation mailing IA + système d'acquisition Meta",
    result: "9 tentes de toit vendues — 24 500€ générés en 1 mois",
    tag: "Acquisition",
  },
  {
    name: "Loco Media",
    context: "Portail de gestion de campagnes Meta & Google pour 200+ clients",
    result: "6h économisées/semaine par membre d'équipe (x5 personnes)",
    tag: "Process opérationnel",
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
              className="card-premium group hover:border-primary/30 transition-all duration-300 flex flex-col"
              style={{
                background: "linear-gradient(145deg, hsl(220 12% 10%), hsl(220 15% 7%))",
              }}
            >
              <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4 ${tagColors[cs.tag] || "bg-primary/15 text-primary"}`}>
                {cs.tag}
              </span>
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
