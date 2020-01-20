import React, { Component } from 'react';
import {withProvider} from './MainProvider'
import Pokemon from './Pokemon'

class Grass extends Component {
    componentDidMount(){
        this.props.getGrassType()
    }
    render() {
        const pokemon = this.props.grass.map((poke, i) => <Pokemon key={i + poke.pokemon.name} name={poke.pokemon.name} url={poke.pokemon.url} />)
        return (
            <div className='mainGrid'>
                {pokemon}
            </div>
        );
    }
}

export default withProvider(Grass);