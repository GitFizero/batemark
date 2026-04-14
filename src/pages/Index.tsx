import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { OffersSection } from "@/components/sections/OffersSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StorytellingSection } from "@/components/sections/StorytellingSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LibrairieSection } from "@/components/sections/LibrairieSection";
import { ChallengeSection } from "@/components/sections/ChallengeSection";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Consultant IA & Automatisation pour entreprises — Hôtellerie, BTP, E-commerce, Santé"
        description="Intégrez l'intelligence artificielle dans votre entreprise. Consultant spécialisé en automatisation des process pour hôtellerie, restauration, immobilier, BTP, e-commerce, santé, juridique. Résultats dès le 1er mois."
        keywords="intégrer IA entreprise, automatiser entreprise, automatisation process, agents IA, consultant IA, intégration IA, make n8n zapier, dashboard pilotage IA, IA hôtellerie, IA restauration, IA immobilier, IA BTP, IA artisan, IA e-commerce, IA santé, IA avocat, IA comptable, IA salon coiffure, IA beauté, IA franchise, IA marketing, automatisation cabinet, IA gestion locative"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.batemark.com" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "BATEMARK — Intégrer l'IA en entreprise",
            "description": "Consultant spécialisé pour intégrer l'IA et automatiser les process des entreprises.",
            "url": "https://www.batemark.com",
            "founder": { "@type": "Person", "name": "Gaëtan Fizero", "url": "https://www.batemark.com/a-propos", "sameAs": ["https://www.linkedin.com/in/gaetanfizero/", "https://www.malt.fr/profile/gaetanfizero"] },
            "areaServed": { "@type": "Country", "name": "France" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quel type d'entreprise accompagnes-tu ?",
                "acceptedAnswer": { "@type": "Answer", "text": "PME, TPE, indépendants dans tous secteurs : hôtellerie, BTP, e-commerce, immobilier, santé, juridique, beauté." }
              },
              {
                "@type": "Question",
                "name": "Combien de temps pour voir des résultats ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Résultats mesurables dès le premier mois. Implémentation en 2 à 4 semaines." }
              },
              {
                "@type": "Question",
                "name": "Combien coûte un accompagnement ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Chaque mission est sur-mesure. L'appel découverte de 30 min est gratuit." }
              },
              {
                "@type": "Question",
                "name": "Pourquoi un consultant plutôt qu'une agence ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Interlocuteur unique, systèmes autonomes, coût inférieur, transfert de compétences inclus." }
              }
            ]
          })}
        </script>
      </SEOHead>

      <Header />

      <main id="main-content">
        <HeroSection />

        <div className="section-divider" />
        <ProblemsSection />

        <div className="section-divider" />
        <section id="services">
          <PillarsSection />
        </section>

        <div className="section-divider" />
        <OffersSection />

        <div className="section-divider" />
        <section id="cas-clients">
          <CaseStudiesSection />
        </section>

        <div className="section-divider" />
        <TestimonialsSection />

        <div className="section-divider" />
        <section id="methode">
          <ProcessSection />
        </section>

        <div className="section-divider" />
        <StorytellingSection />

        <div className="section-divider" />
        <LibrairieSection />

        <div className="section-divider" />
        <ChallengeSection />

        <div className="section-divider" />
        <section id="blog">
          <BlogSection />
        </section>

        <div className="section-divider" />
        <section id="faq">
          <FAQSection />
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
