import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Axios from 'axios';
import { createStructuredSelector } from 'reselect';
import { selectAuthToken } from '../../redux/selectors/auth';
import { connect } from 'react-redux';

const StripeCheckoutButton = ({ price, authToken }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_EwfvNFyVIlLy73839RPcRSki00tHgVANIy';

    const onToken = token => {
        Axios({
            url: 'http://localhost:3001/payment',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${authToken}`
            },
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then(response => {
            alert('Kadak hai');
        })
        .catch(error => {
            console.log('Payment error: ', error);
            alert('There was an issue with your "payment". Please make sure you use the provided credit card.');
        });
    }

    return (
        <StripeCheckout 
            label='Paisa laya?'
            name='Stark Expo'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ₹${price}`}
            amount={priceForStripe}
            currency="inr"
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

const mapStateToProps = createStructuredSelector({
    authToken: selectAuthToken
});

export default connect(mapStateToProps)(StripeCheckoutButton);