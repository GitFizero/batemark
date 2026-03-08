import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CityHeroSection } from "@/components/sections/CityHeroSection";
import { CityBenefitsSection } from "@/components/sections/CityBenefitsSection";
import { CityFAQSection } from "@/components/sections/CityFAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { getCityBySlug, getNearbyCities } from "@/data/cities";

const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  
  const cityData = city ? getCityBySlug(city) : undefined;
  
  if (!cityData) {
    return <Navigate to="/" replace />;
  }

  const nearbyCities = getNearbyCities(cityData);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BATEMARK - Expert Meta Ads",
    "description": `Expert Meta Ads à ${cityData.name}. Génération de leads qualifiés pour entreprises locales.`,
    "url": `https://batemark.com/meta-ads-${cityData.slug}`,
    "areaServed": {
      "@type": "City",
      "name": cityData.name,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": cityData.region
      }
    },
    "serviceType": ["Meta Ads", "Facebook Ads", "Instagram Ads", "Génération de leads"],
    "priceRange": "€€"
  };

  return (
    <>
      <Helmet>
        <title>{cityData.metaTitle} - BATEMARK</title>
        <meta name="description" content={cityData.metaDescription} />
        <meta name="keywords" content={cityData.keywords.join(", ")} />
        <link rel="canonical" href={`https://batemark.com/meta-ads-${cityData.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${cityData.metaTitle} - BATEMARK`} />
        <meta property="og:description" content={cityData.metaDescription} />
        <meta property="og:url" content={`https://batemark.com/meta-ads-${cityData.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${cityData.metaTitle} - BATEMARK`} />
        <meta name="twitter:description" content={cityData.metaDescription} />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <CityHeroSection city={cityData} />
          <CityBenefitsSection city={cityData} />
          <TestimonialsSection />
          <PricingSection />
          <CityFAQSection city={cityData} nearbyCities={nearbyCities} />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CityPage;
