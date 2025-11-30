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
    </main>
  )
}
