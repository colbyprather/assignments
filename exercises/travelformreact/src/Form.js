import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fName: '',
            lName: '',
            age: '',
            gender: '',
            location: '',
            diet: []
        }
    }
    handleChange = e => {
        let {name, value} = e.target
        if(name === 'diet'){
            const pArr = [...this.state.diet]
            if(pArr.includes(value)){
                pArr.splice(pArr.indexOf(value), 1)
            } else {
                pArr.push(value)
            }
            this.setState({diet: pArr})
        } else {
            this.setState({[name]: value})
        }
    }

    handleSelect = e => {
        this.setState({location: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        let {fName, lName, age, gender, location, diet} = this.state
        alert(`
        First Name: ${fName}
        Last Name: ${lName}
        Age: ${age}
        Gender: ${gender}
        Location: ${location}
        Diet: ${diet}
        `)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='First Name' name='fName' type='text' value={this.state.fName} onChange={this.handleChange}/>
                    <input placeholder='Last Name' name='lName' type='text'value={this.state.lName} onChange={this.handleChange}/>
                    <input placeholder='Age' name='age' type='number'value={this.state.age} onChange={this.handleChange}/>
                    <br/>
                    Male<input name='gender' value='Male' type='radio' onChange={this.handleChange}/>
                    Female<input name='gender' value='Female' type='radio' onChange={this.handleChange}/>
                    <br/>
                    <select value={this.state.value} onChange={this.handleSelect}>
                        <option value='Florida'>Florida</option>
                        <option value='California'>California</option>
                        <option value='Main'>Main</option>
                    </select>
                    <br/>
                    Vegetarian<input type='checkbox' name='diet' value='Vegatarian' onChange={this.handleChange}/>
                    Kosher<input type='checkbox' name='diet' value='Kosher' onChange={this.handleChange}/>
                    Lactose Free<input type='checkbox' name='diet' value='LactoseFree' onChange={this.handleChange}/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;