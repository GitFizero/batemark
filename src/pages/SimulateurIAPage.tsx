import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { SimulateurIA } from "@/components/SimulateurIA";

const SimulateurIAPage = () => {
  return (
    <>
      <SEOHead
        title="Simulateur IA — Quelle stratégie pour votre entreprise ?"
        description="Découvrez en 2 minutes quelle stratégie IA est adaptée à votre activité. Recommandations d'outils personnalisées + plan d'action gratuit."
        keywords="simulateur IA entreprise, stratégie IA, automatisation entreprise, outils IA recommandés, audit IA gratuit"
      />
      <Header />
      <main className="pb-16">
        <SimulateurIA />
      </main>
      <Footer />
    </>
  );
};

export default SimulateurIAPage;
