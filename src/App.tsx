import { useMemo } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { navLinks } from './data/profile'
import { useReveal } from './hooks/useReveal'
import { useScrollProgress } from './hooks/useScrollProgress'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useTheme } from './hooks/useTheme'
import './App.css'

function App() {
  const { theme, toggle } = useTheme()
  const ids = useMemo(() => navLinks.map((l) => l.id), [])
  const active = useScrollSpy(ids)
  const progress = useScrollProgress()
  useReveal()

  return (
    <div className="app">
      <div className="grain" aria-hidden="true" />
      <div
        className="progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <Nav active={active} theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
