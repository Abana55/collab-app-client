import React from 'react';
import axios from 'axios';

const ArtworkItem = ({ artwork, onDeleteSuccess }) => {
    const deleteArtwork = async () => {
        if (window.confirm('Are you sure you want to delete this artwork?')) {
            try {
                await axios.delete(`http://localhost:3000/api/artworks/${artwork.id}`);
                onDeleteSuccess(artwork.id);
            } catch (error) {
                console.error('Error deleting artwork:', error);
            }
        }
    };

    return (
        <div>
            <h3>{artwork.title}</h3>
            {/* Other artwork details */}
            <button onClick={deleteArtwork}>Delete Artwork</button>
        </div>
    );
};

export default ArtworkItem;