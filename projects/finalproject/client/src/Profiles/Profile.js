import React, { Component } from 'react'
import AddProfileForm from "./AddProfileForm"
import { withProvider } from '../MainProvider'

class Profile extends Component {
    state = {isEditable: false}
    toggle = () =>{ 
        this.setState(prevState => {
            return {isEditable: !prevState.isEditable}
        })
    }

    render(props) {
        let {name, height, weight, hair, eye, pants, shirt, neck, sleeve, suit, waist, inseam, shoe, birthday, gender, phone, email, ethnicity, carYear, carMake, carModel, skills, } = this.props.profile
        // console.log(this.props)
        return (
            <div>
                {this.state.isEditable ?
                    <AddProfileForm toggle={this.toggle} profile={this.props.profile}/>
                    :
                    <div>
                        <h1>{name}</h1>
                        <h3>{height}</h3>
                        <h3>{weight}</h3>
                        <h3>{hair}</h3>
                        <h3>{eye}</h3>
                        <h3>{pants}</h3>
                        <h3>{shirt}</h3>
                        <h3>{neck}</h3>
                        <h3>{sleeve}</h3>
                        <h3>{suit}</h3>
                        <h3>{waist}</h3>
                        <h3>{inseam}</h3>
                        <h3>{shoe}</h3>
                        <h3>{birthday}</h3>
                        <h3>{gender}</h3>
                        <h3>{phone}</h3>
                        <h3>{email}</h3>
                        <h3>{ethnicity}</h3>
                        <h3>{carYear}</h3>
                        <h3>{carMake}</h3>
                        <h3>{carModel}</h3>
                        <h3>{skills}</h3>

                        <button onClick={this.toggle}>Edit</button>
                    </div>
                }
            </div>
        )
    }
}


export default withProvider(Profile);