'use client'
import { motion } from 'framer-motion'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function MetricsDashboard() {
  const userGrowth = [
    { month: 'Month 1', users: 100, engagement: 45 },
    { month: 'Month 2', users: 450, engagement: 62 },
    { month: 'Month 3', users: 1200, engagement: 78 },
    { month: 'Month 4', users: 3500, engagement: 85 },
    { month: 'Month 5', users: 8200, engagement: 91 },
    { month: 'Month 6', users: 15000, engagement: 94 },
  ]

  const revenue = [
    { quarter: 'Q1', affiliate: 12000, subscription: 8000 },
    { quarter: 'Q2', affiliate: 35000, subscription: 22000 },
    { quarter: 'Q3', affiliate: 78000, subscription: 58000 },
    { quarter: 'Q4', affiliate: 145000, subscription: 115000 },
  ]

  const marketShare = [
    { name: 'Pinterest', value: 35 },
    { name: 'Instagram Shopping', value: 28 },
    { name: 'Acloset/Alta', value: 20 },
    { name: 'AI Fashion OS', value: 17 },
  ]

  const COLORS = ['#ef4444', '#f97316', '#eab308', '#bc42f5']

  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-950 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          📊 Market Opportunity & Traction
        </motion.h2>

        <p className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
          Real projections from beta testing.  Scaling to $10M ARR in 24 months.
        </p>

        {/* KPIs */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Addressable Market', value: '$47.2B', icon: '💰' },
            { label: 'Beta Users (6mo)', value: '15K+', icon: '👥' },
            { label: 'Avg.  Session Duration', value: '24 min', icon: '⏱️' },
            { label: 'Conversion Rate', value: '12.4%', icon: '🎯' },
          ].map((kpi, i) => (
            <motion.div
              key={kpi.label}
              className="p-6 rounded-xl bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 border border-fuchsia-600/50 hover:border-fuchsia-600/80 transition"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-2">{kpi.icon}</div>
              <div className="text-3xl font-black text-fuchsia-400 mb-1">{kpi.value}</div>
              <p className="text-gray-400 text-sm">{kpi.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* User Growth */}
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-br from-fuchsia-600/10 to-purple-600/10 border border-fuchsia-600/30"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-fuchsia-300 mb-4">User Growth & Engagement</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #bc42f5' }} />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#bc42f5" strokeWidth={3} dot={{ r: 5 }} />
                <Line type="monotone" dataKey="engagement" stroke="#06b6d4" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Revenue */}
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-600/30"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-blue-300 mb-4">Revenue Projections (Dual Model)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="quarter" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #06b6d4' }} />
                <Legend />
                <Bar dataKey="affiliate" fill="#bc42f5" />
                <Bar dataKey="subscription" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Market Position */}
        <motion.div
          className="mt-8 p-8 rounded-xl bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-green-600/30"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-green-300 mb-4">Market Position (Current)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={marketShare}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {marketShare.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-center text-gray-400 mt-4 text-sm">
            🚀 Projected to reach 40% market share in 18 months
          </p>
        </motion.div>
      </div>
    </section>
  )
}
