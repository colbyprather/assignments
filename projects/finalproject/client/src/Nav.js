import React from 'react';
import { Link } from "react-router-dom";
import './navStyles.css';
import { withProvider } from './MainProvider';

const Nav = (props) => {
    return (
        <nav className='nav-container'>
            {
                !props.token ?
                    <React.Fragment>
                        <Link className='navHome' to='/'>Home</Link>
                        <Link className='navAbout' to='/about'>About</Link>
                        <span className='dropdown'>
                            <h3 className='dropdown-title'>Talent ∨</h3>
                            <div className='dropdown-content'>
                                <Link to='/adultmale'><h2>Adult Male</h2></Link>
                                <Link to='/adultfemale'><h2>Adult Female</h2></Link>
                                <Link to='/teenmale'><h2>Teen Male</h2></Link>
                                <Link to='/teenFemale'><h2>Teen Female</h2></Link>
                                <Link to='/kidmale'><h2>Kid Male</h2></Link>
                                <Link to='/kidFemale'><h2>Kid Female</h2></Link>
                                <Link to='/login'><h2>Log In</h2></Link>
                            </div>
                        </span>
                    </React.Fragment>
                :
                    <React.Fragment>
                        <Link className='navHome' to='/'>Home</Link>
                        <Link className='navAbout' to='/about'>About</Link>
                        <Link className='navAbout' to='/profiles'>Profile</Link>
                        <span className='dropdown'>
                            <h3 className='dropdown-title'>Talent ∨</h3>
                            <div className='dropdown-content'>
                                <Link to='/adultmale'><h2>Adult Male</h2></Link>
                                <Link to='/adultfemale'><h2>Adult Female</h2></Link>
                                <Link to='/teenmale'><h2>Teen Male</h2></Link>
                                <Link to='/teenFemale'><h2>Teen Female</h2></Link>
                                <Link to='/kidmale'><h2>Kid Male</h2></Link>
                                <Link to='/kidFemale'><h2>Kid Female</h2></Link>
                                <Link onClick={() => props.logout()} to='/login'><h2>Logout</h2></Link>
                            </div>
                        </span>
                    </React.Fragment>
            }
        </nav>
    );
};

export default withProvider(Nav);