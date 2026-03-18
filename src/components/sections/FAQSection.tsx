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
      "PME, TPE, indépendants dans tous secteurs : hôtellerie, BTP, e-commerce, immobilier, santé, juridique, beauté, marketing et bien d'autres.",
  },
  {
    question: "Combien de temps pour voir des résultats ?",
    answer:
      "Résultats mesurables dès le premier mois. L'implémentation prend 2 à 4 semaines selon la complexité.",
  },
  {
    question: "Combien coûte un accompagnement ?",
    answer:
      "Chaque mission est sur-mesure. L'appel découverte de 30 minutes est gratuit pour définir périmètre et budget. Pas d'abonnement caché, pas d'engagement longue durée.",
  },
  {
    question: "Pourquoi un consultant plutôt qu'une agence ?",
    answer:
      "Un interlocuteur unique, des systèmes autonomes, un coût inférieur et un transfert de compétences inclus. Vous devenez autonome.",
  },
  {
    question: "Y a-t-il un engagement minimum ?",
    answer:
      "Non. On commence par une mission définie avec des objectifs clairs, et on continue si les résultats sont au rendez-vous.",
  },
  {
    question: "L'IA est-elle compatible avec le RGPD ?",
    answer:
      "Oui. Toutes les solutions respectent le RGPD et la réglementation européenne. Je privilégie les outils conformes hébergés en Europe.",
  },
];

export const FAQSection = () => {
  return (
    <section className="section-padding bg-[hsl(30_15%_95%)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
            Questions fréquentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-border px-4"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-4">
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
