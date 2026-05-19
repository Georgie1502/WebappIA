export interface ChatMessage {
  id: string
  role: 'user' | 'bot'
  text: string
  timestamp: Date
}

interface Rule {
  keywords: string[]
  response: string
}

const rules: Rule[] = [
  {
    keywords: ['bonjour', 'salut', 'hello', 'bonsoir', 'hey', 'hi', 'coucou'],
    response:
      "Bienvenue chez TimeTravel Agency ! Je suis **CHRONOS**, votre agent IA spécialisé dans le voyage temporel. Je peux vous conseiller sur nos 3 destinations, les tarifs, la sécurité ou le processus de réservation. Comment puis-je vous aider ?",
  },
  {
    keywords: ['égypte', 'egypte', 'pyramide', 'khéops', 'kheops', 'pharaon', 'nil', 'antiquité'],
    response:
      "**Égypte ancienne (-2560 av. J.-C.)** — une plongée aux origines de la civilisation ! 🏛️\n\nAssistez à la construction de la grande pyramide de Khéops, rencontrez l'architecte royal Hemiounou et naviguez sur le Nil au coucher du soleil.\n\n**Prix :** 4 200 TempoCoins\n**Durée :** 3 à 5 jours\n\nVoulez-vous réserver ou avoir plus de détails ?",
  },
  {
    keywords: ['mars', '2070', 'colonie', 'martien', 'rover', 'dôme', 'dome', 'spatiale', 'futur'],
    response:
      "**Mars 2070** — notre destination la plus audacieuse ! 🔴\n\nRejoignez la colonie Ares-7, partez en rover sur la plaine de Chryse et admirez un coucher de soleil bleu sur la planète rouge. Le futur de l'humanité, en direct.\n\n**Prix :** 12 500 TempoCoins\n**Durée :** 5 à 7 jours\n\nCette destination est réservée aux explorateurs les plus courageux.",
  },
  {
    keywords: ['pompei', 'pompéi', 'romain', 'romaine', 'vésuve', 'vesuve', 'thermes', 'forum', 'domus'],
    response:
      "**Pompéi (79 ap. J.-C.)** — la cité romaine à son apogée ! 🏛️\n\nDéambulez dans les rues pavées de basalte, baignez-vous aux Thermes du Forum et marchandinez au macellum — le Vésuve dormant à l'horizon.\n\n**Prix :** 3 100 TempoCoins\n**Durée :** 3 à 4 jours\n\nDépart garanti avant l'éruption — protocole d'évacuation automatique inclus.",
  },
  {
    keywords: ['prix', 'coût', 'cout', 'tarif', 'combien', 'cher', 'budget', 'tempocoin'],
    response:
      "Voici nos tarifs actuels :\n\n🏛️ **Pompéi 79** — 3 100 TempoCoins\n🏺 **Égypte -2560** — 4 200 TempoCoins\n🔴 **Mars 2070** — 12 500 TempoCoins\n\nTous nos voyages incluent :\n✓ La capsule temporelle\n✓ L'équipement et la tenue d'époque\n✓ Un guide holographique 24/7\n✓ L'assurance paradoxe temporel",
  },
  {
    keywords: ['sécurité', 'securite', 'danger', 'risque', 'safe', 'sûr', 'sur', 'protec'],
    response:
      "Votre sécurité est notre priorité absolue ! 🛡️\n\nChaque voyageur reçoit :\n✓ Équipement de protection adapté à l'époque\n✓ Traducteur universel\n✓ Bouton de retour d'urgence (retour en 0,3 secondes)\n✓ Assurance paradoxe temporel complète\n✓ Un guide expert avec +10 000h de vol temporel\n\nNous avons 12 000+ voyageurs satisfaits et **0 paradoxe temporel critique**.",
  },
  {
    keywords: ['réserver', 'reserver', 'réservation', 'reservation', 'booker', 'book', 'booking'],
    response:
      "Pour réserver votre voyage temporel :\n\n1️⃣ Choisissez votre destination\n2️⃣ Cliquez sur **\"Réserver mon voyage\"** sur la page de destination\n3️⃣ Complétez votre profil de voyageur\n4️⃣ Choisissez vos options\n5️⃣ Payez en TempoCoins\n\nVous pouvez aussi **consulter notre équipe** via le bouton de réservation en bas de page pour un voyage sur mesure !",
  },
  {
    keywords: ['emporter', 'valise', 'bagages', 'apporter', 'préparer', 'preparer', 'pack'],
    response:
      "La préparation varie selon la destination :\n\n🏺 **Égypte** : Tenue lin d'époque fournie. Protection solaire quantique incluse.\n🔴 **Mars** : Tout est fourni — combinaison pressurisée obligatoire.\n🏛️ **Pompéi** : Tenue romaine et sandales fournis. Carnet bienvenu.\n\n⚠️ Aucun objet du futur ne doit être visible dans les espaces publics.",
  },
  {
    keywords: ['durée', 'duree', 'long', 'combien de temps', 'jours', 'semaines'],
    response:
      "Nos voyages durent entre **3 et 7 jours** (votre temps subjectif).\n\nGrâce à notre technologie de décalage temporel, vous rentrez toujours **le jour même depuis votre époque** !\n\nDurées par destination :\n🏺 Égypte -2560 : 3-5 jours\n🔴 Mars 2070 : 5-7 jours\n🏛️ Pompéi 79 : 3-4 jours",
  },
  {
    keywords: ['agence', 'qui êtes', 'histoire', 'fondateur', 'timetravel', 'à propos'],
    response:
      "TimeTravel Agency a été fondée en **2847** (puis rétroactivement en 2024 pour des raisons légales paradoxales 😄).\n\nNotre mission : rendre le voyage temporel **accessible, sûr et inoubliable**.\n\n📊 **Nos chiffres :**\n• 12 000+ voyageurs satisfaits\n• 0 paradoxe temporel critique\n• 3 destinations certifiées\n• Technologie brevetée TempoShift™",
  },
  {
    keywords: ['merci', 'thanks', 'super', 'parfait', 'excellent', 'génial', 'top'],
    response:
      "Avec plaisir ! 😊 Chez TimeTravel Agency, nous sommes là pour vous — hier, aujourd'hui et demain !\n\nN'hésitez pas si vous avez d'autres questions. Bon voyage à travers le temps ! 🕰️",
  },
  {
    keywords: ['aide', 'help', 'question'],
    response:
      "Je peux vous renseigner sur :\n\n• 🗺️ Nos **3 destinations** (Égypte -2560, Mars 2070, Pompéi 79)\n• 💰 Les **tarifs** et ce qui est inclus\n• 🛡️ La **sécurité** de nos voyages\n• 🧳 Comment **se préparer**\n• 📅 La **durée** des voyages\n• 📋 Comment **réserver**\n\nQuelle information recherchez-vous ?",
  },
]

const defaultResponse =
  "Je n'ai pas bien saisi votre question. Vous pouvez me demander des infos sur nos destinations (Égypte -2560, Mars 2070, Pompéi 79), les tarifs, la sécurité ou la réservation. Tapez **\"aide\"** pour voir toutes mes options !"

export function getBotResponse(input: string): string {
  const normalized = input.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  for (const rule of rules) {
    if (rule.keywords.some((kw) => normalized.includes(kw.normalize('NFD').replace(/[̀-ͯ]/g, '')))) {
      return rule.response
    }
  }
  return defaultResponse
}

export function createMessage(role: 'user' | 'bot', text: string): ChatMessage {
  return { id: crypto.randomUUID(), role, text, timestamp: new Date() }
}

export const welcomeMessage: ChatMessage = createMessage(
  'bot',
  "Bonjour ! Je suis **CHRONOS**, l'agent IA de TimeTravel Agency. 🕰️\n\nJe peux vous conseiller sur nos destinations temporelles, les tarifs, la sécurité ou la réservation. Comment puis-je vous aider ?"
)
