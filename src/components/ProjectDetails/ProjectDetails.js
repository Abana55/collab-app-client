// components/ProjectDetails.js
import React, { useState } from 'react';

const ProjectDetails = ({ project, onEditProject, onDeleteProject }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProject, setEditedProject] = useState({ ...project });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset the edited project to the original values
    setEditedProject({ ...project });
  };

  const handleSaveEdit = () => {
    // You can add validation or send a request to your backend to save the edited project
    onEditProject(editedProject);
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Pass the project ID to the onDeleteProject callback
    onDeleteProject(project.id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProject((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="project-details">
      <h2 className="project-details__title">{project.title}</h2>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="project-details__image"
      />
      {isEditing ? (
        <div>
          {/* ... (Edit form input fields) */}
        </div>
      ) : (
        <div>
          {/* ... (Display project details) */}
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;