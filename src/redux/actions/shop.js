import shopActionTypes from '../types/shop';

export const updateCollections = collectionsMap => ({
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
});