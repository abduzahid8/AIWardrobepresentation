'use client'
import { motion } from 'framer-motion'

export default function ProblemSolution() {
  const problemPoints = [
    { emoji: '📸', title: 'Inspiration Dies', desc: 'Users screenshot 100s of outfits but never wear them.' },
    { emoji: '❓', title: 'No Application', desc: '"I love this look but how do I make it with MY clothes?"' },
    { emoji: '🛒', title: 'Manual Shopping', desc: 'Disconnected, cluttered, and time-consuming.' },
    { emoji: '👥', title: 'Creator Gap', desc: 'Creator content has ZERO connection to your wardrobe.' },
  ]

  const solutionPoints = [
    { emoji: '🧠', title: 'Context-Aware AI', desc: 'RAG-powered stylist that KNOWS your wardrobe, history, weather, and vibe.' },
    { emoji: '👁️', title: 'Vision Decomposition', desc: 'Video-LLaVA breaks any outfit into components in milliseconds.' },
    { emoji: '🔍', title: 'Vector Matching', desc: 'Instant similarity search: find your version of ANY creator look.' },
    { emoji: '💡', title: 'Creator Mode', desc: 'Activate LoRA-fine-tuned "digital twins" of your fave influencers.' },
  ]

  return (
    <section id="problem" className="py-20 bg-gradient-to-b from-black to-zinc-950 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Problem vs. Our Solution
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-red-400">❌ The Problem</h3>
            <div className="space-y-4">
              {problemPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  className="p-4 rounded-lg bg-red-600/10 border border-red-600/30 hover:border-red-600/60 transition"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-3xl mb-2">{point.emoji}</div>
                  <h4 className="font-bold text-red-300">{point.title}</h4>
                  <p className="text-gray-400 text-sm">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-green-400">✅ Our Solution</h3>
            <div className="space-y-4">
              {solutionPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  className="p-4 rounded-lg bg-green-600/10 border border-green-600/30 hover:border-green-600/60 transition"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1}}
                >
                  <div className="text-3xl mb-2">{point. emoji}</div>
                  <h4 className="font-bold text-green-300">{point.title}</h4>
                  <p className="text-gray-400 text-sm">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
