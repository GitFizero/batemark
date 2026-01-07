import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CalEmbed } from "@/components/sections/CalEmbed";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { OpportunitySection } from "@/components/sections/OpportunitySection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CTASection } from "@/components/sections/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BATEMARK | Expert Meta Ads - Génération de Leads Locaux</title>
        <meta 
          name="description" 
          content="Expert senior en acquisition digitale. Générez des leads qualifiés pour votre entreprise locale grâce à Meta Ads. +7 ans d'expérience, +300 campagnes, sans engagement." 
        />
        <meta name="keywords" content="meta ads, facebook ads, génération de leads, publicité locale, acquisition digitale, leads qualifiés" />
        <meta property="og:title" content="BATEMARK | Expert Meta Ads - Génération de Leads Locaux" />
        <meta property="og:description" content="Générez des leads qualifiés pour votre entreprise locale grâce à Meta Ads. Accompagnement complet, sans engagement." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://batemark.fr" />
        
        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BATEMARK",
            "description": "Expert en génération de leads locaux via Meta Ads",
            "url": "https://batemark.fr",
            "priceRange": "€€",
            "areaServed": {
              "@type": "Country",
              "name": "France"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services Meta Ads",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Accompagnement Meta Ads",
                    "description": "Gestion complète de vos campagnes publicitaires Meta"
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
        <section id="solution">
          <SolutionSection />
        </section>
        <AuthoritySection />
        <TestimonialsSection />
        <section id="pricing">
          <PricingSection />
        </section>
        <BlogSection />
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
