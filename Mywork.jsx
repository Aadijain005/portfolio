import React from "react";
import './MyWork.css';

const projects = [
    {
        title: 'Domposer',
        description: 'Domposer is a website builder with a user-friendly UI, enabling quick HTML and CSS arrangements, project uploads/downloads, and PWA support.',
        links: {
            website: 'https://domposer.com', 
        },
    },
    {
        title: 'Bay.js',
        description: 'Bay.js is a lightweight library for web-components. No build step needed. Available as an NPM package, with strict CSP compliance.',
        links: {
            website: 'https://bay.js',
            github: 'https://github.com/bay-js',
            npm: 'https://www.npmjs.com/package/bay.js',
        },
    },
    {
        title: 'Cookiemunch',
        description: 'Cookiemunch is a customizable cookie plugin for user cookie selection, built with vanilla JS and SCSS, available via NPM.',
        links: {
            website: 'https://cookiemunch.com',
            github: 'https://github.com/cookiemunch',
            npm: 'https://www.npmjs.com/package/cookiemunch',
        },
    },
];

const ProjectCard = ({ project }) => {
    const { title, description, links } = project;

    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
                {links.website && (
                    <a href={links.website} target="_blank" rel="noopener noreferrer">Website</a>
                )}
                {links.github && (
                    <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                )}
                {links.npm && (
                    <a href={links.npm} target="_blank" rel="noopener noreferrer">NPM</a>
                )}
            </div>
        </div>
    );
};

const MyWork = () => {
    return (
        <section id="my-work" className="my-work-section">
            <h2>My Work</h2>
            <p>A collection of projects I've worked on.</p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default MyWork;