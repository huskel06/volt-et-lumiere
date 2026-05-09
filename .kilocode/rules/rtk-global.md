---
priority: critical
scope: global
---
# Règles globales Atelier-CL

## Commandes shell — Préfixe RTK obligatoire
Toutes les commandes shell DOIVENT être préfixées par `rtk`.
- Correct : `rtk git status`, `rtk npm install`
- Incorrect : `git status`, `npm install`

## Architecture Atomique
- Aucun fichier `.tsx` ne dépasse 150 lignes
- Découper : atoms/ molecules/ organisms/ templates/

## Sécurité API
- Jamais de clé API côté client
- Variables d'environnement via process.env côté serveur uniquement

## Stack
- Next.js 16 App Router / Convex / Clerk / Tailwind 4 / Framer Motion

## Fin de projet — Build, Commit & Push
AVANT tout `rtk npm run build`, `rtk git commit` ou `rtk git push` en contexte de livraison :
STOP — afficher dans le chat : "✅ @qa validé. Je m'apprête à : build → commit → push. Confirmes-tu ? (OK/GO)"
Ne jamais enchaîner ces 3 opérations sans validation explicite du chef de projet.