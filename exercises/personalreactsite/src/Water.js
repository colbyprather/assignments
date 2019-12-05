import React, { Component } from 'react';
import {withProvider} from './MainProvider'
import Pokemon from './Pokemon'

class Water extends Component {
    componentDidMount() {
        this.props.getWaterType()
    }
    
    render() {
        const pokemon = this.props.water.map((poke, i) => <Pokemon key={i + poke.pokemon.name} name={poke.pokemon.name} url={poke.pokemon.url}/>)
        return (
            <div>
            <div className='mainGrid'>
                {pokemon}
                </div>
            </div>
        );
    }
}

export default withProvider(Water);