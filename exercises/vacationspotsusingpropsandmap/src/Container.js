import React from 'react'
import Card from './Card'
import spotsData from './Spots.json'

const Container = () => {
    const spotMap = spotsData.map((spot, i) => <Card key={i + spot.place}  
                                                    place={spot.place}
                                                    price={spot.price}
                                                    time={spot.timeToGo}
                                                    />)
    return (
        <div className='container'>
        {spotMap}
        </div>
    )
}

export default Container