import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div className='nav'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/contact'>Contact</Link>
            <Link className='link' to='/services'>Services</Link>
        </div>
    );
};

export default Navbar;
