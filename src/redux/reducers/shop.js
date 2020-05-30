import SHOP_DATA from '../../pages/shop/shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}