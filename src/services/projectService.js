import axios from 'axios';

const API_URL = 'http://localhost:3000/api/projects'; // Adjust according to your backend API

export const fetchProjects = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects', error);
        throw error;
    }
};

export const addProject = async (projectData) => {
    try {
        const response = await axios.post(API_URL, projectData);
        return response.data;
    } catch (error) {
        console.error('Error adding project', error);
        throw error;
    }
};