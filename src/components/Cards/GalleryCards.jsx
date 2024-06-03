import './GalleryCards.css'

const GalleryCards = () => {

    return (
        <div className="gal-card">
            <img className="galCard-image"src = "arts.jpg" alt= "art"></img>
            <h2 className='galCard-title'>Title</h2>
            <p className='galCard-description'>Description</p>  
            <p className='galCard-price'>Price</p>
            <p className='galCard-status'>Status</p>
        </div>

    )
} 

export default GalleryCards