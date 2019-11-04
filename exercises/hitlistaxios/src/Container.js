import React, { Component } from 'react';
import axios from 'axios'
import Box from './Box'

class Container extends Component {
    constructor() {
        super()

        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then(res => {
            return this.setState({todos: res.data})
        })

    }

    render() {
        const infoMap = this.state.todos.map((todo ,i) => <Box key={i + todo.name} name={todo.name} image={todo.image} />)
        return (
            
            <div>
                {infoMap}
            </div>
        );
    }
}

export default Container;