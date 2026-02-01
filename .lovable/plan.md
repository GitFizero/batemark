
## Plan de modifications

### 1. Correction de l'embed Cal.com (vue semaine)

**Fichier**: `src/components/sections/CalEmbed.tsx`

Le code actuel semble correct, mais il manque potentiellement la gestion d'un cas ou l'objet Cal.ns n'est pas pret. Je vais utiliser exactement le code embed fourni avec :
- ID container : `#my-cal-inline-15min`
- Layout : `week_view`
- `useSlotsViewOnSmallScreen: "true"`
- Theme CSS : light `#292929`, dark `#d0977b`

---

### 2. Ajout bouton "Programme Batemark" dans le Header

**Fichier**: `src/components/layout/Header.tsx`

Ajouter un second bouton a cote de "Audit gratuit" :
- Texte : "Programme Batemark"
- Lien : `https://programme.batemark.com/`
- Couleur : Utiliser la couleur tertiaire `#25414B` (nouveau variant de bouton)
- Position : A droite du bouton "Audit gratuit"

**Fichier**: `src/components/ui/button.tsx`

Ajouter un nouveau variant `tertiary` pour le bouton Programme :
```css
tertiary: "bg-[#25414B] text-white font-semibold hover:bg-[#1d333c] transition-all duration-300"
```

---

### 3. Image de montagne en hero avec overlay sombre

**Actions** :
1. Copier l'image `user-uploads://Montagne.svg` vers `src/assets/montagne.svg`
2. Modifier `src/components/sections/HeroSection.tsx` pour :
   - Ajouter l'image en arriere-plan
   - Appliquer un overlay sombre semi-transparent
   - Positionner le contenu par-dessus

---

### 4. Nouvelle palette de couleurs stricte

**Fichier**: `src/index.css`

Remplacer toutes les variables de couleur par :

| Couleur | Hex | Utilisation |
|---------|-----|-------------|
| Primaire | `#B4836D` | Couleur principale (boutons, accents) |
| Secondaire | `#896B60` | Couleur secondaire (hover, elements) |
| Tertiaire | `#25414B` | Couleur de contraste (bouton Programme) |
| Noir | `#0a0a0a` | Background |
| Blanc | `#f5f5f5` | Texte |

Supprimer :
- `--gold` (jaune)
- `--bronze`

Convertir en HSL :
- `#B4836D` = hsl(18, 31%, 57%)
- `#896B60` = hsl(15, 19%, 46%)
- `#25414B` = hsl(193, 33%, 22%)

**Fichier**: `tailwind.config.ts`

Mettre a jour les couleurs Tailwind pour correspondre.

---

### 5. Sections fluides sans coupures abruptes

**Approche** : Retirer les fonds colores distincts (`bg-secondary/30`, etc.) et utiliser un fond noir uniforme avec des effets de gradient subtils entre sections.

**Fichiers a modifier** :
- `src/components/sections/CalEmbed.tsx` : Retirer `bg-secondary/30`
- `src/components/sections/ProblemsSection.tsx` : Retirer `bg-secondary/30`
- `src/components/sections/SolutionSection.tsx` : Retirer `bg-secondary/30`
- `src/components/sections/TestimonialsSection.tsx` : Retirer `bg-secondary/30`
- `src/components/layout/Footer.tsx` : Retirer `bg-secondary/50`

**Nouvelle approche** : Ajouter des separateurs de gradient subtils entre sections avec des transitions douces.

---

### 6. Simplification du Footer

**Fichier**: `src/components/layout/Footer.tsx`

Retirer :
- Icones reseaux sociaux (Facebook, Instagram, LinkedIn)
- Section "Services"
- Section "Secteurs"
- Section "Villes" (20 villes)

Garder :
- Logo Batemark
- Description courte
- Liens legaux (Mentions legales, Confidentialite, CGV)
- Copyright

Le footer sera minimal et elegant.

---

### 7. Mise a jour des gradients de texte

**Fichier**: `src/index.css`

Modifier `.text-gradient-copper` pour utiliser uniquement les nouvelles couleurs (#B4836D et #896B60), sans jaune.

---

### Resume des modifications

| Fichier | Modifications |
|---------|---------------|
| `src/assets/montagne.svg` | Copie de l'image |
| `src/index.css` | Nouvelle palette #B4836D, #896B60, #25414B, suppression jaune |
| `tailwind.config.ts` | Mise a jour couleurs Tailwind |
| `src/components/ui/button.tsx` | Nouveau variant `tertiary` |
| `src/components/layout/Header.tsx` | Bouton "Programme Batemark" |
| `src/components/sections/HeroSection.tsx` | Image montagne + overlay |
| `src/components/sections/CalEmbed.tsx` | Code embed Cal.com exact + retrait bg |
| `src/components/sections/ProblemsSection.tsx` | Retrait bg-secondary/30 |
| `src/components/sections/SolutionSection.tsx` | Retrait bg-secondary/30 |
| `src/components/sections/TestimonialsSection.tsx` | Retrait bg-secondary/30 |
| `src/components/layout/Footer.tsx` | Simplification (retrait reseaux, services, secteurs, villes) |

---

### Rendu visuel attendu

- Hero : Image de montagne en fond avec overlay sombre, contenu centre par-dessus
- Transitions : Sections qui s'enchainent de maniere fluide sur fond noir
- Couleurs : Palette restreinte a 3 couleurs + noir/blanc
- Footer : Minimaliste avec logo et liens legaux uniquement
- Header : Deux boutons CTA (Audit gratuit en primaire, Programme Batemark en tertiaire)
