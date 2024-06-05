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
        bio: 'Hello, this is Team Uruk admin profile. We are students from University of Batangas!',
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
        <div className="user-profile-v2">
            <div className='user-info-v2'>
                <img className='user-image-v2' src="strongest.jpg" alt="Profile Image" />
                <div className="text-info-v2">
                    {isEditing ? (
                        <form className="edit-form-v2" onSubmit={handleSubmit}>
                            <div className="form-group-v2">
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={profile.name} 
                                    onChange={handleInputChange}
                                    placeholder="Enter your name" 
                                />
                            </div>
                            <div className="form-group-v2">
                                <textarea 
                                    name="bio" 
                                    value={profile.bio} 
                                    onChange={handleInputChange}
                                    placeholder="Enter your bio" 
                                />
                            </div>
                            <div className="form-group-v2 inline-group-v2">
                                <div className="form-group-v2">
                                    <input 
                                        type="text" 
                                        name="phone" 
                                        value={profile.phone} 
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone" 
                                    />
                                </div>
                                <div className="form-group-v2">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={profile.email} 
                                        onChange={handleInputChange}
                                        placeholder="Enter your email" 
                                    />
                                </div>
                            </div>
                            <div className="form-group-v2">
                                <input 
                                    type="text" 
                                    name="facebook" 
                                    value={profile.facebook} 
                                    onChange={handleInputChange}
                                    placeholder="Enter your Facebook URL" 
                                />
                            </div>
                            <div className="form-group-v2">
                                <input 
                                    type="text" 
                                    name="instagram" 
                                    value={profile.instagram} 
                                    onChange={handleInputChange}
                                    placeholder="Enter your Instagram URL" 
                                />
                            </div>
                            <div className="button-group-v2">
                                <button type="submit" className="save-profile-v2">Save Profile</button>
                                <button type="button" onClick={() => setIsEditing(false)} className="cancel-edit-v2">Cancel</button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <div className="name-section-v2">
                                <h1 className='user-name-v2'>{profile.name}</h1>
                            </div>
                            <div className="bio-section-v2">
                                <p className='bio-v2'>{profile.bio}</p>
                            </div>
                            <div className='contact-info-v2'>
                                <p><FontAwesomeIcon icon={faPhone} /> {profile.phone}</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> {profile.email}</p>
                                <p><FontAwesomeIcon icon={faFacebook} /> <a href={profile.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></p>
                                <p><FontAwesomeIcon icon={faInstagram} /> <a href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>
                            </div>
                            <div className='button-group-v2'>
                                <Link to="/gallery" className='see-arts-v2'>View Arts</Link>
                                <button onClick={() => setIsEditing(true)} className='edit-profile-v2'>Edit Profile</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminProfile;
