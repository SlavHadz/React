import React, { Component } from 'react';
import Movie from '../../components/Movie/Movie';
import batmanImg from '../../assets/imgs/batman.jpg';
import interstellarImg from '../../assets/imgs/interstellar.jpg';
import avengersImg from '../../assets/imgs/avengers.jpg';
import './Cinema.css';

class Cinemas extends Component {

    render() {
        const movies = (
            <>
                <Movie img={batmanImg}
                title='Batman Dark Knight'
                prize='10' />
                <Movie img={interstellarImg}
                title='Interstellar'
                prize='12'/>
                <Movie img={avengersImg}
                title='Avengers: Infinity War'
                prize='8'/>
            </>
        )

        return (
            <div className='Cinema'>
                {movies}
            </div>
        );
    }
}

export default Cinemas;