'use client'
import { motion } from 'framer-motion'

export default function Roadmap() {
  const roadmap = [
    { label: 'Now: Prototype', period: 'Nov 2024', status: '✅ LIVE', desc: 'Core AI stylist + demo' },
    { label: 'AI Fine-Tuning', period: 'Dec 2024', status: '🔄 IN PROGRESS', desc: 'Creator modes + personalization' },
    { label: 'Creator Onboarding', period: 'Jan 2025', status: '📋 PLANNED', desc: 'First 10 influencers' },
    { label: 'MVP Launch', period: 'Feb 2025', status: '🎯 TARGET', desc: 'Open beta to 1K users' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-950 to-black px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-fuchsia-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          📅 Roadmap & Current Stage
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-fuchsia-600 to-blue-600 transform -translate-x-1/2" />

          <div className="space-y-12">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.label}
                className={`flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`p-6 rounded-xl ${i % 2 === 0 ? 'bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20' : 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20'} border border-fuchsia-600/30`}>
                    <h3 className="text-xl font-bold text-fuchsia-300 mb-1">{item.label}</h3>
                    <p className="text-gray-400 text-sm mb-2">{item.period}</p>
                    <p className="text-gray-300">{item. desc}</p>
                    <span className="inline-block mt-3 px-3 py-1 bg-fuchsia-600/40 rounded-lg text-xs font-bold text-fuchsia-300">
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-fuchsia-600 border-4 border-black" />

                {/* Spacer */}
                <div className="hidden md:flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}