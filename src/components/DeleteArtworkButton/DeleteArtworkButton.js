import axios from 'axios';

const deleteArtwork = async (artworkId) => {
    if (window.confirm('Are you sure you want to delete this artwork?')) {
        try {
            await axios.delete(`http://localhost:3000/api/artworks/${artworkId}`);
            // Handle successful deletion (e.g., update state or redirect)
        } catch (error) {
            console.error('Error deleting artwork:', error);
        }
    }
};

// Usage in a component
<button onClick={() => deleteArtwork(artwork.id)}>Delete Artwork</button>

export default deleteArtwork;