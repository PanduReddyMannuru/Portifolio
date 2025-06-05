import React from 'react';
import '../styles/AboutMe.css';
import { SiPython, SiC, SiCplusplus, SiJavascript, SiFirebase, SiMongodb, SiMysql, SiSqlite } from 'react-icons/si';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: 'Python', icon: <SiPython color="#60a5fa" /> },
      { name: 'C', icon: <SiC color="#60a5fa" /> },
      { name: 'C++', icon: <SiCplusplus color="#60a5fa" /> },
      { name: 'JavaScript', icon: <SiJavascript color="#facc15" /> }
    ]
  },
  {
    title: "Technologies",
    skills: [
      { name: 'ReactJS', icon: <FaReact color="#60a5fa" /> },
      { name: 'NodeJS', icon: <FaNodeJs color="#60a5fa" /> },
      { name: 'Firebase', icon: <SiFirebase color="#fbbf24" /> },
      { name: 'Machine Learning', icon: <GiArtificialIntelligence color="#60a5fa" /> }
    ]
  },
  {
    title: "Database Skills",
    skills: [
      { name: 'MongoDB', icon: <SiMongodb color="#34d399" /> },
      { name: 'MySQL', icon: <SiMysql color="#60a5fa" /> },
      { name: 'SQLite', icon: <SiSqlite color="#60a5fa" /> },
      { name: 'Git', icon: <FaGitAlt color="#f87171" /> }
    ]
  }
];

const AboutMe = () => (
    <div className="aboutme-container">
        <h2 className="aboutme-title">About Me</h2>
        <div className="aboutme-description">
            <p>
                <span className="aboutme-greeting">Hello! I'm <span className="aboutme-name">Pandu Reddy</span> 👋</span>
            </p>
            <p>
                <span className="aboutme-highlight">Final year B.Tech student</span> at <span className="aboutme-school">VVIT, Guntur</span>, specializing in <span className="aboutme-highlight">Computer Science &amp; Engineering</span> with a focus on <span className="aboutme-highlight">AI &amp; ML</span>.<br />
                Previously completed my Diploma at <span className="aboutme-school">GPT Vempalli, Kadapa</span> (<span className="aboutme-highlight">77.97%</span>).
            </p>
            <p>
                <span className="aboutme-highlight">Interests:</span> Machine Learning Engineering, Data Analysis, Full Stack Development.<br />
                <span className="aboutme-enthusiast">Always curious, always learning 🚀</span>
            </p>
            <p>
                <span className="aboutme-highlight">Skills:</span> JavaScript, React, Node.js, MongoDB.<br />
                I love building <span className="aboutme-highlight">scalable</span>, <span className="aboutme-highlight">user-friendly</span> apps and collaborating to deliver impactful solutions.
            </p>
            <div className="aboutme-hobbies">
                <span className="aboutme-highlight">Hobbies:</span>
                <ul>
                    <li>Exploring new tech trends &amp; AI advancements</li>
                    <li>Chess &amp; coding challenges</li>
                    <li>Video games &amp; music</li>
                    <li>Spending time with friends</li>
                </ul>
            </div>
            <div className="aboutme-skills">
                <span className="aboutme-highlight">Technical Skills:</span>
                {skillGroups.map(group => (
                  <div key={group.title} className="aboutme-skill-group">
                    <strong>{group.title}</strong>
                    <ul className="aboutme-skill-list">
                      {group.skills.map(skill => (
                        <li key={skill.name} className="aboutme-skill-item">
                          <span className="aboutme-skill-icon">{skill.icon}</span>
                          <span className="aboutme-skill-name">{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
        </div>
    </div>
);

export default AboutMe;
