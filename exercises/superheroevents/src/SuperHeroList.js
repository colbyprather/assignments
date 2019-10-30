import React, {Component} from 'react'
import Hero from "./Hero"

export default function SuperHeroList(props) {
    const mappedHeros = props.heros.map((hero) => {
        return <Hero name={hero.name} 
                    show={hero.show}
                    catchPhrase={hero.catchPhrase}
                    imageName={hero.imageName}
                    /> 
    })
    return (
        <div>
            {mappedHeros}
        </div>
    )
}