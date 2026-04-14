import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface ToolPageContent {
  /** "n8n", "Make", "Zapier", … */
  toolName: string;
  /** SEO title (without site name suffix) */
  title: string;
  /** Meta description */
  description: string;
  /** Meta keywords */
  keywords: string;
  /** Path used for canonical (must start with /) */
  path: string;
  /** Hero punchline below H1 */
  intro: string;
  /** Bullet list of typical use cases */
  useCases: { title: string; description: string }[];
  /** "Pourquoi BATEMARK ?" arguments */
  arguments: { title: string; description: string }[];
  /** FAQ items */
  faq: { question: string; answer: string }[];
  /** Internal cross-links to other tool pages */
  related: { label: string; to: string }[];
}

export const ConsultantToolPage = ({ content }: { content: ToolPageContent }) => {
  const url = `https://www.batemark.com${content.path}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Consultant ${content.toolName} — Intégration & Automatisation`,
    serviceType: `Conseil et intégration ${content.toolName}`,
    provider: {
      "@type": "Organization",
      name: "BATEMARK",
      url: "https://www.batemark.com",
      founder: {
        "@type": "Person",
        name: "Gaëtan Fizero",
        url: "https://www.batemark.com/a-propos",
        sameAs: [
          "https://www.linkedin.com/in/gaetanfizero/",
          "https://www.malt.fr/profile/gaetanfizero",
        ],
      },
    },
    areaServed: { "@type": "Country", name: "France" },
    url,
    description: content.description,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.batemark.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: `Consultant ${content.toolName}`,
        item: url,
      },
    ],
  };

  return (
    <>
      <SEOHead
        title={content.title}
        description={content.description}
        keywords={content.keywords}
      >
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </SEOHead>

      <Header />

      <main id="main-content" className="min-h-screen pt-32 pb-20 px-4 md:px-8">
        <div className="container-custom max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <header className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold gradient-copper text-background mb-6">
              Consultant {content.toolName}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Consultant {content.toolName} pour TPE &amp; PME — automatisez vos process
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {content.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Réserver un appel découverte
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/simulateur-ia"
                className="inline-flex items-center gap-2 border border-primary/40 px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Simuler mon ROI
              </Link>
            </div>
          </header>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Cas d'usage typiques sur {content.toolName}
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {content.useCases.map((uc) => (
                <div key={uc.title} className="glass-card p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{uc.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {uc.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Pourquoi passer par un consultant {content.toolName} ?
            </h2>
            <div className="space-y-5">
              {content.arguments.map((a) => (
                <div key={a.title}>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {a.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Méthode BATEMARK en 4 étapes
            </h2>
            <ol className="space-y-4 text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">1. Audit des process (1 semaine).</strong>{" "}
                Cartographie de vos workflows, identification des 2-3 automatisations à plus
                fort ROI.
              </li>
              <li>
                <strong className="text-foreground">2. Conception &amp; maquette (1 semaine).</strong>{" "}
                Architecture des scénarios {content.toolName}, validation des dépendances
                (CRM, ERP, IA, base de données).
              </li>
              <li>
                <strong className="text-foreground">3. Build &amp; tests (2-3 semaines).</strong>{" "}
                Déploiement sur votre environnement, journalisation des erreurs, gestion
                des reprises.
              </li>
              <li>
                <strong className="text-foreground">4. Transfert &amp; documentation.</strong>{" "}
                Vous (ou votre équipe) reprenez la main. Documentation Notion + vidéos de
                passation. Support 30 jours inclus.
              </li>
            </ol>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Questions fréquentes sur {content.toolName}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {content.faq.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Aller plus loin
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {content.related.map((r) => (
                <li key={r.to}>
                  <Link
                    to={r.to}
                    className="block glass-card p-4 hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-foreground font-semibold">{r.label}</span>
                    <ArrowRight className="inline w-4 h-4 ml-2 text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-card p-8 sm:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Prêt à automatiser avec {content.toolName} ?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              30 minutes d'appel suffisent pour identifier les workflows à plus fort impact
              dans votre entreprise et estimer le gain de temps. Sans engagement.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Réserver mon appel découverte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};
