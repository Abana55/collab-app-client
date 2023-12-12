import React from 'react';

function ProfileModal({ connection, onClose }) {
    if (!connection) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{connection.name}'s Profile</h2>
                {/* Display other connection details here */}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ProfileModal;