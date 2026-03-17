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

const BlogArticleArtisan = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "IA pour artisan : automatiser devis, relance et planification",
        "description": "Guide complet pour les artisans qui veulent automatiser la gestion de devis, les relances clients et la planification de chantiers grâce à l'IA.",
        "author": { "@type": "Person", "name": "Gaëtan Fizero" },
        "publisher": { "@type": "Organization", "name": "BATEMARK", "url": "https://batemark.com", "logo": { "@type": "ImageObject", "url": "https://batemark.com/favicon.svg" } },
        "datePublished": "2026-03-08", "dateModified": "2026-03-08",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://batemark.com/blog/ia-artisan-automatisation" },
        "image": "https://batemark.com/images/cover-ia-artisan.jpg",
        "keywords": ["IA artisan", "automatiser devis artisan", "planification chantier IA", "relance client artisan", "automatisation artisan"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://batemark.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://batemark.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "IA Artisan", "item": "https://batemark.com/blog/ia-artisan-automatisation" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Un artisan a-t-il vraiment besoin de l'IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Un artisan passe en moyenne 30 % de son temps sur l'administratif (devis, relances, planification). L'IA peut réduire ce temps de 80 %, lui permettant de se concentrer sur son métier." } },
          { "@type": "Question", "name": "Combien coûte l'automatisation pour un artisan ?", "acceptedAnswer": { "@type": "Answer", "text": "Entre 30 et 100 €/mois selon la complexité. Le retour sur investissement est immédiat : un devis envoyé en 2 minutes au lieu de 30 minutes, c'est du temps de chantier récupéré." } },
          { "@type": "Question", "name": "Faut-il être à l'aise avec la technologie ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Les automatisations sont configurées une seule fois par nos soins. Ensuite, tout fonctionne en arrière-plan. L'artisan n'a rien à faire — les devis partent, les relances se lancent, le planning se met à jour." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour artisan : automatiser devis, relance et planification | BATEMARK</title>
        <meta name="description" content="Comment l'IA permet aux artisans d'automatiser devis, relances clients et planification de chantiers. Guide pratique avec outils et résultats concrets." />
        <meta name="keywords" content="IA artisan, automatiser devis artisan, planification chantier IA, relance client artisan, automatisation artisan, devis automatique" />
        <link rel="canonical" href="https://batemark.com/blog/ia-artisan-automatisation" />
        <meta property="og:title" content="IA pour artisan : automatiser devis, relance et planification" />
        <meta property="og:description" content="Devis, relances et planification automatisés pour artisans. Guide complet." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://batemark.com/blog/ia-artisan-automatisation" />
        <meta property="og:image" content="https://batemark.com/images/cover-ia-artisan.jpg" />
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
            <span className="text-foreground font-medium">IA Artisan</span>
          </nav>
        </div>

        <section className="section-padding pb-12">
          <div className="container-custom max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold gradient-copper text-background mb-6">🔧 Artisanat</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                IA pour artisan :{" "}<span className="text-gradient-copper">devis, relance et planification automatisés</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl">
                Un artisan passe <strong className="text-foreground">30 % de son temps</strong> sur l'administratif. Devis à la main, relances oubliées, planning sur papier… L'IA élimine ces tâches pour vous laisser sur le terrain.
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
            <img src="/images/cover-ia-artisan.jpg" alt="Artisan utilisant l'IA pour automatiser ses devis et sa planification" className="w-full h-64 sm:h-80 md:h-96 object-cover" width="1200" height="630" loading="lazy" />
          </div>
        </section>

        <article className="container-custom max-w-4xl px-4 md:px-8">
          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Le problème</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">L'administratif <span className="text-gradient-copper">tue la rentabilité</span> des artisans</h2>
            <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>Plombier, électricien, menuisier, peintre… Quel que soit le métier, le constat est le même : <strong className="text-foreground">1 jour sur 3 est perdu en administratif</strong>. Rédiger des devis le soir, relancer des clients qui ne répondent pas, jongler avec un planning qui change chaque jour.</p>
              <p>Pendant ce temps, les chantiers s'empilent, les devis non envoyés se transforment en clients perdus, et les relances oubliées coûtent des milliers d'euros par an. C'est exactement le type de problème que nous résolvons avec l'<Link to="/blog/automatiser-avis-google-ia" className="text-primary hover:underline">automatisation IA</Link>.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 my-12">
              {[
                { stat: "30 %", desc: "du temps d'un artisan passé sur l'administratif" },
                { stat: "45 %", desc: "des devis sont envoyés trop tard et perdus" },
                { stat: "2 min", desc: "pour générer un devis avec l'IA (vs 30 min)" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-premium text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gradient-copper mb-2">{item.stat}</div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">La solution</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">3 automatisations IA pour <span className="text-gradient-copper">artisans débordés</span></h2>
            <div className="space-y-8">
              {[
                { title: "1. Devis automatiques en 2 minutes", text: "L'IA génère un devis professionnel à partir de quelques infos (type de travaux, surface, matériaux). Vous validez, il part au client par email avec votre branding. Le client peut accepter en un clic. Fini les soirées à rédiger des devis." },
                { title: "2. Relances clients automatiques", text: "Un devis sans réponse après 48h ? L'IA envoie une relance personnalisée. Après 7 jours, une deuxième. Le ton est toujours professionnel et adapté. Résultat : +35 % de taux de conversion sur les devis envoyés." },
                { title: "3. Planning intelligent et auto-organisé", text: "L'IA optimise votre planning en fonction des zones géographiques, de la durée des chantiers et des contraintes clients. Les rendez-vous se synchronisent avec votre agenda. Les clients reçoivent des rappels automatiques." },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Combien de devis perdez-vous chaque mois ?</h3>
              <p className="text-muted-foreground mb-6">Audit gratuit de votre process administratif et plan d'automatisation sur-mesure.</p>
              <ContactFormDialog trigger={<Button variant="hero" size="lg" className="group">Auditer mon activité<ArrowRight className="group-hover:translate-x-1 transition-transform" /></Button>} />
            </div>
          </section>

          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Les outils</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Outils recommandés pour <span className="text-gradient-copper">artisans</span></h2>
            <div className="space-y-6">
              {[
                { name: "Make", desc: "Orchestre toutes les automatisations : génération de devis, envoi d'emails, relances programmées, synchronisation du planning." },
                { name: "ChatGPT / IA Batemark", desc: "Rédige les devis professionnels, génère les relances personnalisées et résume les demandes clients entrantes." },
                { name: "Google Calendar + Notion", desc: "Planning centralisé avec vue par chantier, rappels automatiques et partage client en temps réel." },
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
                <li>→ <Link to="/blog/automatiser-avis-google-ia" className="text-primary hover:underline">Automatiser vos avis Google avec l'IA</Link></li>
                <li>→ <Link to="/blog/chatbot-ia-site-web-conversion" className="text-primary hover:underline">Chatbot IA pour multiplier vos conversions</Link></li>
                <li>→ <Link to="/blog/ia-tunnel-vente-automatise" className="text-primary hover:underline">Créer un tunnel de vente automatisé avec l'IA</Link></li>
                <li>→ <Link to="/simulateur-ia" className="text-primary hover:underline">Simulateur IA pour votre activité</Link></li>
              </ul>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Questions fréquentes — <span className="text-gradient-copper">IA & Artisans</span></h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "Un artisan a-t-il vraiment besoin de l'IA ?", a: "Oui. 30 % du temps sur l'admin = 1 jour/semaine perdu. L'IA réduit ce temps de 80 %." },
                { q: "Combien coûte l'automatisation ?", a: "Entre 30 et 100 €/mois. Un devis en 2 min au lieu de 30 min, c'est du chantier récupéré." },
                { q: "Faut-il être à l'aise avec la tech ?", a: "Non. On configure tout. Ensuite, ça tourne en arrière-plan sans intervention." },
                { q: "Mes devis seront-ils personnalisés ?", a: "Oui. L'IA utilise vos tarifs, votre catalogue et votre identité visuelle pour chaque devis." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="card-premium border-border">
                  <AccordionTrigger className="text-left font-semibold text-base hover:text-primary">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="mb-20">
            <div className="rounded-2xl p-8 sm:p-10 text-center" style={{ background: "linear-gradient(135deg, hsl(220 12% 10%), hsl(220 15% 07%))" }}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Prêt à automatiser votre administratif ?</h3>
              <p className="text-muted-foreground mb-6">15 minutes pour analyser votre activité et identifier les automatisations prioritaires.</p>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Réserver mon audit gratuit<ArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
              </Button>
            </div>
          </section>
          <RelatedArticles currentSlug="ia-artisan-automatisation" />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticleArtisan;
