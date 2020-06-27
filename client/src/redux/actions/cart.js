import { cartActionTypes } from '../types/cart';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = id => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: id
});

export const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
});