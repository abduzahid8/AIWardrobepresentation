'use client';

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-brand/60 to-fuchsia-900 overflow-hidden">
      <video 
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="/hero-bg.mp4"
      />
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          className="font-display font-bold text-4xl sm:text-7xl mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI + Creators =<br />The New Fashion OS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
          className="text-xl sm:text-2xl mb-10 max-w-2xl mx-auto font-light"
        >
          The only OS blending Generative AI, Computer Vision, and Social Graphs for your style revolution.
        </motion.p>
        <motion.a
          href="#demo"
          className="inline-block px-8 py-4 rounded-full font-semibold bg-brand hover:bg-fuchsia-400 transition text-lg shadow-lg"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
        >Try the Live Demo</motion.a>
      </div>
    </section>
  )
}