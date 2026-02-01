import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CalEmbed } from "@/components/sections/CalEmbed";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { OpportunitySection } from "@/components/sections/OpportunitySection";
import { MethodSection } from "@/components/sections/MethodSection";
import { RetroplanningSection } from "@/components/sections/RetroplanningSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BATEMARK | Expert Publicité Digitale Locale - Génération de Leads</title>
        <meta 
          name="description" 
          content="Expert senior en acquisition digitale. Générez des leads qualifiés pour votre entreprise locale. +7 ans d'expérience, +300 campagnes, sans engagement." 
        />
        <meta name="keywords" content="publicité digitale, génération de leads, publicité locale, acquisition digitale, leads qualifiés, facebook ads, google ads" />
        <meta property="og:title" content="BATEMARK | Expert Publicité Digitale Locale - Génération de Leads" />
        <meta property="og:description" content="Générez des leads qualifiés pour votre entreprise locale. Accompagnement complet, sans engagement." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://batemark.fr" />
        
        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BATEMARK",
            "description": "Expert en génération de leads locaux via publicité digitale",
            "url": "https://batemark.fr",
            "priceRange": "€€",
            "areaServed": {
              "@type": "Country",
              "name": "France"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services Publicité Digitale",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Accompagnement Publicité Digitale",
                    "description": "Gestion complète de vos campagnes publicitaires digitales"
                  }
                }
              ]
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Y a-t-il un engagement ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non, aucun engagement. Vous pouvez arrêter à tout moment, sans frais cachés."
                }
              },
              {
                "@type": "Question",
                "name": "En combien de temps voit-on les premiers leads ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Généralement, les premiers leads arrivent dès la première semaine de lancement."
                }
              },
              {
                "@type": "Question",
                "name": "Quel budget publicitaire prévoir ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Je recommande un budget de 20 à 30€/jour minimum pour des résultats significatifs."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      
      <main>
        <HeroSection />
        <CalEmbed />
        <section id="problems">
          <ProblemsSection />
        </section>
        <OpportunitySection />
        <MethodSection />
        <RetroplanningSection />
        <section id="solution">
          <SolutionSection />
        </section>
        <AuthoritySection />
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="pricing">
          <PricingSection />
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
