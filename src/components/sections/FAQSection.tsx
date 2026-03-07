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
    question: "Quel type d'entreprise accompagnes-tu ?",
    answer: "Je travaille avec des entreprises de toutes tailles, principalement dans les services, l'e-commerce et les agences. Si vous avez des process répétitifs ou une acquisition à structurer, on peut travailler ensemble.",
  },
  {
    question: "Combien de temps pour voir des résultats ?",
    answer: "Mes clients voient des résultats dès le premier mois. L'implémentation prend en moyenne 2 à 4 semaines selon la complexité.",
  },
  {
    question: "Combien ça coûte ?",
    answer: "Chaque mission est sur-mesure. On définit ensemble le périmètre lors de l'appel découverte de 15 minutes, gratuit et sans engagement.",
  },
  {
    question: "Je n'ai pas de données structurées, c'est quand même possible ?",
    answer: "Oui. L'audit initial sert justement à cartographier ce que vous avez et à construire les bases nécessaires.",
  },
  {
    question: "Pourquoi pas une agence ?",
    answer: "Une agence vous vend des heures. Moi je livre des systèmes qui tournent en autonomie — avec des résultats mesurables et un coût sans commune mesure.",
  },
  {
    question: "Y a-t-il un engagement minimum ?",
    answer: "Non. On commence par une mission définie, et on continue si les résultats sont là — ce qui est généralement le cas.",
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
