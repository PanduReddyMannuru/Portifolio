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
            <button onClick={() => { onNavClick('about'); setMenuOpen(false); }}>About</button>
          </li>
          <li>
            <button onClick={() => { onNavClick('projects'); setMenuOpen(false); }}>Projects</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header