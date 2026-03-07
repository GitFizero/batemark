import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import figuerollesImg from "@/assets/figuerolles.jpg";

const articles = [
  {
    title: "Comment l'IA transforme l'hôtellerie-restauration — guide complet 2025",
    slug: "/blog/ia-hotellerie-restauration",
    excerpt: "L'intelligence artificielle permet aux hôtels et restaurants d'automatiser leur acquisition client et d'augmenter leur taux de remplissage hors saison. Cas réel : +43 % à Figuerolles.",
    category: "Hôtellerie & Restauration",
    image: figuerollesImg,
    date: "1 juin 2025",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog IA & Automatisation pour PME | Batemark</title>
        <meta name="description" content="Guides et cas clients sur l'intégration de l'IA dans les PME : hôtellerie, restauration, e-commerce, agences. Par Batemark." />
        <link rel="canonical" href="https://batemark.fr/blog" />
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
                Ressources <span className="text-gradient-copper">& guides</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Cas clients, guides sectoriels et outils IA recommandés pour les PME qui veulent automatiser leur croissance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {articles.map((article, index) => (
                <motion.a
                  key={article.slug}
                  href={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium p-0 overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
