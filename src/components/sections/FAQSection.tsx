import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quel type d'entreprise accompagnes-tu ?",
    answer:
      "PME, TPE, indépendants dans tous secteurs : hôtellerie, BTP, e-commerce, immobilier, santé, juridique, beauté.",
  },
  {
    question: "Combien de temps pour voir des résultats ?",
    answer:
      "Résultats mesurables dès le premier mois. Implémentation en 2 à 4 semaines.",
  },
  {
    question: "Combien coûte un accompagnement ?",
    answer:
      "Chaque mission est sur-mesure. L'appel découverte de 30 min est gratuit.",
  },
  {
    question: "Pourquoi un consultant plutôt qu'une agence ?",
    answer:
      "Interlocuteur unique, systèmes autonomes, coût inférieur, transfert de compétences inclus.",
  },
];

export const FAQSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
            Questions fréquentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-4 border-none"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-white/70 hover:text-white transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/35 text-xs pb-4 leading-relaxed">
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
