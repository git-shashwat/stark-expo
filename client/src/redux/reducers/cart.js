import { cartActionTypes } from '../types/cart';
import { addItemToCart, removeItemFromCart } from '../utils/cart';

const INITIAL_STATE = {
    hidden: false,
    cartItems: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload)
            }

        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        case cartActionTypes.CLEAR_CART:
            return INITIAL_STATE;
            
        default: return state;
    }
}