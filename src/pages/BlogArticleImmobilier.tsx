import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle2, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { Link } from "react-router-dom";

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

const BlogArticleImmobilier = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "IA pour agence immobilière : automatiser relances, estimations et suivi client en 2026",
        "description": "Guide complet pour intégrer l'intelligence artificielle dans une agence immobilière : automatisation des relances, estimation prédictive, suivi acquéreur et vendeur.",
        "author": { "@type": "Person", "name": "Gaëtan Fizero" },
        "publisher": { "@type": "Organization", "name": "BATEMARK", "url": "https://batemark.com", "logo": { "@type": "ImageObject", "url": "https://batemark.com/favicon.svg" } },
        "datePublished": "2026-03-08",
        "dateModified": "2026-03-08",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://batemark.com/blog/ia-agence-immobiliere" },
        "image": "https://batemark.com/images/cover-ia-immobilier.jpg",
        "keywords": ["IA agence immobilière", "automatisation immobilier", "intelligence artificielle immobilier", "CRM immobilier IA", "estimation IA immobilier"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://batemark.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://batemark.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "IA Immobilier", "item": "https://batemark.com/blog/ia-agence-immobiliere" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "L'IA est-elle adaptée à une petite agence immobilière indépendante ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Les outils IA actuels sont accessibles dès 50 €/mois et ne nécessitent aucune compétence technique. Une agence de 3 à 5 négociateurs peut automatiser ses relances, son suivi acquéreur et sa prospection vendeur en quelques semaines." } },
          { "@type": "Question", "name": "Combien de mandats supplémentaires peut générer l'IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Les agences accompagnées constatent en moyenne 30 à 50 % de mandats exclusifs supplémentaires grâce à une prospection vendeur automatisée et un suivi systématique des leads entrants." } },
          { "@type": "Question", "name": "L'IA va-t-elle remplacer les agents immobiliers ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. L'IA prend en charge les tâches administratives et répétitives. L'agent se concentre sur la relation humaine, les visites et la négociation — là où il crée le plus de valeur." } },
          { "@type": "Question", "name": "Par où commencer pour intégrer l'IA dans mon agence immobilière ?", "acceptedAnswer": { "@type": "Answer", "text": "Commencez par un audit de vos process : combien de leads sont perdus faute de relance ? Combien de temps vos agents passent-ils en tâches administratives ? Les deux premiers leviers à activer sont la relance automatique et la prospection vendeur IA." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour agence immobilière : automatiser relances et suivi client | BATEMARK</title>
        <meta name="description" content="Comment l'IA transforme les agences immobilières : automatisation des relances acquéreurs, prospection vendeur, estimation prédictive. Guide complet 2026 + outils recommandés." />
        <meta name="keywords" content="IA agence immobilière, automatisation immobilier, intelligence artificielle immobilier, CRM immobilier IA, estimation IA immobilier, prospection vendeur IA, relance acquéreur automatique" />
        <link rel="canonical" href="https://batemark.com/blog/ia-agence-immobiliere" />
        <meta property="og:title" content="IA pour agence immobilière — Guide complet 2026" />
        <meta property="og:description" content="Comment l'IA transforme les agences immobilières : relances automatiques, prospection vendeur, estimation prédictive." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://batemark.com/blog/ia-agence-immobiliere" />
        <meta property="og:image" content="https://batemark.com/images/cover-ia-immobilier.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="BATEMARK" />
        <meta property="article:published_time" content="2026-03-08" />
        <meta property="article:modified_time" content="2026-03-08" />
        <meta property="article:author" content="Gaëtan Fizero" />
        <meta property="article:section" content="Immobilier" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IA pour agence immobilière — Guide complet 2026" />
        <meta name="twitter:description" content="Automatiser relances, estimations et suivi client dans l'immobilier grâce à l'IA." />
        <meta name="twitter:image" content="https://batemark.com/images/cover-ia-immobilier.jpg" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Header />
      <main className="pt-24">
        <div className="container-custom px-4 md:px-8 pt-8">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">IA Immobilier</span>
          </nav>
        </div>

        <section className="section-padding pb-12">
          <div className="container-custom max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold gradient-copper text-background mb-6">🏠 Immobilier</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                IA pour agence immobilière : automatiser{" "}<span className="text-gradient-copper">relances, estimations et suivi client</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl">
                En 2026, les agences qui automatisent leur suivi acquéreur et leur prospection vendeur signent <strong className="text-foreground">30 à 50 % de mandats exclusifs supplémentaires</strong>. Voici comment l'IA transforme le métier d'agent immobilier — sans le remplacer.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-b border-border py-4">
                <span>✍️ Par <strong className="text-foreground">Gaëtan Fizero</strong></span>
                <time dateTime="2026-03-08">📅 8 mars 2026</time>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 9 min de lecture</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container-custom max-w-4xl px-4 md:px-8 mb-16">
          <div className="rounded-2xl overflow-hidden">
            <img src="/images/cover-ia-immobilier.jpg" alt="Agence immobilière augmentée par l'intelligence artificielle" className="w-full h-64 sm:h-80 md:h-96 object-cover" width="1200" height="630" loading="lazy" />
          </div>
        </section>

        <section className="container-custom max-w-4xl px-4 md:px-8 mb-16">
          <div className="card-premium">
            <h2 className="text-xl font-bold mb-4">📑 Sommaire</h2>
            <ol className="space-y-2 text-muted-foreground">
              {["Le problème : des leads perdus par milliers", "Les 5 leviers IA pour une agence immobilière", "Outils IA recommandés pour l'immobilier", "Méthode de déploiement en 3 semaines", "Questions fréquentes"].map((item, i) => (
                <li key={i} className="flex items-center gap-3"><span className="text-primary font-bold">{i + 1}.</span>{item}</li>
              ))}
            </ol>
          </div>
        </section>

        <article className="container-custom max-w-4xl px-4 md:px-8">
          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Le constat</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Le problème : des leads perdus <span className="text-destructive">par milliers</span></h2>
            <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>Selon la <a href="https://www.fnaim.fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FNAIM</a>, une agence immobilière moyenne reçoit <strong className="text-foreground">200 à 500 demandes par mois</strong>. Combien sont effectivement relancées dans les 24h ? Moins de 30 %.</p>
              <p>Les leads non relancés dans les 5 premières minutes ont <strong className="text-foreground">10× moins de chances</strong> de se convertir (source : <a href="https://hbr.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Harvard Business Review</a>). C'est là que l'IA change la donne.</p>
              <div className="bg-accent/30 border-l-4 border-primary rounded-r-xl p-5">
                <p className="text-foreground font-semibold m-0">💡 Le premier agent qui répond remporte le mandat dans 78 % des cas. L'IA vous permet de répondre en quelques secondes, 24h/24.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 my-12">
              {[
                { stat: "78 %", desc: "des mandats vont au premier agent qui répond" },
                { stat: "−70 %", desc: "de leads perdus avec un suivi automatisé" },
                { stat: "+45 %", desc: "de mandats exclusifs chez les agences automatisées" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-premium text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gradient-copper mb-2">{item.stat}</div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Les leviers</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">5 leviers IA pour <span className="text-gradient-copper">transformer votre agence</span></h2>
            <div className="space-y-8">
              {[
                { title: "1. Réponse instantanée aux demandes entrantes", text: "Un chatbot IA entraîné sur vos biens répond immédiatement aux demandes SeLoger, LeBonCoin, PAP. Il qualifie le budget, le secteur et le timing, puis transmet au bon négociateur. Plus aucun lead ne tombe dans le vide." },
                { title: "2. Relance automatique des acquéreurs", text: "L'IA envoie des séquences de relance personnalisées aux acquéreurs en fonction de leurs critères : nouveaux biens correspondants, baisse de prix, disponibilité visite. Le tout sans intervention manuelle." },
                { title: "3. Prospection vendeur automatisée", text: "Identification des propriétaires susceptibles de vendre (signaux d'intention : fin de crédit, mutation, succession) et envoi de séquences de prospection personnalisées par email et courrier physique." },
                { title: "4. Estimation prédictive augmentée", text: "L'IA analyse les prix du marché en temps réel, les transactions récentes et les tendances locales pour générer des estimations plus précises et crédibles. Un argument commercial puissant pour décrocher des mandats exclusifs." },
                { title: "5. Automatisation des avis et de la e-réputation", text: "Après chaque transaction, l'IA déclenche une séquence de collecte d'avis Google automatisée. Découvrez notre guide complet sur l'automatisation des avis dans notre article dédié." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="border-l-2 border-primary/30 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="rounded-2xl p-8 sm:p-10 text-center" style={{ background: "linear-gradient(135deg, hsl(220 12% 10%), hsl(220 15% 7%))" }}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Combien de mandats perdez-vous chaque mois ?</h3>
              <p className="text-muted-foreground mb-6">Audit gratuit de votre pipeline acquéreur/vendeur en 15 minutes.</p>
              <ContactFormDialog trigger={<Button variant="hero" size="lg" className="group">Démarrer l'audit<ArrowRight className="group-hover:translate-x-1 transition-transform" /></Button>} />
            </div>
          </section>

          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Les outils</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Outils IA recommandés <span className="text-gradient-copper">pour l'immobilier</span></h2>
            <p className="text-muted-foreground mb-8">Retrouvez notre sélection complète dans la <Link to="/librairie-ia" className="text-primary hover:underline">Librairie d'outils IA</Link>.</p>
            <div className="space-y-6">
              {[
                { name: "Crisp", desc: "Chatbot IA pour qualifier instantanément les leads entrants (SeLoger, LeBonCoin, site web). Entraîné sur votre catalogue de biens." },
                { name: "Make", desc: "Orchestrateur de workflows pour connecter votre CRM immobilier, vos portails et vos outils de communication sans code." },
                { name: "Meetlane", desc: "Prospection vendeur automatisée : identification de propriétaires à fort potentiel et séquences email personnalisées." },
                { name: "Manuscry", desc: "Courriers physiques personnalisés pour la prospection vendeur haut de gamme : taux de réponse 8 à 12 % vs 1-2 % en email froid." },
              ].map((tool, i) => (
                <div key={i} className="card-premium hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-3 mb-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><h3 className="text-lg font-bold">{tool.name}</h3></div>
                  <p className="text-muted-foreground text-sm pl-8">{tool.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="card-premium border-primary/20">
              <h3 className="text-lg font-bold mb-4">📚 Pour aller plus loin</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>→ <Link to="/blog/automatiser-prospection-b2b-ia" className="text-primary hover:underline">Automatiser la prospection B2B avec l'IA</Link></li>
                <li>→ <Link to="/blog/automatiser-avis-google-ia" className="text-primary hover:underline">Automatiser la gestion des avis Google</Link></li>
                <li>→ <Link to="/blog/chatbot-ia-site-web-conversion" className="text-primary hover:underline">Chatbot IA : multiplier vos conversions</Link></li>
                <li>→ <Link to="/simulateur-ia" className="text-primary hover:underline">Simulateur : quelle stratégie IA pour votre agence ?</Link></li>
              </ul>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Questions fréquentes — <span className="text-gradient-copper">IA & Immobilier</span></h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "L'IA est-elle adaptée à une petite agence indépendante ?", a: "Oui. Les outils IA sont accessibles dès 50 €/mois. Une agence de 3 à 5 négociateurs peut automatiser ses relances et sa prospection vendeur en quelques semaines, sans compétence technique." },
                { q: "Combien de mandats supplémentaires peut générer l'IA ?", a: "Les agences accompagnées constatent en moyenne 30 à 50 % de mandats exclusifs supplémentaires grâce à une prospection vendeur automatisée et un suivi systématique des leads entrants." },
                { q: "L'IA va-t-elle remplacer les agents immobiliers ?", a: "Non. L'IA prend en charge les tâches administratives et répétitives (relances, qualification, estimation). L'agent se concentre sur la relation humaine, les visites et la négociation — là où il crée le plus de valeur." },
                { q: "Par où commencer pour intégrer l'IA dans mon agence ?", a: "Commencez par un audit de vos process : combien de leads sont perdus faute de relance ? Combien de temps vos agents passent-ils en tâches administratives ? Les deux premiers leviers : la relance automatique et la prospection vendeur IA." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="card-premium border-border">
                  <AccordionTrigger className="text-left font-semibold text-base hover:text-primary">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="mb-20">
            <div className="rounded-2xl p-8 sm:p-10 text-center" style={{ background: "linear-gradient(135deg, hsl(220 12% 10%), hsl(220 15% 7%))" }}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Prêt à automatiser votre agence immobilière ?</h3>
              <p className="text-muted-foreground mb-6">En 15 minutes, on identifie vos 3 plus gros leviers d'acquisition.</p>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Réserver mon audit gratuit<ArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
              </Button>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticleImmobilier;