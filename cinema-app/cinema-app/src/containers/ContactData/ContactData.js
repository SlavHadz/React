import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/orderForm/Input/Input';
import axios from '../../axios';
import Spinner from '../../components/Spinner/Spinner';
import './ContactData.css';
import { connect } from 'react-redux';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                value: '',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 10
                },
                valid: false
            },
            phone: {
                value: '',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Phone Number'
                },
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10
                },
                valid: false
            },
            email: {
                value: '',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail',
                },
                validation: {
                    required: true,
                    regexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                },
                valid: false
            }
        },
        formValid: false,
        loading: false
    }

    orderTicketsHandler = () => {
        this.setState({loading: true});
        let orderData = {
            name: this.state.orderForm.name.value,
            phone: this.state.orderForm.phone.value,
            email: this.state.orderForm.email.value,
            price: this.props.price,
            tickets: this.props.tickets
        }
        axios.post('/orders.json', orderData)
            .then(res => {
                let rows = [...this.props.cinema.rows];
                rows.map(row => {
                    row.seets.map(seet => {
                        if(seet.ocupied) {
                            seet.changeble = false;
                        }
                        return seet;
                    })
                    return row;
                });
                this.props.onCinemaReceived({rows})
                axios.put('/' + this.props.match.params.name + '.json', this.props.cinema)
                .then(response => {
                    this.setState({loading: false});
                    this.props.history.push('/');
                })
            })
    }

    checkValidity = (value, rules) => {
        let valid = true;
        if(rules.required){
            valid = value.trim() !== '' && valid;
        }
        if(rules.minLength){
            valid = (value.trim()).length >= rules.minLength && valid;
        }
        if(rules.maxLength){
            valid = (value.trim()).length <= rules.maxLength && valid;
        }
        if(rules.regexp){
            valid = (rules.regexp).test(value) && valid;
        }
        return valid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        let updatedOrderForm = {
            ...this.state.orderForm
        };
        let updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        let formIsValid = true;
        for(let idenftifier in updatedOrderForm){
            formIsValid = updatedOrderForm[idenftifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formValid: formIsValid});
    }

    render() {
        let formDataElements = [];
        for(let key in this.state.orderForm) {
            formDataElements.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form>
                {formDataElements.map(formElement => (
                    <Input key={formElement.id}
                    value={formElement.config.value}
                    elementConfig={formElement.config.elementConfig}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                ))}
                <Button disabled={!this.state.formValid} clicked={this.orderTicketsHandler}>ORDER TICKETS</Button>
            </form>
        );

        if(this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className='ContactData'>
                <h1>Please enter your contact data:</h1>
                {form}
            </div>
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
        onCinemaReceived: (configuration) => dispatch({type: 'RECEIVE_CINEMA', seats: configuration})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);