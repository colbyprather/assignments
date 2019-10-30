import React from 'react'
import Friend from './Friend'
import Pet from './Pet'
import List from './List.json'

const Friendlist = () => {
    const constainer = List.map((friends, i) => <Friend key={i + friends.name} 
                                                        name={friends.name} 
                                                        age={friends.age} 
                                                        pets={friends.pets.map((pet, i) => <Pet key={i + pet.name}
                                                                                                name={pet.name}
                                                                                                breed={pet.breed}
                                                                                                />)}
                                                                                                />)
    return(
        <div className="container">
            {constainer}
        </div>
    )
}

export default Friendlist