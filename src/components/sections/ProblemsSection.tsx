import { motion } from "framer-motion";
import { Clock, Target, BarChart3, HelpCircle, Building2 } from "lucide-react";
import { SectionFade } from "@/components/ui/SectionFade";

const problems = [
  {
    icon: Clock,
    title: "Des heures perdues sur des tâches répétitives",
    description: "Saisie de données, relances manuelles, gestion des e-mails, traitement des réservations — vous et vos équipes passez des heures chaque semaine sur des tâches que l'intelligence artificielle pourrait automatiser entièrement. C'est du temps précieux qui ne profite ni à vos clients, ni à votre croissance.",
  },
  {
    icon: Target,
    title: "Une acquisition client manuelle et imprévisible",
    description: "Votre prospection repose encore sur des actions manuelles : appels à froid, envois d'e-mails un par un, suivi sur tableur. Pour un hôtelier, un restaurateur ou un commerçant en ligne, cette approche non scalable limite considérablement le potentiel de développement de votre activité.",
  },
  {
    icon: BarChart3,
    title: "Un pilotage à l'aveugle sans données fiables",
    description: "Vous prenez des décisions stratégiques sans dashboard clair ni indicateurs de performance consolidés. Que vous gériez un portefeuille immobilier, un cabinet de santé ou une entreprise de BTP, l'absence de données exploitables en temps réel freine votre capacité à réagir et à optimiser vos opérations.",
  },
  {
    icon: HelpCircle,
    title: "Par où commencer avec l'intelligence artificielle ?",
    description: "Vous voyez vos concurrents automatiser leurs process, adopter des outils IA et gagner en efficacité. Mais entre les solutions disponibles, le jargon technique et le manque de temps, vous ne savez pas par où commencer ni à qui faire confiance pour intégrer l'IA dans votre entreprise.",
  },
  {
    icon: Building2,
    title: "Des défis spécifiques à chaque secteur d'activité",
    description: "Chaque métier a ses contraintes : conformité RGPD dans le secteur de la santé et du juridique, gestion des flux en restauration et hôtellerie, suivi de chantier en BTP, logistique en e-commerce, relation client dans l'immobilier et la beauté. Une solution IA générique ne suffit pas — il faut un accompagnement adapté à votre réalité terrain.",
  },
];

export const ProblemsSection = () => {
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
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Les défis des PME face à{" "}
            <span className="text-gradient-copper">l'intelligence artificielle</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Les TPE et PME françaises font face à des obstacles concrets pour adopter l'IA. Reconnaissez-vous ces situations dans votre activité ?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-premium group hover:border-destructive/30 transition-all duration-300 flex items-start gap-5"
            >
              <div className="p-3 sm:p-4 rounded-2xl bg-destructive/10 shrink-0">
                <problem.icon className="w-6 h-6 sm:w-8 sm:h-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-semibold mb-1">{problem.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
