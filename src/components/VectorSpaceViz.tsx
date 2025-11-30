'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function VectorSpaceViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null)

  // Mock data: wardrobe items in 2D embedding space
  const items = [
    { name: 'Beige Trench', x: 0. 8, y: 0.85, emoji: '🧥', color: '#fbbf24' },
    { name: 'Wide Jeans', x: 0.2, y: 0.6, emoji: '👖', color: '#3b82f6' },
    { name: 'White Shirt', x: 0. 9, y: 0.1, emoji: '👕', color: '#f3f4f6' },
    { name: 'Loafers', x: 0. 1, y: 0.2, emoji: '👞', color: '#8b5cf6' },
    { name: 'Leather Belt', x: 0.5, y: 0.5, emoji: '⌚', color: '#dc2626' },
  ]

  const creatorLook = { name: 'Cerca Trova Old Money', x: 0.75, y: 0.8, emoji: '✨', color: '#fbbf24' }

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth > 768 ? 600 : window.innerWidth - 40
    canvas.height = 400

    const draw = () => {
      // Background
      ctx.fillStyle = '#18181b'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Grid
      ctx.strokeStyle = '#333'
      ctx.lineWidth = 1
      for (let i = 0; i <= 10; i++) {
        ctx.beginPath()
        ctx. moveTo((i * canvas.width) / 10, 0)
        ctx.lineTo((i * canvas.width) / 10, canvas.height)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(0, (i * canvas. height) / 10)
        ctx.lineTo(canvas.width, (i * canvas.height) / 10)
        ctx. stroke()
      }

      // Draw items
      items.forEach((item, idx) => {
        const x = item.x * canvas.width
        const y = item.y * canvas.height

        // Circle
        ctx.fillStyle = selectedPoint === idx ? '#fbbf24' : item.color
        ctx.beginPath()
        ctx.arc(x, y, selectedPoint === idx ? 25 : 15, 0, Math.PI * 2)
        ctx.fill()

        // Emoji
        ctx.font = '20px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = '#000'
        ctx.fillText(item.emoji, x, y)

        // Label
        ctx.fillStyle = '#fff'
        ctx.font = 'bold 12px Arial'
        ctx.fillText(item.name, x, y + 30)
      })

      // Draw creator target
      const tx = creatorLook.x * canvas. width
      const ty = creatorLook.y * canvas.height

      ctx.strokeStyle = '#fbbf24'
      ctx. lineWidth = 3
      ctx.beginPath()
      ctx. arc(tx, ty, 20, 0, Math.PI * 2)
      ctx.stroke()

      ctx.font = '24px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(creatorLook.emoji, tx, ty)

      ctx.fillStyle = '#fbbf24'
      ctx. font = 'bold 12px Arial'
      ctx.fillText(creatorLook.name, tx, ty + 35)

      // Draw connections (similarity)
      items.forEach((item) => {
        const distance = Math.sqrt(Math.pow(item.x - creatorLook.x, 2) + Math.pow(item. y - creatorLook.y, 2))
        if (distance < 0.4) {
          ctx.strokeStyle = `rgba(188, 66, 245, ${1 - distance / 0.4})`
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(item.x * canvas.width, item.y * canvas.height)
          ctx. lineTo(tx, ty)
          ctx.stroke()
        }
      })
    }

    draw()
  }, [selectedPoint])

  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-fuchsia-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          🧬 Vector Space Matching Engine
        </motion.h2>
        <p className="text-center text-gray-400 mb-8">
          Real-time outfit matching in high-dimensional embedding space.  Each point = outfit.  Click to explore.
        </p>

        <motion.div
          className="p-6 rounded-xl bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 border border-fuchsia-600/50"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          <canvas
            ref={canvasRef}
            className="w-full rounded-lg bg-zinc-900 cursor-pointer"
            onClick={(e) => {
              const rect = canvasRef.current?.getBoundingClientRect()
              if (! rect) return
              const x = ((e.clientX - rect.left) / rect.width) * (canvasRef.current?. width || 0)
              const y = ((e.clientY - rect.top) / rect.height) * (canvasRef.current?.height || 0)

              items.forEach((item, idx) => {
                const itemX = item.x * (canvasRef.current?.width || 0)
                const itemY = item.y * (canvasRef.current?.height || 0)
                const dist = Math.sqrt(Math.pow(x - itemX, 2) + Math.pow(y - itemY, 2))
                if (dist < 20) setSelectedPoint(idx)
              })
            }}
          />
        </motion.div>

        {selectedPoint !== null && (
          <motion.div
            className="mt-6 p-6 rounded-lg bg-gradient-to-r from-fuchsia-600/20 to-blue-600/20 border border-fuchsia-600/50"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h3 className="font-bold text-fuchsia-300 mb-2">
              {items[selectedPoint].emoji} {items[selectedPoint].name}
            </h3>
            <p className="text-gray-400 text-sm">
              Similarity to target: <span className="font-bold text-green-400">87%</span>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              This item matches the creator's style.  Pair with wide jeans for perfect result.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}