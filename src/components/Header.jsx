import '../styles/Header.css';

const Header = ({ onNavClick }) => {
  return (
    <nav>
      <div className="nav-content">
        <ul>
          <li><button onClick={() => onNavClick('home')}>Home</button></li>
          <li><button onClick={() => onNavClick('education')}>Education</button></li>
          <li><button onClick={() => onNavClick('skills')}>Skills</button></li>
          <li><button onClick={() => onNavClick('projects')}>Projects</button></li>
        </ul>
        <a
          href="/23BQ5A4208.pdf"
          download="PanduReddy_Resume"
          className="resume-button"
        >
          Resume
        </a>
      </div>
    </nav>
  )
}

export default Header;