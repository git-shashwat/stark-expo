import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import Axios from 'axios';

import shopActionTypes from '../types/shop';
import { convertCollectionResponseToMap } from '../../utils/collection';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from '../actions/shop';
import { selectAuthToken } from '../selectors/auth';

export function* fetchCollectionsAsync() {
    try {
        const authToken = yield select(selectAuthToken);
        const { data } = yield Axios({
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken}`
            },
            url: '/collections',
        });
        const collectionsMap = yield call(convertCollectionResponseToMap, data);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (err) {
        yield put(fetchCollectionsFailure(err.message));
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionStart)
    ])
}