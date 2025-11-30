import Hero from '../components/Hero'
import ProblemSolution from '../components/ProblemSolution'
import DemoAIStylist from '../components/DemoAIStylist'
import Team from '../components/Team'
import Roadmap from '../components/Roadmap'
import Footer from '../components/Footer'

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
  )
}