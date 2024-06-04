import React, { useState } from 'react';
import './AdminProfile.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const AdminProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: 'Team Uruk',
        bio: 'This is Team Uruk admin profile. Here you can find more information about our team and the projects we are working on. Stay tuned for more updates!',
        phone: '+1 234 567 890',
        email: 'teamuruk@example.com',
        facebook: 'https://www.facebook.com/teamuruk',
        instagram: 'https://www.instagram.com/teamuruk'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <div className="admin-profile"> 
            <div className='admin-info'>
                <img className='image-profile' src="gojo.jpg" alt="Profile Image" />
                <div className="text-info">
                    {isEditing ? (
                        <form className="edit-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="label">Name:</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={profile.name} 
                                    onChange={handleInputChange} 
                                />
                            </div>
                            <div className="form-group">
                                <label className="label">Bio:</label>
                                <textarea 
                                    name="bio" 
                                    value={profile.bio} 
                                    onChange={handleInputChange} 
                                />
                            </div>
                            <div className="form-group inline-group">
                                <div className="form-group">
                                    <label className="label">Phone:</label>
                                    <input 
                                        type="text" 
                                        name="phone" 
                                        value={profile.phone} 
                                        onChange={handleInputChange} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label">Email:</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={profile.email} 
                                        onChange={handleInputChange} 
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="label">Facebook:</label>
                                <input 
                                    type="text" 
                                    name="facebook" 
                                    value={profile.facebook} 
                                    onChange={handleInputChange} 
                                />
                            </div>
                            <div className="form-group">
                                <label className="label">Instagram:</label>
                                <input 
                                    type="text" 
                                    name="instagram" 
                                    value={profile.instagram} 
                                    onChange={handleInputChange} 
                                />
                            </div>
                            <div className="button-group">
                                <button type="submit" className="save-profile">Save Profile</button>
                                <button type="button" onClick={() => setIsEditing(false)} className="cancel-edit">Cancel</button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <div className="name-section">
                                <label className="label">Name:</label>
                                <h1 className='admin-name'>{profile.name}</h1>
                            </div>
                            <div className="bio-section">
                                <label className="label">Bio:</label>
                                <p className='bio'>{profile.bio}</p>
                            </div>
                            <div className='contact-info'>
                                <p><FontAwesomeIcon icon={faPhone} /> {profile.phone}</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> {profile.email}</p>
                                <p><FontAwesomeIcon icon={faFacebook} /> <a href={profile.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></p>
                                <p><FontAwesomeIcon icon={faInstagram} /> <a href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>
                            </div>
                            <div className='button-group'>
                                <Link to="/arts" className='see-arts'>View Arts</Link>
                                <button onClick={() => setIsEditing(true)} className='edit-profile'>Edit Profile</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminProfile;