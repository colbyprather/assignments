import React from 'react';

const Color = (props) => {
    const styles = {
        backgroundColor: props.backgroundColor
    }
    return (
        <div style={styles}>
        <h3>{props.Title}</h3>
        <h4>{props.Subtitle}</h4>
        <p>{props.Information}</p>
        </div>
    )
}

export default Color