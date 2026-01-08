import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { City } from "@/data/cities";

interface CityHeroSectionProps {
  city: City;
}

export const CityHeroSection = ({ city }: CityHeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at top, hsl(var(--copper) / 0.15) 0%, transparent 60%)",
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper/10 border border-copper/30 mb-6"
          >
            <MapPin className="w-4 h-4 text-copper" />
            <span className="text-sm font-medium text-copper">
              {city.name} • {city.region}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Expert <span className="text-gradient-copper">Meta Ads</span>
            <br />
            à {city.name}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {city.description}. Générez des leads qualifiés pour votre entreprise locale.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-10"
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-copper" />
              <span className="text-muted-foreground">{city.population} habitants</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-copper" />
              <span className="text-muted-foreground">3.2x ROI moyen</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" className="btn-primary-glow group" asChild>
              <a href="https://cal.com/music-music-brtqjg/audit" target="_blank" rel="noopener noreferrer">
                Audit gratuit à {city.name}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="/#solution">Découvrir notre approche</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
