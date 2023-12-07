import React, { useState, useEffect } from 'react';
import { fetchUserConnections } from '../../services/connectionService'; // Adjust the import path

function Connections() {
    const [connections, setConnections] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadConnections = async () => {
            try {
                const fetchedConnections = await fetchUserConnections(); // Implement this function in your service
                setConnections(fetchedConnections);
            } catch (err) {
                setError(err.message || 'Failed to load connections');
            } finally {
                setIsLoading(false);
            }
        };

        loadConnections();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <h1>Person's List of Connections</h1>
            <ul>
                {connections.map((connection) => (
                    <li key={connection.id}>{connection.name}</li> // Adjust according to your data structure
                ))}
            </ul>
        </>
    );
}

export default Connections;