import { useState } from 'react'
import Navbar from '../organisms/Navbar'
import Chatbot from '../organisms/Chatbot'
import Footer from '../organisms/Footer'

interface Props {
  children: React.ReactNode
}

export default function PageLayout({ children }: Props) {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-space text-on-surface">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Chatbot isOpen={chatOpen} onToggle={() => setChatOpen((o) => !o)} />
    </div>
  )
}
