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
        <button> Home </button>
        <button> About </button>
        <button onClick={toggleModal}> Login </button>
        <button> Sign Up </button>
        <button> Contacts </button>
      </nav>
    </header>
  )
}

export default Navbar 