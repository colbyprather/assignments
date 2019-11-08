import React, { Component } from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class MainProvider extends Component {
    constructor() {
        super()

        this.state = {
            todos:[]
        }
    }
    
    render() {
        return (
            <Provider value={{
                ...this.state,

            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default MainProvider;

export function withProvider (Comp) {
    return props => <Consumer>
                        {value => <Comp {...value} {...props} />}
                    </Consumer>
}