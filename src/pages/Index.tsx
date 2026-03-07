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
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>IA & Automatisation pour votre entreprise — BATEMARK</title>
        <meta 
          name="description" 
          content="Intégrer l'IA dans votre entreprise et automatiser vos process internes. Consultant spécialisé en automatisation, agents IA et pilotage augmenté. Appel découverte gratuit." 
        />
        <meta name="keywords" content="intégrer IA entreprise, automatiser entreprise, automatisation process, agents IA, consultant IA, intégration IA, make n8n zapier, dashboard pilotage IA" />
        <meta property="og:title" content="IA & Automatisation pour votre entreprise — BATEMARK" />
        <meta property="og:description" content="Consultant spécialisé pour intégrer l'IA et automatiser les process de votre entreprise. Agents IA, automatisation, pilotage augmenté." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://batemark.fr" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "BATEMARK — Intégrer l'IA en entreprise",
            "description": "Consultant spécialisé pour intégrer l'IA et automatiser les process des entreprises. Automatisation, agents IA, pilotage augmenté.",
            "url": "https://batemark.fr",
            "founder": {
              "@type": "Person",
              "name": "Gaëtan Fizero"
            },
            "areaServed": {
              "@type": "Country",
              "name": "France"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services IA & Automatisation",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Automatisation de l'acquisition",
                    "description": "Systèmes de leads automatisés, prospection LinkedIn, mailing IA"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Automatisation des process opérationnels",
                    "description": "Portails clients IA, dashboards décisionnels, gestion centralisée"
                  }
                }
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
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Je travaille avec des entreprises de toutes tailles, principalement dans les services, l'e-commerce et les agences."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps pour voir des résultats ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mes clients voient des résultats dès le premier mois. L'implémentation prend en moyenne 2 à 4 semaines selon la complexité."
                }
              },
              {
                "@type": "Question",
                "name": "Y a-t-il un engagement minimum ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non. On commence par une mission définie, et on continue si les résultats sont là."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      
      <main>
        <HeroSection />
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
