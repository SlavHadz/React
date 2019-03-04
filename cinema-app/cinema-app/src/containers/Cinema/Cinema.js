import React, { Component } from 'react';
import Movie from '../../components/Movie/Movie';
import batmanImg from '../../assets/imgs/batman.jpg';
import interstellarImg from '../../assets/imgs/interstellar.jpg';
import avengersImg from '../../assets/imgs/avengers.jpg';
import './Cinema.css';

class Cinemas extends Component {

    componentDidMount() {
        console.log(this.props);
    }
    render() {
        const movies = (
            <>
                <Movie img={batmanImg}
                title='Batman Dark Knight'
                name='batman'
                price='10' />
                <Movie img={interstellarImg}
                title='Interstellar'
                name='interstellar'
                price='12'/>
                <Movie img={avengersImg}
                title='Avengers: Infinity War'
                name='avengers'
                price='8'/>
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