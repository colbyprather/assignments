import React from 'react';
import Info from './Info'

const Container = (props) => {
    const infoMap = props.badgeArr.map((badge, i) => <Info 
                                            key={i + badge.fName}
                                            fName={badge.fName}
                                            lName={badge.lName}
                                            email={badge.email}
                                            birth={badge.birth}
                                            phone={badge.phone}
                                            food={badge.food}
                                            you={badge.you}
                                            />)
    return (
        <div>
            {infoMap}
        </div>
    );
};

export default Container;