import { useNavigate } from 'react-router-dom'
import Badge from '../atoms/Badge'
import { type Destination } from '../../data/destinations'

interface Props {
  destination: Destination
}

export default function DestinationCard({ destination }: Props) {
  const navigate = useNavigate()
  const { id, name, year, badge, description, price, currency, imageUrl, cardClass } = destination

  return (
    <div
      onClick={() => navigate(`/destination/${id}`)}
      className="group relative overflow-hidden cursor-pointer border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/* Era gradient overlay */}
      <div className={`absolute inset-0 ${cardClass}`} />
      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-space/40" />

      {/* Scan line on hover */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="scan-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col h-full min-h-[400px]">
        <div className="mb-auto">
          <Badge era={id}>{badge}</Badge>
          <h3 className="font-playfair text-4xl font-bold text-white mt-4 mb-1">
            {name}
          </h3>
          <p className="font-grotesk text-xs tracking-[0.3em] text-on-muted uppercase mb-4">
            {year}
          </p>
          <p className="font-grotesk text-sm text-on-surface/80 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="font-grotesk text-xs text-on-muted uppercase tracking-wider mb-1">À partir de</p>
            <p className="font-playfair text-2xl font-bold text-gold">
              {price.toLocaleString('fr-FR')}
            </p>
            <p className="font-grotesk text-xs text-on-muted">{currency}</p>
          </div>
          <span className="font-grotesk text-xs tracking-widest text-on-muted uppercase group-hover:text-gold transition-colors">
            Découvrir →
          </span>
        </div>
      </div>
    </div>
  )
}
