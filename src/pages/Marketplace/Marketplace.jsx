import React, { useState } from 'react';
import "./Marketplace.css";
import Cards from "../../components/Cards/Cards";

const Marketplace = () => {
    const [uploading, setUploading] = useState(false);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setUploading(true);

      
        setTimeout(() => {
         
            const success = Math.random() > 0.5;

            if (success) {
                alert("File uploaded successfully!");
            } else {
                alert("Upload failed. Please try again.");
            }

            setUploading(false);
        }, 2000); 
    };

    return (
        <div className='market'>
            <div className='inner'>
                <div className='upload-section'>
                    <label htmlFor="fileUpload" className="upload-button">
                        {uploading ? 'Uploading...' : 'Upload Art'}
                    </label>
                    <input
                        type="file"
                        onChange={handleFileUpload}
                        style={{ display: 'none' }}
                        id="fileUpload"
                    />
                </div>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    );
}

export default Marketplace;