import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/orderForm/Input/Input';
import axios from '../../axios';
import Spinner from '../../components/Spinner/Spinner';
import './ContactData.css';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                value: '',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
            },
            phone: {
                value: '',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Phone Number'
                }
            },
            email: {
                value: '',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                }
            }
        },
        loading: false
    }

    orderTicketsHandler = () => {
        this.setState({loading: true});
        let orderData = {
            name: this.state.orderForm.name.value,
            phone: this.state.orderForm.phone.value,
            email: this.state.orderForm.email.value,
        }
        axios.post('/orders.json', orderData)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
    }

    inputChangedHandler = (event, inputIdentifier) => {
        let updatedOrderForm = {
            ...this.state.orderForm
        };
        let updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
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
                <Button clicked={this.orderTicketsHandler}>ORDER TICKETS</Button>
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

export default ContactData;