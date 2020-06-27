import React from 'react';

import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addItem } from '../../redux/actions/cart';

const CheckoutItem = ({ 
    cartItem, 
    clearItem,
    removeItem,
    addItem
}) => {
    const { id, name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(id)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: cartItem => dispatch(addItem(cartItem)),
    clearItem: id => dispatch(clearItemFromCart(id)),
    removeItem: cartItem => dispatch(removeItem(cartItem))
});

export default connect(undefined, mapDispatchToProps)(CheckoutItem);