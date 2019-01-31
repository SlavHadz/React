import React from 'react';
import './Seet.css';

const seet = (props) => {
    let returnedSeet;
    switch (props.ocupied) {
        case true:
        returnedSeet = (<div onClick={props.clicked} className='Seet Ocupied'></div>)
        break;
        case false:
        returnedSeet = (<div onClick={props.clicked} className='Seet Free'></div>)
        break;
        default:
        returnedSeet = null;
    }
    return returnedSeet;
}

export default seet;