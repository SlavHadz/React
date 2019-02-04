import React from 'react';
import Button from '../Button/Button';
import './Movie.css';
import { Link } from 'react-router-dom';

const cinema = (props) => {
    return (
        <div className='Movie'>
            <h2>{props.title}</h2>
            <img src={props.img} alt='movie poster'/>
            <p>Prize: {props.prize} BGN</p>
            <Link to={'/movies/' + props.name}><Button>TICKETS</Button></Link>
        </div>
    )
}

export default cinema;