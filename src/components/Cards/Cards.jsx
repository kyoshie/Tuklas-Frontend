import './Cards.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Cards = () => {
    return (
        <div className="card">
            <img className="card-image" src="gg.jpg" alt="art" />
            <h2 className='card-title'>Title</h2>
            <p className='card-description'>Description</p>  
            <p className='card-price'>Price</p>
            <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer">
                <button className='button'>
                    <i className="fas fa-shopping-cart"></i> Buy
                </button>
            </a>
        </div>
    );
}

export default Cards;