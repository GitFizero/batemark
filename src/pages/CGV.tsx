import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CGV = () => {
  return (
    <>
      <SEOHead
        title="Conditions Générales de Vente"
        description="Conditions Générales de Vente de BATEMARK. Consultant IA & automatisation pour TPE/PME en France."
      />

      <Header />

      <main id="main-content" className="min-h-screen pt-32 pb-20 px-4 md:px-8">
        <div className="container-custom max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Conditions Générales de Vente
          </h1>

          <p className="text-muted-foreground mb-12">
            Dernière mise à jour : Février 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Article 1 - Identification du prestataire
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) sont conclues entre :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4">
                <li><strong className="text-foreground">Dénomination :</strong> BATEMARK</li>
                <li><strong className="text-foreground">Entrepreneur individuel :</strong> Gaëtan Fizero</li>
                <li><strong className="text-foreground">SIREN :</strong> 853 749 406</li>
                <li><strong className="text-foreground">SIRET :</strong> 853 749 406 00023</li>
                <li><strong className="text-foreground">Numéro de TVA :</strong> FR90853749406</li>
                <li><strong className="text-foreground">Adresse :</strong> 11 Impasse Panisse, 13400 Aubagne, France</li>
                <li><strong className="text-foreground">Activité :</strong> Conseil pour les affaires et autres conseils de gestion (NAF 7022Z)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Et toute personne physique ou morale, ci-après dénommée "le Client", souhaitant bénéficier des services proposés par BATEMARK.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Article 2 - Objet
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes CGV régissent les relations contractuelles entre BATEMARK et le Client dans le cadre de la fourniture de services de conseil en acquisition digitale, gestion de campagnes publicitaires (Meta Ads, Google Ads), génération de leads qualifiés et accompagnement marketing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Article 3 - Acceptation des CGV
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Toute commande de services implique l'acceptation sans réserve des présentes CGV. Le Client reconnaît avoir pris connaissance de ces conditions avant la signature du devis ou du contrat de prestation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Article 4 - Services proposés
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                BATEMARK propose les services suivants :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4 list-disc list-inside">
                <li>Audit et conseil en stratégie d'acquisition digitale</li>
                <li>Création et gestion de campagnes publicitaires sur Meta (Facebook, Instagram) et Google</li>
                <li>Génération de leads qualifiés pour entreprises locales</li>
                <li>Accompagnement et formation en marketing digital</li>
                <li>Reporting et optimisation des performances</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Les modalités précises de chaque prestation sont définies dans le devis ou contrat signé par les parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Article 5 - Tarifs et modalités de paiement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Les prix des prestations sont indiqués en euros et hors taxes (HT). La TVA applicable sera ajoutée au montant HT selon le taux en vigueur.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Le paiement s'effectue selon les modalités suivantes :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4 list-disc list-inside">
                <li>Un acompte de 30% à la signature du devis</li>
                <li>Le solde à la fin de chaque mois de prestation ou selon l'échéancier convenu</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Les paiements peuvent être effectués par virement bancaire ou tout autre moyen convenu entre les parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Article 6 - Retard de paiement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                En cas de retard de paiement, des pénalités de retard seront appliquées au taux de trois fois le taux d'intérêt légal en vigueur. Une indemnité forfaitaire de 40 euros pour frais de recouvrement sera également due, conformément aux articles L.441-10 et D.441-5 du Code de commerce.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Article 7 - Obligations du prestataire
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                BATEMARK s'engage à :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4 list-disc list-inside">
                <li>Exécuter les prestations avec diligence et professionnalisme</li>
                <li>Respecter les délais convenus dans le contrat</li>
                <li>Informer le Client de l'avancement des travaux</li>
                <li>Assurer la confidentialité des informations transmises par le Client</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                BATEMARK est soumis à une obligation de moyens et non de résultat, les performances des campagnes publicitaires dépendant de nombreux facteurs externes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Article 8 - Obligations du Client
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le Client s'engage à :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4 list-disc list-inside">
                <li>Fournir toutes les informations nécessaires à la réalisation des prestations</li>
                <li>Valider les contenus et visuels dans les délais impartis</li>
                <li>Respecter les délais de paiement</li>
                <li>Accorder les accès nécessaires aux plateformes publicitaires</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Article 9 - Durée et résiliation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                La durée de la prestation est définie dans le contrat signé entre les parties. Chaque partie peut résilier le contrat moyennant un préavis de 30 jours, notifié par écrit (email ou courrier recommandé).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                En cas de résiliation anticipée par le Client, les sommes déjà versées restent acquises à BATEMARK au titre des travaux réalisés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Article 10 - Propriété intellectuelle
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Les créations réalisées par BATEMARK (visuels, textes, stratégies) restent la propriété de BATEMARK jusqu'au paiement intégral des prestations. Après paiement, les droits d'utilisation sont transférés au Client pour l'usage convenu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Article 11 - Responsabilité
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                La responsabilité de BATEMARK ne peut être engagée qu'en cas de faute prouvée. En tout état de cause, la responsabilité de BATEMARK est limitée au montant des sommes effectivement perçues au titre de la prestation concernée.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                BATEMARK ne peut être tenu responsable des décisions prises par les plateformes publicitaires (suspension de comptes, changements d'algorithmes, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Article 12 - Confidentialité
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Chaque partie s'engage à garder confidentielles les informations reçues de l'autre partie dans le cadre de leur collaboration. Cette obligation de confidentialité perdure pendant 2 ans après la fin du contrat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Article 13 - Litiges et droit applicable
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, les tribunaux compétents du ressort d'Aix-en-Provence seront seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Article 14 - Médiation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, le Client consommateur peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un éventuel litige.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CGV;
