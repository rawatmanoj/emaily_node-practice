import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends Component {
    render() {

        // console.log(process.env.REACT_APP_STRIPE_KEY);
        // console.log(process.env.NODE_ENV);

   
        return (
            <StripeCheckout
            amount={500}
            token={token=>console.log(token)}
            stripeKey={process.env.REACT_APP_STRIPE_kEY}
            />
        );
    }
}

export default Payment;