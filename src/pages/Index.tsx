import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
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
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://batemark.com" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "BATEMARK — Intégrer l'IA en entreprise",
            "description": "Consultant spécialisé pour intégrer l'IA et automatiser les process des entreprises : hôtellerie, restauration, immobilier, BTP, e-commerce, santé, juridique, beauté.",
            "url": "https://batemark.com",
            "founder": { "@type": "Person", "name": "Gaëtan Fizero" },
            "areaServed": { "@type": "Country", "name": "France" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services IA & Automatisation",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation de l'acquisition" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation des process opérationnels" } }
              ]
            }
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
                "acceptedAnswer": { "@type": "Answer", "text": "Je travaille avec des entreprises de toutes tailles : hôtellerie, restauration, immobilier, BTP, e-commerce, santé, juridique, beauté. L'IA s'adapte à tous les secteurs." }
              },
              {
                "@type": "Question",
                "name": "Combien de temps pour voir des résultats ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Mes clients voient des résultats dès le premier mois. L'implémentation prend en moyenne 2 à 4 semaines selon la complexité du projet." }
              },
              {
                "@type": "Question",
                "name": "Y a-t-il un engagement minimum ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Non. On commence par une mission définie, et on continue si les résultats sont là." }
              },
              {
                "@type": "Question",
                "name": "Combien coûte un accompagnement IA ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Chaque mission est sur-mesure. L'appel découverte de 30 minutes est gratuit et permet de définir le périmètre et le budget adapté." }
              },
              {
                "@type": "Question",
                "name": "Pourquoi choisir un consultant IA plutôt qu'une agence ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Un consultant livre des systèmes autonomes avec un interlocuteur unique, un coût inférieur et un transfert de compétences inclus." }
              },
              {
                "@type": "Question",
                "name": "L'IA est-elle compatible avec le RGPD ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Oui, toutes les solutions déployées respectent le RGPD et la réglementation européenne." }
              }
            ]
          })}
        </script>
      </SEOHead>

      <Header />

      <main id="main-content">
        <HeroSection />
        <section id="services">
          <PillarsSection />
        </section>
        <section id="cas-clients">
          <CaseStudiesSection />
        </section>
        <section id="methode">
          <ProcessSection />
        </section>
        <section id="blog">
          <BlogSection />
        </section>
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
