import React, { useState } from 'react';
import './ArtCard.css';

const ArtCards = () => {
    const [showDetails, setShowDetails] = useState(false);

    const handleViewDetails = () => {
        setShowDetails(true);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
    };

    return (
        <div className="art-card">
            <img className="artCard-image" src="arts.jpg" alt="art" />
            <button className='approve'>Approve</button>
            <button className='decline'>Decline</button>
            <button className='artCard-details' onClick={handleViewDetails}>View Details</button>

            {showDetails && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseDetails}>&times;</span>
                        <h2>Title: Gojo</h2>
                        <p>Description: An artwork for Gojo Fans.</p>
                        <p>Artist: Eliana</p>
                        <p>Contact: Eliana@.com</p>
                        <p>Price: $500</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArtCards;