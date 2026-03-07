import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const CAL_LINK = "https://cal.com/gaetan-batemark/audit";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | BATEMARK</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="container-custom">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link 
              to="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Revenir au portfolio</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Main Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Images */}
              <div className="grid grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="aspect-video rounded-xl overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Sidebar - Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Header Info */}
              <div className="space-y-4">
                {project.logoUrl && (
                  <div className="w-16 h-16 bg-card rounded-xl p-3 border border-border">
                    <img
                      src={project.logoUrl}
                      alt={project.client}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-copper/20 text-copper rounded-full mb-3">
                    {project.tag}
                  </span>
                  <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-muted-foreground">Secteur:</span>
                  <span className="font-medium">{project.sector}</span>
                </div>
              </div>

              {/* Details Cards */}
              <div className="space-y-4">
                {/* Challenge */}
                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-copper/20 flex items-center justify-center">
                      <Target className="w-5 h-5 text-copper" />
                    </div>
                    <h3 className="font-bold">Le défi</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.challenge}
                  </p>
                </div>

                {/* Approach */}
                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-copper/20 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-copper" />
                    </div>
                    <h3 className="font-bold">L'approche BATEMARK</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.approach}
                  </p>
                </div>

                {/* Impact */}
                <div className="card-premium border-copper/30 bg-gradient-to-br from-copper/10 to-transparent">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-copper/30 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-copper" />
                    </div>
                    <h3 className="font-bold">L'impact</h3>
                  </div>
                  <p className="text-sm text-foreground font-medium">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="card-premium text-center border-copper/30">
                <h3 className="text-xl font-bold mb-3">
                  C'est à votre tour ?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Discutons de votre projet et voyons comment atteindre vos objectifs.
                </p>
                <Button variant="hero" size="lg" className="w-full group" asChild>
                  <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                    Réserver mon audit
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectPage;
