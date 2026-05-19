import { useRef } from 'react'
import Button from '../atoms/Button'
import { useStarfield } from '../../hooks/useStarfield'

interface Props {
  onOpenChat: () => void
}

export default function Hero({ onOpenChat }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useStarfield(canvasRef)

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Starfield */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-purple/10 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">

        {/* Portal */}
        <div className="portal-ring mb-10 animate-float">
          <div className="flex flex-col items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 text-gold/70" stroke="currentColor" strokeWidth={1}>
              <rect x="7" y="2" width="10" height="20" rx="2"/>
              <ellipse cx="12" cy="12" rx="3" ry="5"/>
              <line x1="12" y1="2" x2="12" y2="7"/>
              <line x1="12" y1="17" x2="12" y2="22"/>
            </svg>
            <p className="font-grotesk text-[9px] tracking-[0.3em] text-on-muted uppercase">
              Temporal Node Alpha
            </p>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gold leading-[1.1] mb-6 animate-fade-in">
          TIMETRAVEL<br />AGENCY
        </h1>

        {/* Subtitle */}
        <p className="font-grotesk text-base md:text-lg text-on-surface/80 leading-relaxed mb-10 max-w-lg animate-[fadeIn_0.8s_ease-out_0.3s_both]">
          L'ultime luxe n'est plus l'espace, mais le temps. Évadez-vous vers les ères qui ont façonné l'histoire ou les futurs qui restent à écrire.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-[fadeIn_0.8s_ease-out_0.6s_both]">
          <Button variant="gold" onClick={() => scrollTo('destinations')}>
            Découvrir nos destinations →
          </Button>
          <Button variant="outlined" onClick={onOpenChat}>
            ✦ Consulter l'agent IA
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-[fadeIn_0.8s_ease-out_1s_both]">
          <p className="font-grotesk text-[9px] tracking-[0.3em] text-on-muted uppercase">Native Descent</p>
          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
