export type EraId = 'egypte' | 'mars' | 'pompei'

export interface Destination {
  id: EraId
  name: string
  year: string
  badge: string
  tagline: string
  description: string
  longDescription: string
  price: number
  currency: string
  imageUrl: string
  accentColor: string
  cardClass: string
  activities: string[]
  duration: string
  safetyNote: string
  packing: string[]
  highlights: string[]
}

export const destinations: Destination[] = [
  {
    id: 'egypte',
    name: 'Égypte ancienne',
    year: '-2560 av. J.-C.',
    badge: 'ANTIQUITÉ',
    tagline: "Quand les dieux bâtissaient le monde",
    description:
      "Assistez en direct à la construction de la grande pyramide de Khéops, rencontrez les architectes royaux et traversez le Nil à bord d'une barque de cèdre.",
    longDescription:
      "Gizeh, -2560 av. J.-C. Les ouvriers spécialisés hissent les blocs de calcaire sous un soleil de plomb. L'architecte royal Hemiounou supervise chaque détail. Vous logerez dans le village des bâtisseurs, assisterez aux rituels du pharaon Khéops et naviguerez sur le Nil au coucher du soleil. Un voyage aux origines de la civilisation.",
    price: 4200,
    currency: 'TempoCoins',
    imageUrl: 'https://res.cloudinary.com/dfinj1cig/image/upload/v1779203247/egipto_yubst7.png',
    accentColor: '#c9a227',
    cardClass: 'card-egypte',
    activities: [
      "Observation du chantier de la grande pyramide avec un ingénieur royal",
      "Traversée du Nil en barque de cèdre au coucher du soleil",
      "Visite des ateliers de sculpture et hiéroglyphes",
      "Dîner dans le village des ouvriers spécialisés",
    ],
    duration: '3 à 5 jours',
    safetyNote:
      "Environnement désertique sécurisé. Tenue d'époque et protection solaire avancée fournies. Traducteur hiéroglyphique inclus.",
    packing: [
      "Tenue lin d'époque fournie par l'agence",
      'Protection solaire quantique intégrée',
      'Aucun objet métallique du futur visible',
    ],
    highlights: ["Grande pyramide de Khéops", "Le Nil antique", "Village des bâtisseurs"],
  },
  {
    id: 'mars',
    name: 'Mars 2070',
    year: '2070',
    badge: 'FUTUR PROCHE',
    tagline: "L'humanité aux confins du possible",
    description:
      "Rejoignez la première colonie humaine permanente sur Mars : dômes pressurisés, sorties en rover, agriculture sous serre et coucher de soleil martien inoubliable.",
    longDescription:
      "2070. La colonie Ares-7 abrite 3 000 habitants sous ses dômes transparents. Vous participerez à une sortie en rover sur la surface rouge, visiterez les serres hydroponiques qui nourrissent la colonie et assisterez à un lancement orbital depuis la base SpaceX. Le futur de l'humanité, en direct.",
    price: 12500,
    currency: 'TempoCoins',
    imageUrl: 'https://res.cloudinary.com/dfinj1cig/image/upload/v1779203246/marte_pay8qt.png',
    accentColor: '#e05c2f',
    cardClass: 'card-mars',
    activities: [
      "Sortie en rover autonome sur la plaine de Chryse",
      "Visite des dômes agricoles sous pression",
      "Observation du coucher de soleil martien (bleu au crépuscule)",
      "Briefing avec un ingénieur de la colonie Ares-7",
    ],
    duration: '5 à 7 jours',
    safetyNote:
      "Combinaison pressurisée de dernière génération. Acclimatation gravitationnelle incluse. Navette de retour disponible 24h/24.",
    packing: [
      "Combinaison fournie — aucun apport extérieur autorisé",
      "Médicaments anti-gravité inclus",
    ],
    highlights: ["Plaine de Chryse", "Dôme Ares-7", "Coucher de soleil martien"],
  },
  {
    id: 'pompei',
    name: 'Pompéi',
    year: '79 ap. J.-C.',
    badge: 'EMPIRE ROMAIN',
    tagline: "La cité éternelle avant le silence",
    description:
      "Déambulez dans les rues pavées de Pompéi à son apogée : thermes, forum, domus ornées de fresques et marché animé — le Vésuve dormant à l'horizon.",
    longDescription:
      "Pompéi, été 79 ap. J.-C. La ville prospère : 25 000 habitants, des rues pavées de basalte, des thermes luxueux, des domus couvertes de fresques mythologiques. Vous séjournerez dans une maison patricienne, vous baignerez aux Thermes du Forum et marchanderez au macellum. Une cité à son apogée, figée dans l'ambre du temps.",
    price: 3100,
    currency: 'TempoCoins',
    imageUrl: 'https://res.cloudinary.com/dfinj1cig/image/upload/v1779203247/Pomp%C3%A9i_ycipai.png',
    accentColor: '#c0392b',
    cardClass: 'card-pompei',
    activities: [
      "Visite du Forum et du temple de Jupiter",
      "Bain aux Thermes du Forum avec un guide local",
      "Marché au macellum — épices, fruits, céramiques",
      "Atelier de fresque dans une domus patricienne",
    ],
    duration: '3 à 4 jours',
    safetyNote:
      "Départ garanti avant le 24 août — protocole d'évacuation automatique intégré. Tenue romaine fournie. Aucun risque sismique dans notre fenêtre temporelle certifiée.",
    packing: [
      "Tenue romaine fournie",
      "Sandales d'époque incluses",
      "Aucun objet du futur visible dans les espaces publics",
    ],
    highlights: ["Le Forum de Pompéi", "Thermes du Forum", "Le Vésuve à l'horizon"],
  },
]

export function getDestination(id: string): Destination | undefined {
  return destinations.find((d) => d.id === id)
}
