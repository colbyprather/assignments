import React, { Component } from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class TodoProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }

    

    addNewTodo = newTodo => {
        axios.post('https://api.vschool.io/bob/todo', newTodo).then(res => {
            this.setState(prev => { 
                return {
                    todos:[...prev.todos, res.data] 
                }
            })
        })
    }

    getAllTodos = () => {
        axios.get('https://api.vschool.io/bob/todo').then(res => {
            this.setState({todos:res.data})
        })
    }

    editTodo = (id, updatedTodo) => {
        axios.put('https://api.vschool.io/bob/todo/' + id, updatedTodo).then(res => {
            this.setState(prev => {
                return {
                    todos: prev.todos.map(todo => todo._id === id ? res.data : todo)
                }
            })
        })
    }

    deleteTodo = id => {
        axios.delete('https://api.vschool.io/bob/todo/' + id).then(res => {
            this.setState(prev => {
                return{
                    todos: prev.todos.filter(todo => todo._id !== id)
                }
            })
        })
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                addNewTodo: this.addNewTodo,
                getAllTodos: this.getAllTodos,
                deleteTodo: this.deleteTodo,
                editTodo: this.editTodo
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default TodoProvider

export function withTodos (Comp){
    return props => <Consumer>
                        {value => <Comp {...value}{...props} />}
                    </Consumer>
}