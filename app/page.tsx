import Hero from '../src/components/Hero';
import ProblemSolution from '../src/components/ProblemSolution';
import DemoAIStylist from '../src/components/DemoAIStylist';
import Team from '../src/components/Team';
import Roadmap from '../src/components/Roadmap';
import Footer from '../src/components/Footer';
import AITechStack from '../src/components/AITechStack';
import VectorSearchDemo from '../src/components/VectorSearchDemo';
import CreatorModeDemo from '../src/components/CreatorModeDemo';
import Implementation from '../src/components/Implementation';
import Hero3D from '../src/components/Hero3D'
import MetricsDashboard from '../src/components/MetricsDashboard'
import VectorSpaceViz from '../src/components/VectorSpaceViz'
import TechArchitecture from '../src/components/TechArchitecture'
import BusinessModel from '../src/components/BusinessModel'
import ProductWalkthrough from '../src/components/ProductWalkthrough'
import PitchDeck from '../src/components/PitchDeck'
import CTA from '../src/components/CTA'


export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Hero />
      <ProblemSolution />
      <AITechStack />
      <AITechStack />
      <VectorSearchDemo />
      <CreatorModeDemo />
      <Implementation />
      <Team />
      <Footer />
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
