import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image_url: string;
  published_at: string | null;
}

export const BlogSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
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

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl border border-border overflow-hidden animate-pulse">
                <div className="h-40 bg-muted" />
                <div className="p-4">
                  <div className="h-3 bg-muted rounded w-16 mb-3" />
                  <div className="h-4 bg-muted rounded w-full mb-2" />
                  <div className="h-3 bg-muted rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
              Ressources
            </h2>
            <p className="text-sm text-muted-foreground">
              Guides pratiques IA & automatisation
            </p>
          </div>
          <Button variant="heroOutline" size="default" className="mt-4 md:mt-0 group text-sm" asChild>
            <a href="/blog">
              Tous les articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {articles.map((article, index) => (
            <a key={article.id} href={`/blog/${article.slug}`} className="block">
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-border overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-300 h-full"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/90 text-white">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3" />
                    {formatDate(article.published_at)}
                  </div>
                  <h3 className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">
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
