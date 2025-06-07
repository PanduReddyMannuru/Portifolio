import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Connect.css';

const Connect = () => {
    return (
        <section id="connect" className="connect-section">
            <h2 className="connect-heading">Get in Touch</h2>
            <p className="connect-text">
                Interested in working together or have any questions? Feel free to reach out!
            </p>
            <div className="connect-links">
            <a href="mailto:your.email@example.com" className="connect-link email" aria-label="Email">
                <span className="icon-rect">
                    <FaEnvelope />
                </span>
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="connect-link linkedin" aria-label="LinkedIn">
                <span className="icon-rect">
                    <FaLinkedin />
                </span>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="connect-link github" aria-label="GitHub">
                <span className="icon-rect">
                    <FaGithub />
                </span>
            </a>

            </div>
        </section>
    );
};

export default Connect;
