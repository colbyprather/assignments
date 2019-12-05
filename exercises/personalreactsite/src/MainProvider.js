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
            content:[],
            searchInfo: [],
        }
    }

    getPokeSearch = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
            this.setState({content:res.data.results})
        })
    }
    //grass is 12
    getGrassType = () => {
        axios.get('https://pokeapi.co/api/v2/type/12/').then(res => {
            this.setState({grass:res.data.pokemon})
            // console.log(res.data.pokemon)
        })
        // console.log(this.state.grass)
    }
    
    getFireType = () => {
        axios.get('https://pokeapi.co/api/v2/type/10/').then(res => {
            this.setState({fire:res.data.pokemon})
            // console.log(res.data.pokemon)
        })
        // console.log(this.state.fire)
    }
    
    getWaterType = () => {
        axios.get('https://pokeapi.co/api/v2/type/11/').then(res => {
            this.setState({water:res.data.pokemon})
        })
    }

    getInfo = () => {
        // console.log(this.props)
        axios.get(`${this.props}`).then(res => { 
            this.setState({searchInfo:res.data})
        })
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                getGrassType: this.getGrassType,
                getFireType: this.getFireType,
                getWaterType: this.getWaterType,
                getPokeSearch: this.getPokeSearch,
                getInfo: this.getInfo,
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