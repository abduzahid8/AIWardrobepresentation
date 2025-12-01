'use client';

import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';


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
}
