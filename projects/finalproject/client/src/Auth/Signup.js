import React, { Component } from 'react';
import { withProvider } from "../MainProvider"
import "../signUpStyles.css"

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errorMessage: "",
            name: "",
            height: "",
            weight: "",
            hair: "",
            eye: "",
            pants: "",
            shirt: "",
            neck: "",
            sleeve: "",
            suit: "",
            waist: "",
            inseam: "",
            shoe: "",
            birthday: "",
            gender: "",
            phone: "",
            email: "",
            ethnicity: "",
            carYear: "",
            carMake: "",
            carModel: "",
            skills: "",
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => this.props.history.push("/profiles"))
            .catch(err => {
                this.setState({errorMessage: err.response.data.message})
            })
    }

    render() {
        let {username, password, name, height, weight, hair, eye, pants, shirt, neck, sleeve, suit, waist, inseam, shoe, birthday, gender, phone, email, ethnicity, carYear, carMake, carModel, skills, } = this.state;
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="signUp">
                        <h3>Sign Up</h3>
                        <h5>Username:</h5>
                        <input onChange={this.handleChange} value={username} name="username" type="text" placeholder="Username" required/>
                        <h5>Password:</h5>
                        <input onChange={this.handleChange} value={password} name="password" type="password" placeholder="Password" required/>
                        <h3>Profile Info</h3>
                        <h5>First and Last Name:</h5>
                        <input onChange={this.handleChange} value={name} name="name" type="text" placeholder="First and Last" required/>
                        <h5>Phone Number:</h5>
                        <input onChange={this.handleChange} value={phone} name="phone" type="tel" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder="Tel. eg. xxx-xxx-xxxx" required/>
                        <h5>Email:</h5>
                        <input onChange={this.handleChange} value={email} name="email" type="text" placeholder="Email" required/>
                        <h5>Ethnicity:</h5>
                        <select name="ethnicity" value={ethnicity} onChange={this.handleChange}>
                            <option name="Select">Select One</option>
                            <option name="Caucasian">Caucasian</option>
                            <option name="African">African</option>
                        </select>
                        <h5>Birthday:</h5>
                        <input onChange={this.handleChange} value={birthday} name="birthday" type="date" placeholder="birthday"/>
                        <h5>Gender</h5>
                        <select name="gender" value={gender} onChange={this.handleChange}>
                            <option name="Select">Select One</option>
                            <option name="Male">Male</option>
                            <option name="Female">Female</option>
                        </select>

                    </div>
                    <input onChange={this.handleChange} value={height} name="height" type="text" placeholder="Height"/>
                    <input onChange={this.handleChange} value={weight} name="weight" type="number" placeholder="Weight"/>
                    <input onChange={this.handleChange} value={hair} name="hair" type="text" placeholder="Hair"/>
                    <input onChange={this.handleChange} value={eye} name="eye" type="text" placeholder="Eye"/>
                    <input onChange={this.handleChange} value={pants} name="pants" type="text" placeholder="Pants"/>
                    <input onChange={this.handleChange} value={shirt} name="shirt" type="text" placeholder="Shirt"/>
                    <input onChange={this.handleChange} value={neck} name="neck" type="text" placeholder="Neck"/>
                    <input onChange={this.handleChange} value={sleeve} name="sleeve" type="text" placeholder="Sleeve"/>
                    <input onChange={this.handleChange} value={suit} name="suit" type="text" placeholder="Suit"/>
                    <input onChange={this.handleChange} value={waist} name="waist" type="text" placeholder="Waist"/>
                    <input onChange={this.handleChange} value={inseam} name="inseam" type="text" placeholder="Inseam"/>
                    <input onChange={this.handleChange} value={shoe} name="shoe" type="text" placeholder="Shoe"/>
                    <input onChange={this.handleChange} value={carYear} name="carYear" type="text" placeholder="Car Year"/>
                    <input onChange={this.handleChange} value={carMake} name="carMake" type="text" placeholder="Car Make"/>
                    <input onChange={this.handleChange} value={carModel} name="carModel" type="text" placeholder="Car Model"/>
                    <input onChange={this.handleChange} value={skills} name="skills" type="text" placeholder="Skills"/>
                    <button type="submit">Create Account</button>
                </form>

                {
                    this.state.errorMessage &&
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                }
            </div>
        )
    }
}

export default withProvider(Signup);



