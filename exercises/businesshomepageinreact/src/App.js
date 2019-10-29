import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import './Style.css';

const App = () => {
    return(
        <div class='the'>
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

export default App