import React, { useState, useEffect } from 'react';
import { fetchUserConnections } from '../../services/connectionService'; // Adjust the import path
import './Connections.scss';

function Connections() {
    const [connections, setConnections] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedConnection, setSelectedConnection] = useState(null);

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

    
    const handleViewProfile = (connection) => {
        setSelectedConnection(connection);
    };

    const handleCloseModal = () => {
        setSelectedConnection(null);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <h1>Person's List of Connections</h1>
            <ul>
                {connections.map((connection) => (
                    <li key={connection.id}>
                        <span onClick={() => handleViewProfile(connection.id)} className="connection-name">
                            {connection.name}
                        </span>
                        <button onClick={() => handleViewProfile(connection.id)}>View Profile</button>
                        {/* Add other interaction buttons here */}
                    </li>
                ))}
            </ul>
            <ProfileModal connection={selectedConnection} onClose={handleCloseModal} />
        </>
    );
}

export default Connections;