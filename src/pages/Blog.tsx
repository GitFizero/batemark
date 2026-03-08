import { useState, useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronRight, BookOpen, Users, Lightbulb } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image_url: string;
  published_at: string | null;
  created_at: string;
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await supabase
        .from("articles")
        .select("id, title, slug, excerpt, category, image_url, published_at, created_at")
        .eq("is_published", true)
        .order("published_at", { ascending: false });
      if (data) setArticles(data);
      setLoading(false);
    };
    fetchArticles();
  }, []);

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://batemark.fr" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://batemark.fr/blog" },
    ],
  };

  const jsonLdBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog IA & Automatisation — BATEMARK",
    "description": "Guides pratiques, cas clients et retours d'expérience sur l'intégration de l'IA et l'automatisation dans les PME françaises.",
    "url": "https://batemark.fr/blog",
    "inLanguage": "fr",
    "publisher": {
      "@type": "Organization",
      "name": "BATEMARK",
      "url": "https://batemark.fr",
    },
    "author": { "@type": "Person", "name": "Gaëtan Fizero" },
    "blogPost": articles.map((a) => ({
      "@type": "BlogPosting",
      "headline": a.title,
      "description": a.excerpt,
      "url": `https://batemark.fr/blog/${a.slug}`,
      "datePublished": a.published_at || a.created_at,
      "image": a.image_url,
      "author": { "@type": "Person", "name": "Gaëtan Fizero" },
      "publisher": { "@type": "Organization", "name": "BATEMARK" },
    })),
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog IA & Automatisation pour PME — Guides & Cas Clients | BATEMARK</title>
        <meta
          name="description"
          content="Guides pratiques, cas clients et retours d'expérience sur l'intégration de l'IA dans les PME : hôtellerie, restauration, e-commerce, agences. Par Gaëtan Fizero."
        />
        <meta name="keywords" content="blog IA entreprise, automatisation PME, cas client IA, intelligence artificielle hôtellerie, guide IA PME, intégration IA" />
        <link rel="canonical" href="https://batemark.fr/blog" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://batemark.fr/blog" />
        <meta property="og:title" content="Blog IA & Automatisation pour PME | BATEMARK" />
        <meta property="og:description" content="Guides pratiques, cas clients et retours d'expérience sur l'intégration de l'IA et l'automatisation dans les PME françaises." />
        <meta property="og:image" content="https://batemark.fr/og-image.png" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="BATEMARK" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog IA & Automatisation pour PME | BATEMARK" />
        <meta name="twitter:description" content="Guides pratiques, cas clients et retours d'expérience sur l'intégration de l'IA et l'automatisation dans les PME françaises." />
        <meta name="twitter:image" content="https://batemark.fr/og-image.png" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdBlog)}</script>
      </Helmet>

      <Header />

      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container-custom pt-4 pb-2">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">Accueil</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">Blog</span>
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
                Ressources <span className="text-gradient-copper">& guides</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Cas clients, guides sectoriels et retours d'expérience sur l'intégration de l'IA dans les PME françaises.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Guides actionnables
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Cas clients réels
                </span>
                <span className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  Retours d'expérience
                </span>
              </div>
            </motion.div>

            {loading ? (
              <div className="text-center text-muted-foreground py-12">Chargement des articles...</div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {articles.map((article, index) => (
                  <motion.a
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card-premium p-0 overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image_url}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        width="400"
                        height="192"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold gradient-copper text-background">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={article.published_at || article.created_at}>
                          {formatDate(article.published_at || article.created_at)}
                        </time>
                      </div>
                      <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Lire l'article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
