import React, { Component } from 'react';
import Seet from './Seet/Seet';
import axios from '../../axios';
import './Seets.css'

class Seets extends Component {

    state = { cinema: null }

    componentDidMount() {
        axios.get('/' + this.props.match.params.name + '.json')
            .then(res => {
                this.setState({cinema: res.data});
            });
        }
            seetClickedHandler = (number) => {
                let seetsKey = Object.keys(this.state.cinema)[0];
                let rows = [...this.state.cinema[seetsKey].rows];
                rows.map(row => {
                    row.seets.map(seet => {
                        if (seet.id === number && seet.changeble) {
                            seet.ocupied = !seet.ocupied;
                        }
                    });
                })
                let newSeets = {};
                newSeets[seetsKey] = rows;
                this.setState({
                    ciname: newSeets
                });

            }

        render() {
            let seets = null;
            if(this.state.cinema) {
                let seetsKey = Object.keys(this.state.cinema)[0];
                seets = this.state.cinema[seetsKey].rows.map((row, index) => {
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
                <div className= 'Seets' > {seets} </div>
                <div className= 'Screen'>SCREEN</div>
                </>
                )
            }

        }

        export default Seets;