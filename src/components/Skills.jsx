import React from 'react';

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
    <section>
        <h2>Skills</h2>
        <ul>
            {skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
            ))}
        </ul>
    </section>
);

export default Skills;