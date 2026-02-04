import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Confidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | BATEMARK</title>
        <meta
          name="description"
          content="Politique de confidentialité et protection des données personnelles de BATEMARK."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-32 pb-20 px-4 md:px-8">
        <div className="container-custom max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Politique de Confidentialité
          </h1>

          <p className="text-muted-foreground mb-12">
            Dernière mise à jour : Février 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Responsable du traitement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le responsable du traitement des données personnelles collectées sur ce site est :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4">
                <li><strong className="text-foreground">Dénomination :</strong> BATEMARK</li>
                <li><strong className="text-foreground">Responsable :</strong> Gaëtan Fizero</li>
                <li><strong className="text-foreground">Adresse :</strong> 11 Impasse Panisse, 13400 Aubagne, France</li>
                <li><strong className="text-foreground">SIREN :</strong> 853 749 406</li>
                <li><strong className="text-foreground">Email :</strong> gaetan@batemark.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Données collectées
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Dans le cadre de notre activité, nous sommes amenés à collecter les données personnelles suivantes :
              </p>
              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
                2.1 Données collectées directement
              </h3>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Nom de l'entreprise</li>
                <li>Informations relatives à votre projet ou demande</li>
              </ul>
              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
                2.2 Données collectées automatiquement
              </h3>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Adresse IP</li>
                <li>Type de navigateur et appareil utilisé</li>
                <li>Pages visitées et durée de visite</li>
                <li>Source de trafic (publicité, recherche organique, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Finalités du traitement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos données personnelles sont collectées pour les finalités suivantes :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4 list-disc list-inside">
                <li>Répondre à vos demandes de contact et demandes d'audit</li>
                <li>Vous proposer nos services et établir des devis</li>
                <li>Assurer le suivi de la relation commerciale</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Base légale du traitement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le traitement de vos données repose sur les bases légales suivantes :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4 list-disc list-inside">
                <li><strong className="text-foreground">Exécution d'un contrat :</strong> pour la fourniture de nos services</li>
                <li><strong className="text-foreground">Consentement :</strong> pour l'envoi de communications marketing</li>
                <li><strong className="text-foreground">Intérêt légitime :</strong> pour l'amélioration de nos services et la prospection commerciale</li>
                <li><strong className="text-foreground">Obligation légale :</strong> pour le respect de nos obligations comptables et fiscales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Durée de conservation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos données personnelles sont conservées pendant les durées suivantes :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4 list-disc list-inside">
                <li><strong className="text-foreground">Données clients :</strong> pendant toute la durée de la relation commerciale, puis 5 ans à des fins comptables</li>
                <li><strong className="text-foreground">Données prospects :</strong> 3 ans à compter du dernier contact</li>
                <li><strong className="text-foreground">Données de navigation :</strong> 13 mois maximum</li>
                <li><strong className="text-foreground">Cookies :</strong> 13 mois maximum</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Destinataires des données
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos données peuvent être transmises aux destinataires suivants :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4 list-disc list-inside">
                <li>Notre équipe interne pour le traitement de vos demandes</li>
                <li>Nos prestataires techniques (hébergement, outils CRM, emailing)</li>
                <li>Les plateformes publicitaires (Meta, Google) dans le cadre de nos campagnes</li>
                <li>Les autorités compétentes en cas d'obligation légale</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Nous veillons à ce que nos sous-traitants présentent des garanties suffisantes en matière de protection des données personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Transferts hors UE
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Certaines de vos données peuvent être transférées vers des pays situés hors de l'Union Européenne (notamment vers les États-Unis pour les services de Meta et Google). Ces transferts sont encadrés par des garanties appropriées, notamment les clauses contractuelles types de la Commission européenne et/ou le Data Privacy Framework UE-États-Unis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Notre site utilise des cookies pour :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4 list-disc list-inside">
                <li><strong className="text-foreground">Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                <li><strong className="text-foreground">Cookies analytiques :</strong> pour mesurer l'audience et améliorer le site</li>
                <li><strong className="text-foreground">Cookies marketing :</strong> pour personnaliser les publicités et mesurer leur efficacité</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Vous pouvez à tout moment modifier vos préférences en matière de cookies via les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Vos droits
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4 list-disc list-inside">
                <li><strong className="text-foreground">Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
                <li><strong className="text-foreground">Droit de rectification :</strong> demander la correction de données inexactes</li>
                <li><strong className="text-foreground">Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong className="text-foreground">Droit à la limitation :</strong> demander la suspension du traitement</li>
                <li><strong className="text-foreground">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong className="text-foreground">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong className="text-foreground">Droit de retirer votre consentement :</strong> à tout moment pour les traitements basés sur le consentement</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à l'adresse : <strong className="text-primary">gaetan@batemark.com</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Sécurité des données
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction. Ces mesures incluent notamment :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4 list-disc list-inside">
                <li>Chiffrement des données en transit (HTTPS)</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières</li>
                <li>Mise à jour régulière de nos systèmes de sécurité</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Réclamation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4">
                <li><strong className="text-foreground">Adresse :</strong> 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</li>
                <li><strong className="text-foreground">Site web :</strong> www.cnil.fr</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                12. Modifications
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                13. Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, contactez-nous :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4">
                <li><strong className="text-foreground">Email :</strong> gaetan@batemark.com</li>
                <li><strong className="text-foreground">Adresse :</strong> 11 Impasse Panisse, 13400 Aubagne, France</li>
                <li><strong className="text-foreground">WhatsApp :</strong> +33 6 49 67 50 82</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Confidentialite;
