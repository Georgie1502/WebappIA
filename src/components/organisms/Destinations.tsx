import { destinations } from '../../data/destinations'
import DestinationCard from '../molecules/DestinationCard'

export default function Destinations() {
  return (
    <section id="destinations" className="py-28 px-6 md:px-12 bg-space-light/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-grotesk text-xs tracking-[0.3em] text-gold uppercase mb-4">
            Nos destinations temporelles
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-on-surface">
            Choisissez votre époque
          </h2>
          <p className="font-grotesk text-on-muted mt-4 max-w-lg mx-auto">
            Trois ères sélectionnées parmi les moments les plus fascinants de l'humanité.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </div>
    </section>
  )
}
