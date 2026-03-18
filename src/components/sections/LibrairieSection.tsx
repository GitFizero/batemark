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

const LOGO_FALLBACKS: Record<string, string> = {
  "make": "https://logo.clearbit.com/make.com",
  "botpress": "https://logo.clearbit.com/botpress.com",
  "bubble": "https://logo.clearbit.com/bubble.io",
  "canva": "https://logo.clearbit.com/canva.com",
  "claude": "https://logo.clearbit.com/anthropic.com",
  "clay": "https://logo.clearbit.com/clay.com",
  "coda": "https://logo.clearbit.com/coda.io",
  "copy.ai": "https://logo.clearbit.com/copy.ai",
  "crisp": "https://logo.clearbit.com/crisp.chat",
  "fireflies": "https://logo.clearbit.com/fireflies.ai",
  "instantly": "https://logo.clearbit.com/instantly.ai",
  "jasper": "https://logo.clearbit.com/jasper.ai",
  "lovable": "https://logo.clearbit.com/lovable.dev",
  "manychat": "https://logo.clearbit.com/manychat.com",
  "midjourney": "https://logo.clearbit.com/midjourney.com",
  "notion": "https://logo.clearbit.com/notion.so",
  "zapier": "https://logo.clearbit.com/zapier.com",
  "n8n": "https://logo.clearbit.com/n8n.io",
};

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
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-border p-5 animate-pulse">
                <div className="h-8 w-8 bg-muted rounded mb-3" />
                <div className="h-3 bg-muted rounded w-1/2 mb-2" />
                <div className="h-3 bg-muted rounded w-3/4" />
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
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Outils IA
          </h2>
          <Button variant="ghost" size="sm" className="group text-xs text-muted-foreground hover:text-foreground" asChild>
            <a href="/librairie-ia">
              Tout voir
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <motion.a
              key={tool.id}
              href={tool.affiliate_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors group"
            >
              {(tool.logo_url || LOGO_FALLBACKS[tool.name.toLowerCase()]) ? (
                <img
                  src={tool.logo_url || LOGO_FALLBACKS[tool.name.toLowerCase()]}
                  alt={tool.name}
                  className="h-9 w-9 object-contain shrink-0 rounded-lg bg-white border border-border/50 p-0.5"
                  loading="lazy"
                />
              ) : (
                <div className="h-9 w-9 rounded-lg bg-primary/8 shrink-0 flex items-center justify-center text-primary font-bold text-xs">
                  {tool.name.charAt(0)}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold">{tool.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-1">{tool.description}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary shrink-0 transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
