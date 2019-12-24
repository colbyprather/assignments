import React, { Component } from 'react';
import { withProvider } from "../MainProvider"
import { Link } from "react-router-dom";
import '../loginStyles.css';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errorMessage: ""
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
        this.props.login(this.state)
            .then(() => this.props.history.push("/profiles"))
            .catch(err => {
                this.setState({errorMessage: err.response.data.message})
            })
    }

    render() {
        return (
            <div>
                <form className="form-wrapper" onSubmit={this.handleSubmit}>
                    <h3 className="logTitle">Log In</h3>
                    {
                        this.state.errorMessage &&
                        <p style={{color: "red", textAlign: "center"}}>{this.state.errorMessage}</p>
                    }
                    <div className="boxHolder">
                        <input
                            className="username"
                            onChange={this.handleChange}
                            value={this.state.username}
                            name="username"
                            type="text"
                            placeholder="username"/>
                        <input
                            className="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            name="password"
                            type="password"
                            placeholder="password"/>
                        <button className="loginButton" type="submit">Log In</button>
                        <button className="signupButton"><Link className='signupButton' to='/signup'>Sign Up</Link></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withProvider(LoginForm);