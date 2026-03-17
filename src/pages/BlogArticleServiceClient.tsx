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

const BlogArticleServiceClient = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Automatiser le service client avec l'IA sans perdre en qualité",
        "description": "Guide complet pour automatiser le support client grâce à l'IA : chatbot, ticketing intelligent et escalade automatique. Méthode pour PME et e-commerce.",
        "author": { "@type": "Person", "name": "Gaëtan Fizero" },
        "publisher": { "@type": "Organization", "name": "BATEMARK", "url": "https://batemark.com", "logo": { "@type": "ImageObject", "url": "https://batemark.com/favicon.svg" } },
        "datePublished": "2026-03-08", "dateModified": "2026-03-08",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://batemark.com/blog/ia-automatiser-service-client" },
        "image": "https://batemark.com/images/cover-ia-service-client.jpg",
        "keywords": ["automatiser service client IA", "chatbot service client", "support client IA", "ticketing automatique", "service client automatisé"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://batemark.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://batemark.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "IA Service Client", "item": "https://batemark.com/blog/ia-automatiser-service-client" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "L'IA peut-elle gérer des réclamations complexes ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA gère 80 % des demandes courantes (suivi commande, FAQ, retours). Pour les cas complexes, elle escalade automatiquement vers un humain avec tout le contexte pré-rempli, accélérant la résolution." } },
          { "@type": "Question", "name": "Les clients acceptent-ils de parler à un bot ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, 69 % des consommateurs préfèrent un chatbot pour les réponses rapides. La clé : transparence sur le fait que c'est un assistant IA et possibilité facile de passer à un humain." } },
          { "@type": "Question", "name": "Quel ROI attendre de l'automatisation du service client ?", "acceptedAnswer": { "@type": "Answer", "text": "En moyenne, les entreprises réduisent de 40 % leurs coûts de support et améliorent le temps de réponse de 90 %. Le NPS augmente car les clients obtiennent des réponses instantanées 24/7." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Automatiser le service client avec l'IA — Guide PME 2026 | BATEMARK</title>
        <meta name="description" content="Comment automatiser le support client avec l'IA sans perdre en qualité. Chatbot, ticketing intelligent et escalade automatique pour PME et e-commerce." />
        <meta name="keywords" content="automatiser service client IA, chatbot service client, support client IA, ticketing automatique, service client automatisé, IA support" />
        <link rel="canonical" href="https://batemark.com/blog/ia-automatiser-service-client" />
        <meta property="og:title" content="Automatiser le service client avec l'IA sans perdre en qualité" />
        <meta property="og:description" content="Chatbot, ticketing et escalade automatiques. Guide complet pour PME." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://batemark.com/blog/ia-automatiser-service-client" />
        <meta property="og:image" content="https://batemark.com/images/cover-ia-service-client.jpg" />
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
            <span className="text-foreground font-medium">IA Service Client</span>
          </nav>
        </div>

        <section className="section-padding pb-12">
          <div className="container-custom max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold gradient-copper text-background mb-6">💬 Support</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Automatiser le service client{" "}<span className="text-gradient-copper">sans perdre en qualité</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl">
                <strong className="text-foreground">80 % des demandes clients</strong> sont répétitives. L'IA les traite instantanément, 24/7, pendant que votre équipe se concentre sur les cas qui comptent vraiment.
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
            <img src="/images/cover-ia-service-client.jpg" alt="Automatisation du service client avec intelligence artificielle" className="w-full h-64 sm:h-80 md:h-96 object-cover" width="1200" height="630" loading="lazy" />
          </div>
        </section>

        <article className="container-custom max-w-4xl px-4 md:px-8">
          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Le problème</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Le service client <span className="text-gradient-copper">vous coûte trop cher</span></h2>
            <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>Chaque ticket de support coûte entre <strong className="text-foreground">5 et 25 €</strong> à traiter manuellement. Multipliez par des centaines de demandes mensuelles, et le support devient un poste de dépense majeur — surtout pour les PME et e-commerçants.</p>
              <p>Le pire ? La majorité de ces demandes sont identiques : « Où est ma commande ? », « Comment retourner un article ? », « Quels sont vos horaires ? ». Comme nous l'expliquons dans notre guide sur les <Link to="/blog/chatbot-ia-site-web-conversion" className="text-primary hover:underline">chatbots IA</Link>, ces questions peuvent être traitées instantanément.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 my-12">
              {[
                { stat: "80 %", desc: "des demandes sont répétitives et automatisables" },
                { stat: "-40 %", desc: "de coûts de support avec l'IA" },
                { stat: "24/7", desc: "disponibilité sans embauche supplémentaire" },
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">3 niveaux d'automatisation pour <span className="text-gradient-copper">un support scalable</span></h2>
            <div className="space-y-8">
              {[
                { title: "1. Chatbot IA en première ligne", text: "Un chatbot entraîné sur vos FAQ, conditions de vente et catalogue répond instantanément aux questions courantes. Il gère le suivi de commande, les informations produit et les demandes simples. Résultat : 60 à 80 % des tickets résolus sans intervention humaine." },
                { title: "2. Ticketing intelligent avec catégorisation automatique", text: "Les demandes qui nécessitent un humain sont automatiquement catégorisées, priorisées et assignées au bon agent. L'IA pré-remplit le contexte (historique client, commande concernée, sentiment détecté) pour une résolution ultra-rapide." },
                { title: "3. Escalade intelligente et suivi proactif", text: "L'IA détecte les situations critiques (client VIP mécontent, problème récurrent) et escalade immédiatement avec alerte. Elle envoie aussi des suivis proactifs : « Votre problème a-t-il été résolu ? » pour clore les tickets et améliorer la satisfaction." },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Combien vous coûte chaque ticket de support ?</h3>
              <p className="text-muted-foreground mb-6">Audit gratuit de votre service client et estimation des économies possibles avec l'IA.</p>
              <ContactFormDialog trigger={<Button variant="hero" size="lg" className="group">Auditer mon support<ArrowRight className="group-hover:translate-x-1 transition-transform" /></Button>} />
            </div>
          </section>

          <section className="mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-2 block">Les outils</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Stack recommandée pour <span className="text-gradient-copper">le support IA</span></h2>
            <div className="space-y-6">
              {[
                { name: "Crisp", desc: "Chatbot IA conversationnel + live chat + base de connaissances. S'intègre à votre site en 5 minutes et apprend de vos contenus existants." },
                { name: "Make", desc: "Connecte votre chatbot à votre CRM, outil de ticketing et base de données pour des réponses contextuelles et un routage intelligent." },
                { name: "ChatGPT / IA Batemark", desc: "Génère des réponses personnalisées, résume les conversations longues et extrait les insights des feedbacks clients." },
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
                <li>→ <Link to="/blog/chatbot-ia-site-web-conversion" className="text-primary hover:underline">Chatbot IA : multiplier vos conversions par 3</Link></li>
                <li>→ <Link to="/blog/ia-e-commerce" className="text-primary hover:underline">IA pour e-commerce</Link></li>
                <li>→ <Link to="/blog/automatiser-avis-google-ia" className="text-primary hover:underline">Automatiser vos avis Google</Link></li>
                <li>→ <Link to="/simulateur-ia" className="text-primary hover:underline">Simulateur IA pour votre entreprise</Link></li>
              </ul>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Questions fréquentes — <span className="text-gradient-copper">Service Client & IA</span></h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "L'IA peut-elle gérer des réclamations complexes ?", a: "Elle gère 80 % des demandes courantes. Pour le reste, elle escalade avec tout le contexte pré-rempli." },
                { q: "Les clients acceptent-ils de parler à un bot ?", a: "69 % préfèrent un chatbot pour les réponses rapides. La clé : transparence et escalade facile." },
                { q: "Quel ROI attendre ?", a: "-40 % de coûts de support, temps de réponse réduit de 90 %, NPS en hausse." },
                { q: "Combien de temps pour mettre en place ?", a: "Un chatbot IA fonctionnel se déploie en 1 à 2 semaines, incluant l'entraînement sur vos données." },
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Prêt à transformer votre service client ?</h3>
              <p className="text-muted-foreground mb-6">En 15 minutes, on analyse votre support et on vous montre les quick wins IA.</p>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Réserver mon audit gratuit<ArrowRight className="group-hover:translate-x-1 transition-transform" /></a>
              </Button>
            </div>
          </section>
          <RelatedArticles currentSlug="ia-automatiser-service-client" />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticleServiceClient;
