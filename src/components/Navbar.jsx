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
                <button type ="button"> Home </button>
                <button type ="button"> About </button>
                <button onClick = {toggleModal} type ="button"> Login </button>
                <button type ="button"> Sign Up </button>
                <button type ="button"> Contacts </button>
            </nav>
            <div className='modal'>
                <div  onClick = {toggleModal} className='overlay'></div> 
                <div className='modal-content'>
                    <h2>hi</h2>
                </div>
                <button className='close' onClick={toggleModal}>close</button>
                

            </div>
        </header>

        
        
    )
}

export default Navbar 