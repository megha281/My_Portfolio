import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Building from './components/Building'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useActiveSection } from './hooks/useActiveSection'
import { nav } from './data/portfolio'

const sectionIds = nav.map((n) => n.id)

export default function App() {
  const active = useActiveSection(sectionIds)

  return (
    <div className="relative bg-void min-h-screen">
      <CustomCursor />
      <ScrollProgress />
      <Navbar active={active} />

      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Building />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
