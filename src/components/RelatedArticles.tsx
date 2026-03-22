import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getRelatedArticles } from "@/data/blogArticles";

interface RelatedArticlesProps {
  currentSlug: string;
}

export const RelatedArticles = ({ currentSlug }: RelatedArticlesProps) => {
  const related = getRelatedArticles(currentSlug, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">
        Articles <span className="text-gradient-copper">similaires</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((article) => (
          <Link
            key={article.slug}
            to={`/blog/${article.slug}`}
            className="card-premium p-6 group hover:border-primary/30 transition-all duration-300"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold gradient-copper text-background mb-3">
              {article.category}
            </span>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {article.excerpt}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
              Lire l'article <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          Voir tous nos guides IA par secteur <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
