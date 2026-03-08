import { useEffect, useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight, Sparkles, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface AiTool {
  id: string;
  name: string;
  description: string;
  category: string;
  affiliate_url: string;
  logo_url: string | null;
}

const LibrairieIA = () => {
  const [tools, setTools] = useState<AiTool[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTools = async () => {
      const { data } = await supabase
        .from("ai_tools" as any)
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      if (data) setTools(data as any);
      setLoading(false);
    };
    fetchTools();
  }, []);

  const categories = [...new Set(tools.map((t) => t.category))];

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://batemark.fr" },
      { "@type": "ListItem", "position": 2, "name": "Librairie IA", "item": "https://batemark.fr/librairie-ia" },
    ],
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Meilleurs outils IA pour entreprises",
    "description": "Sélection d'outils d'intelligence artificielle testés et approuvés pour automatiser la prospection, la fidélisation et la productivité des PME.",
    "numberOfItems": tools.length,
    "itemListElement": tools.map((tool, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": tool.name,
      "description": tool.description,
      "url": tool.affiliate_url,
    })),
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Librairie IA — Outils IA recommandés pour entreprises",
    "description": "Sélection des meilleurs outils IA testés sur des cas clients réels : automatisation, prospection, fidélisation, productivité pour TPE/PME.",
    "url": "https://batemark.fr/librairie-ia",
    "inLanguage": "fr",
    "isPartOf": { "@type": "WebSite", "name": "BATEMARK", "url": "https://batemark.fr" },
    "author": { "@type": "Person", "name": "Gaëtan Fizero" },
    "publisher": { "@type": "Organization", "name": "BATEMARK", "url": "https://batemark.fr" },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Comment sont sélectionnés les outils IA de la librairie ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chaque outil est testé sur des cas clients réels avant d'être recommandé. Nous évaluons l'impact concret sur la productivité, l'acquisition client et le ROI avant de l'intégrer.",
        },
      },
      {
        "@type": "Question",
        "name": "Les outils IA sont-ils adaptés aux PME ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, tous les outils sélectionnés sont spécifiquement testés pour les TPE et PME, avec des tarifs accessibles et une prise en main rapide sans compétences techniques.",
        },
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce qu'un lien partenaire Batemark ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nos liens partenaires vous donnent accès à des avantages exclusifs (réductions, essais prolongés). En passant par nos liens, vous soutenez Batemark sans surcoût.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Librairie IA — Meilleurs outils IA pour entreprises | BATEMARK</title>
        <meta
          name="description"
          content="Découvrez les meilleurs outils IA testés sur des cas clients réels : automatisation, prospection, fidélisation et productivité pour TPE/PME. Sélection experte Batemark."
        />
        <meta name="keywords" content="outils IA entreprise, meilleurs outils intelligence artificielle, automatisation PME, IA prospection, IA productivité, outils IA recommandés" />
        <link rel="canonical" href="https://batemark.fr/librairie-ia" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://batemark.fr/librairie-ia" />
        <meta property="og:title" content="Librairie IA — Meilleurs outils IA pour entreprises | BATEMARK" />
        <meta property="og:description" content="Sélection des meilleurs outils IA testés sur des cas clients réels. Automatisez votre prospection, fidélisation et productivité." />
        <meta property="og:image" content="https://batemark.fr/og-image.png" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="BATEMARK" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Librairie IA — Meilleurs outils IA pour entreprises | BATEMARK" />
        <meta name="twitter:description" content="Sélection des meilleurs outils IA testés sur des cas clients réels. Automatisez votre prospection, fidélisation et productivité." />
        <meta name="twitter:image" content="https://batemark.fr/og-image.png" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLdWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdItemList)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
      </Helmet>

      <Header />

      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container-custom pt-4 pb-2">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">Accueil</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">Librairie IA</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="section-padding pt-8">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
                Librairie <span className="text-gradient-copper">IA</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Notre sélection d'outils IA testés et approuvés pour automatiser votre croissance.
                Chaque outil a été validé sur des cas clients réels.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Testés sur des cas réels
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Avantages exclusifs
                </span>
                <span className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  ROI prouvé
                </span>
              </div>
            </motion.div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="card-premium animate-pulse">
                    <div className="h-6 bg-muted rounded w-1/2 mb-4" />
                    <div className="h-4 bg-muted rounded w-full mb-2" />
                    <div className="h-4 bg-muted rounded w-3/4" />
                  </div>
                ))}
              </div>
            ) : (
              categories.map((category) => (
                <div key={category} className="mb-16 last:mb-0">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold mb-8 flex items-center gap-3"
                  >
                    <span className="w-2 h-8 rounded-full bg-primary" />
                    {category}
                  </motion.h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tools
                      .filter((t) => t.category === category)
                      .map((tool, index) => (
                        <motion.div
                          key={tool.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="card-premium group hover:border-primary/30 transition-all duration-300 flex flex-col"
                        >
                          {tool.logo_url && (
                            <img
                              src={tool.logo_url}
                              alt={`Logo ${tool.name}`}
                              className="h-10 w-auto object-contain mb-4"
                              loading="lazy"
                              width="120"
                              height="40"
                            />
                          )}
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold">{tool.name}</h3>
                            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary">
                              Recommandé
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm mb-6 flex-1">
                            {tool.description}
                          </p>
                          <Button variant="heroOutline" className="group/btn w-full" asChild>
                            <a
                              href={tool.affiliate_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Découvrir {tool.name}
                              <ExternalLink className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                            </a>
                          </Button>
                          {tool.name.toLowerCase() === "make" ? (
                            <p className="text-xs text-primary mt-3 text-center font-medium">
                              🎁 Inscrivez-vous via notre lien et recevez <strong>1 mois du plan Pro avec 10 000 opérations gratuites</strong> !
                            </p>
                          ) : (
                            <p className="text-xs text-muted-foreground mt-3 text-center italic">
                              🎁 Lien partenaire — avantages exclusifs Batemark
                            </p>
                          )}
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* FAQ SEO Section */}
        <section className="section-padding border-t border-border">
          <div className="container-custom max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Questions fréquentes sur la <span className="text-gradient-copper">Librairie IA</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Comment sont sélectionnés les outils IA de la librairie ?",
                  a: "Chaque outil est testé sur des cas clients réels avant d'être recommandé. Nous évaluons l'impact concret sur la productivité, l'acquisition client et le ROI avant de l'intégrer à notre sélection.",
                },
                {
                  q: "Les outils IA sont-ils adaptés aux PME ?",
                  a: "Oui, tous les outils sélectionnés sont spécifiquement testés pour les TPE et PME, avec des tarifs accessibles et une prise en main rapide sans compétences techniques.",
                },
                {
                  q: "Qu'est-ce qu'un lien partenaire Batemark ?",
                  a: "Nos liens partenaires vous donnent accès à des avantages exclusifs (réductions, essais prolongés). En passant par nos liens, vous soutenez Batemark sans surcoût.",
                },
              ].map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-premium cursor-pointer"
                >
                  <summary className="font-semibold text-lg list-none flex items-center justify-between">
                    {faq.q}
                    <ChevronRight className="w-5 h-5 text-muted-foreground transition-transform details-open:rotate-90" />
                  </summary>
                  <p className="text-muted-foreground mt-4">{faq.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LibrairieIA;
