import React from 'react'

const Card = (props) => {
    let {place, price, time} = props
    let style;
    if (time === "Spring"){
        style = {
            backgroundColor: 'green'
        }
    } else if(time === "Winter"){
        style = {
            backgroundColor: "#1ce"
        }
    } else if(time === "Summer"){
        style = {
            backgroundColor: "yellow"
        }
    } else if(time === "Fall"){
        style = {
            backgroundColor: "orange"
        }
    }
    let dollarSign;
    if(price < 500){
        dollarSign = "$"
    } else if(price < 1000 && price > 500){
        dollarSign = "$$"
    } else {
        dollarSign = "$$$"
    }

    return (
        <div style={style}>
            <h2>{place}</h2>
            <h4>{price}</h4>
            <p>{time}</p>
            <h6>{dollarSign}</h6>
        </div>
    )
}

export default Card