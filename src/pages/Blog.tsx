import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronRight, BookOpen, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { blogArticles, blogSectors } from "@/data/blogArticles";

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
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.batemark.com" },
      { "@type": "ListItem", position: 2, name: "Blog IA & Automatisation", item: "https://www.batemark.com/blog" },
    ],
  };

  const jsonLdBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog IA & Automatisation — BATEMARK",
    description: "Guides pratiques et cas clients sur l'intégration de l'IA et l'automatisation dans les PME : hôtellerie, restauration, immobilier, BTP, e-commerce, santé, juridique.",
    url: "https://www.batemark.com/blog",
    inLanguage: "fr",
    publisher: { "@type": "Organization", name: "BATEMARK", url: "https://www.batemark.com" },
    author: { "@type": "Person", name: "Gaëtan Fizero" },
    blogPost: blogArticles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      description: a.excerpt,
      url: `https://batemark.com/blog/${a.slug}`,
      author: { "@type": "Person", name: "Gaëtan Fizero" },
      publisher: { "@type": "Organization", name: "BATEMARK" },
      keywords: a.keywords.join(", "),
    })),
  };

  const jsonLdCollectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guides IA par secteur d'activité",
    description: "Retrouvez tous nos guides pour intégrer l'intelligence artificielle dans votre secteur : hôtellerie, restauration, immobilier, BTP, e-commerce, santé, juridique, beauté et plus.",
    url: "https://www.batemark.com/blog",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogArticles.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://batemark.com/blog/${a.slug}`,
        name: a.title,
      })),
    },
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
        <title>Blog IA & Automatisation pour PME — Guides par secteur | BATEMARK</title>
        <meta
          name="description"
          content="Guides pratiques pour intégrer l'IA dans votre entreprise : hôtellerie, restauration, immobilier, BTP, e-commerce, santé, juridique. Cas clients et retours d'expérience par Gaëtan Fizero."
        />
        <meta name="keywords" content="blog IA entreprise, automatisation PME, IA hôtellerie, IA restauration, IA immobilier, IA BTP, IA e-commerce, IA santé, IA juridique, intégration IA, guide IA secteur, consultant IA" />
        <link rel="canonical" href="https://www.batemark.com/blog" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.batemark.com/blog" />
        <meta property="og:title" content="Blog IA & Automatisation pour PME — Guides par secteur | BATEMARK" />
        <meta property="og:description" content="Guides pratiques pour intégrer l'IA par secteur : hôtellerie, restauration, immobilier, BTP, e-commerce, santé. Cas clients réels." />
        <meta property="og:image" content="https://www.batemark.com/og-image.png" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="BATEMARK" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog IA & Automatisation pour PME | BATEMARK" />
        <meta name="twitter:description" content="Guides pratiques pour intégrer l'IA par secteur : hôtellerie, restauration, immobilier, BTP, e-commerce, santé." />
        <meta name="twitter:image" content="https://www.batemark.com/og-image.png" />

        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdBlog)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdCollectionPage)}</script>
      </Helmet>

      <Header />

      <main className="pt-24" id="main-content">
        {/* Breadcrumb */}
        <div className="container-custom pt-4 pb-2">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">Blog IA & Automatisation</span>
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
                Intégrer l'<span className="text-gradient-copper">IA</span> dans votre secteur
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Guides pratiques, cas clients et retours d'expérience pour intégrer l'intelligence artificielle et l'automatisation dans votre entreprise — hôtellerie, restauration, immobilier, BTP, e-commerce, santé et plus.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  {blogArticles.length} guides sectoriels
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

            {/* Dynamic articles from Supabase */}
            {!loading && articles.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                {articles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/blog/${article.slug}`}
                      className="card-premium p-0 overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300 block h-full"
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
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Static sector-based listing - ALWAYS rendered for SEO */}
            <section className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                Guides IA par <span className="text-gradient-copper">secteur d'activité</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogSectors.map((sector) => (
                  <div key={sector.name} className="card-premium p-6">
                    <h3 className="text-lg font-bold mb-4 text-primary">{sector.name}</h3>
                    <ul className="space-y-3">
                      {sector.slugs.map((slug) => {
                        const article = blogArticles.find(a => a.slug === slug);
                        if (!article) return null;
                        return (
                          <li key={slug}>
                            <Link
                              to={`/blog/${slug}`}
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-start gap-2 group"
                            >
                              <ArrowRight className="w-3 h-3 mt-1 text-primary shrink-0 group-hover:translate-x-0.5 transition-transform" />
                              <span>{article.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
