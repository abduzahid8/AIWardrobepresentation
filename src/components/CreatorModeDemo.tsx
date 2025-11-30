'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CreatorModeDemo() {
  const [activeCreator, setActiveCreator] = useState(0)

  const creators = [
    {
      name: 'Cerca Trova',
      style: 'Old Money Aesthetic',
      tone: 'Elegant, minimalist, timeless.',
      outfit: '🧥 Trench + 👖 Tailored Jeans + 👞 Loafers',
      advice: '"Darling, this is about quiet luxury. Your trench coat is EVERYTHING.  Pair it with well-fitted basics and let the quality speak."',
    },
    {
      name: 'Y2K Revival',
      style: 'Gen Z Nostalgia',
      tone: 'Fun, bold, retro-modern.',
      outfit: '👖 Low-Rise Jeans + 👕 Graphic Tee + 🎒 Mini Bag',
      advice: '"Okay bestie, this look is GIVING early 2000s vibes. Mix vintage with new—thrift the jeans, rock the confidence!"',
    },
    {
      name: 'Minimalist Pro',
      style: 'Scandinavian Chic',
      tone: 'Simple, functional, sophisticated.',
      outfit: '🧥 Structured Blazer + 👖 Black Trousers + 👡 Slip-Ons',
      advice: '"Less is more.  Quality over quantity. These pieces work together because they\'re intentional and timeless."',
    },
  ]

  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-5xl mx-auto">
        <motion. h2
          className="text-4xl font-bold text-center mb-4 text-fuchsia-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          👤 Creator Mode: Digital Twin Technology
        </motion.h2>
        <p className="text-center text-gray-400 mb-12">
          Activate AI "digital twins" of your fave creators.  Get advice in THEIR voice, style, & taste.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {creators.map((creator, i) => (
            <motion.button
              key={creator.name}
              onClick={() => setActiveCreator(i)}
              className={`p-4 rounded-lg transition ${
                activeCreator === i
                  ? 'bg-fuchsia-600 border-2 border-fuchsia-400'
                  : 'bg-zinc-800 border-2 border-zinc-700 hover:border-fuchsia-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="font-bold">{creator.name}</div>
              <div className="text-xs text-gray-300">{creator.style}</div>
            </motion.button>
          ))}
        </div>

        <motion.div
          className="p-8 rounded-xl bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 border border-fuchsia-600/50"
          key={activeCreator}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-fuchsia-300">{creators[activeCreator].name}</h3>
              <p className="text-gray-400">{creators[activeCreator].style}</p>
            </div>
            <span className="text-4xl">✨</span>
          </div>

          <div className="mb-6 p-4 bg-black/50 rounded-lg border border-fuchsia-600/30">
            <p className="text-sm text-gray-400 mb-2">Tone: <span className="text-fuchsia-300 font-semibold">{creators[activeCreator].tone}</span></p>
            <p className="text-sm text-gray-400">Sample Outfit: <span className="text-fuchsia-300 font-semibold">{creators[activeCreator].outfit}</span></p>
          </div>

          <div className="mb-6 p-6 bg-gradient-to-r from-fuchsia-900/40 to-purple-900/40 rounded-lg border-l-4 border-fuchsia-500 italic text-lg">
            {creators[activeCreator].advice}
          </div>

          <div className="text-sm text-gray-400">
            <strong>Tech:</strong> LoRA fine-tuned on {creators[activeCreator].name}'s 10K+ posts.  Tone & style replicated with 94% authenticity.
          </div>
        </motion.div>
      </div>
    </section>
  )
}