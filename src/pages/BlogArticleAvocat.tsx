import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle2, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { Link } from "react-router-dom";
import { RelatedArticles } from "@/components/RelatedArticles";

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

const BlogArticleAvocat = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "IA pour avocat : automatiser les tâches administratives du cabinet",
        "description": "Guide complet pour les cabinets d'avocats : automatiser la rédaction, le suivi client et la facturation grâce à l'IA. Outils, méthode et gains concrets.",
        "author": { "@type": "Person", "name": "Gaëtan Fizero" },
        "publisher": { "@type": "Organization", "name": "BATEMARK", "url": "https://www.batemark.com", "logo": { "@type": "ImageObject", "url": "https://www.batemark.com/favicon.svg" } },
        "datePublished": "2026-03-08", "dateModified": "2026-03-08",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.batemark.com/blog/ia-avocat-cabinet" },
        "image": "https://www.batemark.com/images/cover-ia-avocat.jpg",
        "keywords": ["IA avocat", "automatisation cabinet avocat", "IA juridique", "legaltech IA", "avocat automatisation"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.batemark.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.batemark.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "IA Avocat", "item": "https://www.batemark.com/blog/ia-avocat-cabinet" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "L'IA peut-elle rédiger des actes juridiques ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA peut générer des brouillons de contrats, courriers et conclusions à partir de modèles. L'avocat valide et ajuste. Résultat : -60 % de temps de rédaction sur les documents standards." } },
          { "@type": "Question", "name": "Les données clients sont-elles sécurisées ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Nous utilisons des solutions hébergées en Europe, conformes RGPD, avec chiffrement de bout en bout. Aucune donnée client n'est utilisée pour entraîner les modèles d'IA." } },
          { "@type": "Question", "name": "Quel ROI pour un cabinet de 3-5 avocats ?", "acceptedAnswer": { "@type": "Answer", "text": "Un cabinet de cette taille économise en moyenne 15 à 25 heures par semaine en automatisant la rédaction, les relances et la facturation. Au taux horaire d'un avocat, le ROI est souvent supérieur à 10×." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour avocat : automatiser les tâches du cabinet | BATEMARK</title>
        <meta name="description" content="Comment l'IA permet aux cabinets d'avocats d'automatiser rédaction, suivi client et facturation. Guide pratique avec outils et résultats concrets." />
        <meta name="keywords" content="IA avocat, automatisation cabinet avocat, IA juridique, legaltech IA, avocat automatisation, rédaction juridique IA" />
        <link rel="canonical" href="https://www.batemark.com/blog/ia-avocat-cabinet" />
        <meta property="og:title" content="IA pour avocat : automatiser les tâches du cabinet" />
        <meta property="og:description" content="Rédaction, suivi client et facturation automatisés pour cabinets d'avocats." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.batemark.com/blog/ia-avocat-cabinet" />
        <meta property="og:image" content="https://www.batemark.com/images/cover-ia-avocat.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="BATEMARK" />
        <meta property="article:published_time" content="2026-03-08" />
        <meta name="twitter:card" content="summary_large_image" />
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
            <span className="text-foreground font-medium">IA Avocat</span>
          </nav>
        </div>

        <section className="section-padding pb-12">
          <div className="container-custom max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold gradient-copper text-background mb-6">⚖️ Juridique</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                IA pour avocat :{" "}<span className="text-gradient-copper">automatiser l'administratif du cabinet</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl">
                Un avocat passe <strong className="text-foreground">40 % de son temps</strong> sur des tâches non facturables. L'IA automatise la rédaction, le suivi client et la facturation pour vous rendre ces heures.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-b border-border py-4">
                <span>✍️ Par <strong className="text-foreground">Gaëtan Fizero</strong></span>
                <time dateTime="2026-03-08">📅 8 mars 2026</time>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min de lecture</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container-custom max-w-4xl px-4 md:px-8 mb-16">
          <div className="rounded-2xl overflow-hidden">
            <img src="/images/cover-ia-avocat.jpg" alt="Cabinet d'avocat utilisant l'IA pour automatiser ses tâches administratives" className="w-full h-64 sm:h-80 md:h-96 object-cover" width="1200" height="630" loading="lazy" />
          </div>
        </section>

        <article className="container-custom max-w-4xl px-4 md:px-8">
          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Le constat</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">40 % du temps d'un avocat est <span className="text-gradient-copper">non facturable</span></h2>
            <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>Rédiger des courriers standards, relancer des clients pour des pièces manquantes, éditer des factures, mettre à jour des tableaux de bord… Ces tâches représentent <strong className="text-foreground">2 jours par semaine</strong> pour un avocat moyen.</p>
              <p>Comme pour les <Link to="/blog/ia-cabinet-comptable" className="text-primary hover:underline">cabinets comptables</Link>, les professions libérales ont tout à gagner de l'automatisation IA : plus de temps facturable, moins d'erreurs, et un meilleur suivi client.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 my-12">
              {[
                { stat: "40 %", desc: "du temps sur des tâches non facturables" },
                { stat: "-60 %", desc: "de temps de rédaction avec l'IA" },
                { stat: "10×", desc: "de ROI moyen pour un cabinet de 3-5 avocats" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-premium text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gradient-copper mb-2">{item.stat}</div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">La méthode</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">3 automatisations pour <span className="text-gradient-copper">libérer vos avocats</span></h2>
            <div className="space-y-8">
              {[
                { title: "1. Rédaction assistée par IA", text: "L'IA génère des brouillons de contrats, courriers et conclusions à partir de vos modèles. Elle adapte le contenu au contexte du dossier. L'avocat relit, ajuste et valide — au lieu de rédiger de zéro. Gain : 60 % de temps de rédaction en moins." },
                { title: "2. Suivi client et relances automatiques", text: "Demande de pièces manquantes, rappel de rendez-vous, notification d'avancement du dossier… L'IA envoie les bons messages au bon moment. Le client se sent suivi, l'avocat n'y pense plus." },
                { title: "3. Facturation et time-tracking automatisés", text: "L'IA catégorise automatiquement le temps passé par dossier, génère les factures selon vos conventions d'honoraires et envoie les relances de paiement. Fini les heures perdues à facturer en fin de mois." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border-l-2 border-primary/30 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="rounded-2xl p-8 sm:p-10 text-center" style={{ background: "linear-gradient(135deg, hsl(220 12% 10%), hsl(220 15% 7%))" }}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Combien d'heures non facturables perdez-vous par semaine ?</h3>
              <p className="text-muted-foreground mb-6">Audit gratuit de votre cabinet et plan d'automatisation personnalisé.</p>
              <ContactFormDialog trigger={<Button variant="hero" size="lg" className="group">Auditer mon cabinet<ArrowRight className="group-hover:translate-x-1 transition-transform" /></Button>} />
            </div>
          </section>

          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Les outils</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Stack recommandée pour <span className="text-gradient-copper">cabinets d'avocats</span></h2>
            <div className="space-y-6">
              {[
                { name: "Make", desc: "Orchestre les automatisations : relances, notifications, synchronisation avec votre logiciel de gestion de cabinet." },
                { name: "ChatGPT / IA Batemark", desc: "Rédaction assistée de contrats, courriers et conclusions. Résumé de dossiers et extraction d'informations clés." },
                { name: "Notion + Cal.com", desc: "Gestion de dossiers centralisée, suivi d'avancement et planification automatique des rendez-vous clients." },
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
                <li>→ <Link to="/blog/ia-cabinet-comptable" className="text-primary hover:underline">IA pour cabinet comptable</Link></li>
                <li>→ <Link to="/blog/ia-automatiser-reporting" className="text-primary hover:underline">Automatiser le reporting avec l'IA</Link></li>
                <li>→ <Link to="/blog/ia-recrutement-pme" className="text-primary hover:underline">Automatiser le recrutement en PME</Link></li>
                <li>→ <Link to="/simulateur-ia" className="text-primary hover:underline">Simulateur IA pour votre cabinet</Link></li>
              </ul>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Questions fréquentes — <span className="text-gradient-copper">IA & Avocats</span></h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "L'IA peut-elle rédiger des actes juridiques ?", a: "Elle génère des brouillons à partir de modèles. L'avocat valide et ajuste. -60 % de temps de rédaction." },
                { q: "Les données sont-elles sécurisées ?", a: "Oui. Solutions hébergées en Europe, conformes RGPD, chiffrement de bout en bout." },
                { q: "Quel ROI pour un petit cabinet ?", a: "15 à 25h/semaine économisées. Au taux horaire d'un avocat, le ROI dépasse souvent 10×." },
                { q: "L'IA respecte-t-elle le secret professionnel ?", a: "Oui. Les données ne sont jamais utilisées pour entraîner les modèles. Tout reste dans un environnement sécurisé et cloisonné." },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Prêt à récupérer 2 jours par semaine ?</h3>
              <p className="text-muted-foreground mb-6">On analyse votre cabinet et on identifie les automatisations prioritaires.</p>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Réserver mon audit gratuit<ArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
              </Button>
            </div>
          </section>
          <RelatedArticles currentSlug="ia-avocat-cabinet" />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticleAvocat;
