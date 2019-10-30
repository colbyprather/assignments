import React, {Component} from 'react'
import Square from './Square'

class Mixer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            colors: ["white", "white", "white", "white"]
        }
    }

    handleBlackWhite = () => {
        this.setState((prevState) => {
            if(prevState.colors[0] === "white"){
                return {colors: ["black", "black", "black", "black"]}
            } else {
                return {colors: ["white", "white", "white", "white"]}
            }
        })
    }

    handlePurple = () => {
        this.setState((prevState) => {
            return {colors: ["purple", "purple", prevState.colors, prevState.colors] }
        })
    }

    handleBlueLeft = () => {
        this.setState((prevState) => {
            return {colors: [prevState.colors, prevState.colors, "blue", prevState.colors]}
        })
    }

    handleBlueRight = () => {
        this.setState((prevState) => {
            return {colors: [prevState.colors, prevState.colors, prevState.colors, "blue"]}
        })
    }

    render() {
        const styles = {
            display: 'grid',
            gridTemplateColumns: "1fr 1fr",
            gridGap: "10px"
        }

        const colors = this.state.colors.map((color, i) => <Square color={color}/>)
        return (
            <div>
                <div style={styles}>
                    {colors}
                </div>
                <button onClick={this.handleBlackWhite}>Black & White</button>
                <button onClick={this.handlePurple}>Purple</button>
                <button onClick={this.handleBlueLeft}>Bottom Left Blue</button>
                <button onClick={this.handleBlueRight}>Bottom Right Blue</button>
            </div>
        )
    }
    
    
}



export default Mixer