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
    tag: "Acquisition",
    result: "15 000€ générés dès le 1er mois",
    image: caseAtlantica,
  },
  {
    name: "Funel-In",
    tag: "Prospection",
    result: "6 800€ générés le 1er mois",
    image: caseFunelin,
  },
  {
    name: "MediaCast",
    tag: "Process",
    result: "8h/semaine économisées",
    image: caseMediacast,
  },
  {
    name: "V8 Equipment",
    tag: "Acquisition",
    result: "24 500€ en 1 mois",
    image: caseV8,
  },
  {
    name: "Loco Media",
    tag: "Process",
    result: "6h économisées/semaine ×5",
    image: caseLocomedia,
  },
  {
    name: "Figuerolles",
    tag: "Acquisition",
    result: "+43% de remplissage",
    image: caseFiguerolles,
  },
];

const tagColors: Record<string, string> = {
  "Acquisition": "bg-primary/10 text-primary",
  "Prospection": "bg-secondary text-secondary-foreground",
  "Process": "bg-accent text-accent-foreground",
};

export const CaseStudiesSection = () => {
  return (
    <section className="section-padding bg-[hsl(30_15%_95%)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
            Résultats concrets
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Des systèmes IA livrés, des chiffres mesurés.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={cs.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-border overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className={`absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${tagColors[cs.tag] || "bg-primary/10 text-primary"}`}>
                  {cs.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold mb-1 text-foreground">{cs.name}</h3>
                <p className="text-primary font-semibold text-sm">{cs.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
