import React, { useState, useEffect } from 'react';
import ProjectWall from '../../components/ProjectWall/ProjectWall';
import NewProjectForm from '../../components/NewProjectForm/NewProjectForm';
import { fetchProjects, addProject } from '../../services/projectService';
import './home.scss';

const Home = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const fetchedProjects = await fetchProjects();
                setProjects(fetchedProjects);
            } catch (error) {
                console.error('Failed to fetch projects', error);
            }
        };

        loadProjects();
    }, []);

    const handleAddProject = async (newProject) => {
        try {
            const savedProject = await addProject(newProject);
            setProjects((prevProjects) => [...prevProjects, savedProject]);
        } catch (error) {
            console.error('Failed to add project', error);
        }
    };

    return (
        <div className='home'>
            <NewProjectForm onAddProject={handleAddProject} />
            <ProjectWall projects={projects} />
        </div>
    );
};

export default Home;