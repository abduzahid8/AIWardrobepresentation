import { useState } from 'react'
import { motion } from 'framer-motion'

const demoWardrobe = [
  { label: "Beige Burberry Trench Coat", img: "/mock-closet/trench.jpg" },
  { label: "Wide Jeans", img: "/mock-closet/jeans.jpg" },
  { label: "White Shirt", img: "/mock-closet/whiteshirt.jpg" },
  { label: "Loafers", img: "/mock-closet/loafers.jpg" },
  { label: "Leather Belt", img: "/mock-closet/belt.jpg" },
]

const creatorLooks = [
  { name: 'Cerca Trova “Old Money”', combo: [0, 1, 2, 4] },
  { name: 'Y2K Revival', combo: [1,2] },
  { name: 'Parisian Street', combo: [0,2,3] }
]

export default function DemoAIStylist() {
  const [look, setLook] = useState(0)
  return (
    <section className="bg-zinc-950 text-white py-20" id="demo">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-brand">Mock AI Stylist — Try It Now</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 flex flex-col items-center space-y-2 w-full">
            <p className="mb-2 text-zinc-300">Pick a creator style:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {creatorLooks.map((lookOpt, i) => (
                <button key={lookOpt.name}
                  className={`px-4 py-2 rounded-lg font-semibold ${look===i ? 'bg-brand text-white' : 'bg-zinc-800 text-fuchsia-200'} transition`}
                  onClick={() => setLook(i)}
                >{lookOpt.name}</button>
              ))}
            </div>
            <motion.div 
              className="mt-8 bg-zinc-900 rounded-xl p-6 shadow-lg text-lg w-full"
              initial={{ opacity: 0.8 }} animate={{ opacity: 1 }}
              key={look}
            >
              <p>
                <span className="text-fuchsia-400 font-bold">AI Stylist:</span> 
                &nbsp;
                Here’s how to create the <span className="italic">{creatorLooks[look].name}</span> using your wardrobe!
              </p>
              <ul className="grid grid-cols-2 gap-3 mt-4">
                {creatorLooks[look].combo.map(idx => (
                  <li key={demoWardrobe[idx].label} className="flex items-center gap-2">
                    <img src={demoWardrobe[idx].img} alt={demoWardrobe[idx].label} className="w-12 h-12 rounded shadow" />
                    <span>{demoWardrobe[idx].label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-fuchsia-200 italic">
                {/* Custom message */}
                {look === 0
                  ? "You have all the pieces—unleash your Old Money style effortlessly!"
                  : "Missing an item? AI suggests trending matching pieces tailored to you!"}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}