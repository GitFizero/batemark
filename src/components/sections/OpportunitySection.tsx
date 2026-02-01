import { motion } from "framer-motion";
import { Check, X, Target, MapPin, BarChart3, RefreshCw } from "lucide-react";
import bgImage from "@/assets/bg-1.svg";

const benefits = [
  { icon: Target, title: "Audience massive locale", description: "Des millions de Français sur les réseaux sociaux chaque jour" },
  { icon: MapPin, title: "Ciblage géographique précis", description: "Ciblez par ville, code postal ou rayon autour de votre établissement" },
  { icon: BarChart3, title: "Données en temps réel", description: "Suivez chaque euro dépensé et chaque lead généré" },
  { icon: RefreshCw, title: "Optimisation continue", description: "Améliorez vos résultats semaine après semaine grâce aux données" },
];

const comparison = [
  { feature: "Mesure précise du ROI", digital: true, traditional: false },
  { feature: "Ciblage géographique précis", digital: true, traditional: false },
  { feature: "Coût par lead connu", digital: true, traditional: false },
  { feature: "Optimisation en temps réel", digital: true, traditional: false },
  { feature: "Arrêt/modification instantané", digital: true, traditional: false },
  { feature: "Visibilité locale", digital: true, traditional: true },
];

export const OpportunitySection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={bgImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            L'opportunité <span className="text-gradient-copper">publicité digitale</span> locale
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La publicité digitale locale qui mesure vraiment vos résultats
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium text-center group hover:border-copper/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl gradient-copper flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-background" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Publicité digitale vs Traditionnelle
          </h3>
          <div className="card-premium overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 border-b border-border">
              <div className="font-semibold text-muted-foreground"></div>
              <div className="text-center font-bold text-gradient-copper">Digitale</div>
              <div className="text-center font-semibold text-muted-foreground">Traditionnel</div>
            </div>
            {comparison.map((item, index) => (
              <div
                key={item.feature}
                className={`grid grid-cols-3 gap-4 p-4 ${
                  index !== comparison.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <div className="text-sm md:text-base">{item.feature}</div>
                <div className="flex justify-center">
                  {item.digital ? (
                    <div className="w-8 h-8 rounded-full bg-copper/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-copper" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {item.traditional ? (
                    <div className="w-8 h-8 rounded-full bg-copper/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-copper" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
