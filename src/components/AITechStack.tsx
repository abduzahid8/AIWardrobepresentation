'use client'
import { motion } from 'framer-motion'

export default function AITechStack() {
  const techItems = [
    { name: 'Llama 3', icon: '🦙', color: 'from-blue-600 to-blue-400', desc: 'RAG-powered context-aware advice' },
    { name: 'Video-LLaVA', icon: '👁️', color: 'from-purple-600 to-purple-400', desc: 'Vision AI outfit decomposition' },
    { name: 'Vector Search', icon: '🧬', color: 'from-pink-600 to-pink-400', desc: 'Similarity matching engine' },
    { name: 'LoRA Tuning', icon: '⚡', color: 'from-yellow-600 to-yellow-400', desc: 'Creator digital twins' },
    { name: 'OpenWeatherMap', icon: '🌤️', color: 'from-cyan-600 to-cyan-400', desc: 'Real-time weather context' },
    { name: 'Social Graphs', icon: '🕸️', color: 'from-green-600 to-green-400', desc: 'Influencer network analysis' },
  ]

  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-fuchsia-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Unfair Technical Advantage
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          The only fashion platform combining Generative AI, Computer Vision, and Social Graphs at scale.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {techItems.map((tech, i) => (
            <motion.div
              key={tech.name}
              className={`p-6 rounded-xl bg-gradient-to-br ${tech.color} opacity-20 hover:opacity-40 border border-white/20 transition transform hover:scale-105 cursor-pointer`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
              <p className="text-gray-200 text-sm">{tech. desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Data Flow Visualization */}
        <motion.div
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-fuchsia-600/10 to-blue-600/10 border border-fuchsia-600/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4 text-fuchsia-300">🔄 Data Pipeline</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex-1">
              <span className="inline-block px-4 py-2 bg-fuchsia-600/30 rounded-lg">User Wardrobe</span>
              <p className="text-xs text-gray-400 mt-1">Vectorized items</p>
            </div>
            <span className="text-2xl text-fuchsia-400">→</span>
            <div className="flex-1">
              <span className="inline-block px-4 py-2 bg-purple-600/30 rounded-lg">Vision AI</span>
              <p className="text-xs text-gray-400 mt-1">Decomposition</p>
            </div>
            <span className="text-2xl text-fuchsia-400">→</span>
            <div className="flex-1">
              <span className="inline-block px-4 py-2 bg-blue-600/30 rounded-lg">Vector DB</span>
              <p className="text-xs text-gray-400 mt-1">Similarity search</p>
            </div>
            <span className="text-2xl text-fuchsia-400">→</span>
            <div className="flex-1">
              <span className="inline-block px-4 py-2 bg-green-600/30 rounded-lg">AI Advice</span>
              <p className="text-xs text-gray-400 mt-1">Smart recommendations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}