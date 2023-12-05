import React, { useState } from 'react';
import ProjectWall from '../../components/ProjectWall/ProjectWall';
import NewProjectForm from '../../components/NewProjectForm/NewProjectForm';

const Home = () => {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (newProject) => {
    // You can add validation or send a request to your backend to save the new project
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  return (
    <div>
      <NewProjectForm onAddProject={handleAddProject} /> 
      <ProjectWall projects={projects} />
    </div>
  );
};

export default Home;