import { useEffect, RefObject } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  speed: number
  twinkleSpeed: number
  twinkleOffset: number
}

export function useStarfield(canvasRef: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let stars: Star[] = []

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    function initStars() {
      if (!canvas) return
      stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        radius: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.3 + 0.05,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      }))
    }

    let tick = 0
    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      tick += 0.016

      for (const star of stars) {
        const twinkle = Math.sin(tick * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.35 + 0.65
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 240, 200, ${star.opacity * twinkle})`
        ctx.fill()

        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [canvasRef])
}
