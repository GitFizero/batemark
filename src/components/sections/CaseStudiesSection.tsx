import { motion } from "framer-motion";
import { SectionFade } from "@/components/ui/SectionFade";
import caseAtlantica from "@/assets/case-atlantica.jpg";
import caseFunelin from "@/assets/case-funelin.jpg";
import caseMediacast from "@/assets/case-mediacast-new.jpg";
import caseV8 from "@/assets/case-v8.jpg";
import caseLocomedia from "@/assets/case-locomedia.jpg";
import caseFiguerolles from "@/assets/figuerolles.jpg";

const caseStudies = [
  {
    name: "Atlantica Minceur",
    context: "Beauté & bien-être — Système d'acquisition de leads IA automatisé avec campagnes Meta Ads, landing pages optimisées et séquences de mailing IA pour un institut de beauté et minceur",
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
    context: "E-commerce outdoor — Système d'acquisition IA complet avec mailing automatisé, campagnes Meta Ads et retargeting intelligent pour une boutique en ligne d'équipement de camping et van",
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
    context: "Hôtellerie-restauration — Acquisition IA pour un hôtel-restaurant indépendant avec campagnes Google Ads, Meta Ads et stratégie de réservation directe automatisée hors saison",
    result: "+43% de taux de remplissage hors saison",
    tag: "Acquisition",
    image: caseFiguerolles,
  },
];

const tagColors: Record<string, string> = {
  "Acquisition": "bg-primary text-primary-foreground",
  "Prospection": "bg-secondary text-secondary-foreground",
  "Process opérationnel": "bg-accent text-accent-foreground",
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
            Cas clients : résultats <span className="text-gradient-copper">concrets</span> de l'intégration IA en entreprise
          </h2>
          <p className="text-lg sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Des systèmes IA livrés, des chiffres mesurés. Découvrez comment nos clients dans l'hôtellerie, l'e-commerce, la beauté, le marketing et les services B2B ont multiplié leur chiffre d'affaires et automatisé leurs opérations grâce à l'intelligence artificielle.
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-base sm:text-lg text-muted-foreground mt-12 max-w-4xl mx-auto"
        >
          Nos solutions d'intégration IA s'adaptent à chaque secteur : hôtellerie et restauration, e-commerce et retail, immobilier, BTP et artisans, santé et cliniques, cabinets juridiques, instituts de beauté et bien-être. Que vous cherchiez à automatiser votre acquisition client, optimiser vos processus internes ou déployer des dashboards décisionnels, Batemark conçoit des systèmes IA sur mesure qui génèrent des résultats mesurables dès le premier mois.
        </motion.p>
      </div>
    </section>
  );
};
