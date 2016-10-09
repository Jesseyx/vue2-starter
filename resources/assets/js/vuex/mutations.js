import { LOGIN, LOGOUT, VALIDATE_ERROR } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
    [VALIDATE_ERROR]: (state, errors) => {
        state.validate_errors = errors;
    }
}
