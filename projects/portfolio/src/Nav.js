import React from 'react';
import { Link } from 'react-router-dom';
import './navStyles.css';

const Nav = () => {
    return (
        <div className='mainContainer'>
            <div className='navLinks'>
                <Link className='navLinks navLinkOne' to='/'><h3>Home</h3></Link>
                <Link className='navLinks navLinkTwo' to='/about'><h3>About</h3></Link>
                <a href={"www.linkedin.com/in/colbyprather"} target="_blank" rel="noopener noreferrer"><img style={{height: "40px", width: "40px", padding: "20px 0 20px 20px"}} src="https://www.sharethis.com/wp-content/uploads/2017/05/LinkedIn.png" alt="linkedin"></img></a>
                <a href={"https://github.com/colbyprather"} target="_blank" rel="noopener noreferrer"><img style={{height: "40px", width: "40px",padding: "20px 0 20px 20px" }} src="https://s18955.pcdn.co/wp-content/uploads/2018/02/github.png" alt="GitHub"></img></a>
            </div>
            <div className='navName'>
                <h3>Colby Prather // Web Developer</h3>
            </div>
        </div>
    );
};

export default Nav;