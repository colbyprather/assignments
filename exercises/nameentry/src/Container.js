import React from 'react';
// import Box from './Box'
import People from './People'

const Container = (props) => {
    const boxMapped = props.people.map((person, i) => <People key={i + person.fullName} 
                                                                name={person.fullName} 
                                                                age={person.age} 
                                                                />)
    return (
        <div>
            {boxMapped}
        </div>
    );
};

export default Container;