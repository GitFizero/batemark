import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { SectionFade } from "@/components/ui/SectionFade";

export const ProjectsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <SectionFade position="top" />
      <SectionFade position="bottom" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nos meilleurs <span className="text-gradient-copper">projets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nous accompagnons nos clients vers le succès
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={`/projets/${project.slug}`}
                className="group block h-full"
              >
                <div className="card-premium h-full overflow-hidden hover:border-copper/40 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-56 -mx-6 -mt-6 mb-6 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    
                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-copper/90 text-background rounded-full">
                        {project.tag}
                      </span>
                    </div>

                    {/* Client Logo */}
                    {project.logoUrl && (
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-background/90 rounded-lg p-2 backdrop-blur-sm">
                        <img
                          src={project.logoUrl}
                          alt={project.client}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <span className="text-sm text-copper font-medium">
                      {project.sector}
                    </span>
                    <h3 className="text-xl font-bold group-hover:text-copper transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-copper font-medium pt-2 group-hover:gap-3 transition-all">
                      <span className="text-sm">Voir le projet</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
