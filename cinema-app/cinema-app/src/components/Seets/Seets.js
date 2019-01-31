import React, { Component } from 'react';
import Seet from './Seet/Seet';

class Seets extends Component {
    state = {
        seets: [
            {
                number: 1,
                ocupied: false
            },
            {
                number: 2,
                ocupied: true
            },
            {
                number: 3,
                ocupied: false
            },
            {
                number: 4,
                ocupied: false
            },
            {
                number: 5,
                ocupied: false
            },
            {
                number: 6,
                ocupied: true
            },
            {
                number: 7,
                ocupied: false
            },
            {
                number: 8,
                ocupied: true
            },
            {
                number: 9,
                ocupied: true
            },
            {
                number: 10,
                ocupied: false
            }
        ]
    }

    seetClickedHandler = (event) => {
        if(event.target.classList.contains('Free')) {
            event.target.classList.add('Ocupied');
            event.target.classList.remove('Free');
        } else {
            event.target.classList.add('Free');
            event.target.classList.remove('Ocupied');
        }
    }

    render() {
        let seets = this.state.seets.map((seet) => {
                return <Seet key={seet.number} clicked={this.seetClickedHandler} ocupied={seet.ocupied} />
        });

        return (
            <div className='Seets'>
                {seets}
            </div>
        )
    }

}

export default Seets;