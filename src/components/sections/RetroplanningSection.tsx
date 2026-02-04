import { motion } from "framer-motion";
import { Coffee, ClipboardList, Users, Video, Settings, BarChart3, Link, FileCheck, Rocket, TrendingUp, Calendar, ClipboardCheck, MessageCircle } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";
import bgImage from "@/assets/bg-2.svg";
import type { LucideIcon } from "lucide-react";

interface DayConfig {
  day: number;
  icon: LucideIcon;
  label: string;
  phase: "onboarding" | "montage" | "lancement" | "optimisation";
}

const calendarDays: DayConfig[] = [
  // Semaine 1 - Onboarding (Jours 1-3)
  { day: 1, icon: Coffee, label: "Kickoff", phase: "onboarding" },
  { day: 2, icon: ClipboardList, label: "Brief", phase: "onboarding" },
  { day: 3, icon: Users, label: "Accès", phase: "onboarding" },
  // Semaine 1-2 - Montage (Jours 4-7)
  { day: 4, icon: Video, label: "Contenus", phase: "montage" },
  { day: 5, icon: Settings, label: "Config", phase: "montage" },
  { day: 6, icon: BarChart3, label: "Tracking", phase: "montage" },
  { day: 7, icon: Link, label: "Intégrations", phase: "montage" },
  // Semaine 2 - Lancement (Jours 8-14)
  { day: 8, icon: Rocket, label: "Lancement", phase: "lancement" },
  { day: 9, icon: TrendingUp, label: "Ajustements", phase: "lancement" },
  { day: 10, icon: BarChart3, label: "Analyse", phase: "lancement" },
  { day: 14, icon: Calendar, label: "Point J+7", phase: "lancement" },
  // Semaine 3-4 - Optimisation (Jours 15-28)
  { day: 15, icon: TrendingUp, label: "Scaling", phase: "optimisation" },
  { day: 21, icon: MessageCircle, label: "Point J+14", phase: "optimisation" },
  { day: 28, icon: ClipboardCheck, label: "Bilan", phase: "optimisation" },
];

const phaseColors = {
  onboarding: "from-copper/40 to-copper/20",
  montage: "from-copper/50 to-copper/25",
  lancement: "from-copper/60 to-copper/30",
  optimisation: "from-copper/70 to-copper/35",
};

const phaseBorderColors = {
  onboarding: "border-copper/40",
  montage: "border-copper/50",
  lancement: "border-copper/60",
  optimisation: "border-copper/70",
};

const annotations = [
  { label: "On brainstorm", day: 1, position: "top-left" },
  { label: "Configuration technique", day: 5, position: "top-right" },
  { label: "Lancement campagnes", day: 8, position: "bottom-left" },
  { label: "Livraison résultats", day: 28, position: "bottom-right" },
];

export const RetroplanningSection = () => {
  // Create a 7x4 grid (28 days)
  const weeks = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
  ];

  const getDayConfig = (day: number): DayConfig | undefined => {
    return calendarDays.find(d => d.day === day);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={bgImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Fade Effects */}
      <SectionFade position="top" />
      <SectionFade position="bottom" />

      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Rétroplanning <span className="text-gradient-copper">BATEMARK</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            28 jours pour transformer votre acquisition
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            { label: "Onboarding", phase: "onboarding" as const },
            { label: "Montage", phase: "montage" as const },
            { label: "Lancement", phase: "lancement" as const },
            { label: "Optimisation", phase: "optimisation" as const },
          ].map((item) => (
            <div key={item.phase} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${phaseColors[item.phase]}`} />
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Calendar Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Annotations */}
          {annotations.map((annotation, index) => (
            <motion.div
              key={annotation.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className={`hidden md:block absolute z-20 ${
                annotation.position === "top-left" ? "-top-8 left-0" :
                annotation.position === "top-right" ? "-top-8 right-0" :
                annotation.position === "bottom-left" ? "-bottom-8 left-0" :
                "-bottom-8 right-0"
              }`}
            >
              <div className="flex items-center gap-2">
                {annotation.position.includes("left") && (
                  <motion.div
                    className="w-12 h-px bg-copper/50"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    style={{ transformOrigin: "right" }}
                  />
                )}
                <span className="text-sm font-medium text-copper bg-background/80 px-3 py-1 rounded-full border border-copper/30">
                  {annotation.label}
                </span>
                {annotation.position.includes("right") && (
                  <motion.div
                    className="w-12 h-px bg-copper/50"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </div>
            </motion.div>
          ))}

          {/* Week Headers */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
              <div key={i} className="text-center text-sm text-muted-foreground font-medium">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Weeks */}
          <div className="space-y-2">
            {weeks.map((week, weekIndex) => (
              <motion.div
                key={weekIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + weekIndex * 0.1 }}
                className="grid grid-cols-7 gap-2"
              >
                {week.map((day) => {
                  const config = getDayConfig(day);
                  const isActive = !!config;
                  
                  return (
                    <motion.div
                      key={day}
                      whileHover={isActive ? { scale: 1.1, y: -4 } : {}}
                      className={`
                        relative aspect-square rounded-xl flex flex-col items-center justify-center
                        transition-all duration-300 cursor-default
                        ${isActive 
                          ? `bg-gradient-to-br ${phaseColors[config.phase]} border ${phaseBorderColors[config.phase]} shadow-lg hover:shadow-copper/20` 
                          : "bg-card/30 border border-border/30"
                        }
                      `}
                    >
                      {isActive && config ? (
                        <>
                          <config.icon className="w-5 h-5 md:w-6 md:h-6 text-copper mb-1" />
                          <span className="text-[10px] md:text-xs font-medium text-foreground text-center leading-tight px-1">
                            {config.label}
                          </span>
                          <span className="absolute top-1 right-1 text-[8px] md:text-[10px] text-copper/70 font-mono">
                            J{day}
                          </span>
                        </>
                      ) : (
                        <span className="text-xs text-muted-foreground/50 font-mono">
                          {day}
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { week: "Sem. 1", title: "Onboarding", desc: "Kickoff & accès" },
            { week: "Sem. 2", title: "Montage", desc: "Config & tracking" },
            { week: "Sem. 3", title: "Lancement", desc: "Go live & ajustements" },
            { week: "Sem. 4", title: "Optimisation", desc: "Scaling & bilan" },
          ].map((item, index) => (
            <motion.div
              key={item.week}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              className="card-premium text-center group hover:border-copper/40 transition-all duration-300"
            >
              <span className="text-xs font-semibold text-copper uppercase tracking-wider">
                {item.week}
              </span>
              <h4 className="text-lg font-bold mt-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
