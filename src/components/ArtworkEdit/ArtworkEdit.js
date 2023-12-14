import React, { useState } from 'react';
import axios from 'axios';

const EditArtworkForm = ({ artwork, onSubmitSuccess }) => {
    const [title, setTitle] = useState(artwork.title);
    const [description, setDescription] = useState(artwork.description);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            // Append file if a new image is uploaded
            // ...

            await axios.put(`http://localhost:8000/api/artworks/${artwork.id}`, formData);
            onSubmitSuccess();
        } catch (error) {
            console.error('Error updating artwork:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            <button type="submit">Update Artwork</button>
        </form>
    );
};

export default EditArtworkForm;