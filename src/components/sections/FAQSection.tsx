import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quel type d'entreprise accompagnez-vous ?",
    answer:
      "PME, TPE et indépendants dans tous secteurs : hôtellerie, BTP, e-commerce, immobilier, santé, juridique, beauté et bien d'autres.",
  },
  {
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer:
      "Les résultats sont mesurables dès le premier mois. L'implémentation se fait en 2 à 4 semaines selon la complexité du projet.",
  },
  {
    question: "Combien coûte un accompagnement ?",
    answer:
      "Chaque mission est conçue sur-mesure en fonction de vos besoins. L'appel découverte de 30 minutes est gratuit et sans engagement.",
  },
  {
    question: "Pourquoi choisir un consultant plutôt qu'une agence ?",
    answer:
      "Vous bénéficiez d'un interlocuteur unique et dédié, de systèmes autonomes, d'un coût inférieur et d'un transfert de compétences inclus pour devenir autonome.",
  },
  {
    question: "Avez-vous besoin d'accéder à nos outils internes ?",
    answer:
      "Selon le projet, un accès à certains outils peut être nécessaire (CRM, outils marketing, etc.). Tout est encadré et sécurisé, avec un engagement de confidentialité.",
  },
  {
    question: "Comment se déroule un projet type ?",
    answer:
      "Audit de vos process → plan d'action personnalisé → déploiement des automatisations → suivi et optimisation. Vous êtes impliqué à chaque étape.",
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
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
                className="glass-card px-5 border-none"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-white/75 hover:text-white transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/55 text-[13px] pb-4 leading-relaxed">
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
