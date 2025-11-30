'use client';

import { motion } from 'framer-motion';

export default function ProblemSolution() {
  return (
    <section className="bg-black text-white py-24" id="problem">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        <motion.div 
          initial={{ x: -60, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }}  
          viewport={{ once: true }} 
          transition={{ delay: 0.1 }}
          className="flex-1"
        >
          <h2 className="text-3xl font-bold mb-4 text-brand">The Problem</h2>
          <ul className="text-xl space-y-4">
            <li>✨ <b>Inspiration dies in galleries.</b> Millions screenshot style they never wear.</li>
            <li>🤔 <b>“How do I wear this?”</b> Getting from creator-worn to your life is a dead end.</li>
            <li>🛒 <b>Shopping is manual, cluttered, and disconnected.</b></li>
          </ul>
        </motion.div>
        <motion.div 
          initial={{ x: 60, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }}  
          viewport={{ once: true }} 
          transition={{ delay: 0.2 }}
          className="flex-1 card p-8"
        >
          <h2 className="text-3xl font-bold mb-4 text-fuchsia-300">Our Solution</h2>
          <ul className="text-lg space-y-4">
            <li>🦾 <b>Advanced AI Stylist</b> — Knows your closet, predicts your vibe, suggests daily.</li>
            <li>👩‍🎤 <b>Influencer “creator mode”</b> — Activate advice in your favorite’s voice, AI-adapted to your wardrobe.</li>
            <li>🔎 <b>Visual outfit matching</b> — Instantly remake looks from TikTok/Reels using your real clothes.</li>
            <li>🛍 <b>Gap Analysis & Smart Shopping</b> — AI links missing pieces to buy, in your style.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}