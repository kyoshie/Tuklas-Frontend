import React, {useState} from 'react'
import './Navbar.css'


const Navbar = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  return(
    <header className="header">
      <a href="/" className="name">Tuklas Art Gallery</a>
      <nav className="navbar">
        <a href="/"> Home </a>
        <a href="/about"> About </a>
        <a href="/login"> Sign In </a>
      </nav>
    </header>
  )
}

export default Navbar 