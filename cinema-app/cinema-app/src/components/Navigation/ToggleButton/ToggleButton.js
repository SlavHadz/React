import React from 'react';
import './ToggleButton.css';

const toggleButton = (props) => (
    <div className='ToggleButton' onClick={props.clicked}>
        <div className='ToggleStripe'></div>
    </div>
)

export default toggleButton;