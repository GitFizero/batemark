import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { IABenefitsSection } from "@/components/sections/IABenefitsSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyBatemarkSection } from "@/components/sections/WhyBatemarkSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { LibrairieSection } from "@/components/sections/LibrairieSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { SimulateurSection } from "@/components/sections/SimulateurSection";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead
        title="IA & Automatisation pour votre entreprise"
        description="Intégrer l'IA dans votre entreprise et automatiser vos process internes. Consultant spécialisé en automatisation, agents IA et pilotage augmenté. Appel découverte gratuit."
        keywords="intégrer IA entreprise, automatiser entreprise, automatisation process, agents IA, consultant IA, intégration IA, make n8n zapier, dashboard pilotage IA"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "BATEMARK — Intégrer l'IA en entreprise",
            "description": "Consultant spécialisé pour intégrer l'IA et automatiser les process des entreprises.",
            "url": "https://batemark.fr",
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
                "acceptedAnswer": { "@type": "Answer", "text": "Je travaille avec des entreprises de toutes tailles, principalement dans les services, l'e-commerce et les agences." }
              },
              {
                "@type": "Question",
                "name": "Combien de temps pour voir des résultats ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Mes clients voient des résultats dès le premier mois. L'implémentation prend en moyenne 2 à 4 semaines." }
              },
              {
                "@type": "Question",
                "name": "Y a-t-il un engagement minimum ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Non. On commence par une mission définie, et on continue si les résultats sont là." }
              }
            ]
          })}
        </script>
      </SEOHead>

      <Header />
      
      <main id="main-content">
        <HeroSection />
        <section id="ia-benefices">
          <IABenefitsSection />
        </section>
        <section id="probleme">
          <ProblemsSection />
        </section>
        <section id="approche">
          <PhilosophySection />
        </section>
        <section id="services">
          <PillarsSection />
        </section>
        <section id="cas-clients">
          <CaseStudiesSection />
        </section>
        <section id="methode">
          <ProcessSection />
        </section>
        <section id="pourquoi">
          <WhyBatemarkSection />
        </section>
        <section id="simulateur">
          <SimulateurSection />
        </section>
        <section id="librairie-ia">
          <LibrairieSection />
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
