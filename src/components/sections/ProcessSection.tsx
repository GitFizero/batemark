import { motion } from "framer-motion";
import { Search, ListChecks, Rocket, RefreshCw } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";
import bgImage from "@/assets/bg-3.svg";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit & diagnostic IA de votre entreprise",
    description: "On cartographie ensemble vos processus métier, vos outils actuels et vos objectifs de croissance. Que vous soyez dans l'hôtellerie, l'e-commerce, le BTP ou le juridique, nous identifions les tâches automatisables et les leviers d'acquisition à fort potentiel. Livrable : rapport d'audit IA complet avec recommandations prioritaires.",
    duration: "Semaine 1",
  },
  {
    icon: ListChecks,
    number: "02",
    title: "Plan d'action & stratégie d'intégration IA",
    description: "Nous définissons les systèmes IA à construire, les outils à connecter (CRM, Meta Ads, Google Ads, mailing, ERP) et les KPIs à suivre. Chaque plan est adapté à votre secteur : automatisation de devis pour artisans, système de réservation IA pour hôtels, tunnel d'acquisition pour e-commerce. Livrable : roadmap détaillée avec calendrier et indicateurs de succès.",
    duration: "Semaine 2",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Exécution & déploiement des systèmes IA",
    description: "Nous livrons les automatisations, portails clients, dashboards décisionnels et campagnes d'acquisition IA. Intégration avec vos outils existants, tests et mise en production. Premiers résultats mesurables dès le premier mois : leads générés, heures économisées, chiffre d'affaires additionnel. Livrables : systèmes fonctionnels, documentation et formation de vos équipes.",
    duration: "Semaines 3-6",
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Suivi, itération & optimisation continue",
    description: "On mesure les performances de chaque système IA déployé, on ajuste les campagnes d'acquisition, on optimise les automatisations opérationnelles en continu. Reporting mensuel avec analyse des KPIs et recommandations d'amélioration pour maximiser votre retour sur investissement.",
    duration: "En continu",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
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
            Notre méthode d'intégration de <span className="text-gradient-copper">l'IA</span> dans votre entreprise
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Une méthodologie éprouvée en 4 étapes pour intégrer l'intelligence artificielle dans votre activité — de l'audit initial au déploiement opérationnel, avec des résultats mesurables dès le premier mois.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-6 md:mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="card-premium group hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="md:hidden p-2 rounded-xl bg-primary/10 shrink-0">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-base sm:text-lg">{step.description}</p>
                </div>
              </div>

              <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-primary/20 items-center justify-center border-2 border-primary/40 z-10">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-base sm:text-lg text-muted-foreground mt-12 max-w-4xl mx-auto"
        >
          Notre méthode d'intégration IA s'adapte aux spécificités de chaque secteur : gestion de réservations et expérience client pour l'hôtellerie-restauration, automatisation de devis et suivi de chantier pour le BTP et les artisans, tunnels de vente et gestion de stock pour l'e-commerce, gestion de dossiers pour les cabinets juridiques, prise de rendez-vous intelligente pour la santé et la beauté, et prospection automatisée pour l'immobilier. Quel que soit votre métier, Batemark conçoit un système IA sur mesure, adapté à vos process et à vos objectifs.
        </motion.p>
      </div>
    </section>
  );
};
