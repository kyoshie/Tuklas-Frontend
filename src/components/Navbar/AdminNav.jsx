import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './AdminNav.css';

const AdminNav = () => {
  const [modal, setModal] = useState(false);
  const location = useLocation();

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <header className="admin">
      <a href="/home" className="logo">Tuklas Art Gallery</a>

      <nav className="admin-nav">
        <a href="/adminprofile" className={location.pathname === '/adminprofile' ? 'active' : ''}>Profile</a>
        <a href="/adminhome" className={location.pathname === '/adminhome' ? 'active' : ''}>Home</a>
        <a href="/arts" className={location.pathname === '/arts' ? 'active' : ''}>Arts</a>
        <a href="/login">Logout</a>
      </nav>
    </header>
  );
};

export default AdminNav