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
├── app.js       → Configuration Express + routes
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
- **Navigation SPA** avec React Router (Home + pages détail par destination)
- **API REST** complète : destinations, réservations, chat

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

## Installation

### Prérequis
- Node.js 18+
- Clé API Mistral (gratuite sur [console.mistral.ai](https://console.mistral.ai/))

### Étapes

```bash
# 1. Cloner le projet
git clone <url-du-repo>
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

## Crédits

| Ressource | Source |
|-----------|--------|
| IA conversationnelle | [Mistral AI](https://mistral.ai/) — modèle `mistral-small-latest` |
| Assistance développement | [Claude](https://claude.ai/) par Anthropic |
| Design / maquette | [Google Stitch](https://stitch.withgoogle.com/) |
| Images | [Cloudinary](https://cloudinary.com/) — hébergement et optimisation des images |
| Fonts | [Google Fonts](https://fonts.google.com/) — Playfair Display, Space Grotesk |
| Icônes | SVG inline custom |
| Réservation externe | [Cal.com](https://cal.com/) — lien de consultation |

---

## Auteur

Projet réalisé par **Jorgelina LEDESMA** — Ynov, 2026  
*© 2124 TimeTravel Agency. All dimensions reserved.*
ù