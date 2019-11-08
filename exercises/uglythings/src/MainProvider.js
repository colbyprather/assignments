import React, { Component } from 'react';
const {Provider, Consumer} = React.createContext()

class MainProvider extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            discription: '',
            image: '',
            todos: []
        }
        console.log(this.state.todos)
    }

    handleSubmit = () => {
        this.setState(prev => {
            return {todos: {...prev.state}}
        })
    } 
    
    render() {
        return (
            <div>
                <Provider value= {{...this.state}}>
                    {this.props.children}
                </Provider>
            </div>
        );
    }
}

export default MainProvider;

export function outProvider (Comp){
    return props => <Consumer>
        {value => <Comp {...value}{...props} />}
    </Consumer>
}