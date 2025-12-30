import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Target, Video, Megaphone, TrendingUp, MessageSquare, FileText } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Veille concurrentielle locale",
    description: "Analyse de votre marché local et de la stratégie de vos concurrents pour identifier les opportunités.",
  },
  {
    icon: Target,
    title: "Tracking & Data",
    description: "Mise en place du pixel Meta et configuration du tracking pour mesurer chaque conversion.",
  },
  {
    icon: Video,
    title: "Création contenus",
    description: "Accompagnement sur la création de visuels et vidéos performants adaptés à votre audience.",
  },
  {
    icon: Megaphone,
    title: "Création & gestion campagnes",
    description: "Configuration et gestion complète de vos campagnes Meta Ads avec ciblage précis.",
  },
  {
    icon: TrendingUp,
    title: "Optimisation continue",
    description: "Tests A/B, ajustements des audiences et créatifs pour maximiser votre ROI.",
  },
  {
    icon: MessageSquare,
    title: "Conseils lead management",
    description: "Accompagnement sur la qualification et le suivi de vos leads pour maximiser les conversions.",
  },
  {
    icon: FileText,
    title: "Reporting & bilan",
    description: "Rapports réguliers avec KPIs clairs : coût par lead, volume, qualité, recommandations.",
  },
];

export const SolutionSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Un accompagnement <span className="text-gradient-copper">A à Z</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            De la stratégie à l'optimisation, je gère tout pour vous
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium group hover:border-copper/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl gradient-copper flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6 text-background" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-copper flex items-center justify-center text-xs font-bold text-copper">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="hero" size="xl" className="group">
            Réserver mon audit gratuit
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Sans engagement • 20 minutes</p>
        </motion.div>
      </div>
    </section>
  );
};
