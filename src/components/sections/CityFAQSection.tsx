import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { City } from "@/data/cities";

interface CityFAQSectionProps {
  city: City;
  nearbyCities: City[];
}

export const CityFAQSection = ({ city, nearbyCities }: CityFAQSectionProps) => {
  const faqs = [
    {
      question: `Pourquoi Meta Ads est-il efficace à ${city.name} ?`,
      answer: `${city.name} compte ${city.population} habitants, dont une grande majorité utilise quotidiennement Facebook et Instagram. Le ciblage géolocalisé de Meta permet de toucher précisément les habitants de ${city.name} et sa périphérie intéressés par vos services.`,
    },
    {
      question: `Quel budget prévoir pour des campagnes Meta Ads à ${city.name} ?`,
      answer: `Je recommande un budget de 20 à 30€/jour minimum, soit 600 à 900€/mois de dépenses publicitaires. Ce budget s'ajoute à mes honoraires de 280€/mois. Le coût par lead varie selon votre secteur d'activité à ${city.name}.`,
    },
    {
      question: `Combien de temps pour voir des résultats à ${city.name} ?`,
      answer: `Les premiers leads arrivent généralement dès la première semaine. L'optimisation des campagnes prend 2 à 4 semaines pour atteindre leur plein potentiel sur le marché de ${city.name}.`,
    },
    {
      question: `Quels secteurs fonctionnent bien avec Meta Ads à ${city.name} ?`,
      answer: `À ${city.name}, les meilleurs résultats sont obtenus par : fitness et bien-être, paramédical (kinés, ostéos), coaching, services B2B, immobilier et restauration haut de gamme.`,
    },
    {
      question: `Comment fonctionne l'audit gratuit ?`,
      answer: `C'est un appel de 15 minutes où nous analysons votre situation actuelle à ${city.name}, vos objectifs et je vous donne des premières recommandations concrètes. Sans engagement.`,
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Questions sur <span className="text-gradient-copper">Meta Ads à {city.name}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de lancer vos campagnes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
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

        {/* Nearby cities for internal linking */}
        {nearbyCities.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-4">
              Découvrez aussi nos services dans les villes voisines
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  to={`/meta-ads-${nearbyCity.slug}`}
                  className="px-4 py-2 rounded-full bg-muted hover:bg-copper/20 transition-colors text-sm"
                >
                  Meta Ads {nearbyCity.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
