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
        return (
            <div >
                <div className='waterGrid'>
                    <div className='pokeCard'>
                        <img src={backImg} alt="none"/>
                        <div>{name}</div>
                        <p>{height}</p>
                        <p>{base_experience}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withProvider(Pokemon);