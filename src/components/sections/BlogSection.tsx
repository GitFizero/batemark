import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  image_url: string;
}

export const BlogSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      if (!supabase) {
        setLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from("articles")
        .select("id, title, slug, category, image_url")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(3);

      if (!error && data) {
        setArticles(data);
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card overflow-hidden animate-pulse">
                <div className="h-32 bg-white/[0.03]" />
                <div className="p-3">
                  <div className="h-3 bg-white/[0.05] rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) return null;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
            Ressources
          </h2>
          <Button variant="ghost" size="sm" className="group text-xs text-white/30 hover:text-white" asChild>
            <a href="/blog">
              Tout voir
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <a key={article.id} href={`/blog/${article.slug}`} className="block">
              <motion.article
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="glass-card glass-card-hover overflow-hidden group cursor-pointer transition-all duration-300"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-3">
                  <span className="text-[10px] font-semibold text-[#c4956e] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-semibold mt-1 text-white/80 group-hover:text-[#c4956e] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </motion.article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
