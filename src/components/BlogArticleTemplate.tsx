import { type ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedArticles } from "@/components/RelatedArticles";
import { DURATION } from "@/lib/constants/animations";

interface BlogArticleMeta {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  publishedDate: string;
  modifiedDate?: string;
  jsonLd: object;
}

interface BlogArticleTemplateProps {
  meta: BlogArticleMeta;
  badge: string;
  heading: ReactNode;
  intro: ReactNode;
  author?: string;
  date: string;
  readTime: string;
  coverImage?: { src: string; alt: string };
  slug: string;
  children: ReactNode;
}

export const BlogArticleTemplate = ({
  meta,
  badge,
  heading,
  intro,
  author = "Gaëtan Fizero",
  date,
  readTime,
  coverImage,
  slug,
  children,
}: BlogArticleTemplateProps) => {
  const breadcrumbLabel = meta.title.split(":")[0] || meta.title;

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href={meta.canonical} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:image" content={meta.ogImage} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="BATEMARK" />
        <meta property="article:published_time" content={meta.publishedDate} />
        {meta.modifiedDate && (
          <meta property="article:modified_time" content={meta.modifiedDate} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(meta.jsonLd)}
        </script>
      </Helmet>

      <Header />

      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container-custom px-4 md:px-8 pt-8">
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link to="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">
              {breadcrumbLabel}
            </span>
          </nav>
        </div>

        {/* Hero */}
        <section className="section-padding pb-12">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.entrance }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold gradient-copper text-background mb-6">
                {badge}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {heading}
              </h1>
              <div className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl">
                {intro}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-b border-border py-4">
                <span>
                  ✍️ Par <strong className="text-foreground">{author}</strong>
                </span>
                <time dateTime={meta.publishedDate}>📅 {date}</time>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cover Image */}
        {coverImage && (
          <section className="container-custom max-w-4xl px-4 md:px-8 mb-16">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={coverImage.src}
                alt={coverImage.alt}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
                width="1200"
                height="630"
                loading="lazy"
              />
            </div>
          </section>
        )}

        {/* Article Content */}
        <article className="container-custom max-w-4xl px-4 md:px-8">
          {children}
          <RelatedArticles currentSlug={slug} />
        </article>
      </main>

      <Footer />
    </>
  );
};
