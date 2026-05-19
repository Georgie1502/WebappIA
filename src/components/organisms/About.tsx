const stats = [
  { value: '12 000+', label: 'Voyageurs satisfaits' },
  { value: '3', label: 'Destinations certifiées' },
  { value: '0', label: 'Paradoxes critiques' },
  { value: '2847', label: 'Année de fondation' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="font-grotesk text-xs tracking-[0.3em] text-gold uppercase mb-4">
            À propos de l'agence
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            L'agence qui réécrit<br />l'histoire du voyage
          </h2>
          <p className="font-grotesk text-on-surface/70 leading-relaxed mb-4">
            Fondée en 2847 (et rétroactivement en 2024 pour des raisons légales paradoxales), TimeTravel Agency a révolutionné le concept même du voyage. Nous ne vendons pas des destinations — nous offrons des <span className="text-gold">instants irréversibles de l'humanité</span>.
          </p>
          <p className="font-grotesk text-on-surface/70 leading-relaxed">
            Notre technologie brevetée <strong className="text-on-surface">TempoShift™</strong> garantit des voyages sûrs, discrets et authentiques. Chaque détail est orchestré pour que vous viviez l'époque comme si vous en étiez.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass p-6 border border-white/8 hover:border-gold/30 transition-colors">
              <p className="font-playfair text-3xl font-bold text-gold mb-2">{s.value}</p>
              <p className="font-grotesk text-xs text-on-muted uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
