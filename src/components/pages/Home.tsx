import { useState } from 'react'
import Hero from '../organisms/Hero'
import About from '../organisms/About'
import Destinations from '../organisms/Destinations'
import BookingSection from '../organisms/BookingSection'

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      <Hero onOpenChat={() => {
        // Signal parent PageLayout to open chatbot
        const btn = document.querySelector<HTMLButtonElement>('[aria-label="Ouvrir l\'agent IA CHRONOS"]')
        btn?.click()
      }} />
      <About />
      <Destinations />
      <BookingSection />
    </>
  )
}
