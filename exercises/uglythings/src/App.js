import React, { Component } from 'react';
import Container from './Container'

class App extends Component {
    constructor(){
        super()

        this.state = {
            todos: []
        }
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