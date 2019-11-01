import React from 'react';

const Info = (props) => {
    let {fName, lName, email, birth, phone, food, you} = props
    return (
        <div className='form2'>
            <div className='badge'>Badge:</div>
            <div className='firstBoxs'>
                <div className='textInBox'>Name:<div className='smallText'>{fName} {lName}</div></div>
                <div className='textInBox'>Phone:<div className='smallText'>{phone}</div></div>
                <div className='textInBox'>Place of birth:<div className='smallText'>{birth}</div></div>
                <div className='textInBox'>Favorite food:<div className='smallText'>{food}</div></div>
                <div className='textInBox'>Email:<div className='smallText'>{email}</div></div>
            </div>
            <div>
            <textarea className='textBox' type='text' placeholder='Tell us about yourself' name='you'value={you} cols='73' rows='8' readOnly></textarea>
            </div>
        </div>
    );
};

export default Info;