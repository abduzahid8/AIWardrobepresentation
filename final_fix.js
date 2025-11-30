const fs = require('fs');
const path = require('path');

// --- 1. FIX app/layout.tsx (Correct CSS Path) ---
const layoutPath = path.join(__dirname, 'app/layout.tsx');
const layoutContent = `import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Wardrobe",
  description: "AI Stylist Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}`;
fs.writeFileSync(layoutPath, layoutContent);
console.log('✅ Fixed: app/layout.tsx');

// --- 2. FIX src/components/VectorSpaceViz.tsx (Fix Number Typos) ---
const vectorPath = path.join(__dirname, 'src/components/VectorSpaceViz.tsx');
const vectorContent = `'use client';

import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { motion } from 'framer-motion';

export default function VectorSpaceViz() {
  const items = [
    { name: 'Beige Trench', x: 0.8, y: 0.85, emoji: '🧥', color: '#fbbf24' },
    { name: 'Wide Jeans', x: 0.2, y: 0.6, emoji: '👖', color: '#3b82f6' },
    { name: 'White Shirt', x: 0.9, y: 0.1, emoji: '👕', color: '#f3f4f6' },
    { name: 'Loafers', x: 0.1, y: 0.2, emoji: '👞', color: '#8b5cf6' },
    { name: 'Sundress', x: 0.5, y: 0.9, emoji: '👗', color: '#ec4899' },
  ];

  return (
    <section className="py-20 bg-zinc-900/50 border-y border-zinc-800">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Live Vector Embedding Space
        </h3>
        <div className="h-[400px] w-full bg-black/40 rounded-xl border border-zinc-700 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <XAxis type="number" dataKey="x" name="Style" hide domain={[0, 1]} />
              <YAxis type="number" dataKey="y" name="Occasion" hide domain={[0, 1]} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ payload }) => {
                if (payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-zinc-800 p-2 rounded border border-zinc-600 shadow-xl">
                      <p className="text-2xl">{data.emoji}</p>
                      <p className="font-bold text-white">{data.name}</p>
                      <p className="text-xs text-gray-400">Vector: [{data.x}, {data.y}]</p>
                    </div>
                  );
                }
                return null;
              }} />
              <Scatter name="Items" data={items} fill="#8884d8">
                {items.map((entry, index) => (
                  <Cell key={'cell-' + index} fill={entry.color} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-gray-500 mt-4 text-sm">
          Real-time t-SNE visualization of your wardrobe's style clusters.
        </p>
      </div>
    </section>
  );
}`;
fs.writeFileSync(vectorPath, vectorContent);
console.log('✅ Fixed: src/components/VectorSpaceViz.tsx');

// --- 3. FIX src/components/CTA.tsx (Fix Syntax) ---
const ctaPath = path.join(__dirname, 'src/components/CTA.tsx');
const ctaContent = `'use client';

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
}`;
fs.writeFileSync(ctaPath, ctaContent);
console.log('✅ Fixed: src/components/CTA.tsx');

// --- 4. FIX src/components/PitchDeck.tsx (Fix Syntax) ---
const pitchPath = path.join(__dirname, 'src/components/PitchDeck.tsx');
const pitchContent = `'use client';

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
}`;
fs.writeFileSync(pitchPath, pitchContent);
console.log('✅ Fixed: src/components/PitchDeck.tsx');