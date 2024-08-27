import React, { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectSection.module.css'

function ProjectSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const projects = [
    // Array of project objects
  ];

  const filteredProjects = projects.filter(project => selectedCategory === 'All' || project.category === selectedCategory);

  return (
    <section className={styles.projectSection}>
      <h2>My Projects</h2>
      <div>
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('Bootcamp')}>Bootcamp</button>
        <button onClick={() => setSelectedCategory('Recent')}>Recent</button>
      </div>
      <div className="project-list">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;