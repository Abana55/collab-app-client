// src/components/ConnectionList/ConnectionList.js
import React from 'react';
import './connectionList.scss';


function ConnectionList({ connections }) {
    return (
        <div className="connection-list">
            <h2>Connections</h2>
            <ul>
                {connections.map((connection) => (
                    <li key={connection.id}>
                        <span>{connection.name}</span>
                        {/* Add more details or actions per connection */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ConnectionList;