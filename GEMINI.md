# GEMINI.md — Volt \& Lumière

> Généré le 9 mai 2026 — Atelier-CL Brief Builder

\---

## Objectif

**Formule :** L'Élite
**Catégorie :** Artisans
**Activité :** Électricien premium — domotique, éclairage d'architecture, résidentiel haut de gamme
**URL cible :** volt-lumiere-paris.fr
**Lancement visé :** Août 2026

\---

## Client

**Nom / Enseigne :** Volt \& Lumière
**Responsable :** Karim Benali
**Activité précise :** Électricien premium — domotique, éclairage d'architecture, résidentiel haut de gamme
**Zone géographique :** Paris 16e + Hauts-de-Seine
**SIRET :** 789 456 123 00028
**Différenciation clé :** Certifié KNX, partenaire Lutron \& Philips Hue Pro — seul artisan Paris intramuros
**Concurrents :** domotique-paris.fr, elite-electricite.fr

\---

## Stack

```
Next.js 16 App Router
Tailwind CSS 4 + Framer Motion + Lenis
```

\---

## Identité visuelle

**Palette :**

* Primaire : `#0A0A14`
* Accent : `#D4AF37`
* Fond : `#F5F5F5`

**Direction DA :** Minimaliste Japonisant × Industriel Chic
**Assets visuels :** Non — utiliser @imagegen

\---

## Direction Créative

**Tension :** Minimaliste Japonisant × Industriel Chic — collision délibérée, aucun compromis lissant les oppositions.
**Références marques :** Muji, Aesop, Tom Ford, Officine Générale
**Sites DA :** lutron.com, crestron.com
**Animations :** Framer Motion (scroll reveal, transitions de pages) + Lenis (smooth scroll)
**Priorité :** expérience premium, fluidité, micro-interactions soignées

### ⛔ Layouts INTERDITS

* Hero plein écran + liste features + pricing cards + CTA (layout SaaS générique)
* Cards identiques en grille uniforme
* Navigation hamburger sans caractère
* Polices génériques par défaut (Inter, Poppins, DM Sans) sans intention créative

### ✅ Exigences créatives @designer

* Chaque section justifie son existence **visuellement**, pas fonctionnellement
* Typographie comme élément de design : taille, graisse, espacement inhabituels
* Au moins un choix de layout non-conventionnel par page
* Consulter Awwwards.com et lapa.ninja **avant** toute décision de composition

\---

## Pages

* `/ Accueil`
* `/savoir-faire`
* `/réalisations`
* `/à-propos`
* `/contact`
* `/mentions-légales`

\---

## Contraintes techniques

* Lighthouse : Performance > 90, Accessibility > 95, SEO > 95
* Core Web Vitals : LCP < 2.5s, CLS < 0.1
* Images : WebP, lazy loading, max 200 KB
* Aucune clé API côté client
* Architecture Atomique : aucun fichier .tsx > 150 lignes
* Préfixe `rtk` sur toutes les commandes shell

\---

## Notes client

Clientèle : architectes d'intérieur + promoteurs immobilier prestige. Devis sur visite uniquement.

\---

## Livrables

### Phase 1 — Design (@designer)

* \[ ] Atoms : boutons, inputs, cards, badges, icônes custom
* \[ ] Molecules : header, footer, hero, galerie, formulaires
* \[ ] Pages complètes selon liste ci-dessus
* \[ ] Animations Framer Motion : scroll reveal, transitions de pages
* \[ ] Smooth scroll Lenis configuré
* \[ ] Responsive : 375px / 768px / 1280px / 1920px

### Phase 2 — Développement (@developer)

* \[ ] Setup Next.js 16
* \[ ] Formulaire devis/contact avancé
* \[ ] Intégrations : @imagegen (génération visuels)
* \[ ] Variables d'environnement dans `.env.example`
* \[ ] README.md : stack complète, variables d'env, scripts npm, architecture dossiers
* \[ ] Déploiement Vercel + domaine configuré

### Phase 3 — Contenu (@copywriter)

* \[ ] Textes homepage (hero, services, CTA)
* \[ ] Textes toutes pages secondaires
* \[ ] Méta descriptions optimisées
* \[ ] Microcopy : formulaires, erreurs, confirmations
* \[ ] Relecture qualité : ton premium cohérent, accroche différenciante, zéro cliché sectoriel

### Phase 4 — SEO (@seo)

* \[ ] JSON-LD LocalBusiness complet
* \[ ] Sitemap.xml + robots.txt
* \[ ] Open Graph + Twitter Cards
* \[ ] Balises canoniques
* \[ ] Validation JSON-LD sur schema.org/validator
* \[ ] Méta descriptions uniques + vérification densité mots-clés

### Gate qualité (@qa)

* \[ ] Architecture Atomique respectée
* \[ ] Smoke test Playwright : toutes pages, liens, responsive 375px/768px/1280px
* \[ ] Tests intégration : formulaire devis end-to-end
* \[ ] Intégrations tierces testées (@imagegen (génération visuels))
* \[ ] Animations vérifiées sur mobile (pas de jank)
* \[ ] Score Lighthouse ≥ 90/95/95
* \[ ] README.md présent, setup testé sur machine vierge
* \[ ] Relecture copywriting : 0 phrase générique sur la homepage

\---

*Atelier-CL — L'Élite — 9 mai 2026*

