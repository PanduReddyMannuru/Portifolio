import './App.css'
import Education from './components/Education.jsx'
import Header from './components/Header'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'

const App = () => {
  return (
    <>
      <Header />
    <section id="home">
      <Home />
    </section>
    <section id="education">
      <Education />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="projects">
      <Projects />
    </section>
      <footer>
        <p>© 2023 PanduReddyMannuru. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App  
