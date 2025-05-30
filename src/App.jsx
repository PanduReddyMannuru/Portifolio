import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react"
import About from './components/About.jsx'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <>
      <Header onNavClick={setActiveSection} />
      {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
      <footer>
        <p>© 2025 PanduReddyMannuru.</p>
      </footer>
      <SpeedInsights />
    </>
  )
}

export default App
