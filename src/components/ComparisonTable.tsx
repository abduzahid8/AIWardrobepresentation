'use client'
import { motion } from 'framer-motion'

export default function ComparisonTable() {
  const comparison = [
    {
      feature: 'Connection to Content',
      pinterest: '"Pictures for inspiration." They die in a gallery.',
      ours: 'Actionable.  See outfit → AI matches to YOUR wardrobe → Shop gaps.',
    },
    {
      feature: 'Role of AI',
      pinterest: 'Basic filtering.  Shows similar photos.',
      ours: 'Personal Buyer. Understands style, adapts to budget & wardrobe.',
    },
    {
      feature: 'Barrier to Entry',
      pinterest: 'High.  Manual search, manual curation.',
      ours: 'Zero. Upload wardrobe → Follow creator → Get daily outfits.',
    },
    {
      feature: 'Creator Integration',
      pinterest: 'None. Content is static gallery.',
      ours: 'Live.  Video-LLaVA decomposes outfits in real-time.',
    },
    {
      feature: 'Personalization',
      pinterest: 'Generic trends.',
      ours: 'Weather-aware, history-aware, budget-aware, style-aware.',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-950 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why We Beat Pinterest, Alta, & Acloset
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-fuchsia-600/50">
                <th className="text-left py-4 px-6 font-bold text-fuchsia-300">Feature</th>
                <th className="text-left py-4 px-6 font-bold text-red-300">Pinterest / Basic Apps</th>
                <th className="text-left py-4 px-6 font-bold text-green-300">AI Fashion OS (Ours)</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  className="border-b border-zinc-800 hover:bg-zinc-900/50 transition"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <td className="py-4 px-6 font-bold text-fuchsia-400">{row.feature}</td>
                  <td className="py-4 px-6 text-gray-400">{row.pinterest}</td>
                  <td className="py-4 px-6 text-green-400 font-semibold">{row.ours}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
