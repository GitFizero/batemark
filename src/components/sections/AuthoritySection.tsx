import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Code, CheckCircle } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "+7 ans d'expérience",
    description: "En acquisition digitale et génération de leads qualifiés",
  },
  {
    icon: TrendingUp,
    title: "+300 campagnes en 2025",
    description: "Gérées avec des résultats mesurables et documentés",
  },
  {
    icon: Users,
    title: "Management de 6 traffic managers",
    description: "Une équipe formée aux meilleures pratiques Meta Ads",
  },
  {
    icon: Code,
    title: "Développeur CRM métier",
    description: "Création d'un CRM spécialisé pour le secteur bien-être / fitness",
  },
];

const differentiators = [
  "Vision business avant tout : je comprends vos enjeux de rentabilité",
  "Approche data-driven : chaque décision est basée sur les données",
  "Transparence totale : vous avez accès à tous vos comptes publicitaires",
  "Pas de jargon : des rapports clairs et compréhensibles",
  "Réactivité : une réponse sous 24h, toujours",
];

export const AuthoritySection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
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
              Je ne suis pas une agence générique. Je suis un expert senior spécialisé 
              exclusivement dans la génération de leads locaux via Meta Ads.
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
