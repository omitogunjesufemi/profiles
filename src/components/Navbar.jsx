import {Link} from "react-router-dom";

function Navbar () {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container justify-content-center'>
                <Link to='/' className='navbar-brand' >Profile</Link>
            </div>
        </nav>
    );
}

export default Navbar;