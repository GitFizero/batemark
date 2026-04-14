import { ConsultantToolPage, type ToolPageContent } from "@/components/sections/ConsultantToolPage";

const content: ToolPageContent = {
  toolName: "Make",
  title:
    "Consultant Make (ex-Integromat) — Automatisation no-code pour PME en France",
  description:
    "Consultant Make certifié : conception et déploiement de scénarios d'automatisation pour PME. Intégration CRM, IA (Claude, ChatGPT), Airtable, HubSpot, Stripe. Audit gratuit, ROI mesurable dès le premier mois.",
  keywords:
    "consultant make, expert make integromat, make freelance, automatisation make, scénario make, integromat consultant, make ia",
  path: "/consultant-make",
  intro:
    "Make (anciennement Integromat) est l'outil d'automatisation no-code le plus visuel du marché : une interface en cartographie qui rend lisibles vos process les plus complexes. J'accompagne les PME à concevoir des scénarios Make robustes, à coût maîtrisé, connectés à vos outils métier (HubSpot, Pipedrive, Airtable, Notion, Stripe, Shopify, Gmail) et aux LLM (Claude, ChatGPT, Gemini).",
  useCases: [
    {
      title: "Tunnel de vente automatisé",
      description:
        "Lead Calendly → enrichissement → scoring IA → CRM HubSpot → séquence email + relance SMS si pas de réponse en 48h.",
    },
    {
      title: "Génération de devis IA",
      description:
        "Brief client → ChatGPT structure le devis → PDF généré → envoi DocuSign → relance automatique J+3, J+7, J+14.",
    },
    {
      title: "Synchronisation Airtable ↔ Notion ↔ Slack",
      description:
        "Une seule source de vérité, propagée en temps réel sur tous vos outils, sans double saisie.",
    },
    {
      title: "Avis Google automatisés",
      description:
        "Fin de prestation détectée dans le CRM → SMS + email demande d'avis → escalade si insatisfaction avant publication.",
    },
    {
      title: "Reporting client mensuel",
      description:
        "Consolidation Google Ads + Meta + GA4 + Stripe → résumé Claude → PDF blanc personnalisé → envoi le 1er du mois.",
    },
    {
      title: "Onboarding employé",
      description:
        "Signature du contrat → création comptes Google/Slack/Notion → planning RH → kit de bienvenue → tâches manager.",
    },
  ],
  arguments: [
    {
      title: "Visualisation puissante des process",
      description:
        "Make affiche vos automatisations comme une carte mentale. Idéal pour aligner les équipes : un dirigeant non-technique peut comprendre l'ensemble du flux en quelques secondes — un avantage décisif lors des phases de cadrage et de transmission.",
    },
    {
      title: "Opérations granulaires = optimisation fine",
      description:
        "Contrairement à Zapier qui facture la tâche, Make facture l'opération (chaque étape). Avec un consultant, on sait optimiser : grouper, filtrer en amont, utiliser les routeurs intelligents. Résultat : -40 à -70% sur la facture mensuelle.",
    },
    {
      title: "1500+ intégrations + HTTP/Webhook universel",
      description:
        "Quand une intégration native n'existe pas, Make permet d'appeler n'importe quelle API REST. Vos outils maison ou de niche s'intègrent en 30 minutes au lieu de 3 jours de dev.",
    },
    {
      title: "Hébergement européen",
      description:
        "Make est hébergé en République tchèque (UE), conformité RGPD native — un argument important pour la santé, le juridique, la finance.",
    },
  ],
  faq: [
    {
      question: "Quelle est la différence entre Make, Integromat et Zapier ?",
      answer:
        "Make est le nouveau nom d'Integromat (rebrandé en 2022). C'est le même outil, en mieux. Vs Zapier : Make est plus visuel, plus puissant pour les workflows complexes (routeurs, itérations, agrégations), et souvent moins cher à volume égal. Zapier reste légèrement plus simple pour les automatisations basiques.",
    },
    {
      question: "Combien coûte Make ?",
      answer:
        "Plan gratuit : 1000 opérations/mois. Plans payants : à partir de 9$/mois (10 000 opérations) jusqu'à des plans entreprise sur-mesure. La majorité des PME que j'accompagne sont sur le plan Pro (16$/mois, 10 000 ops) ou Teams (29$/mois, 10 000 ops avec collaboration).",
    },
    {
      question: "Peut-on connecter Claude ou ChatGPT à Make ?",
      answer:
        "Oui, nativement. Make dispose de modules officiels Anthropic (Claude), OpenAI (ChatGPT), Google Gemini, Mistral, et Perplexity. On construit en quelques heures des agents IA déclencheurs (analyse d'email, génération de réponses, scoring de leads, classification).",
    },
    {
      question: "Faut-il être développeur ?",
      answer:
        "Non, Make est full no-code. Les seules notions techniques utiles : comprendre un JSON et lire une doc d'API. Mes clients (dirigeants, RH, marketeurs) reprennent la main sans coder après une session de transfert de 2h.",
    },
    {
      question: "Comment savoir si Make est le bon outil pour mon entreprise ?",
      answer:
        "Make est idéal si : vous avez 3+ outils SaaS à connecter, des workflows à branches conditionnelles, ou besoin d'IA dans vos automatisations. Il est moins pertinent si vous avez très gros volumes (>100k ops/mois → préférer n8n self-hosted) ou besoin de simplicité maximale (Zapier suffit). L'audit gratuit clarifie le choix.",
    },
    {
      question: "Combien coûte une mission de conseil Make ?",
      answer:
        "Audit + 1er scénario : à partir de 1 200€. Setup complet (5-10 scénarios + IA + documentation) : 3 500 à 10 000€. Tarifs annoncés en transparence après l'appel découverte gratuit.",
    },
  ],
  related: [
    { label: "Consultant n8n", to: "/consultant-n8n" },
    { label: "Consultant Zapier", to: "/consultant-zapier" },
    { label: "Librairie d'agents IA prêts à déployer", to: "/librairie-ia" },
    { label: "Simulateur de ROI IA", to: "/simulateur-ia" },
  ],
};

const ConsultantMake = () => <ConsultantToolPage content={content} />;

export default ConsultantMake;
