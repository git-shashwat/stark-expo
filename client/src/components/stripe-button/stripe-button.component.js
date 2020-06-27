import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_EwfvNFyVIlLy73839RPcRSki00tHgVANIy';

    const onToken = token => {
        console.log(token);
        alert('Kadak Hai!')
    }

    return (
        <StripeCheckout 
            label='Paisa laya?'
            name='Stark Expo'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;