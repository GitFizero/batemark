import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Hotel,
  Building2,
  Hammer,
  ShoppingCart,
  Heart,
  Scale,
  Sparkles,
  Megaphone,
  Building,
} from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const sectors = [
  {
    icon: Hotel,
    name: "Hôtellerie & Restauration",
    description:
      "Automatisez la gestion des réservations, des avis clients et du yield management grâce à l'IA. Réduisez vos coûts opérationnels et augmentez votre taux d'occupation sans effort supplémentaire.",
    articles: [
      { slug: "ia-hotellerie-restauration", label: "IA en hôtellerie-restauration" },
      { slug: "ia-restaurant-intelligence-artificielle", label: "IA pour restaurants" },
    ],
  },
  {
    icon: Building2,
    name: "Immobilier",
    description:
      "Optimisez la prospection, la gestion locative et la relation client avec des agents IA dédiés à l'immobilier. Automatisez les estimations, le suivi des mandats et la communication copropriété.",
    articles: [
      { slug: "ia-agence-immobiliere", label: "IA pour agences immobilières" },
      { slug: "ia-gestion-locative", label: "IA en gestion locative" },
      { slug: "ia-syndic-copropriete", label: "IA pour syndics de copropriété" },
    ],
  },
  {
    icon: Hammer,
    name: "Artisanat & BTP",
    description:
      "Générez des devis automatiquement, planifiez vos chantiers et suivez vos interventions avec l'intelligence artificielle. Gagnez du temps sur l'administratif pour vous concentrer sur votre savoir-faire.",
    articles: [
      { slug: "ia-artisan-automatisation", label: "IA pour artisans et BTP" },
    ],
  },
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    description:
      "Boostez vos ventes en ligne grâce à l'automatisation du marketing, de la gestion des stocks et de la comptabilité e-commerce. L'IA analyse vos données pour maximiser votre rentabilité.",
    articles: [
      { slug: "ia-e-commerce", label: "IA pour e-commerce" },
      { slug: "ia-gestion-stock-automatique", label: "Gestion de stock automatisée" },
      { slug: "ia-comptabilite-ecommerce", label: "Comptabilité e-commerce IA" },
    ],
  },
  {
    icon: Heart,
    name: "Santé",
    description:
      "Simplifiez la gestion de votre cabinet médical avec l'IA : prise de rendez-vous intelligente, suivi patient automatisé et optimisation du parcours de soins. Libérez du temps pour vos patients.",
    articles: [
      { slug: "ia-medecin-cabinet-sante", label: "IA pour cabinets médicaux" },
    ],
  },
  {
    icon: Scale,
    name: "Juridique & Comptabilité",
    description:
      "Automatisez la rédaction de documents, le suivi des dossiers et la veille juridique grâce à l'IA. Cabinets d'avocats et experts-comptables gagnent en productivité et en précision.",
    articles: [
      { slug: "ia-avocat-cabinet", label: "IA pour cabinets d'avocats" },
      { slug: "ia-cabinet-comptable", label: "IA pour cabinets comptables" },
    ],
  },
  {
    icon: Sparkles,
    name: "Beauté & Bien-être",
    description:
      "Fidélisez votre clientèle et remplissez votre planning grâce à l'automatisation IA. Salons de coiffure, instituts de beauté et spas optimisent leurs réservations et leur communication.",
    articles: [
      { slug: "ia-salon-coiffure-beaute", label: "IA pour salons de coiffure" },
      { slug: "ia-spa-centre-bien-etre", label: "IA pour spas et bien-être" },
    ],
  },
  {
    icon: Megaphone,
    name: "Marketing & Communication",
    description:
      "Créez du contenu marketing automatiquement, personnalisez vos campagnes et automatisez votre prospection B2B avec l'IA. Multipliez votre impact sans multiplier vos ressources.",
    articles: [
      { slug: "ia-agence-communication", label: "IA pour agences de communication" },
      { slug: "ia-contenu-marketing-automatise", label: "Contenu marketing automatisé" },
      { slug: "automatiser-prospection-b2b-ia", label: "Prospection B2B automatisée" },
    ],
  },
  {
    icon: Building,
    name: "Franchise & Multi-sites",
    description:
      "Centralisez le pilotage de vos franchises et points de vente avec des dashboards IA et des process automatisés. Assurez l'homogénéité de vos opérations à grande échelle.",
    articles: [
      { slug: "ia-franchise-multi-sites", label: "IA pour franchises et multi-sites" },
    ],
  },
];

export const SectorsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <SectionFade position="top" />
      <SectionFade position="bottom" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            L'IA dans votre{" "}
            <span className="text-gradient-copper">secteur d'activité</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment l'intelligence artificielle transforme chaque
            métier. Guides pratiques et cas clients par secteur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-premium group hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                <div className="p-3 rounded-2xl bg-primary/10 w-fit mb-4">
                  <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {sector.name}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-4 flex-1">
                  {sector.description}
                </p>
                <div className="flex flex-col gap-1.5 pt-3 border-t border-border">
                  {sector.articles.map((article) => (
                    <Link
                      key={article.slug}
                      to={`/blog/${article.slug}`}
                      className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                    >
                      Lire le guide &rarr;{" "}
                      <span className="text-muted-foreground font-normal">
                        {article.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-base sm:text-lg text-muted-foreground mt-12 max-w-4xl mx-auto"
        >
          Votre secteur n'apparait pas ?{" "}
          <Link to="/#contact" className="text-primary hover:underline font-medium">
            Contactez-nous
          </Link>{" "}
          pour un audit personnalisé. L'IA s'adapte à tous les métiers :
          auto-école, association, coaching, formation, gestion locative et
          bien d'autres.
        </motion.p>
      </div>
    </section>
  );
};
