import React, { useState } from 'react';
import './About.css';



const About = () => {
    return (
<div className='welcome'>
      <div className='about'>
          <h3> About Tuklas Art Gallery</h3>
          <div className='about-text'>
              <p>Welcome to Tuklas Art Gallery, a groundbreaking platform that celebrates the creativity and talent of artists from Batangas.</p>
              <p>Our website is a unique online art gallery and marketplace that empowers artists to showcase their work, convert it into NFTs (Non-Fungible Tokens), 
                and reach a local audience of art enthusiasts and collectors.</p>
          </div>
          <div className='mission'>
            <h3>Our Mission</h3>
            <div className='mission-text'>
                <p>At Tuklas Art Gallery, our mission is to provide a digital space where artists from Batangas can share their unique perspectives,
                     stories, and artistic expressions with the world. </p>
                <p>We aim to bridge the gap between traditional artistry and the digital age by offering a platform that enables artists to monetize their creations through NFT technology.</p>
            </div>
        </div>
      </div>
  </div>



    )
}

export default About