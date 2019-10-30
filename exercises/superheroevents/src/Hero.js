import React from 'react'

function Hero({name, catchPhrase, image}){
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name}/>
        </div>
    )
}

export default Hero