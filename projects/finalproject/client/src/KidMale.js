import React, { Component } from 'react'
import { withProvider } from './MainProvider'
import Item from './Item'

class KidMale extends Component {
    componentDidMount() {
        this.props.getKidMale()
    }

    render() {
        const mappedKidMale = this.props.kidMale.map((person, i) => <Item key={i+ person.name} name={person.name} gender={person.gender}  _id={person._id}/>)
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Kid Male</h1>
                {mappedKidMale}
            </div>
        )
    }
}

export default withProvider(KidMale)