import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <Link to='/'><img className='pokeBall' src='https://i.ebayimg.com/images/g/huAAAOSwT6pV2hB6/s-l400.jpg' alt="pokeball"/> </Link>
            <div className='dropdown'>
                    <a className='dropButton'>Type</a>
                    <div className='dropdown-content'>
                        <Link to="/water">Water</Link>
                        <Link to="/grass">Grass</Link>
                        <Link to="/fire">Fire</Link>
                    </div>
            </div>
            <Link to='/search'>Search</Link>
        </div>
    );
};

export default Navbar;