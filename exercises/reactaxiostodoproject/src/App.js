import React, { Component } from 'react';
import Container from './Container'
import axios from 'axios'

class App extends Component {
    constructor(){
        super()

        this.state = {
            todos: []
        }
    }
    componentDidMount(){
        axios.get('https://api.vschool.io/Colby/todo').then(res => {
            console.log(res.data)
            return this.setState({todo: res.data.reverse()})
        })
    }

    handleDelet = () => {
        axios.delete('https://api.vschool.io/bob/todo/' + id).then(response => {
            this.setState((prevState)=>{
                const todos = prevState.todos.filter(todo => {
                    return todo._id !== id
                })
                return { todos }
            })
        })
    }

    handleSubmit = (todo) => {
        axios.post('https://api.vschool.io/bob/todo', todo).then(res => {
            this.setState(prevState => {
                return {todos: [res.data, ...prevState.todos]}
            })
        })
    }

    render() {
        return (
            <div>
                <Container />
            </div>
        );
    }
}

export default App;