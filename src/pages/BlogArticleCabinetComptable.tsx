import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle2, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Link } from "react-router-dom";

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

const BlogArticleCabinetComptable = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "IA pour cabinet comptable : automatiser saisie, suivi client et relance en 2026",
        "description": "Guide complet pour intégrer l'IA dans un cabinet comptable : automatisation de la saisie, relance documentaire, suivi client et productivité. Outils, méthode et résultats.",
        "author": { "@type": "Person", "name": "Gaëtan Fizero" },
        "publisher": { "@type": "Organization", "name": "BATEMARK", "url": "https://www.batemark.com", "logo": { "@type": "ImageObject", "url": "https://www.batemark.com/favicon.svg" } },
        "datePublished": "2026-03-08", "dateModified": "2026-03-08",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.batemark.com/blog/ia-cabinet-comptable" },
        "image": "https://www.batemark.com/images/cover-ia-cabinet-comptable.jpg",
        "keywords": ["IA cabinet comptable", "automatisation expert-comptable", "intelligence artificielle comptabilité", "automatiser saisie comptable", "IA expertise comptable"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.batemark.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.batemark.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "IA Cabinet Comptable", "item": "https://www.batemark.com/blog/ia-cabinet-comptable" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "L'IA va-t-elle remplacer les experts-comptables ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. L'IA automatise les tâches répétitives (saisie, rapprochement, relances). L'expert-comptable se recentre sur le conseil stratégique, l'accompagnement et la relation client — là où sa valeur est irremplaçable." } },
          { "@type": "Question", "name": "Combien de temps peut-on gagner avec l'IA dans un cabinet comptable ?", "acceptedAnswer": { "@type": "Answer", "text": "Les cabinets automatisés rapportent en moyenne 30 à 50 % de temps gagné sur les tâches de saisie et de relance documentaire. Ce temps est réinvesti en missions de conseil à plus forte marge." } },
          { "@type": "Question", "name": "Les outils IA sont-ils conformes aux normes comptables françaises ?", "acceptedAnswer": { "@type": "Answer", "text": "Les outils d'automatisation recommandés (Make, Crisp) ne modifient pas les données comptables. Ils automatisent les flux (collecte de pièces, relances, communication client). La conformité aux normes PCG et aux obligations déclaratives reste sous la responsabilité de l'expert-comptable." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour cabinet comptable : automatiser saisie et suivi client | BATEMARK</title>
        <meta name="description" content="Comment l'IA transforme les cabinets comptables : automatisation de la saisie, relance documentaire, suivi client. Guide complet 2026 pour experts-comptables." />
        <meta name="keywords" content="IA cabinet comptable, automatisation expert-comptable, intelligence artificielle comptabilité, automatiser saisie comptable, IA expertise comptable, productivité cabinet comptable" />
        <link rel="canonical" href="https://www.batemark.com/blog/ia-cabinet-comptable" />
        <meta property="og:title" content="IA pour cabinet comptable — Guide complet 2026" />
        <meta property="og:description" content="Automatiser saisie, suivi client et relance dans un cabinet comptable grâce à l'IA." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.batemark.com/blog/ia-cabinet-comptable" />
        <meta property="og:image" content="https://www.batemark.com/images/cover-ia-cabinet-comptable.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="BATEMARK" />
        <meta property="article:published_time" content="2026-03-08" />
        <meta property="article:modified_time" content="2026-03-08" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IA pour cabinet comptable — Guide complet 2026" />
        <meta name="twitter:image" content="https://www.batemark.com/images/cover-ia-cabinet-comptable.jpg" />
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
            <span className="text-foreground font-medium">IA Cabinet Comptable</span>
          </nav>
        </div>

        <section className="section-padding pb-12">
          <div className="container-custom max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold gradient-copper text-background mb-6">📊 Comptabilité</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                IA pour cabinet comptable : automatiser{" "}<span className="text-gradient-copper">saisie, suivi client et relance</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl">
                Les cabinets qui intègrent l'IA gagnent <strong className="text-foreground">30 à 50 % de temps</strong> sur les tâches répétitives et réinvestissent ce temps en missions de conseil à forte marge. Voici comment.
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
            <img src="/images/cover-ia-cabinet-comptable.jpg" alt="Cabinet comptable augmenté par l'intelligence artificielle" className="w-full h-64 sm:h-80 md:h-96 object-cover" width="1200" height="630" loading="lazy" />
          </div>
        </section>

        <section className="container-custom max-w-4xl px-4 md:px-8 mb-16">
          <div className="card-premium">
            <h2 className="text-xl font-bold mb-4">📑 Sommaire</h2>
            <ol className="space-y-2 text-muted-foreground">
              {["Le défi : des marges sous pression", "Les 5 leviers IA pour un cabinet comptable", "Les outils IA recommandés", "Méthode de déploiement", "Questions fréquentes"].map((item, i) => (
                <li key={i} className="flex items-center gap-3"><span className="text-primary font-bold">{i + 1}.</span>{item}</li>
              ))}
            </ol>
          </div>
        </section>

        <article className="container-custom max-w-4xl px-4 md:px-8">
          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Le constat</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Le défi : des marges sous pression, <span className="text-destructive">un temps qui manque</span></h2>
            <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>Selon l'<a href="https://www.experts-comptables.fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ordre des Experts-Comptables</a>, un collaborateur comptable passe en moyenne <strong className="text-foreground">40 à 60 % de son temps</strong> sur des tâches de saisie, de rapprochement et de relance documentaire. C'est du temps à faible valeur ajoutée qui ne facture pas — ou très peu.</p>
              <p>Parallèlement, les clients attendent de plus en plus de <strong className="text-foreground">conseil stratégique</strong> : optimisation fiscale, pilotage de trésorerie, aide à la décision. Mais les équipes n'ont pas le temps. L'IA résout cette équation comme elle le fait dans d'autres secteurs — voir notre <Link to="/blog/formation-intelligence-artificielle" className="text-primary hover:underline">article sur l'accompagnement IA</Link>.</p>
              <div className="bg-accent/30 border-l-4 border-primary rounded-r-xl p-5">
                <p className="text-foreground font-semibold m-0">💡 L'IA ne remplace pas l'expert-comptable. Elle libère du temps pour les missions à forte valeur : conseil, stratégie, accompagnement du dirigeant.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 my-12">
              {[
                { stat: "50 %", desc: "du temps collaborateur sur des tâches automatisables" },
                { stat: "×2,3", desc: "de missions conseil avec le temps libéré par l'IA" },
                { stat: "+35 %", desc: "de marge nette chez les cabinets automatisés" },
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">5 leviers IA pour <span className="text-gradient-copper">transformer votre cabinet</span></h2>
            <div className="space-y-8">
              {[
                { title: "1. Automatisation de la collecte de pièces comptables", text: "L'IA relance automatiquement vos clients pour récupérer factures, relevés bancaires et justificatifs. Fini les dizaines d'emails manuels chaque mois. Le client reçoit un rappel personnalisé avec un lien de dépôt sécurisé." },
                { title: "2. Saisie comptable assistée par l'IA", text: "L'OCR couplé à l'IA catégorise automatiquement les pièces, pré-remplit les écritures et suggère les imputations comptables. Le collaborateur valide au lieu de saisir — gain de temps : 60 à 80 %." },
                { title: "3. Relance automatique des clients en retard", text: "Via Make, déclenchez des séquences de relance pour les déclarations en retard, les pièces manquantes ou les honoraires impayés. Chaque relance est personnalisée et progressive." },
                { title: "4. Chatbot client pour les questions récurrentes", text: "Un chatbot IA entraîné sur vos process répond aux questions fréquentes de vos clients : 'Quand dois-je déposer mes pièces ?', 'Où en est ma déclaration ?', 'Quel est le montant de ma TVA ?'. Cela réduit de 40 % les appels entrants." },
                { title: "5. Prospection et acquisition de nouveaux clients", text: "L'IA identifie les dirigeants en recherche de nouvel expert-comptable (création d'entreprise, changement de cabinet) et déclenche des séquences de prospection personnalisées. Voir notre guide sur la prospection B2B automatisée." },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Combien d'heures perdez-vous chaque mois en tâches automatisables ?</h3>
              <p className="text-muted-foreground mb-6">Audit gratuit de vos process comptables en 15 minutes.</p>
              <ContactFormDialog trigger={<Button variant="hero" size="lg" className="group">Démarrer l'audit<ArrowRight className="group-hover:translate-x-1 transition-transform" /></Button>} />
            </div>
          </section>

          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Les outils</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Outils IA recommandés <span className="text-gradient-copper">pour les cabinets</span></h2>
            <div className="space-y-6">
              {[
                { name: "Make", desc: "Orchestrateur central : automatise la collecte de pièces, les relances, les rappels d'échéances fiscales et la synchronisation avec votre logiciel comptable." },
                { name: "Crisp", desc: "Chatbot IA pour le portail client : répond aux questions récurrentes, collecte des documents et réduit les appels entrants de 40 %." },
                { name: "Meetlane", desc: "Prospection de nouveaux clients : identifie les créateurs d'entreprise et dirigeants en recherche de cabinet, avec séquences email personnalisées." },
              ].map((tool, i) => (
                <div key={i} className="card-premium hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-3 mb-2"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><h3 className="text-lg font-bold">{tool.name}</h3></div>
                  <p className="text-muted-foreground text-sm pl-8">{tool.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-4">Retrouvez tous nos outils dans la <Link to="/librairie-ia" className="text-primary hover:underline">Librairie d'outils IA</Link>.</p>
          </section>

          <section className="mb-20">
            <div className="card-premium border-primary/20">
              <h3 className="text-lg font-bold mb-4">📚 Pour aller plus loin</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>→ <Link to="/blog/automatiser-prospection-b2b-ia" className="text-primary hover:underline">Automatiser la prospection B2B avec l'IA</Link></li>
                <li>→ <Link to="/blog/formation-intelligence-artificielle" className="text-primary hover:underline">Formation IA : pourquoi c'est (souvent) une erreur</Link></li>
                <li>→ <Link to="/blog/chatbot-ia-site-web-conversion" className="text-primary hover:underline">Chatbot IA : multiplier vos conversions</Link></li>
                <li>→ <Link to="/simulateur-ia" className="text-primary hover:underline">Simulateur : quelle stratégie IA pour votre cabinet ?</Link></li>
              </ul>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Questions fréquentes — <span className="text-gradient-copper">IA & Comptabilité</span></h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "L'IA va-t-elle remplacer les experts-comptables ?", a: "Non. L'IA automatise les tâches répétitives (saisie, rapprochement, relances). L'expert-comptable se recentre sur le conseil stratégique et la relation client — là où sa valeur est irremplaçable." },
                { q: "Combien de temps peut-on gagner avec l'IA ?", a: "Les cabinets automatisés rapportent 30 à 50 % de temps gagné sur les tâches de saisie et de relance. Ce temps est réinvesti en missions de conseil à plus forte marge." },
                { q: "Les outils IA sont-ils conformes aux normes comptables ?", a: "Les outils d'automatisation recommandés ne modifient pas les données comptables. Ils automatisent les flux (collecte, relances, communication). La conformité reste sous la responsabilité de l'expert-comptable." },
                { q: "Par où commencer pour intégrer l'IA dans mon cabinet ?", a: "Commencez par la relance documentaire automatisée : c'est le levier le plus rapide à déployer et le plus immédiatement rentable. En 2 semaines, vous réduisez de 80 % le temps passé à courir après les pièces manquantes." },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Prêt à automatiser votre cabinet comptable ?</h3>
              <p className="text-muted-foreground mb-6">En 15 minutes, on identifie vos 3 plus gros leviers de productivité.</p>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Réserver mon audit gratuit<ArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
              </Button>
            </div>
          </section>
          <RelatedArticles currentSlug="ia-cabinet-comptable" />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticleCabinetComptable;