import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react"
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="main-container">
      <Header onNavClick={setActiveSection} />
      {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'contact' && <Contact />}
      <footer>
        <p>© 2025 PanduReddyMannuru.</p>
      </footer>
      <SpeedInsights />
    </div>
  )
}

export default App
