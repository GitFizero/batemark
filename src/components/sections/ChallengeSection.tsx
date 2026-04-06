import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  HelpCircle,
  Bell,
  Eye,
  BarChart2,
  CalendarCheck,
  PenTool,
  Database,
  ArrowRight,
  X,
} from "lucide-react";

interface Challenge {
  id: number;
  icon: React.ElementType;
  label: string;
  tools: {
    name: string;
    description: string;
    href: string;
    internal?: boolean;
  }[];
}

const CHALLENGES: Challenge[] = [
  {
    id: 1,
    icon: Clock,
    label: "Trop de temps sur des tâches répétitives",
    tools: [
      {
        name: "Make",
        description: "Automatise tes workflows sans coder — le plus puissant pour les PME.",
        href: "https://www.make.com",
      },
      {
        name: "Notion AI",
        description: "Centralise tes process et laisse l'IA rédiger, résumer et organiser à ta place.",
        href: "https://www.notion.so",
      },
    ],
  },
  {
    id: 2,
    icon: HelpCircle,
    label: "Ne sais pas par où commencer avec l'IA",
    tools: [
      {
        name: "ChatGPT",
        description: "Le point d'entrée le plus accessible pour explorer l'IA au quotidien.",
        href: "https://chat.openai.com",
      },
      {
        name: "Claude",
        description: "Idéal pour analyser des documents longs, rédiger et prendre des décisions.",
        href: "https://claude.ai",
      },
    ],
  },
  {
    id: 3,
    icon: Bell,
    label: "Prospects pas assez relancés",
    tools: [
      {
        name: "Brevo",
        description: "Email marketing + CRM léger pour automatiser tes séquences de relance.",
        href: "https://www.brevo.com",
      },
      {
        name: "Make",
        description: "Connecte ton CRM à tes canaux de contact pour des relances multi-canal automatiques.",
        href: "https://www.make.com",
      },
    ],
  },
  {
    id: 4,
    icon: Eye,
    label: "Aucune visibilité en ligne",
    tools: [
      {
        name: "Semrush",
        description: "Analyse ton SEO, surveille tes concurrents et trouve des mots-clés à fort potentiel.",
        href: "https://www.semrush.com",
      },
      {
        name: "Meta Business Suite",
        description: "Gère et booste ta présence sur Facebook & Instagram depuis un seul endroit.",
        href: "https://business.facebook.com",
      },
    ],
  },
  {
    id: 5,
    icon: BarChart2,
    label: "Trop de temps sur le reporting",
    tools: [
      {
        name: "Looker Studio",
        description: "Crée des dashboards visuels connectés à tes données — gratuit et puissant.",
        href: "https://lookerstudio.google.com",
      },
      {
        name: "Notion",
        description: "Centralise tes KPIs et automatise tes rapports hebdomadaires avec l'IA.",
        href: "https://www.notion.so",
      },
    ],
  },
  {
    id: 6,
    icon: CalendarCheck,
    label: "Automatiser la prise de RDV",
    tools: [
      {
        name: "Cal.com",
        description: "Prise de rendez-vous open source, intégrable partout et sans friction.",
        href: "https://cal.com",
      },
      {
        name: "Calendly",
        description: "La référence pour la planification automatique avec sync agenda Google/Outlook.",
        href: "https://calendly.com",
      },
    ],
  },
  {
    id: 7,
    icon: PenTool,
    label: "Créer du contenu sans temps",
    tools: [
      {
        name: "Claude",
        description: "Rédige des posts, emails et articles de qualité en quelques secondes.",
        href: "https://claude.ai",
      },
      {
        name: "Canva",
        description: "Crée des visuels pros avec l'IA intégrée — sans designer, sans effort.",
        href: "https://www.canva.com",
      },
    ],
  },
  {
    id: 8,
    icon: Database,
    label: "Mieux comprendre mes données clients",
    tools: [
      {
        name: "HubSpot CRM",
        description: "CRM complet et gratuit pour suivre chaque interaction client et anticiper leurs besoins.",
        href: "https://www.hubspot.com/products/crm",
      },
      {
        name: "Google Analytics 4",
        description: "Comprends le comportement de tes visiteurs et optimise tes pages qui convertissent.",
        href: "https://analytics.google.com",
      },
    ],
  },
];

export const ChallengeSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const selectedChallenge = CHALLENGES.find((c) => c.id === selected) ?? null;

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
            Quel est votre plus gros défi au quotidien ?
          </h2>
          <p className="text-sm text-white/55">
            Cliquez sur votre problématique — on vous recommande les bons outils IA.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {CHALLENGES.map((challenge, i) => {
            const Icon = challenge.icon;
            const isSelected = selected === challenge.id;
            return (
              <motion.button
                key={challenge.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setSelected(isSelected ? null : challenge.id)}
                className={`glass-card p-4 sm:p-5 text-left transition-all duration-200 cursor-pointer group border ${
                  isSelected
                    ? "border-[#C4956E]/60 bg-[#C4956E]/5"
                    : "border-white/5 hover:border-[#C4956E]/30 hover:bg-white/[0.02]"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                    isSelected ? "bg-[#C4956E]/20" : "bg-white/5 group-hover:bg-[#C4956E]/10"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isSelected ? "text-[#C4956E]" : "text-white/50 group-hover:text-[#C4956E]"
                    }`}
                  />
                </div>
                <p className="text-xs sm:text-sm text-white/75 leading-snug font-medium">
                  {challenge.label}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Recommendation panel */}
        <AnimatePresence>
          {selectedChallenge && (
            <motion.div
              key={selectedChallenge.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
              className="mt-6 glass-card p-6 sm:p-8 border border-[#C4956E]/20 relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>

              <p className="text-xs text-[#C4956E] font-medium tracking-wide uppercase mb-4">
                Outils recommandés pour : {selectedChallenge.label}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {selectedChallenge.tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#C4956E]/30 hover:bg-[#C4956E]/5 transition-all group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-white">{tool.name}</span>
                        {tool.internal && (
                          <span className="text-[10px] text-[#C4956E] border border-[#C4956E]/30 px-1.5 py-0.5 rounded-full">
                            Librairie IA
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-white/55 leading-relaxed">{tool.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/25 group-hover:text-[#C4956E] flex-shrink-0 mt-0.5 transition-colors" />
                  </a>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <p className="text-xs text-white/45 flex-1">
                  Vous voulez qu'on implémente ça pour vous ?
                </p>
                <a
                  href="https://cal.com/gaetan-batemark/audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C4956E] hover:underline flex-shrink-0"
                >
                  Réserver un audit gratuit <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
