import React from 'react';
import { Link } from 'react-router-dom';
import './navStyles.css';

const Nav = () => {
    return (
        <div className='mainContainer'>
            <div className='navLinks'>
                <Link className='navLinks navLinkOne' to='/'><h3>Work</h3></Link>
                <Link className='navLinks navLinkTwo' to='/about'><h3>About</h3></Link>
            </div>
            <div className='navName'>
                <h3>Colby Prather // Web Developer</h3>
            </div>
        </div>
    );
};

export default Nav;