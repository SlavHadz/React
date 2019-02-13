import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/orderForm/Input/Input';

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
        }
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
                    elementConfig={formElement.config.elementConfig}/>
                ))}
                <Button>Order Tickets</Button>
            </form>
        );

        return (
            <div>
                <h1>Please enter your contact data:</h1>
                {form}
            </div>
        )
    }
}

export default ContactData;