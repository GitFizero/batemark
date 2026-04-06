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

const BlogArticleRecrutement = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Automatiser le recrutement en PME avec l'IA — guide complet 2026",
        "description": "Comment automatiser le tri de CV, la pré-qualification et la planification des entretiens grâce à l'IA. Méthode et outils concrets pour PME.",
        "author": { "@type": "Person", "name": "Gaëtan Fizero" },
        "publisher": { "@type": "Organization", "name": "BATEMARK", "url": "https://www.batemark.com", "logo": { "@type": "ImageObject", "url": "https://www.batemark.com/favicon.svg" } },
        "datePublished": "2026-03-08", "dateModified": "2026-03-08",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.batemark.com/blog/ia-recrutement-pme" },
        "image": "https://www.batemark.com/images/cover-ia-recrutement.jpg",
        "keywords": ["automatiser recrutement IA", "recrutement PME IA", "tri CV automatique", "IA RH", "recrutement automatisé"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.batemark.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.batemark.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "IA Recrutement PME", "item": "https://www.batemark.com/blog/ia-recrutement-pme" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "L'IA peut-elle remplacer un recruteur ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. L'IA automatise les tâches répétitives (tri de CV, pré-qualification, planification) mais la décision finale reste humaine. Elle libère 70 % du temps du recruteur pour se concentrer sur l'évaluation qualitative." } },
          { "@type": "Question", "name": "Combien de temps gagne-t-on avec le recrutement automatisé ?", "acceptedAnswer": { "@type": "Answer", "text": "En moyenne, l'IA réduit le temps de recrutement de 40 à 60 %. Le tri de 200 CV passe de 4 heures à 15 minutes. La planification des entretiens est instantanée." } },
          { "@type": "Question", "name": "Est-ce adapté aux petites entreprises ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Les outils d'automatisation actuels sont accessibles dès 50 €/mois. Pour une PME qui recrute 5 à 20 personnes par an, le ROI est immédiat dès le premier recrutement automatisé." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Automatiser le recrutement en PME avec l'IA — Guide 2026 | BATEMARK</title>
        <meta name="description" content="Comment automatiser le tri de CV, la pré-qualification et la planification des entretiens grâce à l'IA. Guide complet pour PME : outils, méthode et résultats." />
        <meta name="keywords" content="automatiser recrutement IA, recrutement PME IA, tri CV automatique, IA RH, recrutement automatisé, présélection candidats IA" />
        <link rel="canonical" href="https://www.batemark.com/blog/ia-recrutement-pme" />
        <meta property="og:title" content="Automatiser le recrutement en PME avec l'IA" />
        <meta property="og:description" content="Tri de CV, pré-qualification et planification automatisés. Guide complet pour PME." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.batemark.com/blog/ia-recrutement-pme" />
        <meta property="og:image" content="https://www.batemark.com/images/cover-ia-recrutement.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="BATEMARK" />
        <meta property="article:published_time" content="2026-03-08" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Automatiser le recrutement en PME avec l'IA" />
        <meta name="twitter:image" content="https://www.batemark.com/images/cover-ia-recrutement.jpg" />
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
            <span className="text-foreground font-medium">IA Recrutement PME</span>
          </nav>
        </div>

        <section className="section-padding pb-12">
          <div className="container-custom max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold gradient-copper text-background mb-6">🎯 Recrutement</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Automatiser le recrutement en PME{" "}<span className="text-gradient-copper">avec l'IA</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl">
                <strong className="text-foreground">68 % des PME</strong> perdent leur candidat idéal à cause d'un processus de recrutement trop lent. L'IA permet de diviser par 3 le temps de recrutement tout en améliorant la qualité des embauches.
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
            <img src="/images/cover-ia-recrutement.jpg" alt="Automatisation du recrutement en PME avec intelligence artificielle" className="w-full h-64 sm:h-80 md:h-96 object-cover" width="1200" height="630" loading="lazy" />
          </div>
        </section>

        <article className="container-custom max-w-4xl px-4 md:px-8">
          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Le constat</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Le recrutement en PME : <span className="text-gradient-copper">un gouffre de temps</span></h2>
            <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>En 2026, recruter un collaborateur coûte en moyenne <strong className="text-foreground">6 000 à 15 000 €</strong> à une PME (temps passé, outils, coût d'un mauvais recrutement). Le problème n'est pas le manque de candidats — c'est le temps perdu à les traiter.</p>
              <p>Trier 200 CV à la main, relancer les candidats, coordonner les agendas d'entretien… Ces tâches représentent <strong className="text-foreground">70 % du temps d'un recrutement</strong> et sont 100 % automatisables. Comme pour la <Link to="/blog/automatiser-prospection-b2b-ia" className="text-primary hover:underline">prospection B2B</Link>, l'IA excelle à traiter du volume avec précision.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 my-12">
              {[
                { stat: "23 jours", desc: "durée moyenne d'un recrutement en PME" },
                { stat: "70 %", desc: "du temps passé sur des tâches automatisables" },
                { stat: "×3", desc: "plus rapide avec un process IA" },
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">3 automatisations pour <span className="text-gradient-copper">recruter plus vite</span></h2>
            <div className="space-y-8">
              {[
                { title: "1. Tri et scoring automatique des CV", text: "L'IA analyse chaque candidature et attribue un score de pertinence basé sur vos critères (compétences, expérience, localisation). Les meilleurs profils remontent en tête automatiquement. Fini les 4 heures de tri pour 200 CV — l'IA le fait en 15 minutes." },
                { title: "2. Pré-qualification par chatbot ou formulaire intelligent", text: "Un chatbot IA pose les questions de pré-qualification à chaque candidat : disponibilité, prétentions salariales, motivations. Les réponses sont analysées et synthétisées. Vous ne rencontrez que les candidats déjà qualifiés." },
                { title: "3. Planification automatique des entretiens", text: "L'IA synchronise vos disponibilités avec celles du candidat et propose automatiquement des créneaux. Confirmation, rappels et compte-rendu sont générés automatiquement. Comme pour le service client, l'automatisation élimine les allers-retours inutiles." },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Combien de temps perdez-vous à recruter ?</h3>
              <p className="text-muted-foreground mb-6">Audit gratuit de votre processus de recrutement et plan d'automatisation personnalisé.</p>
              <ContactFormDialog trigger={<Button variant="hero" size="lg" className="group">Auditer mon process RH<ArrowRight className="group-hover:translate-x-1 transition-transform" /></Button>} />
            </div>
          </section>

          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Les outils</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Stack recommandée pour <span className="text-gradient-copper">le recrutement IA</span></h2>
            <div className="space-y-6">
              {[
                { name: "Make + Google Sheets", desc: "Centralise les candidatures de toutes vos sources (LinkedIn, Indeed, site) et déclenche le scoring automatique et les notifications." },
                { name: "ChatGPT / IA Batemark", desc: "Analyse les CV, génère les synthèses candidat et rédige les emails de suivi personnalisés pour chaque étape du process." },
                { name: "Cal.com", desc: "Planification automatique des entretiens avec synchronisation agenda et rappels automatiques candidat + recruteur." },
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
                <li>→ <Link to="/blog/automatiser-prospection-b2b-ia" className="text-primary hover:underline">Automatiser la prospection B2B avec l'IA</Link></li>
                <li>→ <Link to="/blog/ia-automatiser-reporting" className="text-primary hover:underline">Réduire de 60 % le temps de reporting avec l'IA</Link></li>
                <li>→ <Link to="/blog/ia-coach-consultant" className="text-primary hover:underline">IA pour coach et consultant</Link></li>
                <li>→ <Link to="/simulateur-ia" className="text-primary hover:underline">Simulateur : quelle stratégie IA pour votre entreprise ?</Link></li>
              </ul>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Questions fréquentes — <span className="text-gradient-copper">Recrutement & IA</span></h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "L'IA peut-elle remplacer un recruteur ?", a: "Non. L'IA automatise les tâches répétitives mais la décision finale reste humaine. Elle libère 70 % du temps pour l'évaluation qualitative." },
                { q: "Combien de temps gagne-t-on ?", a: "En moyenne 40 à 60 % de temps en moins. Le tri de 200 CV passe de 4 heures à 15 minutes." },
                { q: "Est-ce adapté aux petites entreprises ?", a: "Oui. Dès 50 €/mois avec les bons outils. Le ROI est immédiat dès le premier recrutement automatisé." },
                { q: "Y a-t-il un risque de biais algorithmique ?", a: "Le risque existe si l'IA est mal configurée. Nos automatisations sont basées sur des critères objectifs définis avec vous, sans discrimination." },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Prêt à recruter 3× plus vite ?</h3>
              <p className="text-muted-foreground mb-6">On analyse votre process et on vous montre comment l'IA peut le transformer.</p>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Réserver mon audit gratuit<ArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
              </Button>
            </div>
          </section>
          <RelatedArticles currentSlug="ia-recrutement-pme" />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticleRecrutement;
