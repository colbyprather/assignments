import React from 'react';
import Container from './Container'
import {outProvider} from './MainProvider'
// import "./App.css"

const App = () => {
    return (
        <div>
            <Container />
        </div>
    );
};

export default outProvider(App);