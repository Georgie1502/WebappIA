import { useParams, useNavigate } from 'react-router-dom'
import { getDestination } from '../../data/destinations'
import Badge from '../atoms/Badge'
import Button from '../atoms/Button'

export default function DestinationDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dest = getDestination(id ?? '')

  if (!dest) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <p className="font-playfair text-3xl text-gold mb-4">Destination introuvable</p>
        <Button onClick={() => navigate('/')}>Retour à l'accueil</Button>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero banner */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src={dest.imageUrl} alt={dest.name} className="w-full h-full object-cover" />
        <div className={`absolute inset-0 ${dest.cardClass}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-space via-space/60 to-transparent" />
        <div className="absolute bottom-10 left-6 md:left-16">
          <Badge era={dest.id}>{dest.badge}</Badge>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mt-3">
            {dest.name} <span className="text-gold">{dest.year}</span>
          </h1>
          <p className="font-grotesk text-on-muted mt-2 text-sm tracking-wider">{dest.tagline}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main description */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-playfair text-2xl text-on-surface mb-4">L'expérience</h2>
              <p className="font-grotesk text-on-surface/80 leading-relaxed">{dest.longDescription}</p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-on-surface mb-4">Activités incluses</h2>
              <ul className="space-y-2">
                {dest.activities.map((a) => (
                  <li key={a} className="font-grotesk text-sm text-on-surface/80 flex gap-3 items-start">
                    <span className="text-gold mt-0.5">✦</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-on-surface mb-4">Ce qu'il faut savoir</h2>
              <div className="glass border border-white/10 p-5 space-y-3">
                <p className="font-grotesk text-xs text-on-muted uppercase tracking-wider">Durée recommandée</p>
                <p className="font-grotesk text-sm text-on-surface">{dest.duration}</p>
                <p className="font-grotesk text-xs text-on-muted uppercase tracking-wider mt-4">Sécurité</p>
                <p className="font-grotesk text-sm text-on-surface">{dest.safetyNote}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price card */}
            <div className="glass border border-gold/30 p-6">
              <p className="font-grotesk text-xs text-on-muted uppercase tracking-wider mb-2">Prix par personne</p>
              <p className="font-playfair text-4xl font-bold text-gold">
                {dest.price.toLocaleString('fr-FR')}
              </p>
              <p className="font-grotesk text-xs text-on-muted mb-6">{dest.currency}</p>
              <Button
                variant="gold"
                className="w-full"
                onClick={() => {
                  navigate('/')
                  setTimeout(() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }), 100)
                }}
              >
                Réserver ce voyage
              </Button>
            </div>

            {/* What to pack */}
            <div className="glass border border-white/10 p-6">
              <p className="font-grotesk text-xs text-on-muted uppercase tracking-wider mb-4">À emporter</p>
              <ul className="space-y-2">
                {dest.packing.map((item) => (
                  <li key={item} className="font-grotesk text-xs text-on-surface/80 flex gap-2">
                    <span className="text-gold">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="outlined" className="w-full" onClick={() => navigate('/')}>
              ← Toutes les destinations
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
