import React, { Component } from 'react'
import { withProvider } from './MainProvider'
import Item from './Item'

class AdultMale extends Component {
    componentDidMount() {
        this.props.getAdultMale()
    }

    render() {
        const mappedAdultMale = this.props.adultMale.map((person, i) => <Item key={i + person.name} name={person.name} gender={person.gender} _id={person._id}/>)
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Adult Male</h1>
                {mappedAdultMale}
            </div>
        )
    }
}

export default withProvider(AdultMale)