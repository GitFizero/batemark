import { motion } from "framer-motion";
import { Zap, TrendingUp, Target, Clock, BarChart3, Users } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    badge: Clock,
    title: "Automatisez vos tâches répétitives",
  },
  {
    icon: TrendingUp,
    badge: BarChart3,
    title: "Boostez la productivité de votre entreprise",
  },
  {
    icon: Target,
    badge: Users,
    title: "Accélérez votre acquisition client",
  },
];

export const PillarsSection = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-white/8 bg-white/[0.04] p-6 sm:p-8 text-center flex flex-col items-center"
            >
              {/* Icon container with badge */}
              <div className="relative mb-5">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                  <pillar.icon className="w-6 h-6 text-[#c4956e]" />
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-lg bg-[#2a2a2a] border border-white/10 flex items-center justify-center">
                  <pillar.badge className="w-3 h-3 text-[#c4956e]/70" />
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-white/90 leading-snug">
                {pillar.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
