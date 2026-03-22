import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle2, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// --- Types ---
interface AiTool {
  id: string;
  name: string;
  description: string;
  category: string;
  affiliate_url: string;
  logo_url: string | null;
}

interface SimulateurResult {
  strategyTitle: string;
  strategyDescription: string;
  tools: AiTool[];
  keyBenefits: string[];
}

// --- Question config ---
const sectors = [
  { value: "hotellerie", label: "Hôtellerie", emoji: "🏨" },
  { value: "restauration", label: "Restauration", emoji: "🍽️" },
  { value: "ecommerce", label: "E-commerce", emoji: "🛒" },
  { value: "services", label: "Services / Agences", emoji: "💼" },
  { value: "bienetre", label: "Bien-être / Spa", emoji: "🧘" },
  { value: "autre", label: "Autre secteur", emoji: "🏢" },
];

const needs = [
  { value: "acquisition", label: "Améliorer l'acquisition client", emoji: "📈" },
  { value: "process", label: "Automatiser les process internes", emoji: "⚙️" },
  { value: "relation", label: "Gérer la relation client (avis, CRM)", emoji: "💬" },
  { value: "contenu", label: "Créer du contenu marketing", emoji: "✍️" },
  { value: "pilotage", label: "Piloter avec des dashboards", emoji: "📊" },
];

const teamSizes = [
  { value: "solo", label: "Solo / 1-3 personnes", emoji: "👤" },
  { value: "small", label: "4-10 personnes", emoji: "👥" },
  { value: "medium", label: "11-50 personnes", emoji: "🏢" },
  { value: "large", label: "50+ personnes", emoji: "🏗️" },
];

const budgets = [
  { value: "starter", label: "< 500€ / mois", emoji: "💰" },
  { value: "growth", label: "500 – 2 000€ / mois", emoji: "💰💰" },
  { value: "scale", label: "2 000 – 5 000€ / mois", emoji: "💰💰💰" },
  { value: "premium", label: "5 000€+ / mois", emoji: "🚀" },
];

const maturities = [
  { value: "debutant", label: "Débutant — Aucun outil IA en place", emoji: "🌱" },
  { value: "intermediaire", label: "Quelques outils utilisés", emoji: "🌿" },
  { value: "avance", label: "Avancé — IA déjà intégrée", emoji: "🌳" },
];

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

// --- Tool recommendation logic ---
function getToolCategories(need: string): string[] {
  switch (need) {
    case "acquisition":
      return ["Prospection & CRM", "Automatisation & No-Code"];
    case "process":
      return ["Automatisation & No-Code", "Réunions & Productivité"];
    case "relation":
      return ["Prospection & CRM", "Automatisation & No-Code"];
    case "contenu":
      return ["Rédaction & Contenu", "Création visuelle"];
    case "pilotage":
      return ["Automatisation & No-Code", "Réunions & Productivité"];
    default:
      return ["Automatisation & No-Code", "Prospection & CRM"];
  }
}

function getStrategy(sector: string, need: string, teamSize: string, budget: string): SimulateurResult {
  const sectorLabel = sectors.find(s => s.value === sector)?.label || sector;
  const needLabel = needs.find(n => n.value === need)?.label || need;

  const strategies: Record<string, { title: string; description: string; benefits: string[] }> = {
    "acquisition": {
      title: `Stratégie d'acquisition IA pour ${sectorLabel}`,
      description: `Pour un acteur en ${sectorLabel.toLowerCase()}, l'IA permet de générer des leads qualifiés en automatique, de personnaliser chaque point de contact et de multiplier votre ROAS. On déploie un système de prospection automatisée couplé à des workflows intelligents qui tournent 24h/24.`,
      benefits: [
        "Génération de leads automatisée",
        "Séquences email/LinkedIn personnalisées par l'IA",
        "Suivi et qualification des prospects sans effort manuel",
        "ROAS multiplié grâce à l'optimisation IA",
      ],
    },
    "process": {
      title: `Automatisation des process pour ${sectorLabel}`,
      description: `En ${sectorLabel.toLowerCase()}, les tâches répétitives consomment en moyenne 6 à 8 heures par semaine par personne. L'IA permet d'automatiser les confirmations, relances, reporting et gestion administrative pour libérer vos équipes sur les tâches à haute valeur ajoutée.`,
      benefits: [
        "6 à 8h récupérées par personne et par semaine",
        "Workflows automatisés (confirmations, relances, rappels)",
        "Réduction des erreurs humaines",
        "Scalabilité sans recruter",
      ],
    },
    "relation": {
      title: `Gestion client IA pour ${sectorLabel}`,
      description: `Dans le ${sectorLabel.toLowerCase()}, la relation client est clé. L'IA permet de répondre automatiquement aux avis, de qualifier les demandes entrantes 24h/24 via chatbot, et de centraliser toutes vos interactions dans un CRM intelligent qui enrichit automatiquement vos données.`,
      benefits: [
        "Réponses automatiques aux avis (Google, TripAdvisor)",
        "Chatbot IA 24h/24 pour les demandes courantes",
        "CRM enrichi automatiquement",
        "Meilleur taux de satisfaction client",
      ],
    },
    "contenu": {
      title: `Stratégie de contenu IA pour ${sectorLabel}`,
      description: `Pour un acteur en ${sectorLabel.toLowerCase()}, produire du contenu régulier est crucial mais chronophage. L'IA génère des visuels, rédige des posts réseaux sociaux, crée des newsletters et des articles SEO adaptés à votre ton — en quelques minutes au lieu de plusieurs heures.`,
      benefits: [
        "Contenu marketing généré en quelques minutes",
        "Visuels professionnels sans designer",
        "Articles SEO optimisés automatiquement",
        "Calendrier éditorial tenu sans effort",
      ],
    },
    "pilotage": {
      title: `Pilotage IA pour ${sectorLabel}`,
      description: `Piloter sans data, c'est naviguer à l'aveugle. Pour le ${sectorLabel.toLowerCase()}, on connecte vos outils existants à des dashboards intelligents qui centralisent vos KPIs, détectent les anomalies et vous alertent avant qu'un problème ne devienne critique.`,
      benefits: [
        "Dashboards temps réel connectés à vos outils",
        "Alertes automatiques sur les anomalies",
        "Décisions data-driven",
        "Reporting automatisé (hebdo/mensuel)",
      ],
    },
  };

  const strategy = strategies[need] || strategies["process"];

  return {
    strategyTitle: strategy.title,
    strategyDescription: strategy.description,
    tools: [], // Will be filled from Supabase
    keyBenefits: strategy.benefits,
  };
}

// --- Component ---
interface SimulateurIAProps {
  embedded?: boolean; // true when used as a section on Index
}

export const SimulateurIA = ({ embedded = false }: SimulateurIAProps) => {
  const [step, setStep] = useState(0);
  const [sector, setSector] = useState("");
  const [need, setNeed] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [budget, setBudget] = useState("");
  const [maturity, setMaturity] = useState("");
  const [result, setResult] = useState<SimulateurResult | null>(null);
  const [allTools, setAllTools] = useState<AiTool[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTools = async () => {
      const { data } = await supabase
        .from("ai_tools")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      if (data) setAllTools(data);
    };
    fetchTools();
  }, []);

  const steps = [
    {
      title: "Quel est votre secteur d'activité ?",
      subtitle: "Pour adapter les recommandations à votre réalité métier",
      options: sectors,
      value: sector,
      onChange: setSector,
    },
    {
      title: "Quel est votre besoin principal ?",
      subtitle: "Identifions la priorité n°1 pour votre business",
      options: needs,
      value: need,
      onChange: setNeed,
    },
    {
      title: "Quelle est la taille de votre équipe ?",
      subtitle: "Pour calibrer la complexité de la solution",
      options: teamSizes,
      value: teamSize,
      onChange: setTeamSize,
    },
    {
      title: "Quel budget mensuel envisagez-vous ?",
      subtitle: "Pour recommander des outils adaptés",
      options: budgets,
      value: budget,
      onChange: setBudget,
    },
    {
      title: "Quel est votre niveau de maturité IA ?",
      subtitle: "Pour adapter le niveau d'accompagnement",
      options: maturities,
      value: maturity,
      onChange: setMaturity,
    },
  ];

  const currentStep = steps[step];
  const isLastStep = step === steps.length - 1;
  const canProceed = currentStep?.value !== "";
  const totalSteps = steps.length;

  const handleNext = () => {
    if (isLastStep && canProceed) {
      generateResult();
    } else if (canProceed) {
      setStep(step + 1);
    }
  };

  const handleOptionClick = (value: string) => {
    currentStep.onChange(value);
    // Auto-advance after selection with a short delay
    setTimeout(() => {
      if (isLastStep) {
        generateResultWithValues(value);
      } else {
        setStep(step + 1);
      }
    }, 300);
  };

  const generateResultWithValues = (lastValue: string) => {
    setLoading(true);
    const categories = getToolCategories(need);
    const recommended: AiTool[] = [];

    // Pick one tool from each preferred category
    for (const cat of categories) {
      const match = allTools.find(
        t => t.category === cat && !recommended.some(r => r.id === t.id)
      );
      if (match) recommended.push(match);
      if (recommended.length >= 2) break;
    }

    // Fallback: fill up to 2 tools
    if (recommended.length < 2) {
      for (const t of allTools) {
        if (!recommended.some(r => r.id === t.id)) {
          recommended.push(t);
          if (recommended.length >= 2) break;
        }
      }
    }

    const strategy = getStrategy(sector, need, teamSize, budget);
    strategy.tools = recommended;

    setTimeout(() => {
      setResult(strategy);
      setLoading(false);
    }, 800);
  };

  const generateResult = () => {
    generateResultWithValues(maturity);
  };

  const handleRestart = () => {
    setStep(0);
    setSector("");
    setNeed("");
    setTeamSize("");
    setBudget("");
    setMaturity("");
    setResult(null);
  };

  // --- Results screen ---
  if (result) {
    return (
      <div className={embedded ? "" : "min-h-screen pt-24"}>
        <div className="container-custom max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Votre stratégie <span className="text-gradient-copper">personnalisée</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
                Basée sur vos réponses, voici notre recommandation pour votre entreprise.
              </p>
            </div>

            {/* Strategy card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card-premium mb-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gradient-copper mb-4">
                {result.strategyTitle}
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
                {result.strategyDescription}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {result.keyBenefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recommended tools */}
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              🛠️ Outils recommandés pour vous
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {result.tools.map((tool, i) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="card-premium group hover:border-primary/30 transition-all duration-300 flex flex-col"
                >
                  {tool.logo_url && (
                    <img
                      src={tool.logo_url}
                      alt={`Logo ${tool.name}`}
                      className="h-8 w-auto object-contain mb-3"
                      loading="lazy"
                    />
                  )}
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-lg font-bold">{tool.name}</h4>
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary">
                      Recommandé
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {tool.description}
                  </p>
                  <Button variant="heroOutline" size="sm" className="w-full group/btn" asChild>
                    <a href={tool.affiliate_url} target="_blank" rel="noopener noreferrer">
                      Découvrir {tool.name}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="rounded-2xl p-8 sm:p-12 text-center"
              style={{
                background: "linear-gradient(135deg, hsl(var(--copper-dark)), hsl(var(--copper)))",
              }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-3">
                Passez à l'action
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
                Réservez un appel découverte de 30 min. On analyse vos process ensemble et on vous livre un plan d'action concret — gratuit, sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero" size="xl" className="group bg-background text-foreground hover:bg-background/90" asChild>
                  <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                    Réserver mon audit gratuit
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  variant="heroOutline"
                  size="xl"
                  onClick={handleRestart}
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Relancer le simulateur
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  // --- Loading screen ---
  if (loading) {
    return (
      <div className={`flex items-center justify-center ${embedded ? "py-20" : "min-h-screen"}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg font-semibold mb-2">Analyse en cours…</p>
          <p className="text-muted-foreground text-sm">Génération de votre stratégie personnalisée</p>
        </motion.div>
      </div>
    );
  }

  // --- Stepper ---
  return (
    <div className={embedded ? "" : "min-h-screen pt-24"}>
      <div className="container-custom max-w-2xl mx-auto px-4">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
            <span>Étape {step + 1} sur {totalSteps}</span>
            <span>{Math.round(((step + 1) / totalSteps) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(var(--copper-dark)), hsl(var(--copper)))" }}
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            {/* Question */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                {currentStep.title}
              </h2>
              <p className="text-muted-foreground text-base">
                {currentStep.subtitle}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentStep.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionClick(option.value)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-200 min-h-[56px] flex items-center gap-4 ${
                    currentStep.value === option.value
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/40 hover:bg-muted/50"
                  }`}
                >
                  <span className="text-2xl">{option.emoji}</span>
                  <span className="text-base sm:text-lg font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="ghost"
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
            className="min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Précédent
          </Button>
          <Button
            variant="hero"
            onClick={handleNext}
            disabled={!canProceed}
            className="min-h-[44px]"
          >
            {isLastStep ? "Voir ma stratégie" : "Suivant"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
