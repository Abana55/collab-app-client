import axios from 'axios';

export const fetchConnections = async () => {
    const response = await axios.get('/api/connections');
    return response.data;
};