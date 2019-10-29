import React from 'react'
import Friend from './Friend'
import Pet from './Pet'
import List from './List.json'

const Friendlist = () => {
    const constainer = Friend.map((friends, i) => <List key={i + friends.name} name={friends.name} age={friends.age} pets={friends.pets}/>)
    return(
        <div>
            {constainer}
        </div>
    )
}

export default Friendlist