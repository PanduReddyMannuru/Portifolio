import React, { useState } from 'react'
import '../styles/Header.css'

const Header = ({ onNavClick }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <div className="nav-content">
        <div className="nav-spacer" />
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={menuOpen ? 'open' : ''}>
          <li>
            <button onClick={() => { onNavClick('home'); setMenuOpen(false); }}>Home</button>
          </li>
          <li>
            <button onClick={() => { onNavClick('education'); setMenuOpen(false); }}>Education</button>
          </li>
          <li>
            <button onClick={() => { onNavClick('skills'); setMenuOpen(false); }}>Skills</button>
          </li>
          <li>
            <button onClick={() => { onNavClick('projects'); setMenuOpen(false); }}>Projects</button>
          </li>
          <li className="mobile-resume">
            <a
              href="/23BQ5A4208.pdf"
              download="PanduReddy_Resume"
              className="resume-button"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
        <a
          href="/23BQ5A4208.pdf"
          download="PanduReddy_Resume"
          className="resume-button desktop-resume"
        >
          Resume
        </a>
      </div>
    </nav>
  )
}

export default Header