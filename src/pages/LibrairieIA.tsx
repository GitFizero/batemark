import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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

  return (
    <>
      <Helmet>
        <title>Librairie IA — Les meilleurs outils IA pour votre entreprise | Batemark</title>
        <meta
          name="description"
          content="Sélection des meilleurs outils IA testés et approuvés pour automatiser votre entreprise : prospection, fidélisation, productivité."
        />
        <link rel="canonical" href="https://batemark.fr/librairie-ia" />
      </Helmet>

      <Header />

      <main className="pt-24">
        <section className="section-padding">
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
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Notre sélection d'outils IA testés et approuvés pour automatiser votre croissance.
                Chaque outil a été validé sur des cas clients réels.
              </p>
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
                              alt={tool.name}
                              className="h-10 w-auto object-contain mb-4"
                              loading="lazy"
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
                          <p className="text-xs text-muted-foreground mt-3 text-center italic">
                            🎁 Lien partenaire — avantages exclusifs Batemark
                          </p>
                        </motion.div>
                      ))}
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
