import React from 'react';
import {outProvider} from './MainProvider'


const Printer = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.discription}</p>
            <img src={props.image} alt="ugly"/>
            <button>delete</button>
        </div>
    );
};

export default outProvider(Printer);