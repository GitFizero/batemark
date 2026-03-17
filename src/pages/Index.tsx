import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { IABenefitsSection } from "@/components/sections/IABenefitsSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { SectorsSection } from "@/components/sections/SectorsSection";
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
                "acceptedAnswer": { "@type": "Answer", "text": "Je travaille avec des entreprises de toutes tailles : hôtellerie, restauration, immobilier, BTP, e-commerce, santé, juridique, beauté, marketing et franchises. L'IA s'adapte à tous les secteurs." }
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
                "name": "Comment l'IA peut-elle aider mon hôtel ou restaurant ?",
                "acceptedAnswer": { "@type": "Answer", "text": "L'IA automatise la gestion des réservations, optimise le yield management, répond aux avis clients et personnalise la communication. Les hôtels constatent une hausse de 20 à 40% des réservations directes." }
              },
              {
                "@type": "Question",
                "name": "L'IA est-elle adaptée aux artisans et entreprises du BTP ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Absolument. L'IA automatise la création de devis, la planification des chantiers, le suivi des interventions et la prospection de nouveaux clients. Les artisans gagnent en moyenne 6 à 8 heures par semaine." }
              },
              {
                "@type": "Question",
                "name": "Quels bénéfices pour un cabinet d'avocats ou d'expertise comptable ?",
                "acceptedAnswer": { "@type": "Answer", "text": "L'IA automatise la rédaction de documents, la veille juridique, le suivi des dossiers et la relation client. Les cabinets réduisent de 50% le temps passé sur les tâches administratives." }
              },
              {
                "@type": "Question",
                "name": "Comment l'IA améliore-t-elle la gestion d'un e-commerce ?",
                "acceptedAnswer": { "@type": "Answer", "text": "L'IA optimise la gestion des stocks, automatise la comptabilité, personnalise les campagnes marketing et analyse les données de vente pour maximiser la rentabilité de votre boutique en ligne." }
              },
              {
                "@type": "Question",
                "name": "Peut-on utiliser l'IA dans un salon de coiffure ou un spa ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Oui. L'IA automatise la prise de rendez-vous, envoie des rappels et offres personnalisées, gère les avis clients et optimise le planning. Les instituts de beauté augmentent leur taux de remplissage de 25% en moyenne." }
              },
              {
                "@type": "Question",
                "name": "Quel budget prévoir pour intégrer l'IA dans mon entreprise ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Le budget dépend de la complexité du projet. Nous proposons un appel découverte gratuit pour évaluer vos besoins et vous fournir un devis précis. Le retour sur investissement est généralement atteint dès le premier mois." }
              },
              {
                "@type": "Question",
                "name": "L'IA peut-elle aider à gérer une franchise ou un réseau multi-sites ?",
                "acceptedAnswer": { "@type": "Answer", "text": "L'IA centralise le pilotage de vos franchises avec des dashboards décisionnels, automatise les process pour garantir l'homogénéité et optimise la communication entre le siège et les points de vente." }
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
        <section id="secteurs">
          <SectorsSection />
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
