'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function PitchDeck() {
  const [isOpen, setIsOpen] = useState(false)

  const slides = [
    { title: 'Problem', content: 'Fashion inspiration dies in galleries. 0 connection to your wardrobe.' },
    { title: 'Solution', content: 'AI + Vision = Turn any creator look into your outfit in seconds.' },
    { title: 'Market', content: '$47. 2B fashion industry. 1. 3B creator posts/day. Winner takes all.' },
    { title: 'Traction', content: '15K beta users. 12. 4% conversion.  $45K MRR in 6 months.' },
    { title: 'Team', content: '3 founders. 30+ years combined. 3x hackathon winners.' },
    { title: 'Ask', content: 'Seed round: $2M to scale to 2M users and $10M ARR.' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-950 to-black px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-fuchsia-400 mb-4">📊 Investor Pitch Deck</h2>
          <p className="text-gray-400 mb-8">
            6-slide summary of our opportunity, traction, and ask. 
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 font-bold transition shadow-lg"
          >
            Open Pitch Deck →
          </button>
        </motion.div>

        {/* Modal */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="w-full max-w-3xl h-[600px] bg-black rounded-xl border-2 border-fuchsia-600 overflow-hidden flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-2 gap-4 p-8">
                  {slides.map((slide, i) => (
                    <motion.div
                      key={slide.title}
                      className="p-6 rounded-lg bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 border border-fuchsia-600/50 hover:border-fuchsia-600/80 transition cursor-pointer"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <h3 className="text-lg font-bold text-fuchsia-400 mb-3">Slide {i + 1}</h3>
                      <h4 className="font-bold text-fuchsia-300 mb-2">{slide.title}</h4>
                      <p className="text-gray-400 text-sm">{slide.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-fuchsia-600/30 flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded bg-zinc-800 hover:bg-zinc-700 transition"
                >
                  Close
                </button>
                <a
                  href="/pitch-deck. pdf"
                  download
                  className="flex-1 px-4 py-2 rounded bg-fuchsia-600 hover:bg-fuchsia-500 font-bold transition text-center"
                >
                  Download PDF →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
