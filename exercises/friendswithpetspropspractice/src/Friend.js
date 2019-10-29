import React from 'react'

const Friend = (props) => {
    let {name, age, pets} = props
    
    return(
        <div>
            <h2>{name}</h2>
            <h4>{age}</h4>
            <p>{pets}</p>
        </div>
    )
}

export default Friend