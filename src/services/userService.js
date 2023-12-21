// src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/user/profile'; // Your API endpoint for fetching user profile

export const fetchUserProfile = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const updateUserProfile = async (userData) => {
    const response = await axios.put('http://localhost:8000/api/user/profile', userData);
    return response.data;
};