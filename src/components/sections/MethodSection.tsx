import { motion } from "framer-motion";
import { Search, Settings, BarChart3, Rocket, TrendingUp } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit et Diagnostic",
    description: "Analyse complète du parcours client et identification des points de friction pour optimiser votre stratégie.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Configuration Campagnes",
    description: "Structure, ciblage, paramètres et visuels optimisés pour la conversion locale.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Tracking Avancé",
    description: "Installation du suivi pour mesurer chaque euro investi avec précision.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lancement et Test",
    description: "Démarrage des campagnes avec phase de test A/B intensive.",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Optimisation Continue",
    description: "Analyse quotidienne des KPI et ajustements pour maximiser votre ROI.",
  },
];

export const MethodSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Fade Effects */}
      <SectionFade position="top" />
      <SectionFade position="bottom" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-copper/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            La Méthode <span className="text-gradient-copper">BATEMARK</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une approche structurée pour des résultats mesurables
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-copper/50 via-copper to-copper/50 transform md:-translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className="card-premium group hover:border-copper/30 transition-all duration-300">
                  <div className={`flex items-start gap-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-14 h-14 rounded-2xl gradient-copper flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <step.icon className="w-7 h-7 text-background" />
                    </div>
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Number Badge */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-background border-4 border-copper flex items-center justify-center">
                  <span className="text-xl font-bold text-copper">{step.number}</span>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
