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

const BlogArticleTunnelVente = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Comment créer un tunnel de vente automatisé avec l'IA en 2026",
        "description": "Guide complet pour créer un tunnel de vente automatisé grâce à l'IA : capture de leads, nurturing et conversion. Méthode étape par étape pour PME.",
        "author": { "@type": "Person", "name": "Gaëtan Fizero" },
        "publisher": { "@type": "Organization", "name": "BATEMARK", "url": "https://www.batemark.com", "logo": { "@type": "ImageObject", "url": "https://www.batemark.com/favicon.svg" } },
        "datePublished": "2026-03-08", "dateModified": "2026-03-08",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.batemark.com/blog/ia-tunnel-vente-automatise" },
        "image": "https://www.batemark.com/images/cover-ia-tunnel-vente.jpg",
        "keywords": ["tunnel de vente automatisé", "tunnel de vente IA", "funnel automatique", "automatiser conversion", "lead nurturing IA"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.batemark.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.batemark.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Tunnel de Vente IA", "item": "https://www.batemark.com/blog/ia-tunnel-vente-automatise" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Un tunnel de vente IA, c'est quoi exactement ?", "acceptedAnswer": { "@type": "Answer", "text": "C'est un parcours automatisé qui guide un prospect de la découverte à l'achat. L'IA personnalise chaque étape (contenu, timing, offre) en fonction du comportement du prospect. Résultat : un taux de conversion 2 à 5× supérieur à un tunnel classique." } },
          { "@type": "Question", "name": "Combien de temps pour mettre en place un tunnel IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Un tunnel de vente IA fonctionnel se met en place en 2 à 4 semaines. La phase 1 (capture + séquence email) peut être opérationnelle en 1 semaine. Les optimisations IA s'ajoutent progressivement." } },
          { "@type": "Question", "name": "Quel budget prévoir ?", "acceptedAnswer": { "@type": "Answer", "text": "Les outils coûtent entre 100 et 300 €/mois (Make + email + landing pages). Le vrai investissement est la stratégie et le contenu. Avec un accompagnement BATEMARK, le tunnel est opérationnel rapidement avec un ROI mesurable." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Créer un tunnel de vente automatisé avec l'IA — Guide 2026 | BATEMARK</title>
        <meta name="description" content="Comment créer un tunnel de vente automatisé grâce à l'IA. Capture de leads, nurturing et conversion automatique. Guide étape par étape pour PME." />
        <meta name="keywords" content="tunnel de vente automatisé, tunnel de vente IA, funnel automatique, automatiser conversion, lead nurturing IA, sales funnel" />
        <link rel="canonical" href="https://www.batemark.com/blog/ia-tunnel-vente-automatise" />
        <meta property="og:title" content="Créer un tunnel de vente automatisé avec l'IA en 2026" />
        <meta property="og:description" content="Capture, nurturing et conversion automatisés. Guide complet pour PME." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.batemark.com/blog/ia-tunnel-vente-automatise" />
        <meta property="og:image" content="https://www.batemark.com/images/cover-ia-tunnel-vente.jpg" />
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
            <span className="text-foreground font-medium">Tunnel de Vente IA</span>
          </nav>
        </div>

        <section className="section-padding pb-12">
          <div className="container-custom max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold gradient-copper text-background mb-6">🎯 Conversion</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Créer un tunnel de vente automatisé{" "}<span className="text-gradient-copper">avec l'IA</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl">
                <strong className="text-foreground">97 % des visiteurs</strong> quittent votre site sans acheter. Un tunnel de vente IA les capture, les nurture et les convertit — automatiquement, 24/7.
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
            <img src="/images/cover-ia-tunnel-vente.jpg" alt="Tunnel de vente automatisé avec intelligence artificielle" className="w-full h-64 sm:h-80 md:h-96 object-cover" width="1200" height="630" loading="lazy" />
          </div>
        </section>

        <article className="container-custom max-w-4xl px-4 md:px-8">
          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Le problème</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Vous perdez 97 % de <span className="text-gradient-copper">vos visiteurs</span></h2>
            <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>Votre site génère du trafic, mais <strong className="text-foreground">la quasi-totalité des visiteurs repart sans convertir</strong>. Sans tunnel de vente, vous comptez sur la chance : espérer qu'un visiteur tombe sur la bonne page, au bon moment, avec la bonne offre.</p>
              <p>L'IA change la donne en personnalisant chaque étape du parcours. Comme nous l'expliquons dans notre guide sur les <Link to="/blog/chatbot-ia-site-web-conversion" className="text-primary hover:underline">chatbots IA pour la conversion</Link>, la personnalisation automatisée multiplie les taux de conversion.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 my-12">
              {[
                { stat: "97 %", desc: "des visiteurs quittent sans convertir" },
                { stat: "×2-5", desc: "de conversion avec un tunnel IA vs classique" },
                { stat: "24/7", desc: "le tunnel vend même quand vous dormez" },
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Les 4 étapes d'un <span className="text-gradient-copper">tunnel de vente IA</span></h2>
            <div className="space-y-8">
              {[
                { title: "1. Capture : transformer les visiteurs en leads", text: "Landing page optimisée + lead magnet (guide, simulateur, audit gratuit) + chatbot de qualification. L'IA personnalise l'offre de capture selon la source de trafic et le comportement du visiteur." },
                { title: "2. Nurturing : éduquer et créer la confiance", text: "Séquence d'emails personnalisée par l'IA selon les intérêts du lead (pages visitées, liens cliqués). Contenu adaptatif : cas clients, témoignages, guides pratiques envoyés au bon moment." },
                { title: "3. Conversion : l'offre au bon moment", text: "L'IA détecte les signaux d'achat (pages de tarifs visitées, emails ouverts, interactions chatbot) et déclenche l'offre de conversion : appel découverte, démo, promotion limitée." },
                { title: "4. Optimisation continue : l'IA apprend et améliore", text: "A/B testing automatique des objets d'email, du contenu et des CTAs. L'IA analyse les taux à chaque étape et recommande des ajustements pour améliorer le funnel en continu." },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Combien de leads perdez-vous chaque mois ?</h3>
              <p className="text-muted-foreground mb-6">Audit gratuit de votre parcours de conversion et recommandations IA.</p>
              <ContactFormDialog trigger={<Button variant="hero" size="lg" className="group">Auditer mon tunnel<ArrowRight className="group-hover:translate-x-1 transition-transform" /></Button>} />
            </div>
          </section>

          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Les outils</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Stack recommandée pour <span className="text-gradient-copper">un tunnel IA</span></h2>
            <div className="space-y-6">
              {[
                { name: "Make", desc: "Orchestre tout le tunnel : capture → CRM → séquences email → scoring → déclenchement de l'offre." },
                { name: "Crisp / Chatbot IA", desc: "Qualification en temps réel des visiteurs, collecte de leads et redirection vers le bon parcours." },
                { name: "ChatGPT / IA Batemark", desc: "Rédaction des séquences email, personnalisation du contenu et analyse des performances du funnel." },
              ].map((tool, i) => (
                <div key={i} className="card-premium hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-3 mb-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><h3 className="text-lg font-bold">{tool.name}</h3></div>
                  <p className="text-muted-foreground text-sm pl-8">{tool.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-4">Retrouvez tous ces outils dans notre <Link to="/librairie-ia" className="text-primary hover:underline">Librairie d'outils IA</Link>.</p>
          </section>

          <section className="mb-20">
            <div className="card-premium border-primary/20">
              <h3 className="text-lg font-bold mb-4">📚 Pour aller plus loin</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>→ <Link to="/blog/chatbot-ia-site-web-conversion" className="text-primary hover:underline">Chatbot IA : multiplier vos conversions</Link></li>
                <li>→ <Link to="/blog/automatiser-prospection-b2b-ia" className="text-primary hover:underline">Automatiser la prospection B2B</Link></li>
                <li>→ <Link to="/blog/ia-coach-consultant" className="text-primary hover:underline">IA pour coach et consultant</Link></li>
                <li>→ <Link to="/simulateur-ia" className="text-primary hover:underline">Simulateur IA</Link></li>
              </ul>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Questions fréquentes — <span className="text-gradient-copper">Tunnel de Vente & IA</span></h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "Un tunnel de vente IA, c'est quoi ?", a: "Un parcours automatisé qui guide le prospect de la découverte à l'achat, personnalisé par l'IA." },
                { q: "Combien de temps pour le mettre en place ?", a: "2 à 4 semaines. La phase 1 (capture + emails) peut être opérationnelle en 1 semaine." },
                { q: "Quel budget prévoir ?", a: "100-300 €/mois en outils. L'investissement principal est la stratégie et le contenu." },
                { q: "Ça marche pour le B2B ?", a: "Absolument. Le nurturing IA est même plus efficace en B2B où les cycles de vente sont longs." },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Prêt à créer votre tunnel de vente IA ?</h3>
              <p className="text-muted-foreground mb-6">15 minutes pour analyser votre parcours de conversion et définir votre stratégie.</p>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Réserver mon audit gratuit<ArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
              </Button>
            </div>
          </section>
          <RelatedArticles currentSlug="ia-tunnel-vente-automatise" />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticleTunnelVente;
