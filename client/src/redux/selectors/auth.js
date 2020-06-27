import { createSelector } from 'reselect';

const selectUser = state => state.auth;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.uid
);

export const selectAuthToken = createSelector(
    [selectUser],
    auth => auth.token
)

export const selectAuthError = createSelector(
    [selectUser],
    auth => auth.error
);