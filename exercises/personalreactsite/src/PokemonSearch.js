import React, { Component } from 'react';
import axios from 'axios';
import {withProvider} from './MainProvider'

class PokemonSearch extends Component {
    constructor() {
        super()

        this.state = {
            pokemonInfo: [],
        }
    }

    componentDidMount() {
        axios.get(this.props.url).then(res => {
            this.setState({pokemonInfo: res.data})
        })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default PokemonSearch;