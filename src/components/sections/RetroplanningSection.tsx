import { motion } from "framer-motion";
import { Users, Folder, MessageCircle, Video, Settings, BarChart3, Link, FileCheck, Rocket, TrendingUp, Calendar, ClipboardCheck } from "lucide-react";
import bgImage from "@/assets/bg-2.svg";

const weeks = [
  {
    week: "Semaine 1",
    title: "Onboarding",
    color: "from-copper/20 to-copper/5",
    items: [
      { icon: Users, label: "Onboarding et Objectifs" },
      { icon: Folder, label: "Partage des accès" },
      { icon: MessageCircle, label: "Point Media" },
    ],
  },
  {
    week: "Semaine 2",
    title: "Montage",
    color: "from-copper/30 to-copper/10",
    items: [
      { icon: Video, label: "Montage contenus" },
      { icon: Settings, label: "Création campagnes" },
      { icon: BarChart3, label: "Tracking conversions" },
      { icon: Link, label: "Connexion outils tiers" },
      { icon: FileCheck, label: "Rapport de validation" },
    ],
  },
  {
    week: "Semaine 3",
    title: "Lancement",
    color: "from-copper/40 to-copper/15",
    items: [
      { icon: Rocket, label: "Lancement campagnes" },
      { icon: TrendingUp, label: "Optimisation continue" },
      { icon: Calendar, label: "Point J+7" },
    ],
  },
  {
    week: "Semaine 4+",
    title: "Optimisation",
    color: "from-copper/50 to-copper/20",
    items: [
      { icon: TrendingUp, label: "Optimisation KPI" },
      { icon: Calendar, label: "Point J+14" },
      { icon: ClipboardCheck, label: "Bilan J+30" },
    ],
  },
];

export const RetroplanningSection = () => {
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

      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-copper/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            Rétroplanning <span className="text-gradient-copper">BATEMARK</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement structuré semaine par semaine
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weeks.map((week, weekIndex) => (
            <motion.div
              key={week.week}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: weekIndex * 0.1 }}
              className="relative"
            >
              {/* Card */}
              <div className={`card-premium h-full bg-gradient-to-b ${week.color} border-copper/20 hover:border-copper/40 transition-all duration-300`}>
                {/* Week Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-copper uppercase tracking-wider">
                    {week.week}
                  </span>
                  <div className="w-8 h-8 rounded-full gradient-copper flex items-center justify-center">
                    <span className="text-sm font-bold text-background">{weekIndex + 1}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-6">{week.title}</h3>

                {/* Items */}
                <ul className="space-y-3">
                  {week.items.map((item, itemIndex) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: weekIndex * 0.1 + itemIndex * 0.05 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-background/50 border border-copper/20 flex items-center justify-center group-hover:border-copper/50 transition-colors">
                        <item.icon className="w-4 h-4 text-copper" />
                      </div>
                      <span className="text-sm text-foreground">{item.label}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Connector Line (hidden on last item) */}
              {weekIndex < weeks.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-copper/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
