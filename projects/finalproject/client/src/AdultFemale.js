import React, { Component } from 'react'
import { withProvider } from './MainProvider'
import Item from './Item'

class AdultFemale extends Component {
    componentDidMount() {
        this.props.getAdultFemale()
    }

    render() {
        const mappedAdultFemale = this.props.adultFemale.map((person, i) => <Item key={i + person.name} name={person.name} gender={person.gender} _id={person._id}/>)
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Adult Female</h1>
                {mappedAdultFemale}
            </div>
        )
    }
}

export default withProvider(AdultFemale)