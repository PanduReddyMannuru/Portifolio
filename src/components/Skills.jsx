import React from 'react';
import '../styles/Skills.css';
const skills = [
    'JavaScript',
    'React',
    'HTML5',
    'CSS3',
    'Node.js',
    'Git',
    'Redux',
    'TypeScript'
];

const Skills = () => (
    <section className="skills-container">
        <h2>Skills</h2>
        <ul>
            {skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
            ))}
        </ul>
    </section>
);

export default Skills;