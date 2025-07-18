import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home-flex'>
      <div className='home-container'>
        <div className="home-content-with-image">
          <div className="home-content">
            <h3>Hello, i'm Pandu Reddy</h3>
            <p>
              a passionate developer focused on creating modern and responsive web experiences. I specialize in React, JavaScript, and UI/UX design, turning ideas into elegant digital products. Feel free to explore my projects and connect with me — let’s build something great together!
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/pandureddymannuru" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/pandureddymannuru" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <a href="/23BQ5A4208.pdf" download="PanduReddy_Resume.pdf" className='Resume-button'>View Resume</a>
          </div>
          <img src="/PanduReddy.jpg" alt="Pandu Reddy" className="profile-image" />
        </div>
      </div>
    </div>
  )
}

export default Home;