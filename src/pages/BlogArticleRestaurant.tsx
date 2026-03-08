import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle2, Quote, ChevronRight, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import restaurantImg from "@/assets/case-restaurant-bordeaux.jpg";

const BlogArticleRestaurant = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Comment l'IA transforme la restauration indépendante — guide complet 2026",
        "description": "Guide complet pour intégrer l'intelligence artificielle dans un restaurant indépendant : réduction des no-shows, chatbot de réservation, automatisation des avis, marketing digital. Cas client + outils Crisp et Make.",
        "author": { "@type": "Person", "name": "Gaëtan Fizero" },
        "publisher": {
          "@type": "Organization",
          "name": "Batemark",
          "url": "https://batemark.com",
          "logo": { "@type": "ImageObject", "url": "https://batemark.com/favicon.svg" }
        },
        "datePublished": "2026-03-08",
        "dateModified": "2026-03-08",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://batemark.com/blog/ia-restaurant-intelligence-artificielle"
        },
        "keywords": [
          "intelligence artificielle restaurant",
          "IA restauration 2026",
          "automatisation restaurant",
          "no-show restaurant IA",
          "chatbot réservation restaurant",
          "marketing digital restaurant indépendant"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://batemark.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://batemark.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "IA Restaurant", "item": "https://batemark.com/blog/ia-restaurant-intelligence-artificielle" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "L'IA peut-elle vraiment réduire les no-shows dans un restaurant ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui. Des outils comme TheFork Manager ont démontré en 2025 une réduction de 20 % du taux de no-show grâce à la synthèse IA des avis clients, les rappels automatiques intelligents et le blocage prédictif des réservations à risque."
            }
          },
          {
            "@type": "Question",
            "name": "Quels process d'un restaurant peut-on automatiser avec l'IA en 2026 ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "En 2026, les restaurants indépendants automatisent principalement : les réponses aux avis Google et TripAdvisor, les confirmations et rappels de réservation, la publication de contenu sur les réseaux sociaux, les emails de relance post-repas et la gestion des demandes entrantes hors heures via chatbot."
            }
          },
          {
            "@type": "Question",
            "name": "Un restaurant indépendant avec un petit budget peut-il bénéficier de l'IA ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tout à fait. Les outils comme Crisp et Make sont accessibles dès 30 à 50 € par mois et ne nécessitent aucune compétence technique. Un restaurateur peut démarrer avec deux automatisations simples et obtenir des résultats mesurables en quelques semaines."
            }
          },
          {
            "@type": "Question",
            "name": "Comment l'IA améliore-t-elle la réputation en ligne d'un restaurant ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'IA permet de répondre automatiquement à chaque avis Google ou TripAdvisor dans le ton de l'établissement. Elle déclenche aussi automatiquement une demande d'avis par SMS ou email à J+1 après le repas. Résultat : plus d'avis, meilleure note, meilleur classement local."
            }
          },
          {
            "@type": "Question",
            "name": "Par où commencer pour intégrer l'IA dans mon restaurant ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Commencez par identifier vos deux plus gros points de friction : les no-shows et les avis clients. Ces deux chantiers ont le meilleur ROI. En moins d'une semaine, vous pouvez avoir vos premières automatisations en place avec Make et Crisp."
            }
          }
        ]
      }
    ]
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <SEOHead
        title="IA et Restaurant : Remplir sa Salle et Réduire les No-Shows"
        description="Découvrez comment l'intelligence artificielle permet aux restaurants indépendants de réduire les no-shows, automatiser leurs process et remplir leur salle en semaine. Guide concret 2026 + cas client."
        keywords="intelligence artificielle restaurant, IA restauration, automatisation restaurant, chatbot réservation restaurant, gestion avis restaurant IA, no-show restaurant solution IA, marketing digital restaurant"
        ogType="article"
        articlePublishedTime="2026-03-08"
        articleModifiedTime="2026-03-08"
      >
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </SEOHead>

      <Header />

      <main id="main-content" className="min-h-screen">
        <article className="pt-24 pb-16">

          {/* Breadcrumb */}
          <div className="container-custom max-w-4xl px-4 md:px-8 mb-8">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-foreground transition-colors">Accueil</a>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <a href="/blog" className="hover:text-foreground transition-colors">Blog</a>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span className="text-foreground font-medium">IA Restaurant</span>
            </nav>
          </div>

          {/* Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="container-custom max-w-4xl px-4 md:px-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-8">
              <span className="text-sm">🍽️</span>
              <span className="text-sm font-medium text-muted-foreground">Intelligence Artificielle · Restauration</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Comment l'IA transforme la restauration indépendante{" "}
              <span className="text-primary">— guide complet 2026</span>
            </h1>

            <div className="border-l-4 border-primary bg-muted/50 rounded-r-lg p-6 mb-8">
              <p className="text-muted-foreground text-lg leading-relaxed m-0">
                <strong>En bref :</strong> En 2026, la restauration indépendante fait face à une équation brutale : 88 % des 179 000 restaurants français sont indépendants, les marges se compriment, et les no-shows coûtent des milliers d'euros par an. L'intelligence artificielle apporte des réponses concrètes — sans recruter, sans se former pendant 6 mois. Voici comment.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-12 border-t border-border pt-6">
              <span>✍️ Par <strong className="text-foreground">Gaëtan Fizero</strong></span>
              <span>📅 <time dateTime="2026-03-08">8 mars 2026</time></span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" aria-hidden="true" /> 8 min de lecture
              </span>
            </div>

            <div className="rounded-xl overflow-hidden mb-12 shadow-lg">
              <img
                src={restaurantImg}
                alt="Intérieur d'un bistrot gastronomique bordelais — intelligence artificielle restaurant indépendant"
                className="w-full h-auto aspect-video object-cover"
                loading="eager"
                width={1920}
                height={1080}
              />
            </div>
          </motion.div>

          {/* Sommaire */}
          <div className="container-custom max-w-4xl px-4 md:px-8 mb-16">
            <nav className="bg-muted/50 border-l-4 border-primary rounded-r-lg p-6" aria-label="Sommaire de l'article">
              <h2 className="text-lg font-bold mb-4">📋 Sommaire</h2>
              <ol className="space-y-2 text-muted-foreground">
                <li><a href="#defi" className="hover:text-primary transition-colors">1. La restauration indépendante en 2026 : une pression maximale</a></li>
                <li><a href="#applications" className="hover:text-primary transition-colors">2. Ce que l'IA peut concrètement faire pour votre restaurant</a></li>
                <li><a href="#cas-client" className="hover:text-primary transition-colors">3. Cas client : Le Comptoir de l'Ardoise — remplir la salle du mercredi grâce à l'IA</a></li>
                <li><a href="#methode" className="hover:text-primary transition-colors">4. Intégrer l'IA dans votre restaurant : 4 étapes concrètes</a></li>
                <li><a href="#outils" className="hover:text-primary transition-colors">5. Les outils conseillés par Batemark</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">6. Questions fréquentes</a></li>
              </ol>
            </nav>
          </div>

          {/* SECTION 4 — Le défi */}
          <section id="defi" className="container-custom max-w-4xl px-4 md:px-8 mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                La restauration indépendante en 2026 : entre saturation du marché et pression sur les marges
              </h2>

              <p className="text-lg text-muted-foreground italic border-l-4 border-primary pl-5 mb-8">
                Avec 179 000 restaurants en France et 88 % d'établissements indépendants, la restauration est l'un des secteurs les plus compétitifs du pays. En 2026, le contexte se tend : le marché arrive à saturation, les coûts fixes explosent, et les clients sont plus volatils que jamais. Dans ce contexte, l'intelligence artificielle n'est plus un luxe réservé aux chaînes. C'est un levier opérationnel accessible, immédiatement rentable, que les indépendants les plus agiles ont déjà adopté.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {[
                  { number: "88 %", label: "des restaurants français sont indépendants (179 000 établissements)" },
                  { number: "-20 %", label: "de no-shows constatés avec l'IA de gestion des réservations en 2025" },
                  { number: "30 %", label: "des recherches de restaurants se font via IA en 2026 (contre 3 % en 2024)" },
                ].map((stat) => (
                  <div key={stat.number} className="bg-card border-t-[3px] border-primary rounded-xl p-6 text-center shadow-sm">
                    <span className="block text-4xl font-bold text-primary mb-2">{stat.number}</span>
                    <span className="text-sm text-muted-foreground leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground italic mb-8">
                Sources : INSEE 2024 · TheFork Manager 2025 · Ecomnews / TheFork 2026
              </p>

              <p className="text-muted-foreground mb-8">
                La transformation est déjà en marche. Les recherches de restaurants via des interfaces IA sont passées de 3 % à 30 % en quelques mois seulement en 2025, selon les données TheFork — et devraient atteindre 60 à 70 % à court terme. Les restaurateurs qui ne s'adaptent pas laissent le champ libre à leurs concurrents. Ceux qui s'y mettent dès maintenant prennent une avance décisive.
              </p>
            </motion.div>
          </section>

          {/* SECTION 5 — Applications IA */}
          <section id="applications" className="container-custom max-w-4xl px-4 md:px-8 mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ce que l'IA peut concrètement faire pour votre restaurant en 2026
              </h2>

              <div className="space-y-10">
                {[
                  {
                    num: "1",
                    title: "Réduire les no-shows grâce aux rappels intelligents automatisés",
                    text: "Le no-show est la hantise du restaurateur. Un samedi soir avec 6 couverts fantômes, c'est parfois 200 à 400 € de manque à gagner direct. L'IA analyse les profils de réservation, détecte les signaux de risque (délai de réservation, historique, comportement de navigation) et déclenche automatiquement des rappels SMS ou email au bon moment — 48h, 24h, 2h avant le service. En 2025, les restaurants utilisant ces outils ont constaté jusqu'à 20 % de réduction de leurs no-shows (source : TheFork Manager, 2025).",
                  },
                  {
                    num: "2",
                    title: "Automatiser les réponses aux avis Google et TripAdvisor",
                    text: "Répondre à chaque avis client prend en moyenne 10 à 15 minutes par avis. Multiplié par 200 avis par an, c'est plus de 40 heures perdues — soit une semaine complète de travail. L'IA génère des réponses personnalisées, dans le ton exact de votre établissement, en quelques secondes. Elle adapte le registre (chaleureux pour une brasserie familiale, précis et professionnel pour un gastronomique), répond avec empathie aux avis négatifs, et valorise les commentaires positifs.",
                  },
                  {
                    num: "3",
                    title: "Remplir les créneaux creux avec des campagnes automatisées",
                    text: "Mercredi midi, lundi soir, jeudi déjeuner : chaque restaurant a ses creux chroniques. L'IA permet de déclencher automatiquement des offres ciblées — envoyées par email ou SMS à votre base client — au bon moment, sur les bons créneaux, sans intervention manuelle. Ces campagnes peuvent être conditionnelles : si le taux de remplissage est inférieur à 60 % à J-2, une offre part automatiquement. Résultat : des créneaux remplis sans brader votre positionnement publiquement.",
                  },
                  {
                    num: "4",
                    title: "Gérer les demandes entrantes hors heures d'ouverture avec un chatbot",
                    text: "Un client qui cherche à réserver à 22h30, après votre service du soir, et qui ne trouve pas de réponse va chercher un autre restaurant. Avec un chatbot IA intégré à votre site ou à votre page Google Business Profile, il obtient une réponse immédiate : disponibilités, menu du jour, informations pratiques, confirmation de réservation. Crisp permet de connecter ce chatbot à votre logiciel de réservation et de gérer les échanges multi-canaux depuis une seule interface.",
                  },
                  {
                    num: "5",
                    title: "Automatiser tous les workflows administratifs avec Make",
                    text: "Entre les confirmations de réservation, les rappels, les demandes d'avis, les publications réseaux et les relances clients inactifs, un restaurateur exécute des dizaines de tâches répétitives chaque semaine. Make (ex-Integromat) connecte votre système de réservation, votre CRM, vos emails et vos outils de communication en un seul workflow automatique. Une réservation confirmée déclenche automatiquement : SMS de confirmation → rappel J-2 → demande d'avis J+1 → publication du menu sur Instagram. Tout ça sans toucher à votre téléphone.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-lg">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Callout */}
              <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-6 my-10">
                <p className="text-muted-foreground m-0">
                  💡 <strong>À retenir :</strong> L'IA ne remplace pas votre cuisine, votre salle ni l'expérience que vous créez. Elle prend en charge les tâches répétitives et chronophages pour que vous puissiez vous concentrer sur ce qui compte : l'accueil, les plats, vos équipes. Selon McKinsey, plus de la moitié des tâches en restauration peuvent être optimisées grâce à l'IA.
                </p>
              </div>

              {/* CTA #1 */}
              <div className="bg-gradient-to-br from-accent to-[hsl(193,33%,16%)] rounded-xl p-10 md:p-12 text-center my-12">
                <h3 className="text-2xl font-bold text-accent-foreground mb-3">
                  Vous voulez savoir quelles tâches automatiser en priorité ?
                </h3>
                <p className="text-accent-foreground/80 mb-6 max-w-lg mx-auto">
                  Obtenez un audit gratuit de vos process en 10 minutes.
                </p>
                <ContactFormDialog
                  trigger={
                    <Button variant="hero" size="lg" className="text-base">
                      Démarrer mon audit <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Button>
                  }
                />
              </div>
            </motion.div>
          </section>

          {/* SECTION 6 — Cas client */}
          <section id="cas-client" className="container-custom max-w-4xl px-4 md:px-8 mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Cas client : Le Comptoir de l'Ardoise — remplir la salle du mercredi grâce à l'IA
              </h2>

              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Le Comptoir de l'Ardoise est un bistrot gastronomique de 45 couverts à Bordeaux, reconnu pour sa cuisine de marché et son ardoise qui change chaque semaine. Marc Lesueur, chef-propriétaire, est son propre cuisinier, sommelier et directeur de salle. Résultat : ses journées débutent à 7h et finissent à minuit, sans jamais avoir le temps de travailler sur son acquisition client. En semaine, ses services du midi tournaient à 55-60 % de remplissage. Le week-end, complet.
              </p>

              {/* Case study card */}
              <div className="bg-card border border-border rounded-xl overflow-hidden mb-10">
                <div className="p-6">
                  <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    🍽️ Cas client Batemark
                  </span>
                  <h3 className="text-2xl font-bold mb-2">Le Comptoir de l'Ardoise</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    📍 Bordeaux · Bistrot gastronomique · 45 couverts · Gironde
                  </p>
                </div>
                <img
                  src={restaurantImg}
                  alt="Le Comptoir de l'Ardoise — bistrot gastronomique Bordeaux, intelligence artificielle restaurant"
                  className="w-full h-auto aspect-video object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>

              {/* Le défi */}
              <h3 className="text-xl font-semibold text-foreground mb-4">Le défi</h3>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Marc passait 45 minutes par jour à répondre aux emails de renseignement et aux avis Google — souvent tard le soir, épuisé après le service. Ses mercredis et jeudis midi ne dépassaient pas 55 % de remplissage, faute de communication active sur ces créneaux. Et chaque no-show — en moyenne 3 à 4 par semaine — lui coûtait concrètement entre 80 et 120 € de manque à gagner direct.
              </p>

              {/* Approche */}
              <h3 className="text-xl font-semibold text-foreground mb-6">Notre approche</h3>
              <div className="space-y-8 mb-10">
                {[
                  {
                    num: "①",
                    title: "Déploiement de Crisp comme interface IA multi-canaux",
                    text: "Intégration d'un chatbot Crisp sur le site du restaurant et connexion à la page Google. L'assistant répond automatiquement aux questions fréquentes (horaires, allergènes, menus, disponibilités), capture les demandes de réservation hors heures et les transmet directement au logiciel de réservation de Marc. Configuration en 48h, sur la base des vraies FAQ extraites de ses anciens emails.",
                  },
                  {
                    num: "②",
                    title: "Automatisation complète du cycle de réservation via Make",
                    text: "Mise en place d'un workflow Make connectant le logiciel de réservation, l'email et le SMS : confirmation automatique → rappel 48h avant → relance douce si pas de confirmation → demande d'avis à J+1 après le repas. Chaque étape personnalisée avec le prénom du client et les détails de la réservation. Temps gagné par Marc : environ 45 minutes par jour.",
                  },
                  {
                    num: "③",
                    title: "Campagnes automatisées sur les créneaux creux",
                    text: "Déclenchement automatique d'un email à la base client existante si le taux de remplissage prévu pour un mercredi ou jeudi midi est inférieur à 65 % à J-3. Message signé « Marc », proposant l'ardoise du jour et une table sans supplément. Ton chaleureux et personnel — pas une newsletter générique.",
                  },
                ].map((step) => (
                  <div key={step.num} className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl text-primary font-bold">{step.num}</span>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed m-0">{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Résultats */}
              <h3 className="text-xl font-semibold text-foreground mb-6">Résultats</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { title: "Hausse significative", desc: "du taux de remplissage mercredi-jeudi vs période précédente" },
                  { title: "~45 min/jour", desc: "récupérées sur les tâches admin répétitives (réponses, avis, relances)" },
                  { title: "No-shows réduits", desc: "de manière significative dès le premier mois" },
                ].map((r) => (
                  <div key={r.title} className="bg-card border-t-[3px] border-primary rounded-xl p-6 text-center shadow-sm">
                    <span className="block text-lg font-bold text-primary mb-2">{r.title}</span>
                    <span className="text-sm text-muted-foreground">{r.desc}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {["Crisp — Chatbot IA", "Make — Automatisation", "Réservation automatisée", "Gestion no-shows", "Campagnes créneaux creux"].map((tag) => (
                  <span key={tag} className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Témoignage */}
              <div className="bg-card border border-border rounded-xl p-8 relative shadow-sm">
                <Quote className="w-12 h-12 text-primary/20 absolute top-4 left-4" aria-hidden="true" />
                <blockquote className="pl-8 text-muted-foreground italic text-lg leading-relaxed mb-4">
                  "J'avais peur que ça fasse trop 'automatique', que mes clients sentent que ce n'est plus moi qui réponds. Gaëtan a tout configuré dans mon style — les messages ressemblent exactement à ce que j'aurais écrit. Maintenant mes mercredis se remplissent presque seuls, et je n'ai plus à répondre à des emails à minuit. C'est du temps que je peux mettre ailleurs : dans la cuisine, dans mes équipes, dans ma famille."
                </blockquote>
                <p className="pl-8 font-bold text-foreground">
                  Marc Lesueur<span className="font-normal text-muted-foreground">, chef-propriétaire du Comptoir de l'Ardoise, Bordeaux</span>
                </p>
              </div>
            </motion.div>
          </section>

          {/* SECTION 7 — Méthode */}
          <section id="methode" className="container-custom max-w-4xl px-4 md:px-8 mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Intégrer l'IA dans votre restaurant : 4 étapes concrètes
              </h2>

              <p className="text-lg text-muted-foreground italic border-l-4 border-primary pl-5 mb-10">
                Il n'existe pas de "solution IA pour restaurant" à brancher d'un coup. Il existe une méthode pour identifier les bons chantiers, déployer les bons outils, et mesurer ce qui fonctionne. Voici celle que Batemark applique systématiquement.
              </p>

              <div className="space-y-8 mb-12">
                {[
                  {
                    num: "1",
                    title: "Cartographier les 5 tâches qui vous coûtent le plus de temps",
                    text: "Avant d'automatiser, listez concrètement les tâches répétitives de votre semaine : réponse aux emails, gestion des avis, rappels de réservation, relances clients, posts réseaux sociaux. Ce sont les premières candidates. Pour la majorité des restaurants indépendants, deux tâches concentrent 80 % du temps perdu : les avis et les confirmations de réservation.",
                  },
                  {
                    num: "2",
                    title: "Déployer un chatbot IA sur vos points de contact entrants",
                    text: "Votre site web, votre fiche Google Business Profile, et vos réseaux sont les trois portes d'entrée de vos nouveaux clients. Un chatbot IA (Crisp) répond instantanément à leurs questions, les guide vers la réservation, et capture leurs coordonnées pour votre base CRM — même quand vous êtes en service ou endormi.",
                  },
                  {
                    num: "3",
                    title: "Automatiser le cycle de réservation complet",
                    text: "Confirmation → rappel → relance → avis : ces quatre étapes peuvent être entièrement automatisées via Make en moins d'une demi-journée de configuration. C'est l'automatisation avec le meilleur retour sur investissement dans la restauration — chaque no-show évité, c'est 80 à 150 € récupérés.",
                  },
                  {
                    num: "4",
                    title: "Mesurer et optimiser chaque mois",
                    text: "Taux de remplissage par créneau, nombre d'avis reçus, taux d'ouverture des emails de relance, évolution des no-shows : quatre indicateurs simples à suivre. L'IA s'améliore avec les données — plus vous mesurez, plus les campagnes deviennent précises. Revoyez les performances une fois par mois, ajustez les déclencheurs, testez de nouveaux messages.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-lg">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Étape {step.num} — {step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA #2 */}
              <div className="bg-gradient-to-br from-accent to-[hsl(193,33%,16%)] rounded-xl p-10 md:p-12 text-center">
                <h3 className="text-2xl font-bold text-accent-foreground mb-3">
                  Prêt à automatiser votre restaurant ?
                </h3>
                <p className="text-accent-foreground/80 mb-6 max-w-lg mx-auto">
                  Répondez à 3 questions et recevez un plan d'action personnalisé.
                </p>
                <ContactFormDialog
                  trigger={
                    <Button variant="hero" size="lg" className="text-base">
                      Je veux mon plan d'action <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Button>
                  }
                />
              </div>
            </motion.div>
          </section>

          {/* SECTION 8 — Outils */}
          <section id="outils" className="container-custom max-w-4xl px-4 md:px-8 mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sélection Batemark : les outils IA recommandés pour les restaurants indépendants en 2026
              </h2>

              <p className="text-muted-foreground mb-8">
                Ces deux outils ont été testés et validés dans des contextes réels de restauration indépendante. Ils adressent deux besoins complémentaires : le contact client entrant (Crisp) et l'automatisation des process internes (Make).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Crisp */}
                <div className="bg-card border border-border rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-1">Crisp</h3>
                  <p className="text-sm text-primary font-medium mb-4">Chatbot IA & messagerie client</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    Crisp est la plateforme de messagerie client qui intègre un chatbot IA directement sur votre site et vos canaux. Pour un restaurant, il gère les questions hors heures d'ouverture, qualifie les demandes de réservation et répond aux questions fréquentes 24h/24, 7j/7.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Chatbot IA configuré sur vos FAQ réelles",
                      "Live chat + email + réseaux en un outil",
                      "Capture et qualification des leads",
                      "Connexion Make / Zapier native",
                      "Interface simple, sans compétence tech",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://crisp.chat"
                    target="_blank"
                    rel="nofollow noopener"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Découvrir Crisp <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <p className="text-xs text-muted-foreground mt-3">
                    🎁 Essai gratuit 14 jours — recommandé par Batemark pour la restauration indépendante.
                  </p>
                </div>

                {/* Make */}
                <div className="bg-card border border-border rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-1">Make</h3>
                  <p className="text-sm text-primary font-medium mb-4">Automatisation des process restaurant</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    Make (ex-Integromat) est la plateforme no-code d'automatisation de référence. Elle connecte votre logiciel de réservation, votre CRM, vos emails et vos outils de communication pour créer des workflows entièrement automatiques.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "+1 500 connecteurs (Notion, Gmail, Google Sheets, Instagram, SMS…)",
                      "Scénarios visuels drag & drop",
                      "Confirmations + rappels + avis auto",
                      "Logique conditionnelle (si/alors)",
                      "Plan gratuit disponible pour démarrer",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://www.make.com/en/register?pc=batemark"
                    target="_blank"
                    rel="nofollow noopener"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Découvrir Make <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <p className="text-xs text-muted-foreground mt-3">
                    🎁 Démarrez gratuitement — vos premiers workflows opérationnels en moins d'1h.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* SECTION 9 — FAQ */}
          <section id="faq" className="container-custom max-w-4xl px-4 md:px-8 mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Questions fréquentes sur l'IA en restauration
              </h2>

              <Accordion type="single" collapsible className="space-y-3">
                {[
                  {
                    q: "L'IA peut-elle vraiment réduire les no-shows dans un restaurant ?",
                    a: "Oui. Des outils comme TheFork Manager ont démontré en 2025 une réduction de 20 % du taux de no-show grâce à la synthèse IA des avis clients, les rappels automatiques intelligents et le blocage prédictif des réservations à risque. L'IA identifie les profils d'annulation probables et adapte les relances en conséquence.",
                  },
                  {
                    q: "Quels process d'un restaurant peut-on automatiser avec l'IA en 2026 ?",
                    a: "En 2026, les restaurants indépendants automatisent principalement : les réponses aux avis Google et TripAdvisor (IA générative), les confirmations et rappels de réservation (Make + Crisp), la publication de contenu sur les réseaux sociaux, les emails de relance post-repas pour collecter des avis, et la gestion des demandes entrantes hors heures d'ouverture via chatbot.",
                  },
                  {
                    q: "Un restaurant indépendant avec un petit budget peut-il bénéficier de l'IA ?",
                    a: "Tout à fait. Les outils comme Crisp (chatbot de réservation et FAQ) et Make (automatisation des workflows) sont accessibles dès 30 à 50 € par mois et ne nécessitent aucune compétence technique. Un restaurateur peut démarrer avec deux automatisations simples — rappel de réservation et collecte d'avis — et obtenir des résultats mesurables en quelques semaines.",
                  },
                  {
                    q: "Comment l'IA améliore-t-elle la réputation en ligne d'un restaurant ?",
                    a: "L'IA permet de répondre automatiquement à chaque avis Google ou TripAdvisor — positif comme négatif — dans le ton et le style de l'établissement, en quelques secondes. Elle peut aussi déclencher automatiquement une demande d'avis par SMS ou email à J+1 après le repas, au moment où l'expérience est encore fraîche. Résultat : plus d'avis, meilleure note, meilleur classement local.",
                  },
                  {
                    q: "Par où commencer pour intégrer l'IA dans mon restaurant ?",
                    a: "Commencez par identifier vos deux plus gros points de friction : les no-shows (automatiser les rappels et confirmations) et les avis clients (automatiser les demandes et réponses). Ces deux chantiers ont le meilleur ROI et le plus faible niveau de complexité technique. En moins d'une semaine, vous pouvez avoir vos premières automatisations en place avec Make et Crisp.",
                  },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-base hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </section>

          {/* SECTION 10 — CTA final */}
          <section id="cta-final" className="container-custom max-w-4xl px-4 md:px-8 mb-16">
            <div className="bg-gradient-to-br from-accent to-[hsl(193,33%,12%)] rounded-2xl p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
                Prêt à intégrer l'IA dans votre restaurant ?
              </h2>
              <p className="text-accent-foreground/80 mb-8 max-w-lg mx-auto text-lg">
                En 10 minutes, obtenez un plan d'action personnalisé pour votre établissement. Gratuit, sans engagement.
              </p>
              <ContactFormDialog
                trigger={
                  <Button variant="hero" size="lg" className="text-base px-8 py-6">
                    Je veux mon audit gratuit <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Button>
                }
              />
              <p className="text-accent-foreground/50 text-sm mt-4">
                Sans engagement · Réponse sous 24h · 100% adapté à votre type de restaurant
              </p>
            </div>
          </section>

          {/* Internal links */}
          <section className="container-custom max-w-4xl px-4 md:px-8 mb-16">
            <h3 className="text-lg font-semibold text-foreground mb-4">À lire aussi sur le blog Batemark</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/blog/ia-hotellerie-restauration" className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-colors block">
                <p className="font-semibold text-foreground mb-1">IA pour hôtel et restaurant</p>
                <p className="text-sm text-muted-foreground">Boostez votre taux de remplissage avec l'intelligence artificielle.</p>
              </a>
              <a href="/blog/ia-e-commerce" className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-colors block">
                <p className="font-semibold text-foreground mb-1">IA et E-commerce</p>
                <p className="text-sm text-muted-foreground">Comment l'IA fait exploser les ventes des boutiques en ligne.</p>
              </a>
            </div>
          </section>

        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogArticleRestaurant;
