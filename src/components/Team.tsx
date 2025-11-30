'use client'
import { motion } from 'framer-motion'
import team from '@/data/team.json'

export default function Team() {
  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-fuchsia-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          👥 Our Elite Team
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Hackers, researchers, and designers obsessed with solving the fashion problem.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="group p-6 rounded-xl bg-gradient-to-br from-fuchsia-600/10 to-purple-600/10 border border-fuchsia-600/30 hover:border-fuchsia-600/60 transition"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-20 h-20 rounded-full border-4 border-fuchsia-600 mb-4 group-hover:scale-110 transition"
              />
              <h3 className="text-xl font-bold text-fuchsia-300">{member.name}</h3>
              <p className="text-gray-400 mb-3">{member.role}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {member.skills. map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-fuchsia-600/30 rounded text-xs text-fuchsia-200">
                    {skill}
                  </span>
                ))}
              </div>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-2 bg-fuchsia-600 hover:bg-fuchsia-500 rounded-lg text-sm font-semibold transition"
                >
                  LinkedIn →
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Why This Team */}
        <motion.div
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-fuchsia-600/10 to-blue-600/10 border border-fuchsia-600/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">🏆 Why We Can Win</h3>
          <ul className="space-y-2 text-gray-300">
            <li>✅ Combined 15+ years in AI/ML, full-stack, and product design. </li>
            <li>✅ Past: Built computer vision classifier at [Company], 2M+ views on ML project.</li>
            <li>✅ Hackathon veterans: 3x winners in AI/tech categories.</li>
            <li>✅ Fashion insider knowledge + tech depth = unique combo.</li>
          </ul>
        </motion. div>
      </div>
    </section>
  )
}