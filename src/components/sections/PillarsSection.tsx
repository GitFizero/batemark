import { motion } from "framer-motion";
import { Workflow, Bot, BarChart3 } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const pillars = [
  {
    icon: Workflow,
    title: "Automatisation des process",
    description: "Mise en place de workflows automatisés qui suppriment les tâches manuelles répétitives : synchronisation de données entre outils, alertes automatiques, gestion des leads entrants, reporting automatisé, onboarding clients.",
    tools: "Make · n8n · Zapier · APIs",
  },
  {
    icon: Bot,
    title: "Intégration d'agents IA",
    description: "Conception et déploiement d'agents IA greffés sur vos opérations existantes : agent de support client, qualification de leads, générateur de contenus cadré sur votre marque, assistant interne pour les équipes.",
    tools: "Claude · OpenAI · Agents personnalisés",
  },
  {
    icon: BarChart3,
    title: "Pilotage & acquisition augmentée",
    description: "Construction de dashboards centralisés pour piloter votre acquisition depuis un seul endroit. Connexion des sources de données pour une vision claire des performances. L'IA analyse les tendances et suggère des ajustements.",
    tools: "Meta Ads · Google Analytics · CRM · Shopify",
  },
];

export const PillarsSection = () => {
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ce que je fais <span className="text-gradient-copper">concrètement</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Trois piliers pour transformer vos opérations, pas les remplacer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-premium group hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="p-4 rounded-2xl bg-primary/10 w-fit mb-6">
                <pillar.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground text-lg mb-6 flex-1">{pillar.description}</p>
              <div className="pt-4 border-t border-border">
                <span className="text-sm text-primary font-medium">{pillar.tools}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
