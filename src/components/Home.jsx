import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <h3>Hi, i'm Pandu Reddy</h3>
      <p>a passionate developer focused on creating modern and responsive web experiences. I specialize in React, JavaScript, and UI/UX design, turning ideas into elegant digital products. Feel free to explore my projects and connect with me — let’s build something great together!</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/pandureddymannuru" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/pandureddymannuru" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <a href="" download className='Resume-button'>Resume</a>
    </div>
  )
}

export default Home;