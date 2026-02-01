
## Plan de modifications BATEMARK

### 1. Mise a jour du Cal.com Embed

**Fichier**: `src/components/sections/CalEmbed.tsx`

Ajouter la configuration `useSlotsViewOnSmallScreen: "true"` dans le config object pour ameliorer l'affichage mobile.

---

### 2. Nouvelle structure de tarification avec timer hebdomadaire

**Fichier**: `src/components/sections/PricingSection.tsx`

Refonte complete avec deux offres :

**Offre Sans Engagement :**
- Prix barre : 490 euros
- Prix actuel : 390 euros/mois
- Badge "Offre Flash -100 euros" avec timer jusqu'a dimanche minuit (se reinitialise chaque semaine)
- Liste des fonctionnalites actuelles (sans "Meta Ads" specifiquement)

**Offre Engagement 3 mois :**
- Prix : 350 euros/mois
- Mention "Paiement trimestriel de 1050 euros"
- Memes fonctionnalites + 2 bonus :
  - Automation Marketing
  - Point Strategique

**Timer hebdomadaire** : Calcul dynamique du temps restant jusqu'au prochain dimanche 23:59:59, avec compteur jours/heures/minutes/secondes.

---

### 3. Modification de la section Autorite

**Fichier**: `src/components/sections/AuthoritySection.tsx`

Changer le texte "Management de 6 traffic managers" pour :
- Titre : "Dirigeant de pole en agence"
- Description : "Management d'une equipe de 6 traffic managers"

Cela sous-entend l'experience passee sans affirmer que c'est actuel.

---

### 4. Generaliser le positionnement (sans Meta specifique)

Rendre le site agnostique sur la plateforme publicitaire - l'audit determinera la meilleure approche.

**Fichiers a modifier :**
- `HeroSection.tsx` : Retirer "Expert Meta Ads", generaliser en "Expert en publicite digitale locale"
- `CTASection.tsx` : Retirer mention "Meta Ads"
- `PricingSection.tsx` : Retirer "Meta Ads" dans les features
- `OpportunitySection.tsx` : Generaliser "Meta Ads" en "Publicite digitale"
- `SolutionSection.tsx` : Adapter les references
- `Index.tsx` : Mettre a jour les meta tags SEO
- `Header.tsx` : Pas de changement (deja generique)

---

### 5. Nouvelle section "La Methode BATEMARK"

**Nouveau fichier**: `src/components/sections/MethodSection.tsx`

Design inspire de l'image 2 avec une timeline verticale et des icones numerotees :

1. **Audit et Diagnostic** - Analyse complete du parcours client et identification des points de friction
2. **Configuration Campagnes** - Structure, ciblage, parametres et visuels optimises pour la conversion  
3. **Tracking Avance** - Installation du suivi pour mesurer chaque euro investi avec precision
4. **Lancement et Test** - Demarrage des campagnes avec phase de test A/B intensive
5. **Optimisation Continue** - Analyse quotidienne des KPI et ajustements pour maximiser votre ROI

Style : Fond sombre avec des particules/etoiles animees, icones sur fond colore (#D0977B), numerotation sur badges, ligne de connexion verticale.

---

### 6. Nouvelle section "Retroplanning BATEMARK"

**Nouveau fichier**: `src/components/sections/RetroplanningSection.tsx`

Design inspire de l'image 3 avec 4 colonnes representant les semaines :

**Semaine 1 :**
- Onboarding et Objectifs
- Partage des acces
- Point Media

**Semaine 2 :**
- Montage contenus
- Creation campagnes
- Tracking conversions
- Connexion outils tiers
- Rapport de validation

**Semaine 3 :**
- Lancement campagnes
- Optimisation continue
- Point J+7

**Semaine 4+ :**
- Optimisation KPI
- Point J+14
- Bilan J+30

Style : Cartes avec badges numerotes, fond sombre avec effets de particules, icones pour chaque etape.

---

### 7. Background dynamique avec particules

**Nouveau fichier**: `src/components/ui/AnimatedBackground.tsx`

Composant de fond anime avec :
- Particules flottantes subtiles
- Gradients animes
- Effets d'etoiles scintillantes
- Compatible avec le theme sombre

A utiliser dans les sections principales pour moderniser l'apparence.

**Mise a jour de `src/index.css`** pour ajouter les animations de particules.

---

### 8. Cacher la section Blog temporairement

**Fichier**: `src/pages/Index.tsx`

Commenter ou retirer temporairement le composant `<BlogSection />` de la page d'accueil.
Garder le lien "Journal" dans le menu mais pointer vers une ancre vide ou retirer temporairement.

---

### 9. Retirer les mentions "Offre Nouvelle Annee"

**Fichiers a modifier :**
- `HeroSection.tsx` : Remplacer le badge promo par "Offre Flash -100 euros" avec timer
- `CTASection.tsx` : Retirer "Offre -26% valable jusqu'a fin janvier"

---

### 10. Structure de la page Index mise a jour

```
<Header />
<HeroSection /> - Avec background anime
<CalEmbed />
<ProblemsSection />
<OpportunitySection /> - Generalise
<MethodSection /> - NOUVELLE SECTION
<RetroplanningSection /> - NOUVELLE SECTION
<SolutionSection />
<AuthoritySection />
<TestimonialsSection />
<PricingSection /> - Deux offres + timer
<FAQSection />
<CTASection />
<Footer />
```

---

### Resume des fichiers

| Fichier | Action |
|---------|--------|
| `src/components/sections/CalEmbed.tsx` | Modifier config |
| `src/components/sections/PricingSection.tsx` | Refonte complete |
| `src/components/sections/AuthoritySection.tsx` | Modifier texte management |
| `src/components/sections/HeroSection.tsx` | Generaliser + nouveau promo badge |
| `src/components/sections/CTASection.tsx` | Generaliser + retirer promo |
| `src/components/sections/OpportunitySection.tsx` | Generaliser |
| `src/components/sections/SolutionSection.tsx` | Generaliser |
| `src/pages/Index.tsx` | Ajouter sections + cacher blog |
| `src/components/sections/MethodSection.tsx` | Creer nouveau |
| `src/components/sections/RetroplanningSection.tsx` | Creer nouveau |
| `src/components/ui/AnimatedBackground.tsx` | Creer nouveau |
| `src/index.css` | Ajouter animations particules |
| `src/components/layout/Header.tsx` | Retirer Journal du menu |

---

### Details techniques

**Timer hebdomadaire** : Implementation avec `useState` et `useEffect`, calcul du prochain dimanche 23:59:59, mise a jour toutes les secondes via `setInterval`.

**Animations de particules** : CSS keyframes pour mouvement subtil, opacity pulsing, et position aleatoire via inline styles calcules.

**Design modernise** : Utilisation de `framer-motion` pour les animations d'entree, gradients sur fond sombre avec la couleur #D0977B comme accent.
