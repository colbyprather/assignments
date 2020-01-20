import React, { Component } from 'react';
import {withProvider} from './MainProvider'
import Pokemon from './Pokemon'

class Fire extends Component {
    componentDidMount(){
        this.props.getFireType()
    }
    render() {
        const pokemon = this.props.fire.map((poke, i) => <Pokemon key={i + poke.pokemon.name} name={poke.pokemon.name} url={poke.pokemon.url}/>)
        return (
            <div className='mainGrid'>
                {pokemon}
            </div>
        );
    }
}

export default withProvider(Fire);