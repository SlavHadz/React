import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';
import ToggleButton from './ToggleButton/ToggleButton';

const navigation = (props) => {
    return (
        <nav className='Nav'>
            <ul>
                <li><ToggleButton clicked={props.toggleClick} /></li>
                <li><NavLink to='/' exact>Movies</NavLink></li>
                <li><NavLink to='/schedule'>Schedule</NavLink></li>
            </ul>
        </nav>
    )
}

export default navigation;