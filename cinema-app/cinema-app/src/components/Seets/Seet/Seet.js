import React from 'react';
import './Seet.css';

const seet = (props) => {
    let returnedSeet;
    switch (props.ocupied) {
        case true:
        returnedSeet = (<p onClick={props.clicked} className='Seet Ocupied'></p>)
        break;
        case false:
        returnedSeet = (<p onClick={props.clicked} className='Seet Free'></p>)
        break;
        default:
        returnedSeet = null;
    }
    return returnedSeet;
}

export default seet;