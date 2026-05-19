import { type ChatMessage } from '../../utils/chatbot'

interface Props {
  message: ChatMessage
}

function formatText(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>')
}

export default function ChatBubble({ message }: Props) {
  const isBot = message.role === 'bot'

  return (
    <div className={`flex gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="w-7 h-7 rounded-full border border-gold/50 flex items-center justify-center shrink-0 mt-1">
          <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-gold" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" strokeLinecap="round" />
          </svg>
        </div>
      )}
      <div
        className={`max-w-[85%] px-4 py-3 text-xs font-grotesk leading-relaxed ${
          isBot
            ? 'bg-space-light border border-white/10 text-on-surface rounded-r-lg rounded-bl-lg'
            : 'bg-gold text-space font-semibold rounded-l-lg rounded-br-lg'
        }`}
        dangerouslySetInnerHTML={{ __html: formatText(message.text) }}
      />
    </div>
  )
}
