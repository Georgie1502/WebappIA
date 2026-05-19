interface ButtonProps {
  children: React.ReactNode
  variant?: 'gold' | 'outlined' | 'ghost'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'gold',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-grotesk font-semibold tracking-wider text-sm uppercase transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    gold: 'px-8 py-4 bg-gold text-space hover:bg-gold-light hover:shadow-[0_0_20px_rgba(212,168,67,0.5)] active:scale-95',
    outlined:
      'px-8 py-4 border border-gold/60 text-gold hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_16px_rgba(212,168,67,0.3)] active:scale-95',
    ghost:
      'px-4 py-2 text-on-muted hover:text-gold hover:bg-white/5 rounded',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
