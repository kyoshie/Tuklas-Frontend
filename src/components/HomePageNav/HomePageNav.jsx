import React, {useState} from 'react'
import './HomePageNav.css'


const HomePageNav = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  return(
    <header className="header">
      <a href="/" className="name">Tuklas Art Gallery</a>

      <nav className="navbar">
        <a href="/profile"> Profile </a>
        <a href="/home"> Home </a>
        <a href="/gallery"> Gallery </a>
        <a href="/marketplace"> Marketplace </a>
      </nav>
    </header>
  )
}

export default HomePageNav