import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

const navigation = () => {
    return (
        <nav className='Nav'>
            <ul>
                <li><NavLink to='/' exact>Movies</NavLink></li>
                <li><NavLink to='/schedule'>Schedule</NavLink></li>
            </ul>
        </nav>
    )
}

export default navigation;