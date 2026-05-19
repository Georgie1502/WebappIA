import { useState } from 'react'
import Input from '../atoms/Input'

interface Props {
  onSend: (text: string) => void
  disabled?: boolean
}

export default function ChatInput({ onSend, disabled }: Props) {
  const [value, setValue] = useState('')

  function handleSend() {
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSend(trimmed)
    setValue('')
  }

  return (
    <div className="flex items-center gap-2 border-t border-white/10 px-4 py-3">
      <Input
        value={value}
        onChange={setValue}
        placeholder="Posez votre question..."
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        className="flex-1"
      />
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        className="w-8 h-8 flex items-center justify-center bg-gold text-space hover:bg-gold-light disabled:opacity-40 transition-colors shrink-0"
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}
