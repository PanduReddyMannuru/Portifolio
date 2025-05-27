import React from 'react';
import '../styles/Projects.css';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website to showcase my projects and skills.',
        link: 'https://yourportfolio.com',
    },
    {
        title: 'Task Manager App',
        description: 'A simple React app to manage daily tasks with CRUD operations.',
        link: 'https://github.com/yourusername/task-manager',
    },
    {
        title: 'E-commerce Store',
        description: 'A mock e-commerce store built with React and Redux.',
        link: 'https://github.com/yourusername/ecommerce-store',
    },
];

const Projects = () => (
    <section className="projects-container">
        <h2>Projects</h2>
        <ul>
            {projects.map((project, idx) => (
                <li key={idx} style={{ marginBottom: '1.5rem' }}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </li>
            ))}
        </ul>
    </section>
);

export default Projects;