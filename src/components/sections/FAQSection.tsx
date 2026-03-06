import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionFade } from "@/components/ui/SectionFade";
import bgImage from "@/assets/bg-4.svg";

const faqs = [
  {
    question: "C'est quoi concrètement un retainer mensuel ?",
    answer: "C'est un accompagnement continu. Chaque mois, on travaille ensemble sur des chantiers priorisés : automatisation, intégration d'IA, dashboards. Pas une mission ponctuelle, mais un vrai partenariat dans la durée.",
  },
  {
    question: "Est-ce adapté à mon entreprise ?",
    answer: "J'accompagne les entreprises qui sont conscientes qu'elles peuvent augmenter leur productivité grâce à l'IA et l'automatisation, mais qui ne savent pas par où commencer ou comment l'intégrer concrètement dans leurs opérations existantes.",
  },
  {
    question: "Faut-il déjà utiliser des outils d'IA ?",
    answer: "Non. Je pars de vos outils et process existants. L'objectif est d'intégrer l'IA et l'automatisation là où ça a du sens, pas de tout remplacer. On construit sur ce qui marche déjà.",
  },
  {
    question: "Combien de temps avant de voir des résultats ?",
    answer: "Les premiers quick wins (automatisations, gains de temps) arrivent généralement dès le premier mois. Les transformations plus profondes se déploient sur 2 à 3 mois.",
  },
  {
    question: "Pourquoi pas une agence ?",
    answer: "Avec une agence, vous avez un chef de projet, un junior qui exécute, et des process standardisés. Avec moi, vous avez un consultant senior unique qui maîtrise toute la chaîne : ads, CRM, automatisation, IA. Un seul interlocuteur, plus de réactivité, plus de profondeur.",
  },
  {
    question: "Y a-t-il un engagement minimum ?",
    answer: "Non. Pas d'engagement de durée. Je suis convaincu que la qualité de l'accompagnement vous donnera envie de continuer. Vous pouvez arrêter à tout moment.",
  },
];

export const FAQSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

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
            Questions <span className="text-gradient-copper">fréquentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-premium border-none data-[state=open]:border-copper/30"
              >
                <AccordionTrigger className="text-left text-base sm:text-xl font-semibold hover:text-copper transition-colors px-4 sm:px-6 py-3 sm:py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base sm:text-lg px-4 sm:px-6 pb-4 sm:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
