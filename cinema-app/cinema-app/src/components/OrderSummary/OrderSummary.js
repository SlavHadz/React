import React from 'react';
import Button from '../Button/Button';

const orderSummary = (props) => {
    let ticketsNumber = props.totalPrice / props.price;

    return (
        <>
            <h3>Your order:</h3>
            <p>You selected {ticketsNumber} tickets for the movie: {props.movie}</p>
            <p><strong>Total price: {(props.totalPrice).toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={props.continue}>CONTINUE</Button>
            <Button clicked={props.cancel}>CANCEL</Button>
        </>
    )
}

export default orderSummary;