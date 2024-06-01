import React, {useState} from 'react'
import './Navbar.css'
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  return(
    <header className="header">
      <a href="/" className="name">Tuklas Art Gallery</a>
      <nav className="navbar">
        <a href="/" className={location.pathname === '/' ? 'active' : ''}> Home </a>
        <a href="/about"className={location.pathname === '/about' ? 'active' : ''}> About </a>
        <a href="/login"className={location.pathname === '/login' ? 'active' : ''}> Sign In </a>
      </nav>
    </header>
  )
}

export default Navbar 