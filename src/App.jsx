import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Projects from './components/Projects.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react"
import Contact from './components/Contact.jsx'
import HomePage from './components/HomePage.jsx'
import AboutMe from './components/AboutMe.jsx'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="main-container">
      <Header onNavClick={setActiveSection} />
      {activeSection === 'home' && <HomePage />} 
      {activeSection === 'about' && <AboutMe />}
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
