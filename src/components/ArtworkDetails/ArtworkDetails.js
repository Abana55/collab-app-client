import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArtworkDetails = ({ match }) => {
    const [artwork, setArtwork] = useState(null);

    useEffect(() => {
        const fetchArtwork = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/artworks/${match.params.id}`);
                setArtwork(response.data);
            } catch (error) {
                console.error('Error fetching artwork:', error);
            }
        };

        fetchArtwork();
    }, [match.params.id]);

    return (
        <div>
            {artwork ? (
                <>
                    <h1>{artwork.title}</h1>
                    <img src={artwork.image} alt={artwork.title} />
                    <p>{artwork.description}</p>
                    {/* Additional artwork details */}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ArtworkDetails;