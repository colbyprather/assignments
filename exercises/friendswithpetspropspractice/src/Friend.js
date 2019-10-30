import React from 'react'

const Friend = (props) => {
    let {name, age, pets} = props
    
    return(
        <div className='friends'>
            <h2>{name}</h2>
            <h4>{age}</h4>
            <h5>{pets}</h5>
        </div>
    )
}

export default Friend