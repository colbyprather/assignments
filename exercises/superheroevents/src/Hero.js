import React from 'react'

function Hero(props){
    let {name, show, imageName, catchPhrase} = props
    const onClick = () => {
        alert(catchPhrase)
    }
    return (
        <div onClick={onClick}>
            <h1>{name}</h1>
            <h3>{show}</h3>

            <img src={imageName} alt={name} />
        </div>
    )
}

export default Hero 