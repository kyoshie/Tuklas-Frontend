import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        firstname: 'Eliana',
        lastname: 'Datinguinoo',
        username: 'eliana',
        password: '',
        email: 'eliana@example.com',
        contactNumber: '123-456-7890',
        profileImage: '1.jpg' 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile((prevProfile) => ({
                    ...prevProfile,
                    profileImage: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile">
            <h2 className="prof-title">My Profile</h2>
            <div className="profile-image-container">
                <img src={profile.profileImage} alt="Profile" className="profile-image"/>
                {isEditing && <input type="file" onChange={handleImageChange} />}
            </div>
            {isEditing ? (
                <form className="prof-inputs" onSubmit={handleSubmit}>
                    <div className="name-inputs">
                        <input 
                            type="text" 
                            name="firstname" 
                            value={profile.firstname} 
                            onChange={handleChange} 
                            placeholder="Firstname" 
                        />
                        <input 
                            type="text" 
                            name="lastname" 
                            value={profile.lastname} 
                            onChange={handleChange} 
                            placeholder="Lastname" 
                        />
                    </div>
                    <input 
                        type="text" 
                        name="username" 
                        value={profile.username} 
                        onChange={handleChange} 
                        placeholder="Username" 
                    />
                   
                    <input 
                        type="email" 
                        name="email" 
                        value={profile.email} 
                        onChange={handleChange} 
                        placeholder="Email" 
                    />
                    <input 
                        type="tel" 
                        name="contactNumber" 
                        value={profile.contactNumber} 
                        onChange={handleChange} 
                        placeholder="Contact Number" 
                    />
                    <button className="submit-button" type="submit">Save</button>
                </form>
            ) : (
                <div className="prof-details">
                    <p><strong>Firstname:</strong> {profile.firstname}</p>
                    <p><strong>Lastname:</strong> {profile.lastname}</p>
                    <p><strong>Username:</strong> {profile.username}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Contact Number:</strong> {profile.contactNumber}</p>
                    <button className="edit-button" onClick={toggleEdit}>Edit Profile</button>
                </div>
            )}
        </div>
    );
}

export default Profile;