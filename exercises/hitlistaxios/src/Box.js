import React from 'react';

const Box = (props) => {
    let {name, image} = props
    return (
        <div>
            <div>
                <img className='pics' src={image} alt="image"/>
                <div className='blueBox'></div>
                <h3 className='textPic'>{name}</h3>
            </div>
        </div>
    );
};

export default Box;