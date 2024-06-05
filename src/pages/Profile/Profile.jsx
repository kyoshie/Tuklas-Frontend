import React, { useState } from 'react';
import './Profile.css'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Profile = () => { 
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: 'Eliana Zhu',
        bio: 'Hello, this is Eliana Zhu. An artist from Batangas. Aspiring to be one of the best artists in our city!',
        phone: '+1 234 567 890',
        email: 'elianazhu@gmail.com',
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
        <div className="user-profile">
            <div className='user-info'>
                <img className='user-image' src="strongest.jpg" alt="Profile Image" />
                <div className="text-info">
                    {isEditing ? (
                        <form className="edit-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={profile.name} 
                                    onChange={handleInputChange}
                                    placeholder="Enter your name" 
                                />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    name="bio" 
                                    value={profile.bio} 
                                    onChange={handleInputChange}
                                    placeholder="Enter your bio" 
                                />
                            </div>
                            <div className="form-group inline-group">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="phone" 
                                        value={profile.phone} 
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone" 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={profile.email} 
                                        onChange={handleInputChange}
                                        placeholder="Enter your email" 
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="facebook" 
                                    value={profile.facebook} 
                                    onChange={handleInputChange}
                                    placeholder="Enter your Facebook URL" 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="instagram" 
                                    value={profile.instagram} 
                                    onChange={handleInputChange}
                                    placeholder="Enter your Instagram URL" 
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
                                <h1 className='user-name'>{profile.name}</h1>
                            </div>
                            <div className="bio-section">
                                <p className='bio'>{profile.bio}</p>
                            </div>
                            <div className='contact-info'>
                                <p><FontAwesomeIcon icon={faPhone} /> {profile.phone}</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> {profile.email}</p>
                                <p><FontAwesomeIcon icon={faFacebook} /> <a href={profile.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></p>
                                <p><FontAwesomeIcon icon={faInstagram} /> <a href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>
                            </div>
                            <div className='button-group'>
                                <Link to="/gallery" className='see-arts'>View Arts</Link>
                                <button onClick={() => setIsEditing(true)} className='edit-profile'>Edit Profile</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
