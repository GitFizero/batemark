import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionFade } from "@/components/ui/SectionFade";
import bgImage from "@/assets/bg-4.svg";

const faqs = [
  {
    question: "Quel type d'entreprise accompagnes-tu avec l'IA ?",
    answer:
      "J'accompagne des entreprises de toutes tailles — PME, TPE, indépendants et grands comptes — dans des secteurs variés : hôtellerie-restauration, BTP et artisanat, e-commerce, immobilier, santé, cabinets comptables, avocats, salons de beauté, agences marketing et bien d'autres. Dès lors que votre activité comporte des tâches répétitives, de la gestion de données ou un besoin d'acquisition client, l'intelligence artificielle peut vous faire gagner un temps considérable et améliorer vos résultats.",
  },
  {
    question: "Combien de temps faut-il pour voir des résultats concrets avec l'IA ?",
    answer:
      "La plupart de mes clients constatent des résultats mesurables dès le premier mois : réduction du temps de traitement administratif, augmentation du taux de réponse aux prospects, automatisation des relances ou amélioration du taux de conversion. L'implémentation initiale prend en moyenne 2 à 4 semaines selon la complexité du projet. Certains workflows simples — comme l'automatisation des réponses aux avis Google ou la génération de devis — peuvent être opérationnels en quelques jours seulement.",
  },
  {
    question: "Combien coûte un accompagnement consultant IA ?",
    answer:
      "Chaque mission est sur-mesure et adaptée à votre budget. Le tarif dépend du périmètre défini ensemble lors de l'appel découverte gratuit de 30 minutes. Contrairement à une agence qui facture des dizaines de milliers d'euros, un consultant IA indépendant comme Batemark propose des prestations accessibles, avec un retour sur investissement rapide et mesurable. Pas d'abonnement caché, pas d'engagement longue durée — vous payez pour des résultats concrets.",
  },
  {
    question: "Je n'ai pas de données structurées, est-ce quand même possible d'utiliser l'IA ?",
    answer:
      "Absolument. C'est même l'un des cas les plus fréquents. L'audit initial que je réalise sert justement à cartographier vos données existantes — fichiers Excel, emails, CRM, factures, échanges clients — et à construire les bases nécessaires pour exploiter l'intelligence artificielle. Je vous aide à structurer vos informations et à mettre en place des outils adaptés (Make, n8n, Airtable, Notion) pour que l'IA puisse travailler efficacement sur vos données.",
  },
  {
    question: "Pourquoi choisir un consultant IA plutôt qu'une agence digitale ?",
    answer:
      "Une agence vous vend des heures de travail, souvent exécutées par des profils juniors, avec des process standardisés. En tant que consultant IA spécialisé, je livre des systèmes qui tournent en autonomie — chatbots, automatisations, workflows intelligents — avec des résultats mesurables et un coût bien inférieur. Vous avez un interlocuteur unique qui connaît votre métier, vos outils et vos objectifs. Le transfert de compétences est inclus : vous devenez autonome, sans dépendance.",
  },
  {
    question: "Y a-t-il un engagement minimum ou un abonnement ?",
    answer:
      "Non, aucun engagement longue durée. On commence par une mission bien définie avec des objectifs clairs, et on continue uniquement si les résultats sont au rendez-vous — ce qui est généralement le cas. Cette approche sans risque vous permet de tester l'accompagnement IA avant de vous engager sur des projets plus ambitieux. La majorité de mes clients poursuivent la collaboration après la première mission.",
  },
  {
    question: "Comment l'IA peut-elle aider mon hôtel ou restaurant ?",
    answer:
      "L'intelligence artificielle transforme la gestion hôtelière et la restauration à plusieurs niveaux. Pour un hôtel, l'IA permet d'automatiser la gestion des réservations (booking, Airbnb, site direct), de répondre instantanément aux avis clients sur Google et TripAdvisor, d'optimiser le revenue management en ajustant les tarifs en temps réel selon la demande, et de personnaliser l'expérience client avec des emails de bienvenue et de suivi automatisés. Pour un restaurant, l'IA peut gérer les réservations en ligne, automatiser les réponses aux avis, optimiser la gestion des stocks alimentaires pour réduire le gaspillage, et créer du contenu marketing (publications réseaux sociaux, descriptions de menus) en quelques secondes.",
  },
  {
    question: "L'IA est-elle adaptée aux artisans et entreprises du BTP ?",
    answer:
      "Oui, le secteur du BTP et de l'artisanat bénéficie énormément de l'intelligence artificielle. Les cas d'usage les plus fréquents incluent : la génération automatique de devis à partir de métrés ou de descriptifs de chantier, l'optimisation du planning de chantier et de la gestion des équipes, l'automatisation de la facturation et du suivi de paiement, la relance automatique des prospects ayant demandé un devis, et la gestion documentaire intelligente (PPSPS, DOE, plans). Un artisan ou une entreprise du BTP peut économiser 10 à 15 heures par semaine sur les tâches administratives grâce à des automatisations IA bien configurées.",
  },
  {
    question: "Comment automatiser ma prospection commerciale avec l'IA ?",
    answer:
      "L'automatisation de la prospection commerciale par l'IA est l'un des leviers les plus puissants pour les entreprises B2B et B2C. Concrètement, je mets en place des systèmes qui : identifient automatiquement vos prospects idéaux sur LinkedIn, Google Maps ou des annuaires professionnels, génèrent des séquences d'emails personnalisés grâce à l'IA (cold emailing intelligent), automatisent les relances et le suivi dans votre CRM, qualifient les leads entrants avec un chatbot IA sur votre site web, et créent du contenu ciblé pour attirer des prospects via le référencement naturel. Ces systèmes utilisent des outils comme Make, n8n, Clay, Lemlist et ChatGPT pour créer un pipeline de prospection qui tourne en continu, sans intervention manuelle.",
  },
  {
    question: "Quels sont les outils IA recommandés pour une PME en France ?",
    answer:
      "Pour une PME française, les outils IA les plus efficaces et accessibles sont : ChatGPT ou Claude pour la rédaction, l'analyse de documents et le brainstorming ; Make (ex-Integromat) ou n8n pour l'automatisation de workflows entre vos applications ; Zapier pour des automatisations simples et rapides ; Airtable ou Notion pour la gestion de données structurées avec IA intégrée ; Midjourney ou DALL-E pour la création visuelle ; et des solutions de chatbot IA (Tidio, Crisp, Botpress) pour le service client automatisé. Le choix des outils dépend de vos besoins spécifiques, de votre budget et de votre niveau technique. Mon rôle est de vous recommander la stack idéale et de tout configurer pour vous.",
  },
  {
    question: "Comment l'IA peut-elle aider un cabinet comptable ou un avocat ?",
    answer:
      "Les professions libérales et les cabinets (comptables, avocats, notaires, experts) gagnent un temps considérable grâce à l'IA. Pour un cabinet comptable, l'intelligence artificielle permet d'automatiser la saisie comptable, de classifier automatiquement les factures et pièces justificatives, de générer des rapports financiers et des tableaux de bord en quelques clics, et d'accélérer la préparation des bilans et liasses fiscales. Pour un cabinet d'avocats, l'IA excelle dans l'analyse rapide de documents juridiques volumineux, la recherche de jurisprudence, la rédaction assistée de conclusions et de contrats, et l'automatisation du suivi client et de la facturation. Ces outils ne remplacent pas l'expertise humaine mais libèrent un temps précieux pour se concentrer sur le conseil à haute valeur ajoutée.",
  },
  {
    question: "L'IA peut-elle améliorer les performances de mon e-commerce ?",
    answer:
      "L'intelligence artificielle est un accélérateur majeur pour les sites e-commerce. Les applications concrètes incluent : l'optimisation de la gestion des stocks grâce à la prévision de la demande par IA, l'automatisation du service client avec un chatbot intelligent capable de traiter les questions fréquentes, retours et réclamations 24h/24, la personnalisation des recommandations produits pour augmenter le panier moyen, la génération automatique de fiches produits SEO-optimisées, l'automatisation des campagnes email marketing (abandon de panier, relances, upsell), et l'analyse prédictive du comportement d'achat pour adapter vos offres. Mes clients e-commerce constatent en moyenne une hausse de 20 à 35 % du chiffre d'affaires après intégration de ces solutions IA.",
  },
  {
    question: "L'IA est-elle compatible avec le RGPD et la réglementation française ?",
    answer:
      "Oui, toutes les solutions que je déploie respectent le RGPD et la réglementation européenne en matière de protection des données. Je privilégie des outils conformes hébergés en Europe lorsque c'est possible, et je mets en place les bonnes pratiques : consentement utilisateur, minimisation des données collectées, politique de confidentialité à jour et sécurisation des accès. La conformité réglementaire fait partie intégrante de chaque projet d'intégration IA que j'accompagne.",
  },
];

export const FAQSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

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
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Questions fréquentes sur l'intégration de{" "}
            <span className="text-gradient-copper">l'IA en entreprise</span>
          </h2>
          <p className="text-lg sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Tout ce que les professionnels nous demandent avant d'intégrer
            l'intelligence artificielle
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-premium border-none data-[state=open]:border-copper/30"
              >
                <AccordionTrigger className="text-left text-base sm:text-xl font-semibold hover:text-copper transition-colors px-4 sm:px-6 py-3 sm:py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base sm:text-lg px-4 sm:px-6 pb-4 sm:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
