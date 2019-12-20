import React, { Component } from 'react'
import { withProvider } from './MainProvider'
import Item from './Item'

class TeenMale extends Component {
    componentDidMount() {
        this.props.getTeenMale()
    }

    render() {
        const mappedTeenMale = this.props.teenMale.map((person, i) => <Item key={i + person.name} name={person.name} gender={person.gender}  _id={person._id}/>)
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Teen Male</h1>
                {mappedTeenMale}
            </div>
        )
    }
}

export default withProvider(TeenMale)