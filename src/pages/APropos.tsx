import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Mail, MapPin } from "lucide-react";
import profilePhoto from "@/assets/gaetan-profile.jpg";

const APropos = () => {
  return (
    <>
      <SEOHead
        title="À propos — Gaëtan Fizero, Consultant IA & Automatisation"
        description="Biographie de Gaëtan Fizero, fondateur de BATEMARK. Consultant en intelligence artificielle et automatisation des process (Make, n8n, Zapier, Claude, ChatGPT, Perplexity). Parcours data, marketing et IA au service des PME françaises."
        keywords="Gaëtan Fizero, BATEMARK, consultant IA France, biographie Gaëtan Fizero, fondateur BATEMARK, expert automatisation, consultant Make n8n Zapier, parcours consultant IA"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Gaëtan Fizero",
            "url": "https://www.batemark.com/a-propos",
            "image": "https://www.batemark.com/og-image.png",
            "jobTitle": "Consultant IA & Automatisation",
            "worksFor": {
              "@type": "Organization",
              "name": "BATEMARK",
              "url": "https://www.batemark.com"
            },
            "description":
              "Fondateur de BATEMARK, consultant spécialisé dans l'intégration de l'IA et l'automatisation des process pour les TPE/PME françaises. Expertise Make, n8n, Zapier, Claude, ChatGPT, Perplexity, Gemini.",
            "knowsAbout": [
              "Intelligence artificielle",
              "Automatisation des process",
              "Make",
              "n8n",
              "Zapier",
              "Claude",
              "ChatGPT",
              "Perplexity",
              "Gemini",
              "Agents IA",
              "Data analytics",
              "Marketing digital"
            ],
            "sameAs": ["https://www.linkedin.com/in/gaetanfizero/"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Aubagne",
              "postalCode": "13400",
              "addressCountry": "FR"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.batemark.com/" },
              { "@type": "ListItem", "position": 2, "name": "À propos", "item": "https://www.batemark.com/a-propos" }
            ]
          })}
        </script>
      </SEOHead>

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

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              À propos de Gaëtan Fizero
            </h1>
            <p className="text-lg text-muted-foreground">
              Fondateur de BATEMARK — Consultant en Intelligence Artificielle
              &amp; Automatisation des process pour TPE/PME.
            </p>
          </header>

          <div className="grid md:grid-cols-[260px_1fr] gap-10 mb-16 items-start">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-card p-1">
                <img
                  src={profilePhoto}
                  alt="Gaëtan Fizero, fondateur de BATEMARK, consultant IA et automatisation"
                  className="w-full h-full object-cover rounded-xl"
                  loading="eager"
                />
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Je m'appelle <strong className="text-foreground">Gaëtan Fizero</strong>.
                J'accompagne les dirigeants de TPE et PME françaises à intégrer
                l'intelligence artificielle et automatiser leurs process pour
                gagner du temps, structurer leur activité et générer plus de
                résultats sans embaucher.
              </p>
              <p>
                BATEMARK, c'est un cabinet de conseil indépendant à taille
                humaine. Pas d'agence à rallonge, pas de reporting
                bureaucratique : un interlocuteur unique, une méthode basée
                sur la data, et des systèmes qui continuent de tourner bien
                après la fin de la mission.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 pt-4 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Aubagne &amp; toute la France</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:gaetan@batemark.com" className="hover:text-primary">
                    gaetan@batemark.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/gaetanfizero/"
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/gaetanfizero
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <article className="prose prose-invert max-w-none space-y-10">
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Un parcours scientifique, puis marketing, puis data
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Tout commence par un cursus scientifique : des chiffres, des
                modèles, une rigueur analytique. La trajectoire semblait toute
                tracée vers la recherche — jusqu'au jour où j'ai découvert le
                marketing. Pas la publicité, pas le branding. Le marketing
                comme une science : comprendre pourquoi les gens agissent,
                mesurer ce qui fonctionne, et prendre des décisions basées sur
                des données, jamais sur l'intuition.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Ma première expérience de Data Analyst pour <em>L'Équipe</em>
                m'a appris quelque chose d'essentiel : les données ne servent
                à rien si elles ne sont pas exploitées intelligemment. Quels
                contenus fonctionnent ? Pourquoi ? Comment adapter les
                décisions en conséquence ?
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                10 ans en agence, sur trois continents
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                J'ai ensuite rejoint deux agences de conseil, managé une
                équipe d'une dizaine de personnes, piloté des campagnes
                d'acquisition et développé des outils internes. J'ai travaillé
                en Europe, en Asie et aux États-Unis — pas pour cocher des
                cases, mais pour comprendre ce qui fonctionne dans des marchés
                radicalement différents. Ce qui marche à Paris ne marche pas à
                Bangkok, et encore moins à New York. Mais les fondamentaux
                restent les mêmes : la data, la rigueur, et l'obsession du
                résultat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Pourquoi j'ai fondé BATEMARK
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Avec le temps, j'ai compris une chose que beaucoup
                d'entreprises ignorent encore : la performance ne dépend pas
                uniquement du marketing, elle dépend du système global. Les
                process, les outils, la façon dont les équipes travaillent au
                quotidien. Beaucoup cherchent à générer plus de chiffre
                d'affaires alors qu'ils n'ont pas encore structuré l'existant.
                Temps perdu, outils sous-exploités, process inefficaces —
                c'est par là qu'il faut commencer.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Et puis l'IA est arrivée. Des stratégies qui prenaient des
                semaines se déploient maintenant en quelques jours. Des tâches
                qui mobilisaient des équipes entières s'automatisent en un
                clic. Pour la première fois, on peut exécuter vite et bien —
                à condition de savoir quoi automatiser, et pourquoi. C'est
                exactement pour ça que j'ai créé BATEMARK en 2019 et
                repositionné le cabinet autour de l'IA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Mon stack technique
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Je construis des systèmes concrets, sobres, maintenables.
                Toujours avec les mêmes outils, choisis pour leur fiabilité et
                leur coût maîtrisé :
              </p>
              <ul className="text-muted-foreground leading-relaxed list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Automatisation</strong> :
                  Make, n8n, Zapier, Airtable, Notion, Google Workspace
                </li>
                <li>
                  <strong className="text-foreground">LLM &amp; agents IA</strong> :
                  Claude (Anthropic), ChatGPT (OpenAI), Gemini (Google),
                  Perplexity, Mistral
                </li>
                <li>
                  <strong className="text-foreground">Données &amp; pilotage</strong> :
                  Looker Studio, Supabase, Google Analytics 4, BigQuery
                </li>
                <li>
                  <strong className="text-foreground">Acquisition</strong> :
                  Meta Ads, Google Ads, LinkedIn, SEO technique, prospection
                  automatisée
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Secteurs accompagnés
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Hôtellerie, restauration, immobilier, BTP &amp; artisanat,
                e-commerce, santé, juridique, coaching, franchise, bien-être,
                agences de communication, associations. À chaque fois, la
                même démarche : identifier les 2 ou 3 process qui consomment
                le plus de temps, puis les automatiser avec un agent IA ou un
                workflow dédié.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Vous pouvez explorer mes analyses sectorielles sur{" "}
                <Link to="/blog" className="text-primary hover:underline">
                  le blog BATEMARK
                </Link>{" "}
                ou consulter la{" "}
                <Link to="/librairie-ia" className="text-primary hover:underline">
                  librairie d'agents IA
                </Link>{" "}
                prêts à déployer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Ma vision de l'IA
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Aujourd'hui, tout le monde parle d'IA. Mais dans les faits,
                elle est souvent mal utilisée : des gadgets sans impact, des
                automatisations inutiles, de la perte de temps déguisée en
                innovation. Pour moi, l'IA n'a qu'un seul intérêt :{" "}
                <strong className="text-foreground">
                  générer un impact concret sur votre business
                </strong>
                . C'est pour ça que j'ai créé BATEMARK. Pas pour vendre de
                l'IA — mais pour concevoir des systèmes qui transforment du
                temps perdu en valeur, et des opportunités en résultats.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Discutons de votre projet
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                30 minutes suffisent pour identifier les process à automatiser
                en priorité dans votre entreprise et estimer le gain de temps
                associé. L'appel est gratuit et sans engagement.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Réserver un appel découverte
                </Link>
                <Link
                  to="/simulateur-ia"
                  className="inline-flex items-center gap-2 border border-primary/40 px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  Tester le simulateur IA
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default APropos;
