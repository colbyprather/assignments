import React, { Component } from 'react'
import {withTodos} from './TodoProvider'
import Todo from './Todo'

class TodoContainer extends Component {
    componentDidMount(){
        this.props.getAllTodos()
    }
    render() {
        const mappedTodos = this.props.todos.map(todo => <Todo info={todo} />)
        return (
            <div className='todo-list'>
                {mappedTodos}
            </div>
        )
    }
}

export default withTodos(TodoContainer)