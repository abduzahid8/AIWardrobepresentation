'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-t from-fuchsia-950 to-black px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-black mb-6 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Ready to Dress Like a Creator?
        </motion.h2>
        <p className="text-xl text-gray-400 mb-8">
          Join 500+ users on the waitlist. Early access opens this week.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-700 focus:border-fuchsia-500 outline-none w-full"
          />
          <button className="px-8 py-3 rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 font-bold transition-all shadow-lg shadow-fuchsia-900/20 whitespace-nowrap">
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
}