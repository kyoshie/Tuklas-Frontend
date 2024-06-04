import './AdminProfile.css';
import { Link } from 'react-router-dom';

const AdminProfile = () => {
    return (
        <div className="admin-profile"> 
            <div className='admin-info'>
                <img className='image-profile' src="gojo.jpg" alt="Profile Image" />
                <h1 className='admin-name'>Team Uruk</h1>
                <h2 className='role'>Admin</h2>
                <p className='information'> This is Team Uruk admin profile.</p>
                <br></br>
                

                <Link to="/arts" className='see-arts'>
                    View Arts
                </Link>
            </div>
        </div>
    );
}

export default AdminProfile;