import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bgImage from "@/assets/bg-4.svg";

const faqs = [
  {
    question: "Y a-t-il un engagement ?",
    answer: "Non, aucun engagement. Vous pouvez arrêter à tout moment, sans frais cachés. Je suis convaincu que la qualité de mes services vous donnera envie de continuer.",
  },
  {
    question: "En combien de temps voit-on les premiers leads ?",
    answer: "Généralement, les premiers leads arrivent dès la première semaine de lancement. L'optimisation des campagnes prend ensuite 2 à 4 semaines pour atteindre leur plein potentiel.",
  },
  {
    question: "Est-ce adapté à mon activité ?",
    answer: "La publicité digitale fonctionne particulièrement bien pour les entreprises locales avec une forte valeur client : fitness, bien-être, paramédical, coaching, services premium, immobilier, B2B local. Lors de l'audit gratuit, nous analyserons ensemble si c'est pertinent pour vous.",
  },
  {
    question: "Quel budget publicitaire prévoir ?",
    answer: "Je recommande un budget de 20 à 30€/jour minimum pour des résultats significatifs, soit 600 à 900€/mois de dépenses publicitaires. Ce budget s'ajoute à mes honoraires.",
  },
  {
    question: "À qui appartiennent les comptes publicitaires ?",
    answer: "Vous restez propriétaire de tous vos comptes : Business Manager, pages Facebook, compte Instagram, pixel Meta. Si nous arrêtons de travailler ensemble, vous gardez tout.",
  },
  {
    question: "Comment se passe l'audit gratuit ?",
    answer: "C'est un appel de 15 minutes où nous analysons votre situation actuelle, vos objectifs et je vous donne déjà des premières recommandations concrètes. Sans engagement, évidemment.",
  },
];

export const FAQSection = () => {
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
            Questions <span className="text-gradient-copper">fréquentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de démarrer
          </p>
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
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-copper transition-colors px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-6 pb-6">
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
