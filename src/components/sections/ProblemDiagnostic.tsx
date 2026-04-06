import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Lightbulb,
  Target,
  Search,
  BarChart2,
  Calendar,
  PenTool,
  Database,
  ExternalLink,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AmbientOrb } from "@/components/ui/AmbientGlow";

interface Tool {
  name: string;
  description: string;
  howItHelps: string;
  logoUrl: string;
  ctaUrl: string;
  isInternal: boolean;
  ctaLabel: string;
}

interface Problem {
  id: number;
  icon: React.ElementType;
  title: string;
  tools: Tool[];
}

const PROBLEMS: Problem[] = [
  {
    id: 1,
    icon: Clock,
    title: "Je perds trop de temps sur des tâches répétitives à faible valeur ajoutée",
    tools: [
      {
        name: "Make",
        description: "Plateforme d'automatisation visuelle no-code",
        howItHelps: "Crée des workflows automatiques entre tes apps (CRM, email, facturation…) sans toucher à une ligne de code. Économise 5 à 10h/semaine dès le 1er mois.",
        logoUrl: "https://logo.clearbit.com/make.com",
        ctaUrl: "/librairie-ia",
        isInternal: true,
        ctaLabel: "Voir Make dans la librairie",
      },
      {
        name: "Notion AI",
        description: "Espace de travail tout-en-un augmenté par l'IA",
        howItHelps: "Centralise tes process, automatise les récapitulatifs de réunion et génère des contenus directement dans ton espace de travail.",
        logoUrl: "https://logo.clearbit.com/notion.so",
        ctaUrl: "/librairie-ia",
        isInternal: true,
        ctaLabel: "Voir Notion dans la librairie",
      },
    ],
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Je ne sais pas par où commencer avec l'IA",
    tools: [
      {
        name: "Claude",
        description: "Assistant IA généraliste d'Anthropic",
        howItHelps: "Idéal pour rédiger, analyser des documents, répondre à des questions complexes et automatiser ta réflexion. Un point d'entrée parfait pour débuter avec l'IA.",
        logoUrl: "https://logo.clearbit.com/anthropic.com",
        ctaUrl: "/librairie-ia",
        isInternal: true,
        ctaLabel: "Voir Claude dans la librairie",
      },
      {
        name: "ChatGPT",
        description: "Assistant IA généraliste d'OpenAI",
        howItHelps: "Le plus accessible pour démarrer : rédaction, recherche, code, stratégie… Un compagnon polyvalent pour tester l'IA au quotidien sans pré-requis technique.",
        logoUrl: "https://logo.clearbit.com/openai.com",
        ctaUrl: "https://chatgpt.com",
        isInternal: false,
        ctaLabel: "Essayer ChatGPT",
      },
    ],
  },
  {
    id: 3,
    icon: Target,
    title: "Mes prospects ne sont pas assez relancés, j'en perds beaucoup",
    tools: [
      {
        name: "Brevo",
        description: "CRM + email marketing + automation",
        howItHelps: "Séquences de relance automatiques, scoring de leads, emails personnalisés déclenchés par comportement. Tes prospects sont relancés au bon moment, sans effort manuel.",
        logoUrl: "https://logo.clearbit.com/brevo.com",
        ctaUrl: "https://brevo.com",
        isInternal: false,
        ctaLabel: "Découvrir Brevo",
      },
      {
        name: "Make",
        description: "Plateforme d'automatisation visuelle no-code",
        howItHelps: "Connecte ton CRM à tes outils de communication pour déclencher automatiquement des relances email, SMS ou Slack selon l'étape du prospect.",
        logoUrl: "https://logo.clearbit.com/make.com",
        ctaUrl: "/librairie-ia",
        isInternal: true,
        ctaLabel: "Voir Make dans la librairie",
      },
    ],
  },
  {
    id: 4,
    icon: Search,
    title: "J'ai aucune visibilité en ligne, personne ne me trouve",
    tools: [
      {
        name: "Semrush",
        description: "Suite SEO tout-en-un",
        howItHelps: "Analyse les mots-clés de ta niche, audite ton site, surveille tes concurrents. Construis une stratégie de contenu qui te positionne sur Google durablement.",
        logoUrl: "https://logo.clearbit.com/semrush.com",
        ctaUrl: "https://semrush.com",
        isInternal: false,
        ctaLabel: "Découvrir Semrush",
      },
      {
        name: "Meta Business Suite",
        description: "Gestion publicitaire Facebook & Instagram",
        howItHelps: "Lance des campagnes ciblées sur ta clientèle idéale avec un budget maîtrisé. Idéal pour générer de la notoriété locale et des leads qualifiés rapidement.",
        logoUrl: "https://logo.clearbit.com/facebook.com",
        ctaUrl: "https://business.facebook.com",
        isInternal: false,
        ctaLabel: "Accéder à Meta Business",
      },
    ],
  },
  {
    id: 5,
    icon: BarChart2,
    title: "Mon équipe passe des heures sur le reporting et les tableaux de bord",
    tools: [
      {
        name: "Looker Studio",
        description: "Outil de data visualisation de Google (gratuit)",
        howItHelps: "Crée des dashboards dynamiques connectés à tes sources de données (GA4, Sheets, CRM). Tes rapports se mettent à jour automatiquement, sans effort hebdomadaire.",
        logoUrl: "https://logo.clearbit.com/google.com",
        ctaUrl: "https://lookerstudio.google.com",
        isInternal: false,
        ctaLabel: "Découvrir Looker Studio",
      },
      {
        name: "Notion",
        description: "Espace de travail tout-en-un",
        howItHelps: "Centralise tes bases de données opérationnelles et crée des vues filtrées par équipe. Fini les exports Excel manuels : tout est visible en temps réel.",
        logoUrl: "https://logo.clearbit.com/notion.so",
        ctaUrl: "/librairie-ia",
        isInternal: true,
        ctaLabel: "Voir Notion dans la librairie",
      },
    ],
  },
  {
    id: 6,
    icon: Calendar,
    title: "J'aimerais automatiser la prise de rendez-vous",
    tools: [
      {
        name: "Cal.com",
        description: "Scheduling open-source, 100% personnalisable",
        howItHelps: "Page de réservation à ton image, synchronisée avec ton agenda. Les clients bookent directement, les rappels sont automatiques, les no-shows diminuent.",
        logoUrl: "https://logo.clearbit.com/cal.com",
        ctaUrl: "https://cal.com",
        isInternal: false,
        ctaLabel: "Découvrir Cal.com",
      },
      {
        name: "Calendly",
        description: "Solution de prise de rendez-vous en ligne",
        howItHelps: "Intègre un lien de réservation à tes emails et site web. Elimine les allers-retours pour trouver un créneau et synchronise avec Zoom, Google Meet et ton CRM.",
        logoUrl: "https://logo.clearbit.com/calendly.com",
        ctaUrl: "https://calendly.com",
        isInternal: false,
        ctaLabel: "Découvrir Calendly",
      },
    ],
  },
  {
    id: 7,
    icon: PenTool,
    title: "J'aimerais créer du contenu mais je n'ai pas le temps",
    tools: [
      {
        name: "Claude",
        description: "Assistant IA de rédaction avancé",
        howItHelps: "Génère articles de blog, posts LinkedIn, emails, scripts vidéo en quelques secondes. Donne-lui ton brief et ton ton de voix : il rédige, tu peaufines.",
        logoUrl: "https://logo.clearbit.com/anthropic.com",
        ctaUrl: "/librairie-ia",
        isInternal: true,
        ctaLabel: "Voir Claude dans la librairie",
      },
      {
        name: "Canva",
        description: "Création de visuels pro sans designer",
        howItHelps: "Templates prêts à l'emploi pour posts, stories, présentations. Avec Canva AI, génère des visuels et du texte en quelques clics, même sans expérience en design.",
        logoUrl: "https://logo.clearbit.com/canva.com",
        ctaUrl: "/librairie-ia",
        isInternal: true,
        ctaLabel: "Voir Canva dans la librairie",
      },
    ],
  },
  {
    id: 8,
    icon: Database,
    title: "Je veux mieux comprendre mes données clients",
    tools: [
      {
        name: "HubSpot CRM",
        description: "CRM complet avec analytics clients intégrés",
        howItHelps: "Centralise toutes les interactions clients, visualise le parcours d'achat, identifie tes meilleurs segments. Prends des décisions basées sur la donnée réelle.",
        logoUrl: "https://logo.clearbit.com/hubspot.com",
        ctaUrl: "https://hubspot.com",
        isInternal: false,
        ctaLabel: "Découvrir HubSpot CRM",
      },
      {
        name: "Google Analytics 4",
        description: "Analytics web & app de Google (gratuit)",
        howItHelps: "Comprends le comportement de tes visiteurs, les pages qui convertissent, les sources de trafic rentables. Optimise ton site et tes campagnes avec des données précises.",
        logoUrl: "https://logo.clearbit.com/google.com",
        ctaUrl: "https://analytics.google.com",
        isInternal: false,
        ctaLabel: "Accéder à GA4",
      },
    ],
  },
];

export const ProblemDiagnostic = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const selectedProblem = PROBLEMS.find((p) => p.id === selectedId);

  return (
    <section className="section-padding relative overflow-hidden">
      <AmbientOrb color="copper" size="lg" position="top-left" intensity={0.05} />
      <AmbientOrb color="blue" size="md" position="bottom-right" intensity={0.04} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-widest text-[#c4956e] font-medium mb-3">
            Diagnostic personnalisé
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
            Quel est votre plus gros défi{" "}
            <span className="text-gradient-copper">au quotidien ?</span>
          </h2>
          <p className="text-sm text-white/50 max-w-md mx-auto">
            Sélectionnez votre problématique principale. On vous recommande les outils IA les plus adaptés.
          </p>
        </motion.div>

        {/* Problem cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {PROBLEMS.map((problem, i) => {
            const Icon = problem.icon;
            const isSelected = selectedId === problem.id;
            return (
              <motion.button
                key={problem.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => handleSelect(problem.id)}
                className={`group relative text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#c4956e]/10 border-[#c4956e]/40 shadow-[0_0_20px_hsl(18_31%_50%_/_0.15)]"
                    : "glass-card glass-card-hover border-transparent"
                }`}
                aria-pressed={isSelected}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300 ${
                    isSelected
                      ? "bg-[#c4956e]/20"
                      : "bg-white/[0.05] group-hover:bg-[#c4956e]/10"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors duration-300 ${
                      isSelected ? "text-[#c4956e]" : "text-white/40 group-hover:text-[#c4956e]/70"
                    }`}
                  />
                </div>
                <p
                  className={`text-xs leading-relaxed transition-colors duration-300 ${
                    isSelected ? "text-white/90" : "text-white/55 group-hover:text-white/75"
                  }`}
                >
                  {problem.title}
                </p>
                {isSelected && (
                  <div className="absolute top-3 right-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c4956e]" />
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Recommendations panel */}
        <AnimatePresence mode="wait">
          {selectedProblem && (
            <motion.div
              key={selectedProblem.id}
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="border border-[#c4956e]/20 rounded-2xl p-5 sm:p-7 bg-[#c4956e]/[0.03]">
                {/* Panel header */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-1 h-full min-h-[2rem] rounded-full bg-gradient-to-b from-[#c4956e] to-[#c4956e]/20 self-stretch shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#c4956e]/70 font-medium mb-1">
                      Recommandations pour votre défi
                    </p>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {selectedProblem.title}
                    </p>
                  </div>
                </div>

                {/* Tool recommendations */}
                <div className={`grid gap-4 ${selectedProblem.tools.length === 1 ? "" : "sm:grid-cols-2"}`}>
                  {selectedProblem.tools.map((tool, i) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="glass-card p-5 flex flex-col gap-4"
                    >
                      {/* Tool header */}
                      <div className="flex items-center gap-3">
                        <img
                          src={tool.logoUrl}
                          alt={tool.name}
                          className="h-10 w-10 object-contain shrink-0 rounded-xl bg-white p-1"
                          loading="lazy"
                          onError={(e) => {
                            const el = e.currentTarget;
                            el.style.display = "none";
                            const fallback = el.nextElementSibling as HTMLElement | null;
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                        <div
                          className="h-10 w-10 rounded-xl bg-white/10 shrink-0 items-center justify-center text-[#c4956e] font-bold text-sm"
                          style={{ display: "none" }}
                        >
                          {tool.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white">{tool.name}</h3>
                          <p className="text-xs text-white/40">{tool.description}</p>
                        </div>
                      </div>

                      {/* How it helps */}
                      <p className="text-xs text-white/60 leading-relaxed flex-1">
                        {tool.howItHelps}
                      </p>

                      {/* CTA */}
                      {tool.isInternal ? (
                        <Button
                          variant="heroOutline"
                          size="sm"
                          className="w-full text-xs justify-between group"
                          asChild
                        >
                          <a href={tool.ctaUrl}>
                            {tool.ctaLabel}
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-xs justify-between group border-white/10 hover:border-white/20 hover:bg-white/5"
                          asChild
                        >
                          <a href={tool.ctaUrl} target="_blank" rel="noopener noreferrer">
                            {tool.ctaLabel}
                            <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60 transition-colors" />
                          </a>
                        </Button>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Bottom hint */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-center mt-5 text-xs text-white/30"
                >
                  Besoin d'aide pour mettre en place ces outils ?{" "}
                  <a
                    href="#contact"
                    className="text-[#c4956e]/70 hover:text-[#c4956e] underline underline-offset-2 transition-colors"
                  >
                    Prendre un appel découverte gratuit
                  </a>
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* If nothing selected yet */}
        <AnimatePresence>
          {!selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-2 mt-2"
            >
              <ChevronDown className="w-3.5 h-3.5 text-white/20 animate-bounce" />
              <p className="text-xs text-white/25">Cliquez sur un défi pour voir vos recommandations</p>
              <ChevronDown className="w-3.5 h-3.5 text-white/20 animate-bounce" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
