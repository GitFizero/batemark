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

const BlogArticleGestionStock = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Automatiser la gestion de stock avec l'IA — guide commerce et e-commerce",
        "description": "Guide complet pour automatiser la gestion de stock grâce à l'IA : prévisions de demande, réapprovisionnement automatique et alertes intelligentes.",
        "author": { "@type": "Person", "name": "Gaëtan Fizero" },
        "publisher": { "@type": "Organization", "name": "BATEMARK", "url": "https://batemark.com", "logo": { "@type": "ImageObject", "url": "https://batemark.com/favicon.svg" } },
        "datePublished": "2026-03-08", "dateModified": "2026-03-08",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://batemark.com/blog/ia-gestion-stock-automatique" },
        "image": "https://batemark.com/images/cover-ia-gestion-stock.jpg",
        "keywords": ["automatiser gestion stock IA", "gestion stock automatique", "IA stock", "prévision demande IA", "réapprovisionnement automatique"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://batemark.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://batemark.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "IA Gestion Stock", "item": "https://batemark.com/blog/ia-gestion-stock-automatique" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "L'IA peut-elle prévoir la demande ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. En analysant l'historique de ventes, la saisonnalité et les tendances marché, l'IA prédit la demande avec 85 à 95 % de précision, bien au-delà des estimations humaines." } },
          { "@type": "Question", "name": "C'est adapté aux petits commerces ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Même un commerce avec 50 à 200 références peut automatiser les alertes de stock bas, le réapprovisionnement et le suivi des rotations. Le coût est accessible dès 30 €/mois." } },
          { "@type": "Question", "name": "Peut-on l'intégrer à mon logiciel de caisse ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Via Make, l'IA se connecte à la plupart des logiciels de caisse et ERP (Shopify, WooCommerce, PrestaShop, Odoo). Les stocks sont synchronisés en temps réel." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Automatiser la gestion de stock avec l'IA — Guide 2026 | BATEMARK</title>
        <meta name="description" content="Comment automatiser la gestion de stock grâce à l'IA. Prévisions de demande, réapprovisionnement automatique et alertes intelligentes pour commerce et e-commerce." />
        <meta name="keywords" content="automatiser gestion stock IA, gestion stock automatique, IA stock, prévision demande IA, réapprovisionnement automatique" />
        <link rel="canonical" href="https://batemark.com/blog/ia-gestion-stock-automatique" />
        <meta property="og:title" content="Automatiser la gestion de stock avec l'IA" />
        <meta property="og:description" content="Prévisions, réapprovisionnement et alertes automatiques pour votre stock." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://batemark.com/blog/ia-gestion-stock-automatique" />
        <meta property="og:image" content="https://batemark.com/images/cover-ia-gestion-stock.jpg" />
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
            <span className="text-foreground font-medium">IA Gestion Stock</span>
          </nav>
        </div>

        <section className="section-padding pb-12">
          <div className="container-custom max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold gradient-copper text-background mb-6">📦 Stock</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Automatiser la gestion de stock{" "}<span className="text-gradient-copper">avec l'IA</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl">
                <strong className="text-foreground">43 % des PME</strong> gèrent encore leur stock sur tableur. L'IA anticipe la demande, déclenche les réapprovisionnements et élimine les ruptures — automatiquement.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-b border-border py-4">
                <span>✍️ Par <strong className="text-foreground">Gaëtan Fizero</strong></span>
                <time dateTime="2026-03-08">📅 8 mars 2026</time>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min de lecture</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container-custom max-w-4xl px-4 md:px-8 mb-16">
          <div className="rounded-2xl overflow-hidden">
            <img src="/images/cover-ia-gestion-stock.jpg" alt="Entrepôt avec gestion de stock automatisée par intelligence artificielle" className="w-full h-64 sm:h-80 md:h-96 object-cover" width="1200" height="630" loading="lazy" />
          </div>
        </section>

        <article className="container-custom max-w-4xl px-4 md:px-8">
          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Le problème</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">La gestion de stock manuelle <span className="text-gradient-copper">vous coûte cher</span></h2>
            <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>Ruptures de stock = ventes perdues. Surstock = trésorerie immobilisée. <strong className="text-foreground">Les erreurs de gestion de stock coûtent en moyenne 10 à 15 % du CA</strong> aux commerces et e-commerçants.</p>
              <p>La gestion manuelle (tableur, comptage visuel) est lente, sujette aux erreurs et réactive au lieu d'être prédictive. L'IA change ce paradigme — comme nous l'avons montré pour l'<Link to="/blog/ia-e-commerce" className="text-primary hover:underline">e-commerce en général</Link>.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 my-12">
              {[
                { stat: "10-15 %", desc: "du CA perdu en erreurs de stock" },
                { stat: "85-95 %", desc: "de précision des prévisions IA" },
                { stat: "-30 %", desc: "de surstock avec l'IA" },
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">3 automatisations pour <span className="text-gradient-copper">un stock optimisé</span></h2>
            <div className="space-y-8">
              {[
                { title: "1. Prévisions de demande IA", text: "L'IA analyse votre historique de ventes, la saisonnalité, les tendances marché et même la météo pour prédire la demande par produit. Vous savez exactement quoi commander et quand — avant même que le stock ne baisse." },
                { title: "2. Réapprovisionnement automatique", text: "Quand un produit atteint son seuil critique, l'IA génère automatiquement un bon de commande fournisseur. Validation en un clic, envoi automatique. Fini les ruptures de stock et les commandes de dernière minute." },
                { title: "3. Alertes et tableaux de bord en temps réel", text: "Visualisez vos niveaux de stock, rotations et prévisions sur un dashboard unique. L'IA alerte en cas d'anomalie : produit qui stagne, demande inhabituelle, écart d'inventaire." },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Combien perdez-vous en ruptures et surstock ?</h3>
              <p className="text-muted-foreground mb-6">Audit gratuit de votre gestion de stock et plan d'optimisation IA.</p>
              <ContactFormDialog trigger={<Button variant="hero" size="lg" className="group">Auditer mon stock<ArrowRight className="group-hover:translate-x-1 transition-transform" /></Button>} />
            </div>
          </section>

          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Les outils</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Stack recommandée pour <span className="text-gradient-copper">la gestion de stock IA</span></h2>
            <div className="space-y-6">
              {[
                { name: "Make", desc: "Connecte votre logiciel de caisse/ERP aux outils d'analyse et déclenche les réapprovisionnements automatiques." },
                { name: "Google Sheets / Airtable", desc: "Base de données stock centralisée avec formules de prévision et dashboards visuels." },
                { name: "ChatGPT / IA Batemark", desc: "Analyse les tendances, génère les recommandations d'achat et rédige les rapports d'inventaire." },
              ].map((tool, i) => (
                <div key={i} className="card-premium hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-3 mb-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><h3 className="text-lg font-bold">{tool.name}</h3></div>
                  <p className="text-muted-foreground text-sm pl-8">{tool.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-4">Tous ces outils dans notre <Link to="/librairie-ia" className="text-primary hover:underline">Librairie d'outils IA</Link>.</p>
          </section>

          <section className="mb-20">
            <div className="card-premium border-primary/20">
              <h3 className="text-lg font-bold mb-4">📚 Pour aller plus loin</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>→ <Link to="/blog/ia-e-commerce" className="text-primary hover:underline">IA pour e-commerce</Link></li>
                <li>→ <Link to="/blog/ia-automatiser-reporting" className="text-primary hover:underline">Automatiser le reporting</Link></li>
                <li>→ <Link to="/blog/ia-franchise-multi-sites" className="text-primary hover:underline">IA pour franchise multi-sites</Link></li>
                <li>→ <Link to="/simulateur-ia" className="text-primary hover:underline">Simulateur IA</Link></li>
              </ul>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Questions fréquentes — <span className="text-gradient-copper">Stock & IA</span></h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "L'IA peut-elle prévoir la demande ?", a: "Oui, avec 85-95 % de précision en analysant historique, saisonnalité et tendances." },
                { q: "C'est adapté aux petits commerces ?", a: "Oui. Dès 50-200 références et 30 €/mois. Alertes, réappro et suivi inclus." },
                { q: "Peut-on l'intégrer à mon logiciel de caisse ?", a: "Oui via Make : Shopify, WooCommerce, PrestaShop, Odoo et +5000 apps." },
                { q: "Combien de temps pour la mise en place ?", a: "1 à 2 semaines pour l'intégration complète, incluant l'analyse de l'historique." },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Prêt à optimiser votre stock ?</h3>
              <p className="text-muted-foreground mb-6">15 minutes pour analyser votre gestion de stock et identifier les quick wins IA.</p>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Réserver mon audit gratuit<ArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
              </Button>
            </div>
          </section>
          <RelatedArticles currentSlug="ia-gestion-stock-automatique" />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticleGestionStock;
