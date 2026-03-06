

# Refonte complète Landing Page Batemark — IA & Automatisation

## Contexte

Pivot total : de "expert publicité digitale locale / leads" vers "consultant IA & automatisation pour TPE/PME (500K-5M CA)". Nouvelle philosophie, nouveaux services, nouveau ton.

## Structure de la nouvelle landing page

```text
┌─────────────────────────────────────┐
│  Header (simplifié)                 │
│  Logo + nav ancres + CTA contact    │
├─────────────────────────────────────┤
│  S1 — Hero                          │
│  Philosophie centrale + CTA         │
├─────────────────────────────────────┤
│  S2 — Le Problème                   │
│  Confusion IA, outils empilés...    │
├─────────────────────────────────────┤
│  S3 — La Philosophie / Approche     │
│  "Tout est possible ≠ tout faire"   │
├─────────────────────────────────────┤
│  S4 — Les 3 Piliers                 │
│  Automatisation · Agents IA ·       │
│  Pilotage & Acquisition             │
├─────────────────────────────────────┤
│  S5 — Comment ça marche (4 étapes)  │
│  Audit → Plan → Exécution → Suivi   │
├─────────────────────────────────────┤
│  S6 — Pourquoi Batemark             │
│  Différenciateurs vs agences        │
├─────────────────────────────────────┤
│  S7 — CTA Final                     │
│  Appel découverte 30 min            │
├─────────────────────────────────────┤
│  Footer                             │
└─────────────────────────────────────┘
```

## Fichiers modifies / crees

### Modifies
- **`src/pages/Index.tsx`** — Nouvelle structure de sections, suppression des anciennes (CalEmbed, Retroplanning, Pricing, Opportunity, Projects, Blog, Testimonials)
- **`src/components/layout/Header.tsx`** — Nouveaux liens nav (Problème, Approche, Services, Méthode, Pourquoi Batemark), CTA "Réserver un appel", suppression WhatsApp et Programme Batemark
- **`src/components/layout/Footer.tsx`** — Mise a jour de la description
- **`src/components/sections/HeroSection.tsx`** — Refonte complete : headline philosophie IA, sous-titre cible (e-commerce/B2B, 500K-5M), CTA unique "Réserver un appel découverte", mots rotatifs adaptes (process, decisions, operations, equipes)
- **`src/components/sections/ProblemsSection.tsx`** — Nouveaux problemes : confusion IA, outils empiles, manque integration, pas de gain mesurable
- **`src/components/sections/CTASection.tsx`** — Appel decouverte 30 min, mention disponibilite limitee (5-6 clients max)
- **`src/components/sections/FAQSection.tsx`** — Nouvelles questions adaptees au nouveau positionnement

### Crees
- **`src/components/sections/PhilosophySection.tsx`** — Section "approche" : message central "tout est possible mais...", les 3 principes concrets
- **`src/components/sections/PillarsSection.tsx`** — 3 piliers : Automatisation process, Agents IA, Pilotage & acquisition augmentee
- **`src/components/sections/ProcessSection.tsx`** — 4 etapes : Audit, Plan d'action, Execution, Suivi & iteration
- **`src/components/sections/WhyBatemarkSection.tsx`** — 5 differenciateurs vs agences classiques

### Supprimes (imports retires de Index.tsx)
- CalEmbed, OpportunitySection, MethodSection, RetroplanningSection, SolutionSection, AuthoritySection, TestimonialsSection, ProjectsSection, PricingSection, BlogSection

## Pages legales
- `CGV.tsx`, `Confidentialite.tsx`, `MentionsLegales.tsx` conservees mais le contenu de CGV sera mis a jour pour refleter le nouveau service (retainer mensuel, automatisation/IA)

## SEO / Meta
- Mise a jour des balises meta et schema.org dans Index.tsx pour refleter le nouveau positionnement

## Design
- Conservation du theme dark + copper existant, meme palette, memes composants UI (card-premium, text-gradient-copper, SectionFade, animations framer-motion)
- Ton plus sobre et mature, moins de "flash offer" / countdown timers
- Suppression du Cal.com embed inline (remplace par lien externe vers un appel 30 min)

## Points d'attention
- Le CAL_LINK devra etre mis a jour (30 min au lieu de 15 min) — je te demanderai le bon lien ou j'utiliserai un placeholder
- Les routes `/meta-ads-:city` et `/projets/:slug` seront supprimees car plus pertinentes
- Les tables Supabase existantes (testimonials, articles) restent en place mais ne sont plus utilisees sur la landing

