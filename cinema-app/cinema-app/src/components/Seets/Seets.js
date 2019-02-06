import React, { Component } from 'react';
import Seet from './Seet/Seet';
import axios from '../../axios';
import './Seets.css';
import Button from '../Button/Button';

class Seets extends Component {

    state = { cinema: null }

    componentDidMount() {
        axios.get('/' + this.props.match.params.name + '.json')
            .then(res => {
                this.setState({cinema: res.data});
            });
        }

        seetClickedHandler = (number) => {
        // let seetsKey = Object.keys(this.state.cinema)[0];
        let rows = [...this.state.cinema.rows];
        rows.map(row => {
            row.seets.map(seet => {
                if (seet.id === number && seet.changeble) {
                    seet.ocupied = !seet.ocupied;
                }
            });
        })
        this.setState({
            cinema: { rows }
        });
    }

    orderClickedHandler = () => {
        axios.put('/' + this.props.match.params.name + '.json', this.state.cinema)
            .then(res => console.log('send successfully'));
        console.log(this.state.cinema);
    }

        render() {
            let movieName = ''
            switch(this.props.match.params.name) {
                case 'batman':
                    movieName = 'Batman Dark Knight'
                    break;
                case 'interstellar':
                    movieName = 'Interstellar';
                    break;
                case 'avengers':
                    movieName = 'Avengers: Infinity War';
                    break;
                default:
                    movieName = 'Movie name not found';
            }
            let seets = null;
            if(this.state.cinema) {
                // let seetsKey = Object.keys(this.state.cinema)[0];
                seets = this.state.cinema.rows.map((row, index) => {
                    let rowSeets = row.seets.map(seet => {
                            return ( <Seet key = {seet.id}
                                clicked = {() => this.seetClickedHandler(seet.id)}
                                ocupied = {seet.ocupied}
                                />)
                            });
                        return <div className='Row' key={index}>{rowSeets}</div>
                        });
            }

                return (
                <>
                <h2 className='textTop'>Choose your seets for <span className='movieName'>{movieName}</span></h2>
                <div className='container'>
                    <div className='SeetsContainer'>
                        <div className= 'Seets' > {seets} </div>
                        <div className= 'Screen'>SCREEN</div>
                    </div>
                    <div className='ButtonContainer'>
                        <Button clicked={this.orderClickedHandler}>ORDER SEETS</Button>
                    </div>
                </div>
                </>
                )
            }

        }

        export default Seets;