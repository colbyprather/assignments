import React, { Component } from 'react';

class Main extends Component {
    constructor() {
        super()
        
        this.state = {
            title: '',
            description: '',
            price: '',
            imgUrl: '',
            isBeingEdited: '',
        }
    }
    handleEditToggle = () => {
        
    }
    render() {
        let {title, description, price, imgUrl} = this.state
        return (
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <h3>{price}</h3>
                <img src={imgUrl} alt='alt'></img>
                <div>completed?
                    <input type="checkbox"></input>
                </div>
            </div>
        );
    }
}

export default Main;