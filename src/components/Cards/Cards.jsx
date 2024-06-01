import './Cards.css';

const Cards = () => {

    return (
        <div className="card">
            <img className="card-image"src = "place holder.jpg" alt= "art"></img>
            <h2 className='card-title'>Title</h2>
            <p className='card-description'>Description</p>  
            <p className='card-price'>Price</p>
            <button className='button'>Buy</button>
        </div>

    )
} 

export default Cards