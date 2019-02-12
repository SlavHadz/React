import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import { NavLink } from 'react-router-dom';
import './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Closed'];
    if(props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }

    return (
    <>
        <Backdrop show={props.open} clicked={props.closed} />
        <nav className={attachedClasses.join(' ')}>
            <ul>
                <li><NavLink to='/' exact>Movies</NavLink></li>
                <li><NavLink to='/schedule'>Schedule</NavLink></li>
            </ul>
        </nav>
    </>)
}

export default sideDrawer;