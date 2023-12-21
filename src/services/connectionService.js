// src/services/connectionService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/connections'; // Your API endpoint

export const fetchUserConnections = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};