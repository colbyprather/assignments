import React, { Component } from 'react';
import Main from './Main'

class Container extends Component {
    constructor() {
        super()
        
        this.state = {
            title: '',
            description: '',
            price: '',
            imgUrl: '',
            isBeingEdited: '',
            todo: []
        }
        console.log(this.state.todo)
    }
    
    handleChange
    
    render() {
        const mainMap = this.state.todo.map(main => <Main key={main.id}
                                                    {...main}
                                                    />)
        return (
            <div>
            <div id='list'></div>
            <div id='added'>
                <form name='add'>
                    <input type='text' name='title' placeholder='Title'></input>
                    <input type='text' name='decription' placeholder='Description'></input>
                    <input type='number' name='price' placeholder='Price'></input>
                    <input type='text' name='image' placeholder='Image Url'></input>
                    <button>Submit</button>
                </form>
            </div>
                {mainMap}
            </div>
        );
    }
}

export default Container;