# Volt & Lumière

> Site vitrine premium pour **Volt & Lumière** — Électricien spécialisé en domotique, éclairage d'architecture et résidentiel haut de gamme à Paris.
>
> Réalisé par **Atelier-CL** — 9 mai 2026

---

## Stack technique

| Technologie | Version | Usage |
|---|---|---|
| **Next.js** | 16 (App Router) | Framework React full-stack |
| **React** | 19 | Bibliothèque UI |
| **TypeScript** | 5.7 | Typage statique |
| **Tailwind CSS** | 4 | Styles utilitaires |
| **Framer Motion** | 12 | Animations & transitions |
| **Lenis** | 1.2 | Smooth scroll |
| **Resend** | 4 | Envoi d'emails transactionnels |
| **class-variance-authority** | 0.7 | Variants de composants |

### Déploiement

- **Hébergeur :** Vercel (plan Hobby)
- **Domaine :** `volt-lumiere-paris.fr`

---

## Prérequis

- Node.js ≥ 20
- npm ≥ 10

---

## Démarrage local

```bash
# 1. Cloner le dépôt
git clone <url-du-repo>
cd volt-et-lumiere

# 2. Installer les dépendances
npm install

# 3. Copier et remplir les variables d'environnement
cp .env.example .env.local

# 4. Lancer le serveur de développement
npm run dev
# → http://localhost:3000
```

---

## Variables d'environnement

```env
# URL de production (utilisée pour les métadonnées SEO)
NEXT_PUBLIC_SITE_URL=https://volt-lumiere-paris.fr
```

> ⚠️ Aucune clé API n'est exposée côté client. Toutes les variables sensibles sont accessibles uniquement via `process.env` côté serveur.

---

## Scripts npm

```bash
npm run dev          # Serveur de développement (http://localhost:3000)
npm run build        # Build de production
npm run start        # Lancement du build de production
npm run lint         # Vérification ESLint
npx playwright test tests/smoke.spec.ts  # Smoke test Playwright
```

---

## Architecture des dossiers

```
volt-et-lumiere/
├── public/
│   ├── assets/
│   │   └── generated/       # Images générées (WebP, < 200 Ko)
│   └── favicon.svg          # Favicon du site
├── src/
│   ├── app/                 # Pages Next.js (App Router)
│   │   ├── a-propos/        #   → /a-propos
│   │   ├── contact/         #   → /contact
│   │   ├── mentions-legales/#   → /mentions-legales
│   │   ├── realisations/    #   → /realisations
│   │   ├── savoir-faire/    #   → /savoir-faire
│   │   ├── globals.css      # Styles globaux + theme Tailwind
│   │   ├── layout.tsx       # Layout racine (Header, Footer, Lenis)
│   │   └── page.tsx         # Page d'accueil
│   ├── components/
│   │   ├── atoms/           # Composants atomiques (< 150 lignes)
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── GoldDivider.tsx
│   │   │   ├── Icon.tsx     # 18 icônes SVG inline
│   │   │   ├── Input.tsx
│   │   │   └── SectionTitle.tsx
│   │   └── molecules/       # Composants moléculaires
│   │       ├── ContactForm.tsx
│   │       ├── Footer.tsx
│   │       ├── GalleryGrid.tsx  # Masonry asymétrique
│   │       ├── Header.tsx
│   │       ├── HeroSection.tsx
│   │       └── ServiceCard.tsx
│   └── lib/                 # Utilitaires & configurations
│       ├── animations.ts    # Variants Framer Motion
│       ├── lenis.ts         # Configuration Lenis smooth scroll
│       └── utils.ts         # Helper cn() + formatPhone()
├── tests/
│   └── smoke.spec.ts        # Smoke test Playwright
├── .env.example             # Template variables d'environnement
├── next.config.ts           # Configuration Next.js
├── package.json             # Dépendances & scripts
├── postcss.config.mjs       # Configuration PostCSS
└── tsconfig.json            # Configuration TypeScript
```

---

## Architecture Atomique

Le projet suit le design system atomique :

- **Atomes** (`src/components/atoms/`) : Composants de base, réutilisables, sans logique métier. Chaque fichier fait **moins de 150 lignes**.
- **Molécules** (`src/components/molecules/`) : Composants composés, combinant plusieurs atomes.
- **Organismes** (`src/components/organisms/`) : Sections complètes (prévu pour l'évolution).

### Conventions

- `"use client"` sur tous les composants utilisant des hooks ou des interactions
- Imports via l'alias `@/*` mappé sur `./src/*`
- Helper `cn()` de `@/lib/utils` pour la fusion conditionnelle de classes Tailwind
- Animations via Framer Motion avec variants centralisés dans `@/lib/animations`

---

## Performances (cibles Lighthouse)

| Métrique | Cible |
|---|---|
| Performance | > 90 |
| Accessibility | > 95 |
| SEO | > 95 |
| LCP | < 2.5 s |
| CLS | < 0.1 |

### Optimisations appliquées

- Images en WebP avec lazy loading
- Polices Google Fonts avec `display=swap`
- Animations optimisées (GPU-accelerated via Framer Motion)
- Smooth scroll Lenis avec `will-change` implicite
- Breakpoints responsive : 375 / 768 / 1280 / 1920 px

---

## Reprise par un autre prestataire

Ce projet utilise une stack standard Next.js. Aucune dépendance propriétaire.

**Points d'attention :**
- Les images dans `public/assets/generated/` sont des placeholders SVG — à remplacer par des photos réelles en WebP (< 200 Ko)
- Le formulaire de contact (`ContactForm.tsx`) utilise une simulation — à connecter à Resend ou un service d'email
- Les coordonnées (téléphone, email, adresse) sont à vérifier avant mise en production

---

*Généré par Atelier-CL Studio — 9 mai 2026*
