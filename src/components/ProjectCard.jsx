import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.github} target="_blank" rel="noopener noreferrer">View Code</a>
      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
    </div>
  );
}

export default ProjectCard;