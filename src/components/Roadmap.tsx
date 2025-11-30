import { motion } from 'framer-motion'

const roadmap = [
  { label: "Prototype", period: "Nov 2024", desc: "Core AI stylist and demo" },
  { label: "AI Tuning", period: "Dec 2024", desc: "Personalization & influencer training" },
  { label: "Creator Onboarding", period: "Jan 2025", desc: "First 10 creators live" },
  { label: "Launch", period: "Feb 2025", desc: "Open beta" },
]

export default function Roadmap() {
  return (
    <section className="bg-zinc-900 text-white py-16" id="roadmap">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-400">Product Roadmap</h2>
        <ol className="relative border-l-4 border-fuchsia-500 min-h-[220px] pl-8 py-4 space-y-12">
          {roadmap.map((step, i) => (
            <motion.li
              key={step.label}
              className="mb-3 ml-4"
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.12 * i }}
            >
              <span className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-fuchsia-600 rounded-full text-xl font-semibold">{i+1}</span>
              <h3 className="text-xl font-bold">{step.label} <span className="ml-2 text-xs text-fuchsia-300">{step.period}</span></h3>
              <p className="text-zinc-200">{step.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}