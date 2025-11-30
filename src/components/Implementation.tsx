'use client'
import { motion } from 'framer-motion'

export default function Implementation() {
  const steps = [
    {
      num: 1,
      title: 'Wardrobe Ingestion',
      desc: 'Users upload photos/video of their closet.  Vision AI extracts & vectorizes every item.',
      tech: 'Next. js + Python Backend + YOLO V8',
    },
    {
      num: 2,
      title: 'Creator Content Parsing',
      desc: 'Real-time monitoring of TikTok/Instagram.  Video-LLaVA decomposes every outfit.',
      tech: 'Video-LLaVA + Pinecone Vector DB',
    },
    {
      num: 3,
      title: 'AI Context Layer',
      desc: 'RAG-powered Llama 3 blends: wardrobe, wearing history, weather, creator style.',
      tech: 'Llama 3 + OpenWeatherMap + Graph DB',
    },
    {
      num: 4,
      title: 'Vector Similarity Search',
      desc: 'Instant sub-100ms matching of creator looks to user wardrobe + gap suggestions.',
      tech: 'Qdrant Vector DB + FastAPI',
    },
    {
      num: 5,
      title: 'Creator Digital Twins',
      desc: 'LoRA fine-tuning on creator posts. Users get advice in their fave influencer\'s voice.',
      tech: 'LoRA + Hugging Face Transformers',
    },
    {
      num: 6,
      title: 'Live Shopping Integration',
      desc: 'Affiliate links & real-time shoppable recommendations.  Every AI suggestion = conversion path.',
      tech: 'Next.js API + Shopify/Affiliate APIs',
    },
  ]

  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-6xl mx-auto">
        <motion. h2
          className="text-4xl font-bold text-center mb-4 text-fuchsia-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          🛠️ How We're Building It
        </motion.h2>
        <p className="text-center text-gray-400 mb-12">
          Our complete technical roadmap and tech stack. 
        </p>

        <div className="space-y-6">
          {steps. map((step, i) => (
            <motion.div
              key={step.num}
              className="p-6 rounded-xl bg-gradient-to-r from-fuchsia-600/10 to-blue-600/10 border border-fuchsia-600/30 hover:border-fuchsia-600/60 transition"
              initial={{ x: i % 2 === 0 ?  -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-fuchsia-300 mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-3">{step.desc}</p>
                  <div className="text-sm text-fuchsia-400 font-mono bg-black/50 px-3 py-1 rounded inline-block">
                    {step.tech}
                  </div>
                </div>
              </div>
            </motion. div>
          ))}
        </div>
      </div>
    </section>
  )
}