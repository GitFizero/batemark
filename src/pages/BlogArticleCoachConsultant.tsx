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

const BlogArticleCoachConsultant = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "IA pour coach et consultant : automatiser prospection et onboarding client",
        "description": "Guide complet pour les coachs et consultants : automatiser la prospection, l'onboarding client et le suivi grâce à l'IA. Outils et méthode.",
        "author": { "@type": "Person", "name": "Gaëtan Fizero" },
        "publisher": { "@type": "Organization", "name": "BATEMARK", "url": "https://www.batemark.com", "logo": { "@type": "ImageObject", "url": "https://www.batemark.com/favicon.svg" } },
        "datePublished": "2026-03-08", "dateModified": "2026-03-08",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.batemark.com/blog/ia-coach-consultant" },
        "image": "https://www.batemark.com/images/cover-ia-coach-consultant.jpg",
        "keywords": ["IA coach", "IA consultant", "automatiser prospection consultant", "onboarding client IA", "automatisation coach"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.batemark.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.batemark.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "IA Coach Consultant", "item": "https://www.batemark.com/blog/ia-coach-consultant" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "L'automatisation ne va-t-elle pas déshumaniser ma relation client ?", "acceptedAnswer": { "@type": "Answer", "text": "Au contraire. L'IA gère l'admin pour vous permettre de passer plus de temps en face-à-face de qualité. Les clients apprécient un suivi régulier et professionnel — même s'il est déclenché automatiquement." } },
          { "@type": "Question", "name": "Combien de clients supplémentaires peut-on gérer avec l'IA ?", "acceptedAnswer": { "@type": "Answer", "text": "En moyenne, un consultant qui automatise peut gérer 50 à 100 % de clients en plus sans augmenter sa charge de travail. L'onboarding qui prenait 2h passe à 20 minutes." } },
          { "@type": "Question", "name": "Quels outils pour commencer ?", "acceptedAnswer": { "@type": "Answer", "text": "Make + Cal.com + ChatGPT couvrent 90 % des besoins : prospection automatisée, prise de RDV, génération de propositions et suivi client. Budget : 50-100 €/mois." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour coach et consultant : prospection et onboarding automatisés | BATEMARK</title>
        <meta name="description" content="Comment les coachs et consultants automatisent prospection, onboarding et suivi client avec l'IA. Guide pratique avec outils et résultats concrets." />
        <meta name="keywords" content="IA coach, IA consultant, automatiser prospection consultant, onboarding client IA, automatisation coach, CRM consultant" />
        <link rel="canonical" href="https://www.batemark.com/blog/ia-coach-consultant" />
        <meta property="og:title" content="IA pour coach et consultant : prospection et onboarding automatisés" />
        <meta property="og:description" content="Prospection, onboarding et suivi client automatisés pour coachs et consultants." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.batemark.com/blog/ia-coach-consultant" />
        <meta property="og:image" content="https://www.batemark.com/images/cover-ia-coach-consultant.jpg" />
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
            <span className="text-foreground font-medium">IA Coach Consultant</span>
          </nav>
        </div>

        <section className="section-padding pb-12">
          <div className="container-custom max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold gradient-copper text-background mb-6">🚀 Consulting</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                IA pour coach et consultant :{" "}<span className="text-gradient-copper">prospection et onboarding automatisés</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl">
                Un consultant passe <strong className="text-foreground">50 % de son temps</strong> à prospecter et gérer l'admin client. L'IA automatise ces tâches pour vous laisser faire ce que vous faites le mieux : accompagner.
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
            <img src="/images/cover-ia-coach-consultant.jpg" alt="Coach consultant utilisant l'IA pour automatiser sa prospection et son onboarding" className="w-full h-64 sm:h-80 md:h-96 object-cover" width="1200" height="630" loading="lazy" />
          </div>
        </section>

        <article className="container-custom max-w-4xl px-4 md:px-8">
          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Le problème</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Le paradoxe du consultant : <span className="text-gradient-copper">trop occupé pour prospecter</span></h2>
            <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>Quand vous avez des clients, vous n'avez pas le temps de prospecter. Quand les missions se terminent, le pipeline est vide. <strong className="text-foreground">Le "feast or famine"</strong> est le fléau n°1 des indépendants.</p>
              <p>L'IA résout ce problème en créant un flux de prospection continu qui tourne en arrière-plan. Comme pour la <Link to="/blog/automatiser-prospection-b2b-ia" className="text-primary hover:underline">prospection B2B</Link>, l'automatisation garantit un pipeline toujours alimenté.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 my-12">
              {[
                { stat: "50 %", desc: "du temps passé sur la prospection et l'admin" },
                { stat: "+100 %", desc: "de clients gérés grâce à l'automatisation" },
                { stat: "20 min", desc: "pour onboarder un client (vs 2h)" },
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">3 automatisations pour <span className="text-gradient-copper">scaler votre activité</span></h2>
            <div className="space-y-8">
              {[
                { title: "1. Prospection automatique et continue", text: "L'IA identifie vos prospects idéaux sur LinkedIn, enrichit les données, et envoie des séquences de messages personnalisés. Chaque semaine, de nouveaux leads qualifiés arrivent dans votre pipeline — sans que vous n'y pensiez." },
                { title: "2. Onboarding client en 20 minutes", text: "Nouveau client signé ? L'IA déclenche automatiquement : envoi du questionnaire d'onboarding, création de l'espace client, planification du kick-off, envoi des documents contractuels. Ce qui prenait 2 heures se fait en 20 minutes." },
                { title: "3. Suivi et fidélisation automatisés", text: "Rappels de séances, envoi de compte-rendus, check-in réguliers entre les sessions, demande de témoignage en fin de mission… L'IA maintient la relation sans effort, et vos clients se sentent accompagnés à chaque étape." },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Prêt à scaler sans recruter ?</h3>
              <p className="text-muted-foreground mb-6">Audit gratuit de votre activité et plan d'automatisation personnalisé.</p>
              <ContactFormDialog trigger={<Button variant="hero" size="lg" className="group">Auditer mon activité<ArrowRight className="group-hover:translate-x-1 transition-transform" /></Button>} />
            </div>
          </section>

          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Les outils</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Stack recommandée pour <span className="text-gradient-copper">coachs & consultants</span></h2>
            <div className="space-y-6">
              {[
                { name: "Make + LinkedIn", desc: "Prospection automatisée : identification de prospects, enrichissement de données, séquences de messages personnalisés." },
                { name: "Cal.com + Notion", desc: "Prise de RDV automatique, espace client centralisé, suivi de mission et documents partagés." },
                { name: "ChatGPT / IA Batemark", desc: "Rédaction de propositions commerciales, comptes-rendus de séances et contenus marketing personnalisés." },
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
                <li>→ <Link to="/blog/automatiser-prospection-b2b-ia" className="text-primary hover:underline">Automatiser la prospection B2B</Link></li>
                <li>→ <Link to="/blog/ia-tunnel-vente-automatise" className="text-primary hover:underline">Créer un tunnel de vente automatisé</Link></li>
                <li>→ <Link to="/blog/ia-recrutement-pme" className="text-primary hover:underline">Automatiser le recrutement</Link></li>
                <li>→ <Link to="/simulateur-ia" className="text-primary hover:underline">Simulateur IA</Link></li>
              </ul>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Questions fréquentes — <span className="text-gradient-copper">Coach, Consultant & IA</span></h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "L'automatisation ne déshumanise-t-elle pas la relation ?", a: "Au contraire. Moins d'admin = plus de temps en face-à-face de qualité." },
                { q: "Combien de clients en plus peut-on gérer ?", a: "+50 à 100 % sans augmenter la charge. L'onboarding passe de 2h à 20 min." },
                { q: "Quels outils pour commencer ?", a: "Make + Cal.com + ChatGPT couvrent 90 % des besoins. Budget : 50-100 €/mois." },
                { q: "Comment automatiser la prospection LinkedIn ?", a: "L'IA identifie les profils cibles, personnalise les messages et gère les séquences de relance." },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Prêt à automatiser votre activité de consultant ?</h3>
              <p className="text-muted-foreground mb-6">15 minutes pour identifier vos leviers d'automatisation prioritaires.</p>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Réserver mon audit gratuit<ArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
              </Button>
            </div>
          </section>
          <RelatedArticles currentSlug="ia-coach-consultant" />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticleCoachConsultant;
