'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-fuchsia-600/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-fuchsia-400 mb-4">
            Ready to Revolutionize Fashion?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We're building the Shazam for Style—the OS where AI meets creator culture.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <button className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 rounded-lg font-bold transition">
              Join Our Newsletter
            </button>
            <button className="px-6 py-3 border-2 border-fuchsia-600 hover:bg-fuchsia-600/20 rounded-lg font-bold transition">
              Follow Us
            </button>
          </div>
          <div className="border-t border-zinc-800 pt-8">
            <p className="text-gray-500 text-sm">
              AI500 Stage 1 Submission | © 2024 AI Fashion OS Team
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
