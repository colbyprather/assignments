import React, { Component } from 'react'
import { withProvider } from './MainProvider'
import Item from './Item'

class TeenMale extends Component {
    componentDidMount() {
        this.props.getTeenMale()
    }

    render() {
        const mappedTeenMale = this.props.teenMale.map((person, i) => <Item key={i + person.name} name={person.name} _id={person._id}/>)
        return (
            <div>
                {mappedTeenMale}
            </div>
        )
    }
}

export default withProvider(TeenMale)