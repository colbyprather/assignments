import React from 'react';
import Container from './Container'
import './App.css'

const App = () => {
    return (
        <div>
            <header>
                <img className='imageHeader' src="https://wallpapercave.com/wp/MSWmPdW.jpg" alt="image"/>
                <h2 className="headerText">Don Corleone's Hit List</h2>
            </header>
            <div className='mainBox'>
            <Container />
            </div>
        </div>
    );
};

export default App;