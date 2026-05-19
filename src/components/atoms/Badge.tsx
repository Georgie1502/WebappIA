type Era = 'egypte' | 'mars' | 'pompei'

interface BadgeProps {
  children: React.ReactNode
  era?: Era
}

const eraStyles: Record<Era, string> = {
  egypte: 'border-amber-400/60 text-amber-400',
  mars:   'border-orange-500/60 text-orange-500',
  pompei: 'border-rose-400/60 text-rose-400',
}

export default function Badge({ children, era = 'egypte' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 border text-[10px] font-grotesk font-semibold tracking-[0.2em] uppercase ${eraStyles[era]}`}
    >
      {children}
    </span>
  )
}
