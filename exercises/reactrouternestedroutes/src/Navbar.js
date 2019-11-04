import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Products</Link>
        </div>
    )
}

export default Navbar