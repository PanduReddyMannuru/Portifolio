import React from 'react'
import '../styles/Header.css'

const Header = ({ onNavClick }) => {
  return (
    <nav>
      <div className="nav-content">
        <ul>
          <li>
            <button onClick={() => onNavClick('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => onNavClick('about')}>About</button>
          </li>
          <li>
            <button onClick={() => onNavClick('projects')}>Projects</button>
          </li>
          <li>
            <button onClick={() => onNavClick('contact')}>Connect</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;