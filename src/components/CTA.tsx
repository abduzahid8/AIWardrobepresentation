'use client'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-t from-fuchsia-950 to-black px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-black mb-6 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Revolutionize Fashion?
        </motion. h2>

        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          We're building the Shazam for Style—the OS where AI meets creator culture. Join us in winning AI500 and raising our seed round. 
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 font-bold text-lg transition shadow-xl">
            Join Beta Waitlist
          </button>
          <button className="px-8 py-4 rounded-lg border-2 border-fuchsia-600 hover:bg-fuchsia-600/20 font-bold text-lg transition">
            Download Whitepaper
          </button>
        </motion.div>

        <motion.div
          className="p-8 rounded-xl bg-gradient-to-r from-fuchsia-600/10 to-blue-600/10 border-2 border-fuchsia-600/50"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0. 6 }}
        >
          <p className="text-gray-400 mb-4">
            <span className="font-bold text-fuchsia-300">AI500 Stage 1 Submission</span><br />
            Problem & Solution Demo | Nov 30, 2024 | GMT+5
          </p>
          <div className="flex gap-4 justify-center text-sm">
            <a href="https://github.com" className="text-fuchsia-400 hover:text-fuchsia-300">
              GitHub Repo →
            </a>
            <a href="#" className="text-fuchsia-400 hover:text-fuchsia-300">
              Live Demo →
            </a>
            <a href="#" className="text-fuchsia-400 hover:text-fuchsia-300">
              Twitter/X →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}