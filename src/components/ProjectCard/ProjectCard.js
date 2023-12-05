import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <Link to={`/projects/${project.id}`} className="project-card__link">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="project-card__image"
        />
        <h3 className="project-card__title">{project.title}</h3>
      </Link>
      <p className="project-card__description">{project.description}</p>
      <p className="project-card__creator">Creator: {project.creator}</p>
    </div>
  );
};

export default ProjectCard;