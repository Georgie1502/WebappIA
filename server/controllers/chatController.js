const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat/completions'
const MODEL = 'mistral-small-latest'

const SYSTEM_PROMPT = `Tu es CHRONOS, l'agent IA de TimeTravel Agency, une agence de voyage temporel fictive fondée en 2847.
Tu réponds toujours en français, avec un ton élégant, enthousiaste et légèrement mystérieux.
Tu connais parfaitement les 3 destinations disponibles :

1. **Égypte ancienne (-2560 av. J.-C.) — Antiquité** (4 200 TempoCoins, 3 à 5 jours)
   Activités : observation du chantier de la grande pyramide de Khéops, rencontre avec l'architecte royal Hemiounou, traversée du Nil en barque de cèdre, visite des ateliers de sculpture.
   Sécurité : tenue lin d'époque fournie, protection solaire quantique, traducteur hiéroglyphique inclus.

2. **Mars 2070 — Futur proche** (12 500 TempoCoins, 5 à 7 jours)
   Activités : sortie en rover sur la plaine de Chryse, visite des dômes agricoles sous pression, coucher de soleil martien, briefing avec les ingénieurs de la colonie Ares-7.
   Sécurité : combinaison pressurisée fournie, acclimatation gravitationnelle incluse, navette de retour 24h/24.

3. **Pompéi (79 ap. J.-C.) — Empire romain** (3 100 TempoCoins, 3 à 4 jours)
   Activités : visite du Forum et du temple de Jupiter, bain aux Thermes du Forum, marché au macellum, atelier de fresque dans une domus patricienne.
   Sécurité : départ garanti avant le 24 août, protocole d'évacuation automatique, tenue romaine fournie.

Pour les réservations, dirige les voyageurs vers le formulaire de réservation sur le site ou vers Cal.com pour une consultation.
Garde tes réponses concises (2-4 phrases max), sauf si on te demande des détails.
N'invente pas d'autres destinations ou services non mentionnés.`

const FALLBACK_RULES = [
  { keywords: ['bonjour', 'salut', 'hello', 'bonsoir'], response: "Bienvenue chez TimeTravel Agency ! Je suis CHRONOS, votre guide temporel. Quelle époque vous appelle ?" },
  { keywords: ['egypte', 'pyramide', 'kheops', 'pharaon', 'nil', 'antiquite'], response: "**Égypte ancienne (-2560)** — aux origines de la civilisation ! 4 200 TempoCoins pour 3 à 5 jours. Assistez à la construction de la grande pyramide de Khéops." },
  { keywords: ['mars', '2070', 'colonie', 'martien', 'rover', 'dome', 'futur'], response: "**Mars 2070** — notre destination la plus audacieuse ! 12 500 TempoCoins pour 5 à 7 jours. Colonie Ares-7, rover, coucher de soleil bleu sur la planète rouge." },
  { keywords: ['pompei', 'romain', 'vesuve', 'thermes', 'forum', 'domus'], response: "**Pompéi (79 ap. J.-C.)** — la cité romaine à son apogée ! 3 100 TempoCoins pour 3 à 4 jours. Départ garanti avant l'éruption du Vésuve." },
  { keywords: ['prix', 'tarif', 'combien', 'cout', 'tempocoins'], response: "**Nos tarifs :**\n• Pompéi 79 : 3 100 TempoCoins\n• Égypte -2560 : 4 200 TempoCoins\n• Mars 2070 : 12 500 TempoCoins" },
  { keywords: ['securite', 'danger', 'safe', 'risque'], response: "Votre sécurité est notre priorité : équipement adapté à chaque époque, bouton retour d'urgence, assurance paradoxe temporel incluse dans chaque voyage." },
  { keywords: ['reserver', 'reservation', 'booking'], response: "Utilisez notre formulaire de réservation sur le site ou cliquez sur **Réserver une consultation** ci-dessous pour un accompagnement personnalisé." },
  { keywords: ['merci', 'super', 'parfait', 'excellent'], response: "Avec plaisir ! Le temps est notre spécialité. Y a-t-il autre chose que je puisse faire pour vous ?" },
]

function fallbackResponse(message) {
  const normalized = message.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  for (const rule of FALLBACK_RULES) {
    if (rule.keywords.some((kw) => normalized.includes(kw))) {
      return rule.response
    }
  }
  return "Je n'ai pas bien saisi votre demande. Vous pouvez me poser des questions sur nos destinations (Paris 1889, Le Crétacé, Florence 1504), les prix, la sécurité ou les réservations."
}

exports.chat = async (req, res) => {
  const { message, history = [] } = req.body
  if (!message) return res.status(400).json({ success: false, message: 'Message required' })

  const apiKey = process.env.MISTRAL_API_KEY
  if (!apiKey || apiKey === 'your_mistral_api_key_here') {
    return res.json({ success: true, response: fallbackResponse(message) })
  }

  const recentHistory = history.slice(-6).map(({ role, content }) => ({
    role: role === 'bot' ? 'assistant' : role,
    content,
  }))

  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...recentHistory,
    { role: 'user', content: message },
  ]

  const delay = (ms) => new Promise((r) => setTimeout(r, ms))

  async function callMistral(retries = 2) {
    const mistralRes = await fetch(MISTRAL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model: MODEL, messages, max_tokens: 300, temperature: 0.7 }),
    })

    if (mistralRes.status === 429 && retries > 0) {
      const retryAfter = parseInt(mistralRes.headers.get('retry-after') || '2', 10)
      await delay(retryAfter * 1000)
      return callMistral(retries - 1)
    }

    return mistralRes
  }

  try {
    const mistralRes = await callMistral()

    if (!mistralRes.ok) {
      console.error('Mistral API error:', mistralRes.status)
      return res.json({ success: true, response: fallbackResponse(message) })
    }

    const data = await mistralRes.json()
    const response = data.choices?.[0]?.message?.content || fallbackResponse(message)
    res.json({ success: true, response })
  } catch (err) {
    console.error('Mistral fetch error:', err.message)
    res.json({ success: true, response: fallbackResponse(message) })
  }
}
