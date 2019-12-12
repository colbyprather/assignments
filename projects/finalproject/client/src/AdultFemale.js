import React, { Component } from 'react'
import { withProvider } from './MainProvider'
import Item from './Item'

class AdultFemale extends Component {
    componentDidMount() {
        this.props.getAdultFemale()
    }

    render() {
        const mappedAdultFemale = this.props.adultFemale.map((person, i) => <Item key={i + person.name} name={person.name} _id={person._id}/>)
        return (
            <div>
                {mappedAdultFemale}
            </div>
        )
    }
}

export default withProvider(AdultFemale)