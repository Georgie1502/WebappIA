import { useState } from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import { destinations } from '../../data/destinations'

interface FormState {
  name: string
  email: string
  destination: string
  date: string
  travelers: string
  message: string
}

export default function BookingSection() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', destination: '', date: '', travelers: '1', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function update(key: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = 'w-full glass border border-white/10 px-4 py-3 text-sm font-grotesk text-on-surface placeholder:text-on-muted outline-none focus:border-gold/50 transition-colors bg-transparent'

  return (
    <section id="booking" className="py-28 px-6 md:px-12 bg-space-light/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-grotesk text-xs tracking-[0.3em] text-gold uppercase mb-4">Réservation</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-on-surface">
            Planifiez votre voyage
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="glass border border-gold/30 p-10 text-center">
                <p className="text-4xl mb-4">🕰️</p>
                <h3 className="font-playfair text-2xl text-gold mb-3">Demande envoyée !</h3>
                <p className="font-grotesk text-on-muted text-sm">
                  Votre agent temporel personnel vous contactera sous 24h pour confirmer votre voyage.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-grotesk text-xs text-on-muted uppercase tracking-wider mb-2 block">Nom complet</label>
                    <input required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Jean Dupont" className={inputClass} />
                  </div>
                  <div>
                    <label className="font-grotesk text-xs text-on-muted uppercase tracking-wider mb-2 block">Email</label>
                    <input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="jean@example.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="font-grotesk text-xs text-on-muted uppercase tracking-wider mb-2 block">Destination</label>
                  <select required value={form.destination} onChange={(e) => update('destination', e.target.value)} className={inputClass + ' cursor-pointer'}>
                    <option value="" className="bg-space">Choisir une destination</option>
                    {destinations.map((d) => (
                      <option key={d.id} value={d.id} className="bg-space">{d.name} {d.year}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-grotesk text-xs text-on-muted uppercase tracking-wider mb-2 block">Date de départ</label>
                    <input required type="date" value={form.date} onChange={(e) => update('date', e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className="font-grotesk text-xs text-on-muted uppercase tracking-wider mb-2 block">Voyageurs</label>
                    <select value={form.travelers} onChange={(e) => update('travelers', e.target.value)} className={inputClass + ' cursor-pointer'}>
                      {[1,2,3,4,5].map((n) => <option key={n} value={n} className="bg-space">{n} personne{n > 1 ? 's' : ''}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-grotesk text-xs text-on-muted uppercase tracking-wider mb-2 block">Message (optionnel)</label>
                  <textarea value={form.message} onChange={(e) => update('message', e.target.value)} rows={3} placeholder="Précisez vos attentes..." className={inputClass + ' resize-none'} />
                </div>

                <Button type="submit" variant="gold" className="w-full mt-2">
                  Réserver mon voyage →
                </Button>
              </form>
            )}
          </div>

          {/* Info cards */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {[
              { icon: '🛡️', title: 'Sécurité garantie', desc: 'Combinaison nano-protectrice + bouton retour d\'urgence inclus' },
              { icon: '🤖', title: 'Guide holographique', desc: 'Votre assistant IA vous accompagne 24/7 pendant tout le séjour' },
              { icon: '⚡', title: 'Retour d\'urgence', desc: 'Téléportation de retour en 0,3 seconde en cas de besoin' },
            ].map((item) => (
              <div key={item.title} className="glass border border-white/8 p-5 hover:border-gold/20 transition-colors">
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-grotesk text-sm font-semibold text-on-surface mt-2 mb-1">{item.title}</h4>
                <p className="font-grotesk text-xs text-on-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
