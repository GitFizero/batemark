import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
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

export const LibrairieSection = () => {
  const [tools, setTools] = useState<AiTool[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTools = async () => {
      const { data } = await supabase
        .from("ai_tools" as any)
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true })
        .limit(3);
      if (data) setTools(data as any);
      setLoading(false);
    };
    fetchTools();
  }, []);

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-premium animate-pulse">
                <div className="h-6 bg-muted rounded w-1/2 mb-4" />
                <div className="h-4 bg-muted rounded w-full mb-2" />
                <div className="h-4 bg-muted rounded w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (tools.length === 0) return null;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
              Librairie <span className="text-gradient-copper">IA</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Les outils IA qu'on recommande
            </p>
          </div>
          <Button variant="heroOutline" size="lg" className="mt-6 md:mt-0 group" asChild>
            <a href="/librairie-ia">
              Voir tous les outils
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
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
              <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                {tool.description}
              </p>
              <Button variant="heroOutline" size="sm" className="group/btn w-full" asChild>
                <a href={tool.affiliate_url} target="_blank" rel="noopener noreferrer">
                  Découvrir
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
