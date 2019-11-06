import React, { Component } from 'react';
const {Provider, Consumer} = React.createContext()

class MainProvider extends Component {
    constructor() {
        super() 
        
        this.state = {
            color: true
        }
    }

    toggle = () => {
        this.setState(prev => {
            return {
                color: !prev.color
            }
        })
    }

    render() {
        return (
            <div>
                <Provider value= {{...this.state, toggle: this.toggle}}>
                    {this.props.children}
                </Provider>
            </div>
        );
    }
}

export default MainProvider;

export function outProvider (Comp){
    return props => <Consumer>
                        {value => <Comp {...value}{...props} /> }
                    </Consumer>
}