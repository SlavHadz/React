import React, { Component } from 'react';
import Movie from '../../components/Movie/Movie';
import batmanImg from '../../assets/imgs/batman.jpg';
import interstellarImg from '../../assets/imgs/interstellar.jpg';
import avengersImg from '../../assets/imgs/avengers.jpg';
import './Cinema.css';
import axios from '../../axios';

class Cinemas extends Component {

    // TO BIULD SEETS DATABASE IN FIREBASE
    // componentDidMount() {
    //     let avengers = {
    //             rows:[{
    //                     seets: [{
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 0
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 1
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 2
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 3
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 4
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 5
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 6
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 7
    //                     }]
    //                 },
    //                 {
    //                     seets: [{
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 10
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 11
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 12
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 13
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 14
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 15
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 16
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 17
    //                     }]
    //                 },
    //                 {
    //                     seets: [{
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 20
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 21
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 22
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 23
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 24
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 25
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 26
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 27
    //                     }
    //                 ]},
    //                 {
    //                     seets: [{
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 30
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 31
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 32
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 33
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 34
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 35
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 36
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 37
    //                     }
    //                 ]},
    //                 {
    //                     seets: [{
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 40
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 41
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 42
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 43
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 44
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 45
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 46
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 47
    //                     }
    //                 ]},
    //                 {
    //                     seets: [{
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 50
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 51
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 52
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 53
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 54
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 55
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 56
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 57
    //                     }
    //                 ]},
    //                 {
    //                     seets: [{
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 60
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 61
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 62
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 63
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 64
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 65
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 66
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 67
    //                     }
    //                 ]},
    //                 {
    //                     seets: [{
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 70
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 71
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 72
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 73
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 74
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 75
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 76
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 77
    //                     }
    //                 ]},
    //                 {
    //                     seets: [{
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 80
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 81
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 82
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 83
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 84
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 85
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 86
    //                     },
    //                     {
    //                         changeble: true,
    //                         ocupied: false,
    //                         id: 87
    //                     }
    //                 ]}
    //             ]
    //     };
    //     axios.post('/interstellar.json', avengers);
    // }

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