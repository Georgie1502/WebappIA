import { useState, useRef, useEffect } from 'react'
import ChatBubble from '../molecules/ChatBubble'
import ChatInput from '../molecules/ChatInput'
import { createMessage, welcomeMessage, type ChatMessage } from '../../utils/chatbot'

interface Props {
  isOpen: boolean
  onToggle: () => void
}

async function fetchBotResponse(message: string, history: ChatMessage[]): Promise<string> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message,
      history: history.map(({ role, text }) => ({ role, content: text })),
    }),
  })
  if (!res.ok) throw new Error('API error')
  const data = await res.json()
  return data.response
}

export default function Chatbot({ isOpen, onToggle }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage])
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  async function handleSend(text: string) {
    const userMsg = createMessage('user', text)
    setMessages((prev) => {
      const updated = [...prev, userMsg]
      return updated
    })
    setTyping(true)

    try {
      const currentHistory = messages.filter((m) => m.role !== 'bot' || m.text !== welcomeMessage.text)
      const responseText = await fetchBotResponse(text, currentHistory)
      setMessages((prev) => [...prev, createMessage('bot', responseText)])
    } catch {
      setMessages((prev) => [
        ...prev,
        createMessage('bot', "Connexion temporelle instable. Veuillez réessayer dans un instant."),
      ])
    } finally {
      setTyping(false)
    }
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold text-space flex items-center justify-center shadow-[0_0_24px_rgba(212,168,67,0.5)] hover:bg-gold-light hover:shadow-[0_0_32px_rgba(212,168,67,0.7)] transition-all duration-300 active:scale-95"
        aria-label="Ouvrir l'agent IA CHRONOS"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-1.5rem)] flex flex-col chat-panel glass border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-space-card">
            <div className="w-8 h-8 rounded-full border border-gold/60 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gold" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="font-grotesk text-xs font-semibold text-on-surface tracking-wider uppercase">CHRONOS</p>
              <p className="font-grotesk text-[10px] text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                Agent IA · En ligne
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 max-h-[380px] min-h-[200px]">
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
            ))}
            {typing && (
              <div className="flex gap-2 justify-start">
                <div className="w-7 h-7 rounded-full border border-gold/50 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-gold" stroke="currentColor" strokeWidth={1.5}>
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="bg-space-light border border-white/10 px-4 py-3 rounded-r-lg rounded-bl-lg flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <ChatInput onSend={handleSend} disabled={typing} />

          {/* Cal.com booking link */}
          <div className="px-4 py-2 border-t border-white/8 text-center">
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-grotesk text-[10px] text-on-muted hover:text-gold transition-colors tracking-wider uppercase"
            >
              Réserver une consultation →
            </a>
          </div>
        </div>
      )}
    </>
  )
}
