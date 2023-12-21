import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtworkItem from './ArtworkItem';
import './ArtworkGallery.scss'; 

const ArtworkGallery = () => {
    const [artworks, setArtworks] = useState([]);

    // Fetch artworks from the backend
    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/artworks');
                setArtworks(response.data);
            } catch (error) {
                console.error('Error fetching artworks:', error);
            }
        };

        fetchArtworks();
    }, []);

    // Handle successful deletion of an artwork
    const handleDeleteSuccess = (deletedArtworkId) => {
        setArtworks(artworks.filter(artwork => artwork.id !== deletedArtworkId));
    };

    return (
        <div className="artwork-gallery">
            {artworks.map(artwork => (
                <ArtworkItem 
                    key={artwork.id} 
                    artwork={artwork} 
                    onDeleteSuccess={handleDeleteSuccess} 
                />
            ))}
        </div>
    );
};

export default ArtworkGallery;