import React, { Component } from 'react';
import Printer from './Printer'
import {outProvider} from './MainProvider'




class Container extends Component {

    

    handleSubmit = () => {
        this.setState(prev => {
            return {todos: {...prev.state}}
        })
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(props) {
        const printerMap = props.todos.map((todo, i) => <Printer key={i+ todo.title}
                                                                    {...todo}
                                                                    />)
        return (
            <div>
                <div>
                    <input type='text' name='title' placeholder='Title'></input>
                    <input type='text' name='description' placeholder='Description'></input>
                    <input type='text' name='image' placeholder='Image Url'></input>
                    <button>Submit</button>
                </div>
                {printerMap}
            </div>
        );
    }
}

export default outProvider(Container);

