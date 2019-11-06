import React from 'react';
import {outProvider} from './MainProvider'
import './App.css'

const App = (props) => {
    return (
        <div className={props.color ? 'light' : 'dark'}>
            <h1>hello</h1>
            <button onClick={props.toggle}>Change Color</button>
        </div>
    );
};

export default outProvider(App);