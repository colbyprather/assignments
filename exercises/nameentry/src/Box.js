import React, { Component } from 'react';
import Container from './Container'


class Box extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            age: '',
            people: []
        }
    }

    selectChange = e => {
        let {name, value} = e.target 
        this.setState({[name]: value})
    }

    submitBotton = e => {
        e.preventDefault()
        let {fullName, age} = this.state

        const createPerson = {fullName, age}

        this.setState(prevState => {
            return {
                people: [...prevState.people, createPerson]
            }
        })
        }
    
    render() {
        

        return (
            <div>
            <form onSubmit={this.submitBotton}>
                <input type="text" placeholder="First Name" name="fullName" value={this.state.fullName} onChange={this.selectChange}/>
                <input type="number" placeholder="Age" name="age" value={this.state.age} onChange={this.selectChange}/>
                <button>Submit</button>
            </form>
            <Container people={this.state.people}/>
            </div>
        );
    }
}

export default Box
