import React, { useState, useEffect } from 'react';
import { fetchUserProfile } from '../../services/userService'; 
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';
import { updateUserProfile } from '../../services/userService';
import './Profile.scss';

function Profile() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);


    useEffect(() => {
        const loadUserProfile = async () => {
            try {
                const userData = await fetchUserProfile(); 
                setUser(userData);
            } catch (err) {
                setError(err.message || 'Failed to load profile');
            } finally {
                setIsLoading(false);
            }
        };

        loadUserProfile();
    }, []);


    const handleEditProfile = () => {
        setIsEditing(true);
    };
    if (isEditing) {
        return <EditProfileForm user={user} onProfileUpdate={handleProfileUpdate} onCancel={() => setIsEditing(false)} />;
    }

    const handleProfileUpdate = (updatedUserData) => {
        // API call to update user data
        updateUserProfile(updatedUserData)
            .then(() => {
                // Update local user state or refetch user data
                setUser(updatedUserData);
                setIsEditing(false);
            })
            .catch(error => {
                // Handle update error
            });
    };



    if (isLoading) return <div className="profile__loading">Loading...</div>;
    if (error) return <div className="profile__error">Error: {error}</div>;
    if (!user) return <div className="profile__error">No user data</div>;
    

    return (
        <>
            <h1>{user.name}</h1>
            <div className="profile-details">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Bio:</strong> {user.bio}</p>
                <p><strong>Location:</strong> {user.location}</p>
                <p><strong>Joined:</strong> {new Date(user.joinedDate).toLocaleDateString()}</p>
                {user.profilePicture && <img src={user.profilePicture} alt={`${user.name}'s profile`} />}
            </div>

            <button onClick={handleEditProfile}>Edit Profile</button>
        </>
    );
}

export default Profile;
