import team from '../data/team.json'
import { motion } from 'framer-motion'

export default function Team() {
  return (
    <section className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-black py-20 text-white" id="team">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-brand">Meet Our A-List Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div 
              className="bg-black/70 rounded-xl p-5 flex flex-col items-center shadow-xl hover:scale-105 transition"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1*i }}
              key={member.name}
            >
              <img src={member.avatar} alt={member.name} className="w-20 h-20 rounded-full border-4 border-brand mb-3" />
              <h3 className="font-bold text-xl">{member.name}</h3>
              <p className="text-fuchsia-200">{member.role}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {member.skills.map((s: string) => (
                  <span key={s} className="bg-indigo-900 px-3 py-1 rounded-lg text-xs">{s}</span>
                ))}
              </div>
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" className="text-brand hover:text-fuchsia-200 mt-2 underline">
                  LinkedIn
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}