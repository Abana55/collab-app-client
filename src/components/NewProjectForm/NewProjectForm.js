
import React, { useState } from 'react';

const NewProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    creator: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation here before adding the project
    onAddProject(formData);
    // Clear the form after submission
    setFormData({
      title: '',
      description: '',
      creator: '',
      imageUrl: '',
    });
  };

  return (
    <div className="new-project-form">
      <button className="new-project-form__toggle">Add Project</button>
      <form className="new-project-form__form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="creator">Creator:</label>
        <input
          type="text"
          id="creator"
          name="creator"
          value={formData.creator}
          onChange={handleChange}
          required
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />

        <button type="submit" className="new-project-form__submit">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default NewProjectForm;