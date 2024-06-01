import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './HomePageNav.css';

const HomePageNav = () => {
  const [modal, setModal] = useState(false);
  const location = useLocation();

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <header className="head">
      <a href="/" className="web">Tuklas Art Gallery</a>

      <nav className="nav">
        <a href="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Profile</a>
        <a href="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</a>
        <a href="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</a>
        <a href="/marketplace" className={location.pathname === '/marketplace' ? 'active' : ''}>Marketplace</a>
        <a href="/login">Logout</a>
      </nav>
    </header>
  );
};

export default HomePageNav