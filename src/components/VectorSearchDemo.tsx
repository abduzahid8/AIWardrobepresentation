'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function VectorSearchDemo() {
  const [selectedItem, setSelectedItem] = useState(0)

  const wardrobe = [
    { name: 'Beige Trench Coat', emoji: '🧥', vector: [0.85, 0.42, 0.91] },
    { name: 'Wide Jeans', emoji: '👖', vector: [0.22, 0.78, 0.55] },
    { name: 'White Shirt', emoji: '👕', vector: [0.91, 0.88, 0.15] },
    { name: 'Black Loafers', emoji: '👞', vector: [0.15, 0.25, 0.92] },
  ]

  const targetLook = { name: 'Cerca Trova Old Money', emoji: '✨', vector: [0.80, 0.45, 0.88] }

  // Simulate similarity score
  const calculateSimilarity = (v1: number[], v2: number[]) => {
    return Math.round(
      (1 - Math.abs(v1[0] - v2[0]) - Math.abs(v1[1] - v2[1]) - Math.abs(v1[2] - v2[2])) / 3 * 100
    )
  }

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-zinc-950 to-black px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-fuchsia-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          🧬 Live Vector Search Demo
        </motion.h2>
        <p className="text-center text-gray-400 mb-12">
          See how our AI matches creator outfits to YOUR wardrobe in real-time.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Target Look */}
          <motion.div
            className="p-6 rounded-xl bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 border border-fuchsia-600/50"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-fuchsia-300">Target: {targetLook.name}</h3>
            <div className="text-6xl mb-4">{targetLook.emoji}</div>
            <p className="text-sm text-gray-400 mb-4">Vector: [{targetLook.vector. map(v => v.toFixed(2)).join(', ')}]</p>
            <div className="text-xs text-gray-500 font-mono bg-black/50 p-3 rounded">
              Embedding: Fashion Style + Formality + Seasonality
            </div>
          </motion.div>

          {/* Right: Your Wardrobe Matches */}
          <motion.div
            className="p-6 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-600/50"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-blue-300">Your Wardrobe Matches</h3>
            <div className="space-y-3">
              {wardrobe. map((item, i) => {
                const similarity = calculateSimilarity(item.vector, targetLook.vector)
                return (
                  <motion.div
                    key={item.name}
                    className={`p-3 rounded-lg cursor-pointer transition ${
                      selectedItem === i ?  'bg-fuchsia-600/40 border border-fuchsia-500' : 'bg-black/40 border border-gray-700'
                    }`}
                    onClick={() => setSelectedItem(i)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{item.emoji}</span>
                      <span className="flex-1 ml-3 font-semibold">{item.name}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        similarity > 80 ? 'bg-green-600/60 text-green-200' :
                        similarity > 60 ? 'bg-yellow-600/60 text-yellow-200' :
                        'bg-red-600/60 text-red-200'
                      }`}>
                        {similarity}%
                      </span>
                    </div>
                    {selectedItem === i && (
                      <div className="text-xs text-gray-400 mt-2 font-mono">
                        Vector: [{item.vector.map(v => v.toFixed(2)).join(', ')}]
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* AI Recommendation */}
        <motion.div
          className="mt-8 p-6 rounded-xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-600/50"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h4 className="font-bold text-green-300 mb-2">🎯 AI Stylist Recommendation:</h4>
          <p className="text-gray-200">
            "Perfect match! Your <span className="font-bold text-green-400">Beige Trench Coat (85% match)</span> paired with <span className="font-bold text-green-400">Wide Jeans (78% match)</span> recreates the Cerca Trova look. You're missing only the <span className="font-bold text-yellow-400">statement belt</span>—we found trending options on Gucci & Prada."
          </p>
          <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-semibold transition">
            Shop Trending Belts →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
