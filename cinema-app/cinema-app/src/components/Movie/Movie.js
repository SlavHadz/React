import React from 'react';
import './Movie.css'

const cinema = (props) => {
    return (
        <div className='Movie'>
            <h2>{props.title}</h2>
            <img src={props.img}/>
            <p>Prize: {props.prize} BGN</p>
        </div>
    )
}

export default cinema;