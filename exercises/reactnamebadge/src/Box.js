import React, { Component } from 'react';
import Container from './Container';


class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fName: '',
            lName: '',
            email: '',
            birth: '',
            phone: '', 
            food: '',
            you: '',
            badgeArr: []
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        let {fName, lName, email, birth, phone, food, you} = this.state
        const newBadge ={
        fName,
        lName,
        email,
        birth,
        phone, 
        food,
        you,
        }
        this.setState(prev => {
            return{
                badgeArr: [...prev.badgeArr, newBadge]
            }
        })
        console.log(newBadge)
    }

    handleChange = e => {
        let {name, value} = e.target
        return this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className='firstBoxs'> 
                        <input type='text' placeholder='First Name' name='fName'value={this.state.fName} onChange={this.handleChange}/>
                        <input type='text' placeholder='Last Name' name='lName'value={this.state.lName} onChange={this.handleChange}/>
                        <input type='text' placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange}/>
                        <input type='text' placeholder='Place of Birth' name='birth'value={this.state.birth} onChange={this.handleChange}/>
                        <input type='tel' pattern='[0-9]{3}[0-9]{3}[0-9]{4}' placeholder='Phone' name='phone'value={this.state.phone} onChange={this.handleChange}/>
                        <input type='text' placeholder='Favorite Food' name='food'value={this.state.food} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <textarea className='textBox' type='text' placeholder='Tell us about yourself' name='you'value={this.state.you} onChange={this.handleChange} cols='73' rows='8'></textarea>
                        <br/>
                        <button>Submit</button>
                    </div>
                </form>
                <Container badgeArr={this.state.badgeArr}/>
            </div>
        );
    }
}

export default Box;