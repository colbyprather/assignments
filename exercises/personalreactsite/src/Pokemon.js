import React, { Component } from 'react';
import axios from 'axios';
import {withProvider} from './MainProvider'

class Pokemon extends Component {
    constructor() {
        super()
        this.state = {
            pokeInfo: {},
        }
    }

    componentDidMount() {
        axios.get(this.props.url).then(res => {
            this.setState({pokeInfo: res.data})
        })
    }

    render() {
        let {name, height, base_experience, sprites} = this.state.pokeInfo
        let backImg;
        if (sprites){
            let mySprite = sprites
            backImg = mySprite.hasOwnProperty('back_default') ? sprites.back_default : 'no_image'
        }        
        console.log(this.state.pokeInfo.types)
        return (
            <div >
                <div className='waterGrid'>
                    <div className='pokeCard' style={{backgroundColor: this.state.pokeInfo.types === "grass" ? "green" : "red"}}> 
                        <div>{name}</div>
                        <img className='pokemonimg' src={backImg} alt="none"/>
                        <p>Height: {height}</p>
                        <p>{base_experience}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withProvider(Pokemon);