'use client';

import Hero from '../src/components/Hero';
import ProblemSolution from '../src/components/ProblemSolution';
import AITechStack from '../src/components/AITechStack';
import VectorSearchDemo from '../src/components/VectorSearchDemo';
import CreatorModeDemo from '../src/components/CreatorModeDemo';
import Implementation from '../src/components/Implementation';
import Team from '../src/components/Team';
import Footer from '../src/components/Footer';
import MetricsDashboard from '../src/components/MetricsDashboard';
import VectorSpaceViz from '../src/components/VectorSpaceViz';
import TechArchitecture from '../src/components/TechArchitecture';
import BusinessModel from '../src/components/BusinessModel';
import ProductWalkthrough from '../src/components/ProductWalkthrough';
import PitchDeck from '../src/components/PitchDeck';
import CTA from '../src/components/CTA';

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Hero />
      <ProblemSolution />
      <AITechStack />
      <VectorSearchDemo />
      <CreatorModeDemo />
      <Implementation />
      <MetricsDashboard />
      <VectorSpaceViz />
      <TechArchitecture />
      <BusinessModel />
      <ProductWalkthrough />
      <PitchDeck />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
