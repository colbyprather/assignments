import React, { Component } from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class MainProvider extends Component {
    constructor() {
        super()

        this.state = {
            grass:[],
            water:[],
            fire:[],

        }
    }
    //grass is 12
    getGrassType = () => {
        axios.get('https://pokeapi.co/api/v2/type/12/').then(res => {
            this.setState({grass:res.data.pokemon})
        })
        let grassTypepoke = [...res.data.pokemon.url];
        axios.get({grassTypepoke}).then(res => {
            this.setstate(prev => {
                return {
                    grass:[...prev.grass, res.data]
                }
            })
        })
        // // grassTypepoke.map(grasspoke => )
        // // get grassTypepoke.url runa axios.get
        console.log(this.state.grass)
    }
    
    
    

    render() {
        return (
            <Provider value={{
                ...this.state,
                getGrassType: this.getGrassType,
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