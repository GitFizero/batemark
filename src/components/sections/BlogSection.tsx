import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Comment générer des leads qualifiés pour votre salle de sport",
    excerpt: "Découvrez les stratégies Meta Ads qui fonctionnent pour les salles de sport et studios fitness.",
    category: "Fitness",
    date: "15 Jan 2025",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop",
  },
  {
    title: "Facebook Ads pour ostéopathes : le guide complet",
    excerpt: "Attirez de nouveaux patients qualifiés grâce à la publicité Facebook, dans le respect réglementaire.",
    category: "Paramédical",
    date: "10 Jan 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop",
  },
  {
    title: "Meta Ads local : cibler Paris et sa banlieue efficacement",
    excerpt: "Les bonnes pratiques pour un ciblage géographique précis en Île-de-France.",
    category: "SEO Local",
    date: "5 Jan 2025",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=250&fit=crop",
  },
];

export const BlogSection = () => {
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ressources <span className="text-gradient-copper">& conseils</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Apprenez les meilleures pratiques Meta Ads
            </p>
          </div>
          <Button variant="heroOutline" size="lg" className="mt-6 md:mt-0 group">
            Voir tous les articles
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-0 overflow-hidden group cursor-pointer hover:border-copper/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                  {article.date}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-copper transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
