import React, { useState } from 'react';
import axios from 'axios'; // Ensure you have axios installed

const ArtworkUploadForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', file);
        try {
            const response = await axios.post('http://localhost:8000/upload-artwork', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            // Handle success (e.g., showing a success message, clearing the form)
        } catch (error) {
            console.error('Error uploading artwork:', error);
            // Handle error (e.g., showing an error message)
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Image:</label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </div>
            <button type="submit">Upload Artwork</button>
        </form>
    );
};

export default ArtworkUploadForm;