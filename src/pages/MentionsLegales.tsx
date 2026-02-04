import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | BATEMARK</title>
        <meta
          name="description"
          content="Mentions légales du site BATEMARK - Expert en acquisition digitale et génération de leads qualifiés."
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
            Mentions Légales
          </h1>

          <p className="text-muted-foreground mb-12">
            Dernière mise à jour : Février 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Éditeur du site
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site batemark.com est édité par :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4">
                <li><strong className="text-foreground">Dénomination :</strong> BATEMARK</li>
                <li><strong className="text-foreground">Forme juridique :</strong> Entrepreneur individuel</li>
                <li><strong className="text-foreground">Responsable :</strong> Gaëtan Fizero</li>
                <li><strong className="text-foreground">SIREN :</strong> 853 749 406</li>
                <li><strong className="text-foreground">SIRET :</strong> 853 749 406 00023</li>
                <li><strong className="text-foreground">Numéro de TVA intracommunautaire :</strong> FR90853749406</li>
                <li><strong className="text-foreground">Adresse du siège social :</strong> 11 Impasse Panisse, 13400 Aubagne, France</li>
                <li><strong className="text-foreground">Email :</strong> gaetan@batemark.com</li>
                <li><strong className="text-foreground">Téléphone :</strong> +33 6 49 67 50 82</li>
                <li><strong className="text-foreground">Activité :</strong> Conseil pour les affaires et autres conseils de gestion (NAF 7022Z)</li>
                <li><strong className="text-foreground">Date de création :</strong> 10 septembre 2019</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Directeur de la publication
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le directeur de la publication est Gaëtan Fizero, en qualité de dirigeant de l'entreprise BATEMARK.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Hébergement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ce site est hébergé par :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4">
                <li><strong className="text-foreground">Lovable</strong></li>
                <li>Plateforme d'hébergement web</li>
                <li>Site web : lovable.dev</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Propriété intellectuelle
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive de BATEMARK ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de BATEMARK.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Limitation de responsabilité
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                BATEMARK s'efforce de fournir sur ce site des informations aussi précises que possible. Toutefois, BATEMARK ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Toutes les informations indiquées sur le site sont données à titre indicatif et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur ce site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Liens hypertextes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site peut contenir des liens hypertextes vers d'autres sites. BATEMARK n'a pas la possibilité de vérifier le contenu des sites ainsi visités et n'assumera en conséquence aucune responsabilité de ce fait.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                La création de liens hypertextes vers le site batemark.com est soumise à l'accord préalable de BATEMARK.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Données personnelles
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour plus d'informations sur la collecte et le traitement de vos données personnelles, veuillez consulter notre{" "}
                <Link to="/confidentialite" className="text-primary hover:underline">
                  Politique de Confidentialité
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Droit applicable
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes mentions légales sont soumises au droit français. En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question ou réclamation concernant ce site, vous pouvez nous contacter :
              </p>
              <ul className="text-muted-foreground space-y-2 mt-4">
                <li><strong className="text-foreground">Email :</strong> gaetan@batemark.com</li>
                <li><strong className="text-foreground">Téléphone :</strong> +33 6 49 67 50 82</li>
                <li><strong className="text-foreground">Adresse :</strong> 11 Impasse Panisse, 13400 Aubagne, France</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MentionsLegales;
