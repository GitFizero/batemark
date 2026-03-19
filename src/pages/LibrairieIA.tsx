import { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
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

// Fallback logos from official sources (Clearbit Logo API) for tools with missing/broken logos
const LOGO_FALLBACKS: Record<string, string> = {
  "make": "https://logo.clearbit.com/make.com",
  "botpress": "https://logo.clearbit.com/botpress.com",
  "bubble": "https://logo.clearbit.com/bubble.io",
  "canva": "https://logo.clearbit.com/canva.com",
  "claude": "https://logo.clearbit.com/anthropic.com",
  "clay": "https://logo.clearbit.com/clay.com",
  "coda": "https://logo.clearbit.com/coda.io",
  "copy.ai": "https://logo.clearbit.com/copy.ai",
  "copyai": "https://logo.clearbit.com/copy.ai",
  "crisp": "https://logo.clearbit.com/crisp.chat",
  "fireflies": "https://logo.clearbit.com/fireflies.ai",
  "flick": "https://logo.clearbit.com/flick.social",
  "hypefury": "https://logo.clearbit.com/hypefury.com",
  "instantly": "https://logo.clearbit.com/instantly.ai",
  "jasper": "https://logo.clearbit.com/jasper.ai",
  "julius": "https://logo.clearbit.com/julius.ai",
  "lovable": "https://logo.clearbit.com/lovable.dev",
  "manychat": "https://logo.clearbit.com/manychat.com",
  "midjourney": "https://logo.clearbit.com/midjourney.com",
  "notion": "https://logo.clearbit.com/notion.so",
  "otter": "https://logo.clearbit.com/otter.ai",
  "runway": "https://logo.clearbit.com/runwayml.com",
  "tableau": "https://logo.clearbit.com/tableau.com",
  "taplio": "https://logo.clearbit.com/taplio.com",
  "tidio": "https://logo.clearbit.com/tidio.com",
  "writesonic": "https://logo.clearbit.com/writesonic.com",
  "n8n": "https://logo.clearbit.com/n8n.io",
  "zapier": "https://logo.clearbit.com/zapier.com",
  "chatgpt": "https://logo.clearbit.com/openai.com",
  "openai": "https://logo.clearbit.com/openai.com",
  "hubspot": "https://logo.clearbit.com/hubspot.com",
  "airtable": "https://logo.clearbit.com/airtable.com",
  "phantombuster": "https://logo.clearbit.com/phantombuster.com",
  "lemlist": "https://logo.clearbit.com/lemlist.com",
};

function getLogoUrl(tool: AiTool): string | null {
  if (tool.logo_url) return tool.logo_url;
  const key = tool.name.toLowerCase().trim();
  return LOGO_FALLBACKS[key] || null;
}

const LibrairieIA = () => {
  const [tools, setTools] = useState<AiTool[]>([]);
  const [loading, setLoading] = useState(true);
  const [brokenLogos, setBrokenLogos] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchTools = async () => {
      if (!supabase) {
        setLoading(false);
        return;
      }
      const { data } = await supabase
        .from("ai_tools")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      if (data) setTools(data);
      setLoading(false);
    };
    fetchTools();
  }, []);

  const categories = useMemo(() => [...new Set(tools.map((t) => t.category))], [tools]);

  const toolsByCategory = useMemo(() => {
    const grouped: Record<string, AiTool[]> = {};
    for (const tool of tools) {
      if (!grouped[tool.category]) grouped[tool.category] = [];
      grouped[tool.category].push(tool);
    }
    return grouped;
  }, [tools]);

  const handleLogoError = (toolId: string, toolName: string) => {
    // If the original logo failed, try the clearbit fallback
    const key = toolName.toLowerCase().trim();
    const fallback = LOGO_FALLBACKS[key];
    if (fallback && !brokenLogos.has(toolId)) {
      setBrokenLogos((prev) => new Set(prev).add(toolId));
    }
  };

  const getEffectiveLogoUrl = (tool: AiTool): string | null => {
    if (brokenLogos.has(tool.id)) {
      const key = tool.name.toLowerCase().trim();
      return LOGO_FALLBACKS[key] || null;
    }
    return getLogoUrl(tool);
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://batemark.com" },
      { "@type": "ListItem", "position": 2, "name": "Librairie IA", "item": "https://batemark.com/librairie-ia" },
    ],
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Meilleurs outils IA pour entreprises",
    "numberOfItems": tools.length,
    "itemListElement": tools.map((tool, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": tool.name,
      "description": tool.description,
      "url": tool.affiliate_url,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Librairie IA — Meilleurs outils IA pour entreprises | BATEMARK</title>
        <meta
          name="description"
          content="Découvrez les meilleurs outils IA testés sur des cas clients réels : automatisation, prospection, fidélisation et productivité pour TPE/PME."
        />
        <meta name="keywords" content="outils IA entreprise, meilleurs outils intelligence artificielle, automatisation PME, IA prospection, IA productivité" />
        <link rel="canonical" href="https://batemark.com/librairie-ia" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://batemark.com/librairie-ia" />
        <meta property="og:title" content="Librairie IA — Meilleurs outils IA pour entreprises | BATEMARK" />
        <meta property="og:description" content="Sélection des meilleurs outils IA testés sur des cas clients réels." />
        <meta property="og:image" content="https://batemark.com/og-image.png" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdItemList)}</script>
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container-custom pt-4 pb-2">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1 text-xs text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">Accueil</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">Librairie IA</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-8 sm:py-12 px-4 sm:px-6">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
                Librairie <span className="text-gradient-copper">IA</span>
              </h1>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Outils IA testés et approuvés sur des cas clients réels.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools grid */}
        <section className="section-padding pt-4">
          <div className="container-custom">
            {loading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="rounded-2xl border border-border p-5 animate-pulse">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 bg-muted rounded-xl" />
                      <div className="h-4 bg-muted rounded w-24" />
                    </div>
                    <div className="h-3 bg-muted rounded w-full mb-2" />
                    <div className="h-3 bg-muted rounded w-3/4" />
                  </div>
                ))}
              </div>
            ) : (
              categories.map((category) => (
                <div key={category} className="mb-12 last:mb-0">
                  <motion.h2
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-base font-semibold mb-5 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-5 rounded-full bg-primary" />
                    {category}
                  </motion.h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {(toolsByCategory[category] || [])
                      .map((tool, index) => {
                        const logoUrl = getEffectiveLogoUrl(tool);
                        return (
                          <motion.div
                            key={tool.id}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="rounded-2xl border border-border bg-card p-5 group hover:border-primary/20 transition-colors flex flex-col"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              {logoUrl ? (
                                <img
                                  src={logoUrl}
                                  alt={`Logo ${tool.name}`}
                                  className="h-10 w-10 object-contain rounded-xl bg-white border border-border/50 p-1"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  onError={() => handleLogoError(tool.id, tool.name)}
                                />
                              ) : (
                                <div className="h-10 w-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary font-bold text-sm">
                                  {tool.name.charAt(0)}
                                </div>
                              )}
                              <h3 className="text-sm font-semibold">{tool.name}</h3>
                            </div>
                            <p className="text-xs text-muted-foreground mb-4 flex-1 line-clamp-2 leading-relaxed">
                              {tool.description}
                            </p>
                            <Button variant="heroOutline" size="sm" className="w-full text-xs group/btn" asChild>
                              <a
                                href={tool.affiliate_url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Découvrir
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </a>
                            </Button>
                          </motion.div>
                        );
                      })}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LibrairieIA;
