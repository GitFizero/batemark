import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Code, CheckCircle } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";
import bgImage from "@/assets/bg-3.svg";

const highlights = [
  {
    icon: Award,
    title: "+7 ans d'expérience",
    description: "En intégration IA, automatisation et transformation digitale des entreprises",
  },
  {
    icon: TrendingUp,
    title: "+15 entreprises transformées",
    description: "Systèmes IA déployés avec des résultats mesurables dès le 1er mois",
  },
  {
    icon: Users,
    title: "Expert IA multi-sectoriel",
    description: "Hôtellerie, BTP, e-commerce, santé, juridique, beauté et plus",
  },
  {
    icon: Code,
    title: "Développeur & intégrateur IA",
    description: "Création de portails, dashboards et automatisations sur mesure (Make, n8n, ChatGPT)",
  },
];

const differentiators = [
  "Vision business avant tout : je comprends vos enjeux de rentabilité et de gain de temps",
  "Approche sur mesure : chaque système IA est adapté à votre métier et vos process",
  "Transfert de compétences : vous devenez autonome, sans dépendance",
  "Résultats mesurables : KPIs clairs, reporting transparent, ROI dès le 1er mois",
  "Réactivité : un interlocuteur unique qui répond sous 24h, toujours",
];

export const AuthoritySection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={bgImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Fade Effects */}
      <SectionFade position="top" />
      <SectionFade position="bottom" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pourquoi me faire <span className="text-gradient-copper">confiance</span> ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Je ne suis pas une agence générique. Je suis un consultant IA spécialisé
              dans l'intégration de l'intelligence artificielle pour aider les entreprises
              à gagner du temps, travailler plus efficacement et attirer plus de clients.
            </p>

            <ul className="space-y-4">
              {differentiators.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-copper shrink-0 mt-1" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium group hover:border-copper/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-copper flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
