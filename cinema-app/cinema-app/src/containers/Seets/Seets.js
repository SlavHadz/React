import React, { Component } from 'react';
import Seet from './Seet/Seet';
import axios from '../../axios';
import './Seets.css';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';
import { connect } from 'react-redux';

class Seets extends Component {

    state = {
        // WITHOUT REDUX
        // cinema: null,
        // totalPrice: 0,
        ordering: false
    }

    componentDidMount() {
        axios.get('/' + this.props.match.params.name + '.json')
            .then(res => {
                this.props.onCinemaReceived(res.data);
            });
        }

    seetClickedHandler = (number) => {
        let currentCinema = this.props.cinema;
        let rows = [...currentCinema.rows];
        let price = this.props.price;
        rows.map(row => {
            row.seets.map(seet => {
                if (seet.id === number && seet.changeble) {
                    seet.ocupied = !seet.ocupied;
                }
                if(seet.id === number && seet.changeble && seet.ocupied) {
                    price = price + Number(this.props.match.params.price);
                } else if (seet.id === number && seet.changeble && !seet.ocupied) {
                    price = price - Number(this.props.match.params.price);
                }
            });
        })
        this.props.onSeatClicked({rows}, price, this.props.match.params.price);
        // WITHOUT REDUX
        //
        // this.setState({
        //     cinema: { rows },
        //     totalPrice: price
        // });
    }

    orderClickedHandler = () => {
        this.setState({ordering: true});
    };

    orderCanceledHandler = () => {
        this.setState({
            ordering: false
        });
    };

    continueOrderHandler = () => {
        // WITHOUT REDUX
        // let rows = [...this.state.cinema.rows];
        // rows.map(row => {
        //     row.seets.map(seet => {
        //         if(seet.ocupied) {
        //             seet.changeble = false;
        //         }
        //         return seet;
        //     })
        //     return row;
        // });
        // this.setState({
        //     cinema: {rows},
        // }, () => {
        //     axios.put('/' + this.props.match.params.name + '.json', this.state.cinema)
        //     .then(res => console.log('send successfully'));
        //     this.props.history.push('/order-form');
        // });
        console.log(this.props.price + ' ' + this.props.tickets);
        this.props.history.push('/order-form');
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
            let seets = <Spinner />;
            if(this.props.cinema) {
                // let seetsKey = Object.keys(this.state.cinema)[0];
                seets = this.props.cinema.rows.map((row, index) => {
                    let rowSeets = row.seets.map(seet => {
                            return ( <Seet key = {seet.id}
                                clicked = {() => this.seetClickedHandler(seet.id)}
                                ocupied = {seet.ocupied}
                                />)
                            });
                        return <div className='Row' key={index}>{rowSeets}</div>
                        });
            }

            let body = (
                    <div className='SeetsPageContainer'>
                        <h2 className='textTop'>Choose your seets for <span className='movieName'>{movieName}</span></h2>
                        <div className='container'>
                            <div className='SeetsContainer'>
                                <div className= 'Seets' > {seets} </div>
                                <div className= 'Screen'><p>Screen</p></div>
                            </div>
                            <div className='ButtonContainer'>
                                <div>
                                    <h3>Total price: {(this.props.price).toFixed(2)}</h3>
                                </div>
                                <button className='OrderButton' onClick={this.orderClickedHandler}>ORDER</button>
                            </div>
                        </div>
                    </div>
            )

                return (
                <>
                    <Modal show={this.state.ordering} cancel={this.orderCanceledHandler}>
                        <OrderSummary totalPrice={this.props.price}
                        price={this.props.match.params.price}
                        cancel={this.orderCanceledHandler}
                        movie={movieName}
                        continue={this.continueOrderHandler} />
                    </Modal>
                    {body}
                </>
                )
            }

        }

const mapStateToProps = state => {
    return {
        cinema: state.cinema,
        price: state.price,
        tickets: state.tickets
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onCinemaReceived: (configuration) => dispatch({type: 'RECEIVE_CINEMA', seats: configuration}),
        onSeatClicked: (configuration, newPrice, singlePrice) => dispatch({type: 'SEAT_CLICKED', payload: {
            seats: configuration,
            price: newPrice,
            tickets: (newPrice / singlePrice)
        }})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Seets);