'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight * 0.6

    let animationId: number
    let rotation = 0

    const drawWardrobe = () => {
      ctx.clearRect(0, 0, canvas.width, canvas. height)

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, '#1a0033')
      gradient.addColorStop(0.5, '#2d1b4e')
      gradient.addColorStop(1, '#1a0033')
      ctx. fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.save()
      ctx.translate(canvas.width / 2, canvas. height / 2)
      ctx.rotate(rotation)

      // Draw rotating wardrobe items (simplified 2D)
      const items = [
        { emoji: '🧥', angle: 0 },
        { emoji: '👖', angle: Math.PI / 2 },
        { emoji: '👕', angle: Math.PI },
        { emoji: '👞', angle: (3 * Math.PI) / 2 },
      ]

      items.forEach((item) => {
        ctx.save()
        ctx.rotate(item.angle)
        ctx.font = 'bold 48px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(item. emoji, 0, -150)
        ctx.restore()
      })

      // Center circle
      ctx.fillStyle = '#bc42f5'
      ctx.beginPath()
      ctx.arc(0, 0, 50, 0, Math.PI * 2)
      ctx.fill()

      ctx. font = 'bold 24px Arial'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx. textBaseline = 'middle'
      ctx.fillText('AI', 0, 0)

      ctx.restore()

      rotation += 0.01
      animationId = requestAnimationFrame(drawWardrobe)
    }

    drawWardrobe()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.6
    }

    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-950 to-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-3 bg-fuchsia-600/30 border-2 border-fuchsia-500 rounded-full text-sm font-bold text-fuchsia-300">
            🚀 Shazam for Style - The Fashion OS
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          AI + Creators<br />= $10B Market
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          The platform that turns <span className="font-bold text-fuchsia-400">any creator outfit</span> into <span className="font-bold text-blue-400">YOUR perfect look</span> using what you already own.
        </motion.p>

        <motion. div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 font-bold text-lg transition transform hover:scale-105 shadow-2xl">
            Explore Platform →
          </button>
          <button className="px-8 py-4 rounded-lg border-2 border-fuchsia-600 hover:bg-fuchsia-600/20 font-bold text-lg transition">
            View Pitch Deck
          </button>
        </motion.div>

        <motion.div
          className="mt-12 flex gap-8 justify-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div>
            <div className="text-4xl font-black text-fuchsia-400">$47. 2B</div>
            <p className="text-gray-400">Global Fashion Market</p>
          </div>
          <div>
            <div className="text-4xl font-black text-purple-400">1.3B</div>
            <p className="text-gray-400">Creator Posts/Day</p>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-400">98%</div>
            <p className="text-gray-400">Match Accuracy</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}