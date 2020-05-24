import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/actions/cart';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, cartItems }) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
        <span className="item-count">{cartItems.length}</span>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);