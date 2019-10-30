import React from 'react'


function Square(props) {
    const styles = {
        backgroundColor: props.color,
        border: "black 2px solid",
        height: "300px",
    }
    return(
        <div style={styles}></div>
    )
}

export default Square