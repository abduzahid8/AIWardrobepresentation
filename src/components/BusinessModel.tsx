'use client'
import { motion } from 'framer-motion'

export default function TechArchitecture() {
  const pipeline = [
    { step: 1, name: 'User Input', desc: 'Upload wardrobe video', icon: '📹', time: '0ms' },
    { step: 2, name: 'Vision AI', desc: 'Detect & extract items', icon: '👁️', time: '200ms' },
    { step: 3, name: 'Vectorization', desc: 'Create embeddings', icon: '🧬', time: '50ms' },
    { step: 4, name: 'Vector DB', desc: 'Store in Qdrant', icon: '💾', time: '10ms' },
    { step: 5, name: 'Creator Parse', desc: 'Monitor social feeds', icon: '🎥', time: 'real-time' },
    { step: 6, name: 'Similarity Search', desc: 'Find matches <100ms', icon: '🔍', time: '85ms' },
    { step: 7, name: 'RAG + LLM', desc: 'Generate advice', icon: '🧠', time: '1500ms' },
    { step: 8, name: 'Output', desc: 'Outfit recommendation', icon: '✨', time: '0ms' },
  ]

  const tech = [
    { category: 'Frontend', items: ['Next.js 14', 'React 18', 'TailwindCSS', 'Framer Motion'] },
    { category: 'Backend', items: ['FastAPI', 'Python 3.11', 'Celery', 'Redis'] },
    { category: 'AI/ML', items: ['Llama 3', 'Video-LLaVA', 'YOLO v8', 'Sentence Transformers'] },
    { category: 'Database', items: ['Qdrant (Vector)', 'PostgreSQL', 'MongoDB', 'S3'] },
    { category: 'Infrastructure', items: ['AWS EC2', 'Docker', 'K8s', 'GitHub Actions'] },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-950 to-black px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-fuchsia-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          🏗️ Technical Architecture
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Production-grade stack.  Sub-100ms latency. Handles 1M requests/day.
        </p>

        {/* Data Pipeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-fuchsia-300 mb-8">Complete Data Pipeline</h3>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {pipeline.map((item, i) => (
              <motion. div
                key={item.step}
                className="p-4 rounded-lg bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 border border-fuchsia-600/40 hover:border-fuchsia-600/80 transition"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-fuchsia-300 text-sm">{item.name}</h4>
                <p className="text-gray-400 text-xs mb-2">{item.desc}</p>
                <span className="inline-block px-2 py-1 bg-fuchsia-600/40 rounded text-xs text-fuchsia-200">
                  {item.time}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Flow visualization */}
          <motion.div
            className="p-6 rounded-xl bg-black border border-fuchsia-600/30 overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 min-w-max">
              {pipeline.slice(0, 4).map((item, i) => (
                <motion.div key={item.step} className="flex items-center gap-2">
                  <div className="px-4 py-2 rounded-lg bg-fuchsia-600/20 border border-fuchsia-600/50 whitespace-nowrap font-semibold text-sm">
                    {item.name}
                  </div>
                  {i < 3 && <span className="text-2xl text-fuchsia-600">→</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-2xl font-bold text-fuchsia-300 mb-8">Enterprise Tech Stack</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {tech.map((category, i) => (
              <motion.div
                key={category.category}
                className="p-6 rounded-xl bg-gradient-to-br from-fuchsia-600/10 to-blue-600/10 border border-fuchsia-600/30"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="font-bold text-fuchsia-300 mb-4">{category.category}</h4>
                <ul className="space-y-2">
                  {category.items. map((item) => (
                    <li key={item} className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-fuchsia-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}