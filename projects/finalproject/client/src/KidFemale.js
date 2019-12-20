import React, { Component } from 'react'
import { withProvider } from './MainProvider'
import Item from './Item'

class KidFemale extends Component {
    componentDidMount() {
        this.props.getKidFemale()
    }

    render() {
        const mappedKidFemale = this.props.kidFemale.map((person, i) => <Item key={i + person.name} name={person.name} gender={person.gender} _id={person._id}/>)
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Kid Female</h1>
                {mappedKidFemale}
            </div>
        )
    }
}

export default withProvider(KidFemale)