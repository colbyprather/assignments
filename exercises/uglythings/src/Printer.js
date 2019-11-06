import React from 'react';
import {outProvider} from './MainProvider'


const Printer = (props) => {
    return (
        <div>
            <h1>{props.title.value}</h1>
            <p>{props.discription.value}</p>
            <img src={props.image.value} alt="ugly"/>
            <button>delete</button>
        </div>
    );
};

export default outProvider(Printer);