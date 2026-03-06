import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyBatemarkSection } from "@/components/sections/WhyBatemarkSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Intégrer l'IA en entreprise | Automatiser vos process — BATEMARK</title>
        <meta 
          name="description" 
          content="Intégrer l'IA dans votre entreprise et automatiser vos process internes. Consultant spécialisé en automatisation, agents IA et pilotage augmenté pour TPE/PME. Appel découverte gratuit." 
        />
        <meta name="keywords" content="intégrer IA entreprise, automatiser entreprise, automatisation process, agents IA, consultant IA, intégration IA PME, automatisation TPE PME, make n8n zapier, dashboard pilotage IA" />
        <meta property="og:title" content="Intégrer l'IA en entreprise | Automatiser vos process — BATEMARK" />
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
                    "name": "Automatisation des process internes",
                    "description": "Workflows automatisés via Make, n8n, Zapier"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Intégration d'agents IA",
                    "description": "Agents IA greffés sur vos opérations existantes"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pilotage & acquisition augmentée",
                    "description": "Dashboards centralisés et analyse IA des performances"
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
                "name": "Y a-t-il un engagement minimum ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non. Pas d'engagement de durée. Vous pouvez arrêter à tout moment."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps avant de voir des résultats ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les premiers quick wins arrivent dès le premier mois. Les transformations plus profondes se déploient sur 2 à 3 mois."
                }
              },
              {
                "@type": "Question",
                "name": "Faut-il déjà utiliser des outils d'IA ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non. On part de vos outils et process existants pour intégrer l'IA là où ça a du sens."
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
