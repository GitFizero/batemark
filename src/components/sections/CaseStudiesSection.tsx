import { motion } from "framer-motion";
import caseAtlantica from "@/assets/case-atlantica.jpg";
import caseFunelin from "@/assets/case-funelin.jpg";
import caseMediacast from "@/assets/case-mediacast-new.jpg";
import caseV8 from "@/assets/case-v8.jpg";

const caseStudies = [
  {
    name: "Atlantica Minceur",
    tag: "Acquisition",
    result: "+15 000€ / mois",
    image: caseAtlantica,
  },
  {
    name: "V8 Equipment",
    tag: "Acquisition",
    result: "+24 500€ / mois",
    image: caseV8,
  },
  {
    name: "Funel-In",
    tag: "Prospection",
    result: "+6 800€ / mois",
    image: caseFunelin,
  },
  {
    name: "MediaCast",
    tag: "Process",
    result: "8h économisées/sem.",
    image: caseMediacast,
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
            Résultats clients
          </h2>
          <p className="text-sm text-muted-foreground">
            Des systèmes livrés, des chiffres mesurés.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={cs.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group rounded-2xl overflow-hidden border border-border bg-card"
            >
              <div className="relative h-28 sm:h-32 overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/90 text-foreground">
                  {cs.tag}
                </span>
              </div>
              <div className="p-3">
                <h3 className="text-xs font-semibold text-foreground mb-0.5">{cs.name}</h3>
                <p className="text-primary font-bold text-sm">{cs.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
