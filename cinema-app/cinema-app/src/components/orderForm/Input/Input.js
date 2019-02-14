import React from 'react';
import './Input.css';

const input = (props) => (
    <div className='Input'>
        <input className='InputElement' value={props.value}
        onChange={props.changed}
        {...props.elementConfig}/>
    </div>
)

export default input;