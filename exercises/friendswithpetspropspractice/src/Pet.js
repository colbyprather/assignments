import React from 'react'

const Pet = (props) => {
    let {name, breed} = props

    return(
        <div className='pets'>
            <h2>{name}</h2>
            <h4>{breed}</h4>
        </div>
    )
}

export default Pet