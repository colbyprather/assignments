import React, { Component } from 'react';
import axios from 'axios';
import {withProvider} from './MainProvider'

class Pokemon extends Component {
    constructor() {
        super()
        this.state = {pokeInfo:null}
    }

    componentDidMount() {
        axios.get(this.props.url).then(res => {
            this.setState({pokeInfo: res.data})
        })
    }

    generateImage() {
        let backImg;
        let mySprite = this.state.pokeInfo.sprites
        backImg = mySprite.hasOwnProperty('back_default') ? this.state.pokeInfo.sprites.back_default : 'no_image'
        return backImg
    }

    render() {
        console.log(this.state)
        return (
            !this.state.pokeInfo ? null : 
                <div className='waterGrid'>
                    <div className='pokeCard' style={{backgroundColor: this.state.pokeInfo.types.some().type.name === "grass" ? "green" : "red"}}> 
                        <div>{this.state.pokeInfo.name}</div>
                        <img className='pokemonimg' src={this.generateImage()} alt="none"/>
                        <p>Height: {this.state.pokeInfo.height}</p>
                        <p>{this.state.pokeInfo.base_experience}</p>
                    </div>
                </div>
        );
    }
}

export default withProvider(Pokemon);