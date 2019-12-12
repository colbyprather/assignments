import React, { Component } from 'react'
import { withProvider } from './MainProvider'
import Item from './Item'

class KidFemale extends Component {
    componentDidMount() {
        this.props.getKidFemale()
    }

    render() {
        const mappedKidFemale = this.props.kidFemale.map((person, i) => <Item key={i + person.name} name={person.name} _id={person._id}/>)
        return (
            <div>
                {mappedKidFemale}
            </div>
        )
    }
}

export default withProvider(KidFemale)