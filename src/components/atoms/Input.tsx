interface InputProps {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  onKeyDown?: (e: React.KeyboardEvent) => void
  className?: string
  type?: string
}

export default function Input({
  value,
  onChange,
  placeholder = '',
  onKeyDown,
  className = '',
  type = 'text',
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={`w-full bg-transparent text-on-surface placeholder:text-on-muted outline-none font-grotesk text-sm ${className}`}
    />
  )
}
