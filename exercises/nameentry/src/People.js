import React from 'react';

const People = (props) => {
    let {name, age} = props
    return (
        <div>
            <h2>{name}</h2>
            <h4>{age}</h4>
        </div>
    );
};

export default People;