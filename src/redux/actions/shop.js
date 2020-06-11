import Axios from 'axios';
import shopActionTypes from '../types/shop';

import { convertCollectionResponseToMap } from '../../utils/collection';

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        dispatch(fetchCollectionsStart());
        Axios({
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            url: 'http://localhost:3001/collections',
        })
        .then(({ data }) => {
            const collectionsMap = convertCollectionResponseToMap(data);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(e => dispatch(fetchCollectionsFailure(e.message)));
    }
};