import React from 'react'
import Hero from "./Hero"
import heros from "./heros.json"

export default function SuperHeroList() {
    
    
    const mappedHeros = heros.map((hero) => {
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