import { LOGIN, LOGOUT, VALIDATE_ERROR } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
    [LOGIN]: (state, name, token) => {
        state.name = name;
        state.token = token;
        state.authenticated = true;
        localStorage.setItem('jwt-token', token);
    },

    [VALIDATE_ERROR]: (state, errors) => {
        state.validate_errors = errors;
    },

    [LOGOUT]: (state) => {
        state.name = '';
        state.token = '';
        state.authenticated = false;
        localStorage.removeItem('jwt-token');
    },
}
