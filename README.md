# TimeTravel Agency — WebApp IA

> Agence de voyage temporel fictive proposant des séjours immersifs dans 3 époques : Égypte ancienne (-2560 av. J.-C.), Mars 2070 et Pompéi (79 ap. J.-C.).

Projet académique réalisé dans le cadre du cours **WebApp IA** à Ynov.

---

## Description

TimeTravel Agency est une webapp moderne et interactive mettant en scène une agence de voyage temporel. L'utilisateur peut explorer les destinations, discuter avec un agent IA conversationnel (CHRONOS), et effectuer une réservation en ligne.

---

## Technologies utilisées

| Couche | Technologie |
|--------|-------------|
| Frontend | React 18 + Vite 6 + TypeScript |
| Styling | Tailwind CSS 3 + CSS personnalisé |
| Routing | React Router v6 |
| Animations | Framer Motion + Canvas API (starfield) |
| Icônes | SVG inline custom + Lucide React |
| Backend | Node.js + Express.js 4 |
| IA | Mistral API (`mistral-small-latest`) |
| Images | Cloudinary (CDN) |
| Fonts | Google Fonts — Playfair Display, Space Grotesk |

### Architecture

**Frontend — Atomic Design (5 niveaux)**
```
src/components/
├── atoms/       → Button, Badge, Input
├── molecules/   → NavLogo, DestinationCard, ChatBubble, ChatInput
├── organisms/   → Navbar, Hero, About, Destinations, Chatbot, BookingSection, Footer
├── templates/   → PageLayout
└── pages/       → Home, DestinationDetail
```

**Backend — MVC**
```
server/
├── models/      → Destination.js, Booking.js
├── controllers/ → destinationController, bookingController, chatController
├── routes/      → /api/destinations, /api/bookings, /api/chat
├── app.js       → Configuration Express + routes + static files
└── server.js    → Point d'entrée (port 3001)
```

---

## Features implémentées

- **3 destinations temporelles** avec pages de détail (Égypte -2560 av. J.-C., Mars 2070, Pompéi 79 ap. J.-C.)
- **Agent IA CHRONOS** — chatbot conversationnel alimenté par Mistral AI, disponible sur toutes les pages
- **Historique de conversation** — CHRONOS mémorise le contexte des échanges dans la session
- **Fallback intelligent** — réponses par règles si l'API Mistral est indisponible (rate limit ou clé absente)
- **Formulaire de réservation** avec validation et confirmation
- **Animations immersives** — portail en anneau (CSS conic-gradient), champ d'étoiles animé (Canvas), effets glassmorphism
- **Design responsive** — mobile, tablette, desktop
- **Navigation SPA** avec React Router — retour automatique à la home depuis les pages détail
- **API REST** complète : destinations, réservations, chat
- **Déploiement full-stack** sur Render — Express sert à la fois l'API et le frontend buildé

### Endpoints API

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/destinations` | Liste des 3 destinations |
| GET | `/api/destinations/:id` | Détail d'une destination |
| POST | `/api/bookings` | Créer une réservation |
| GET | `/api/bookings` | Liste des réservations |
| POST | `/api/chat` | Agent CHRONOS (Mistral AI) |
| GET | `/api/health` | Statut du serveur |

---

## Prompts documentés

### System prompt — Agent CHRONOS (Mistral AI)

Le system prompt définit la personnalité et les connaissances de CHRONOS. Il est envoyé à chaque requête comme premier message `role: system` :

```
Tu es CHRONOS, l'agent IA de TimeTravel Agency, une agence de voyage temporel fictive fondée en 2847.
Tu réponds toujours en français, avec un ton élégant, enthousiaste et légèrement mystérieux.
Tu connais parfaitement les 3 destinations disponibles :

1. Égypte ancienne (-2560 av. J.-C.) — 4 200 TempoCoins, 3 à 5 jours
   Activités, sécurité, architecture...

2. Mars 2070 — 12 500 TempoCoins, 5 à 7 jours
   Colonie Ares-7, rover, dômes pressurisés...

3. Pompéi (79 ap. J.-C.) — 3 100 TempoCoins, 3 à 4 jours
   Forum, thermes, domus, départ avant l'éruption...

Garde tes réponses concises (2-4 phrases max), sauf si on te demande des détails.
N'invente pas d'autres destinations ou services non mentionnés.
```

**Choix de conception :**
- Ton mystérieux et élégant pour renforcer l'immersion
- Connaissance limitée aux 3 destinations pour éviter les hallucinations
- Réponses courtes par défaut pour un chat fluide

### Prompts de fallback (règles par mots-clés)

Lorsque l'API Mistral est indisponible, le chatbot utilise un système de règles documenté dans `src/utils/chatbot.ts`. Chaque règle associe une liste de mots-clés à une réponse formatée. Exemples de déclencheurs :

| Mots-clés | Réponse |
|-----------|---------|
| `egypte`, `pyramide`, `pharaon` | Présentation Égypte + prix + durée |
| `mars`, `2070`, `rover`, `dôme` | Présentation Mars + prix + durée |
| `prix`, `tarif`, `combien` | Tableau comparatif des 3 destinations |
| `sécurité`, `danger`, `risque` | Protocoles de sécurité |
| `réserver`, `booking` | Guide de réservation étape par étape |

### Prompt Google Stitch — Génération de la maquette

Prompt utilisé pour générer le design initial de la webapp :

```
Design a futuristic time travel agency website called "TimeTravel Agency".
Dark space theme with deep purple and gold accents. 3 destination cards:
Ancient Egypt (-2560 BC), Mars 2070, Pompeii (79 AD).
Include: hero section with portal animation, destination cards with era gradients,
floating AI chatbot widget, booking form. Modern glassmorphism aesthetic.
```

---

## Outils IA utilisés

### Mistral AI — Agent CHRONOS
- **Modèle** : `mistral-small-latest` (tier gratuit)
- **Usage** : génération de réponses conversationnelles pour le chatbot CHRONOS
- **Implémentation** : appel REST via `fetch` côté serveur Express, system prompt personnalisé définissant la personnalité de CHRONOS et la connaissance des 3 destinations
- **Robustesse** : retry automatique sur erreur 429 (rate limit), fallback sur règles par mots-clés en cas d'indisponibilité

### Claude (Anthropic) — Assistance au développement
- Utilisé pour la génération et la révision du code (composants React, logique serveur, corrections de bugs)

### Google Stitch — Design
- Utilisé pour générer la maquette initiale de l'interface

---

## Installation (développement local)

### Prérequis
- Node.js 18+
- Clé API Mistral (gratuite sur [console.mistral.ai](https://console.mistral.ai/))

### Étapes

```bash
# 1. Cloner le projet
git clone https://github.com/Georgie1502/WebappIA.git
cd WebappIA

# 2. Installer les dépendances frontend
npm install

# 3. Installer les dépendances backend
cd server && npm install && cd ..

# 4. Configurer la clé API
cp server/.env.example server/.env
# Éditer server/.env et renseigner MISTRAL_API_KEY

# 5. Lancer frontend + backend simultanément
npm start
```

L'application est accessible sur `http://localhost:5173`
L'API tourne sur `http://localhost:3001`

> Sans clé API Mistral, le chatbot fonctionne en mode fallback (réponses par règles).

### Variables d'environnement

| Variable | Description |
|----------|-------------|
| `MISTRAL_API_KEY` | Clé API Mistral (console.mistral.ai) |
| `PORT` | Port du serveur Express (défaut : 3001) |

---

## Déploiement (Render)

Ce projet est déployé sur **Render** en service unique (Express sert le frontend buildé + l'API).

| Champ | Valeur |
|-------|--------|
| **Build Command** | `npm run render-build` |
| **Start Command** | `npm run render-start` |
| **Variable d'env** | `MISTRAL_API_KEY` |

Le script `render-build` installe les dépendances frontend et backend, puis build le frontend Vite. Express sert ensuite les fichiers statiques de `dist/` et gère les routes API.

---

## Crédits

| Ressource | Source |
|-----------|--------|
| IA conversationnelle | [Mistral AI](https://mistral.ai/) — modèle `mistral-small-latest` |
| Assistance développement | [Claude](https://claude.ai/) par Anthropic |
| Design / maquette | [Google Stitch](https://stitch.withgoogle.com/) |
| Images & Logo | [Cloudinary](https://cloudinary.com/) — hébergement et optimisation |
| Fonts | [Google Fonts](https://fonts.google.com/) — Playfair Display, Space Grotesk |
| Icônes | SVG inline custom |
| Déploiement | [Render](https://render.com/) — hébergement full-stack |
| Réservation externe | [Cal.com](https://cal.com/) — lien de consultation |

---

## Réflexion sur le processus

### Ce qui a bien fonctionné

**Architecture Atomic Design** — Séparer les composants en atoms → molecules → organisms → templates → pages a rendu le code très lisible et facile à maintenir. Modifier un seul composant (ex : `Badge`) met à jour toute l'interface.

**Mistral API + fallback** — Implémenter un système de secours par règles s'est révélé indispensable : l'API Mistral en tier gratuit a des limites strictes (429 rate limit). Le fallback garantit que le chatbot répond toujours, même sans connexion à l'API.

**Cloudinary** — Externaliser les images vers Cloudinary a simplifié le déploiement : pas d'images volumineuses dans le repo Git, chargement optimisé automatiquement par le CDN.

### Difficultés rencontrées

**Intégration Mistral API** — Deux erreurs successives à déboguer :
- `401 Unauthorized` : la clé API était lue depuis le mauvais répertoire (`dotenv` cherchait `.env` à la racine au lieu de `server/.env`). Fix : `dotenv.config({ path: __dirname + '/.env' })`
- `429 Too Many Requests` : le tier gratuit limite à ~1 req/seconde. Fix : retry automatique avec délai basé sur le header `retry-after`

**Déploiement full-stack sur Render** — Vercel ne supporte pas Express.js directement. Solution retenue : faire servir le frontend buildé (`dist/`) par Express lui-même, avec un catch-all `app.get('*')` pour le routing SPA.

**Navigation SPA** — Les liens de la navbar (scroll vers `#destinations`, `#booking`) ne fonctionnaient pas depuis les pages de détail car les sections n'existaient pas dans le DOM. Fix : détecter si on est sur `/`, sinon naviguer d'abord vers la home puis scroller.

### Choix techniques et alternatives

| Décision | Choix retenu | Alternative écartée | Raison |
|----------|-------------|---------------------|--------|
| Chatbot IA | Mistral API (`mistral-small-latest`) | ChatGPT API | Tier gratuit disponible sans carte bancaire initialement |
| Déploiement | Render (full-stack) | Netlify (frontend seul) | Mistral API requiert un backend sécurisé pour la clé API |
| Images | Cloudinary CDN | Fichiers locaux dans `public/` | Repo Git allégé, optimisation automatique |
| Architecture UI | Atomic Design | Composants à plat | Maintenabilité et réutilisabilité à long terme |

### Ce que j'ai appris

- Structurer une webapp full-stack avec séparation frontend / backend claire (MVC + Atomic Design)
- Intégrer une API IA (Mistral) avec gestion des erreurs, retry et fallback
- Déployer un projet Node.js/Express sur Render avec build automatisé depuis GitHub
- L'importance du `.gitignore` pour ne jamais exposer une clé API dans un repo public

---

## Auteur

Projet réalisé par **Jorgelina LEDESMA** — Ynov, 2026
*© 2124 TimeTravel Agency. All dimensions reserved.*
