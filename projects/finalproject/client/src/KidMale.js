import React, { Component } from 'react'
import { withProvider } from './MainProvider'
import Item from './Item'

class KidMale extends Component {
    componentDidMount() {
        this.props.getKidMale()
    }

    render() {
        const mappedKidMale = this.props.kidMale.map((person, i) => <Item key={i+ person.name} name={person.name} _id={person._id}/>)
        return (
            <div>
                {mappedKidMale}
            </div>
        )
    }
}

export default withProvider(KidMale)