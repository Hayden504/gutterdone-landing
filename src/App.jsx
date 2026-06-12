import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import ProblemSolution from './components/ProblemSolution.jsx'
import Features from './components/Features.jsx'
import StraightTalk from './components/StraightTalk.jsx'
import SignupForm from './components/SignupForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <StraightTalk />
        <SignupForm />
      </main>
      <Footer />
    </>
  )
}
