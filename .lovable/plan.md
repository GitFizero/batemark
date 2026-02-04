

## Plan d'ameliorations dynamiques du site BATEMARK

### 1. Titre dynamique dans la Hero Section

**Fichier**: `src/components/sections/HeroSection.tsx`

Ajouter une animation de texte rotatif qui alterne entre differents termes cibles, similaire au site Clickway. Le titre passera de statique a dynamique:

```
"pour votre entreprise locale"
```

Devient:

```
"pour votre [Entreprise / Commerce / Agence / Boutique] locale"
```

**Implementation technique**:
- Creer un state avec les mots a alterner: `["Entreprise", "Commerce", "Agence", "Boutique"]`
- Utiliser `useState` et `useEffect` avec un intervalle de 2-3 secondes
- Animation avec Framer Motion pour:
  - Effet de fade-out vers le haut du mot sortant
  - Effet de fade-in depuis le bas du nouveau mot
  - Border/highlight style autour du mot actif (similaire au style Clickway avec le cadre en pointilles)

---

### 2. Bouton WhatsApp dans le Header

**Fichier**: `src/components/layout/Header.tsx`

Ajouter un bouton WhatsApp circulaire a droite des CTA buttons:

- Icone WhatsApp (lucide-react n'a pas WhatsApp, donc utiliser un SVG inline ou MessageCircle avec style vert)
- Lien vers: `https://wa.me/33649675082`
- Style: cercle vert avec icone blanche, similaire au modele Clickway
- Position: apres le bouton "Programme Batemark" sur desktop, dans le menu mobile aussi

---

### 3. Nouveau design du Retroplanning (style calendrier)

**Fichier**: `src/components/sections/RetroplanningSection.tsx`

Refonte complete pour un design de type calendrier interactif, adapte au contexte BATEMARK (accompagnement sur 4 semaines):

**Nouvelle structure visuelle**:
- Grille de 4 semaines (28 jours) avec des cercles/icones
- Chaque jour actif a une icone ou emoji representant l'action
- Les jours inactifs sont gris
- Annotations fleches avec labels explicatifs autour du calendrier

**Mapping des etapes BATEMARK sur le calendrier**:
- Jours 1-3: Onboarding (icones: cafe, checklist, reunion)
- Jours 4-7: Montage (icones: video, settings, graphiques)
- Jours 8-14: Lancement (icones: fusee, optimisation)
- Jours 15-28: Optimisation (icones: trending, rapports)

**4 annotations fleches**:
- "On brainstorm" (Jour 1)
- "Configuration technique" (Jours 4-7)
- "Lancement campagnes" (Jour 8)
- "Livraison resultats" (Jour 28)

---

### 4. Ameliorations globales d'animations (plus dynamique)

**Fichiers a modifier**:
- Toutes les sections existantes

**Ameliorations**:
- Augmenter les effets de parallax sur les backgrounds
- Ajouter des micro-animations au hover sur les cartes (scale, glow)
- Ajouter des effets de "stagger" plus prononces sur les listes
- Animations d'entree plus fluides avec des delays progressifs
- Effet de "floating" sur certains elements decoratifs

---

### 5. Section Projets Realises avec pages individuelles

**Nouveaux fichiers**:
- `src/components/sections/ProjectsSection.tsx` (galerie de projets)
- `src/pages/ProjectPage.tsx` (page detail d'un projet)
- `src/data/projects.ts` (donnees des projets)

**Structure de la galerie** (ProjectsSection.tsx):
- Titre: "Nos meilleurs projets"
- Grille de cartes projet avec:
  - Image principale du projet
  - Logo client (petit)
  - Nom du projet
  - Courte description
  - Tag (ex: "Meta Ads", "Google Ads")
- Animation au hover avec zoom sur l'image
- Lien vers la page individuelle

**Structure de la page projet** (ProjectPage.tsx):
- Header avec bouton "Revenir au portfolio"
- Grande galerie d'images du projet
- Bloc info lateral:
  - Logo client
  - Titre du projet
  - Description courte
  - Tag categorie
  - Secteur
  - "Le defi"
  - "L'approche BATEMARK"
  - "L'impact"
- CTA en bas: "C'est a votre tour ?"

**Routing** (App.tsx):
- Ajouter route: `/projets/:slug`
- Pages accessibles comme: `/projets/client-fitness`, `/projets/restaurant-paris`

**Note**: Les donnees reelles des projets seront ajoutees par la suite selon les informations fournies.

---

### 6. Integration dans Index.tsx

**Fichier**: `src/pages/Index.tsx`

Ajouter la nouvelle section ProjectsSection entre les sections existantes (apres TestimonialsSection par exemple).

---

### Resume des fichiers a creer/modifier

| Action | Fichier |
|--------|---------|
| Modifier | `src/components/sections/HeroSection.tsx` |
| Modifier | `src/components/layout/Header.tsx` |
| Refonte | `src/components/sections/RetroplanningSection.tsx` |
| Creer | `src/components/sections/ProjectsSection.tsx` |
| Creer | `src/pages/ProjectPage.tsx` |
| Creer | `src/data/projects.ts` |
| Modifier | `src/App.tsx` |
| Modifier | `src/pages/Index.tsx` |

---

### Details techniques

**Animation du titre rotatif**:
```tsx
const words = ["Entreprise", "Commerce", "Agence", "Boutique"];
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % words.length);
  }, 2500);
  return () => clearInterval(interval);
}, []);
```

Avec Framer Motion AnimatePresence pour les transitions douces.

**Bouton WhatsApp**:
Style circulaire vert (#25D366) avec icone SVG WhatsApp integree.

**Calendrier Retroplanning**:
Grille CSS de 7 colonnes x 4 lignes pour les 28 jours, avec des cercles animes et des annotations positionnees en absolu.

**Routing projets**:
```tsx
<Route path="/projets/:slug" element={<ProjectPage />} />
```

---

### Rendu visuel attendu

- **Hero**: Mot "Entreprise" qui change avec animation de slide vertical, entoure d'un cadre cuivre/dore
- **Header**: Bouton WhatsApp vert circulaire a droite des boutons CTA
- **Retroplanning**: Calendrier visuel avec cercles animes, fleches et annotations explicatives
- **Projets**: Grille de cartes cliquables menant vers des pages individuelles detaillees
- **Global**: Site beaucoup plus anime et interactif avec des transitions fluides

