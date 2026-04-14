import { ConsultantToolPage, type ToolPageContent } from "@/components/sections/ConsultantToolPage";

const content: ToolPageContent = {
  toolName: "n8n",
  title:
    "Consultant n8n France — Automatisation low-code et agents IA pour PME",
  description:
    "Consultant n8n indépendant : architecture, déploiement et maintenance de workflows n8n self-hosted ou cloud. Intégration avec Claude, ChatGPT, Make, Zapier. Audit gratuit pour TPE/PME.",
  keywords:
    "consultant n8n, expert n8n france, n8n freelance, n8n self hosted, automatisation n8n, agents ia n8n, alternative zapier, alternative make",
  path: "/consultant-n8n",
  intro:
    "n8n est l'alternative open-source la plus puissante à Make et Zapier — sans limite de tâches, hébergeable sur votre serveur, parfaite pour automatiser vos process métier sans dépendre d'un éditeur SaaS. J'accompagne les TPE/PME françaises dans la conception, le déploiement et la maintenance de workflows n8n robustes connectés à Claude, ChatGPT, votre CRM et votre base de données.",
  useCases: [
    {
      title: "Prospection B2B automatisée",
      description:
        "Scraping LinkedIn → enrichissement Apollo/Dropcontact → personnalisation Claude → envoi via Lemlist + tracking dans HubSpot.",
    },
    {
      title: "Reporting automatisé multi-sources",
      description:
        "Consolidation Stripe, Shopify, Google Ads, Meta dans Google Sheets / Looker Studio, livré chaque lundi à 8h.",
    },
    {
      title: "Service client IA",
      description:
        "Réception emails Gmail → classification GPT-4 → réponses pré-rédigées → escalade humaine si confiance < 80%.",
    },
    {
      title: "Onboarding clients sans frottement",
      description:
        "Formulaire Tally → création dossier Notion + Drive + Slack → envoi welcome email + facture Stripe en automatique.",
    },
    {
      title: "Veille concurrentielle quotidienne",
      description:
        "Crawler RSS + Google Alerts → résumé Claude → envoi digest Slack chaque matin avec scoring d'opportunité.",
    },
    {
      title: "Agents IA personnalisés",
      description:
        "Workflows AI Agent natifs n8n : un agent qui interroge votre base, réfléchit, agit (envoyer email, créer ticket, mettre à jour CRM).",
    },
  ],
  arguments: [
    {
      title: "Coût maîtrisé : zéro coût par tâche",
      description:
        "Contrairement à Zapier (facturé à la tâche) ou Make (facturé à l'opération), n8n self-hosted est gratuit : un VPS à 10€/mois absorbe des dizaines de milliers d'exécutions. Un workflow Zapier à 800€/mois se réplique souvent sous n8n pour 30€/mois d'infra.",
    },
    {
      title: "Souveraineté et conformité RGPD",
      description:
        "Hébergement en France (OVH, Scaleway, Hetzner) : vos données ne quittent jamais votre infrastructure. Idéal pour la santé, le juridique, la gestion patrimoniale, ou tout secteur sensible.",
    },
    {
      title: "Puissance des AI Agents natifs",
      description:
        "n8n intègre nativement les LLM (OpenAI, Anthropic, Mistral, Ollama) avec des nœuds AI Agent qui chaînent raisonnement + actions. Vous construisez en une après-midi des agents que vous payeriez 5000€ chez un éditeur.",
    },
    {
      title: "Maintenable sans dette technique",
      description:
        "Versionnement Git natif, exports JSON, environnements staging/prod. Vos workflows sont documentés, audités, et survivent au turnover.",
    },
  ],
  faq: [
    {
      question: "n8n est-il vraiment gratuit ?",
      answer:
        "Oui en self-hosted : vous payez uniquement l'hébergement (10 à 30€/mois pour un VPS qui couvre la majorité des besoins PME). La version Cloud n8n démarre à 20€/mois si vous ne voulez pas gérer le serveur.",
    },
    {
      question: "Faut-il être développeur pour utiliser n8n ?",
      answer:
        "Non. L'interface est visuelle, comme Make ou Zapier. La courbe d'apprentissage est légèrement plus technique car n8n expose plus de réglages (idéal pour des cas avancés), mais une fois construits par un consultant, vos workflows se maintiennent sans coder.",
    },
    {
      question: "Comment migrer de Zapier ou Make vers n8n ?",
      answer:
        "Je propose une migration progressive : audit des Zaps/Scénarios existants, priorisation par coût économisé, reconstruction sous n8n avec tests parallèles, puis bascule sans interruption de service. Comptez 2 à 4 semaines selon le volume.",
    },
    {
      question: "Quelle différence avec Make ou Zapier ?",
      answer:
        "Make et Zapier sont des SaaS payants à la tâche, plus simples mais plus chers à grande échelle. n8n est open-source, auto-hébergeable, illimité en exécutions, et meilleur pour les workflows IA complexes ou les données sensibles. Le bon choix dépend du volume et du contexte — j'aide à arbitrer durant l'audit.",
    },
    {
      question: "Quels LLM peut-on connecter à n8n ?",
      answer:
        "Tous : OpenAI (ChatGPT, GPT-4, GPT-5), Anthropic (Claude), Google Gemini, Mistral, Cohere, ainsi que des modèles locaux via Ollama. n8n gère aussi le RAG (Pinecone, Qdrant, Supabase Vector) pour des agents qui interrogent vos documents.",
    },
    {
      question: "Combien coûte une mission de consulting n8n ?",
      answer:
        "Un audit + 1er workflow opérationnel : à partir de 1 500€. Un déploiement complet (3-5 workflows + IA + documentation) : 4 000 à 12 000€. Chaque devis est sur-mesure après l'appel découverte gratuit.",
    },
  ],
  related: [
    { label: "Consultant Make", to: "/consultant-make" },
    { label: "Consultant Zapier", to: "/consultant-zapier" },
    { label: "Librairie d'agents IA prêts à déployer", to: "/librairie-ia" },
    { label: "Simulateur de ROI IA", to: "/simulateur-ia" },
  ],
};

const ConsultantN8n = () => <ConsultantToolPage content={content} />;

export default ConsultantN8n;
