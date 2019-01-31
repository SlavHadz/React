import React from 'react';
import Button from '../Button/Button';
import './Movie.css'

const cinema = (props) => {
    return (
        <div className='Movie'>
            <h2>{props.title}</h2>
            <img src={props.img}/>
            <p>Prize: {props.prize} BGN</p>
            <Button>TICKETS</Button>
        </div>
    )
}

export default cinema;