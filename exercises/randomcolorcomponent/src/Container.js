import React, { Component } from 'react';
import axios from 'axios';
import Box from './Box'

class Container extends Component {
    constructor() {
        super()

        this.state = {
            backGroundColor: []
        }
    }

    componentDidMount(){
        axios.get('http://www.colr.org/json/colors/random/1').then(res =>{
            console.log(res.data)
            return this.setState({backGroundColor: res.data.colors})
        })
    }

    render() {
        const colorMap = this.state.backGroundColor.map((color) => <Box key={color.id} color={color.hex}/>)

        return (
            <div>
                {colorMap}
            </div>
        );
    }
}

export default Container;