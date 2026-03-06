import { motion } from "framer-motion";
import { Workflow, Bot, BarChart3, ArrowRight } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const pillars = [
  {
    icon: Workflow,
    title: "Automatisation des process",
    description: "Workflows automatisés qui suppriment les tâches manuelles répétitives.",
    tools: ["Make", "n8n", "Zapier", "APIs"],
    stats: "70%",
    statsLabel: "de tâches manuelles en moins",
  },
  {
    icon: Bot,
    title: "Agents IA",
    description: "Agents IA greffés sur vos opérations : support, qualification, contenus.",
    tools: ["Claude", "OpenAI", "Agents custom"],
    stats: "24/7",
    statsLabel: "disponibilité sans embauche",
  },
  {
    icon: BarChart3,
    title: "Pilotage augmenté",
    description: "Dashboards centralisés + analyse IA des tendances et performances.",
    tools: ["Meta Ads", "Analytics", "CRM", "Shopify"],
    stats: "×3",
    statsLabel: "plus rapide dans vos décisions",
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
              {/* Big stat */}
              <div className="text-center mb-6">
                <div className="text-5xl md:text-6xl font-black text-gradient-copper mb-1">
                  {pillar.stats}
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                  {pillar.statsLabel}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-primary/10 w-fit mx-auto mb-5">
                <pillar.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-center">{pillar.title}</h3>
              <p className="text-muted-foreground text-lg mb-6 flex-1 text-center">{pillar.description}</p>

              <div className="flex flex-wrap gap-2 justify-center pt-4 border-t border-border">
                {pillar.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
