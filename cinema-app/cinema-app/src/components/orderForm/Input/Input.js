import React from 'react';

const input = (props) => (
    <div>
        <input value={props.value} {...props.elementConfig}/>
    </div>
)

export default input;