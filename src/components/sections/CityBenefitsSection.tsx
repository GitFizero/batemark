import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Clock, Shield, Zap } from "lucide-react";
import { City } from "@/data/cities";

interface CityBenefitsSectionProps {
  city: City;
}

const benefits = [
  {
    icon: Target,
    title: "Ciblage géolocalisé précis",
    description: "Touchez uniquement les prospects dans votre zone de chalandise",
  },
  {
    icon: Users,
    title: "Audience locale qualifiée",
    description: "Ciblez les habitants réellement intéressés par vos services",
  },
  {
    icon: TrendingUp,
    title: "ROI mesurable",
    description: "Suivez chaque lead généré et optimisez en continu",
  },
  {
    icon: Clock,
    title: "Résultats rapides",
    description: "Premiers leads dès la première semaine de campagne",
  },
  {
    icon: Shield,
    title: "Expertise Meta certifiée",
    description: "4 ans d'expérience et +150 entreprises accompagnées",
  },
  {
    icon: Zap,
    title: "Optimisation continue",
    description: "Amélioration permanente de vos performances publicitaires",
  },
];

export const CityBenefitsSection = ({ city }: CityBenefitsSectionProps) => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pourquoi choisir <span className="text-gradient-copper">Meta Ads</span> à {city.name} ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La publicité Meta est idéale pour les entreprises locales de {city.name} qui cherchent à générer des leads qualifiés.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium text-center hover:border-copper/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl gradient-copper flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-7 h-7 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
