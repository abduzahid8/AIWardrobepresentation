'use client';

import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';

export default function PitchDeck() {
  const slides = [
    { title: "The Problem", desc: "Why current styling apps fail" },
    { title: "The Solution", desc: "Generative AI + Influencer Data" },
    { title: "Market Size", desc: "$2.5T Global Fashion Market" },
    { title: "Business Model", desc: "Affiliate + Premium Sub" }
  ];

  return (
    <section className="py-20 bg-zinc-950 px-4" id="pitch">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Investor Deck</h2>
          <p className="text-gray-400">Our roadmap to revolutionizing fashion tech.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {slides.map((slide, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-fuchsia-500/50 transition-colors group"
            >
              <div className="h-40 bg-zinc-950 rounded-lg mb-4 flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
                <FileText className="text-zinc-700 group-hover:text-fuchsia-500 transition-colors" size={48} />
              </div>
              <h3 className="font-bold text-lg mb-1">{slide.title}</h3>
              <p className="text-sm text-gray-500">{slide.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center flex justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition">
            <Eye size={20} /> View Full Deck
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition">
            <Download size={20} /> Download PDF
          </button>
        </div>
      </div>
    </section>
  );
}