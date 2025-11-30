import Hero3D from '../components/Hero3D'
import MetricsDashboard from '../components/MetricsDashboard'
import VectorSpaceViz from '../components/VectorSpaceViz'
import TechArchitecture from '../components/TechArchitecture'
import BusinessModel from '../components/BusinessModel'
import ProductWalkthrough from '../components/ProductWalkthrough'
import PitchDeck from '../components/PitchDeck'
import CTA from '../components/CTA'


export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Hero3D />
      <MetricsDashboard />
      <VectorSpaceViz />
      <TechArchitecture />
      <BusinessModel />
      <ProductWalkthrough />
      <PitchDeck />
      <CTA />
    </main>
  )
}

