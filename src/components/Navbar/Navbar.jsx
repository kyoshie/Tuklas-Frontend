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
        <a> Home </a>
        <a> About </a>
        <a href="/login"> Sign In </a>
        <a> Contacts </a>
      </nav>
    </header>
  )
}

export default Navbar 