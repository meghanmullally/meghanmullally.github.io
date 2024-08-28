import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.cardImage}>
        <img src={project.imgSrc} alt={project.title} />
      </div>
      <div className={styles.cardContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.githubLink && <p><a href={project.githubLink}>Github</a></p>}
        {project.liveLink && <p><a href={project.liveLink}>Deployed Link</a></p>}
      </div>
    </div>
  );
};

export default ProjectCard;