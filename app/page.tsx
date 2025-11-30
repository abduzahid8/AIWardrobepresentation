import Hero from '../src/components/Hero';
import ProblemSolution from '../src/components/ProblemSolution';
import DemoAIStylist from '../src/components/DemoAIStylist';
import Team from '../src/components/Team';
import Roadmap from '../src/components/Roadmap';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <DemoAIStylist />
      <Roadmap />
      <Team />
      <Footer />
    </>
  );
}