import React, { Component } from 'react'
import { withProvider } from './MainProvider'
import Item from './Item'

class TeenFemale extends Component {
    componentDidMount() {
        this.props.getTeenFemale()
    }

    render() {
        const mappedTeenFemale = this.props.teenFemale.map((person, i) => <Item key={i + person.name} name={person.name} gender={person.gender} _id={person._id}/>)
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Teen Female</h1>
                {mappedTeenFemale}
            </div>
        )
    }
}

export default withProvider(TeenFemale)