import { LOGIN, LOGOUT, VALIDATE_ERROR } from './mutation-types.js';

export const login = ({ dispatch }, _this, email, password) => {
    _this.$http.post('/api/login', { email, password })
        .then((response) => {
            console.log(response);
            dispatch(LOGIN, response.data.name, response.data.token);
            _this.$route.router.go({ name: 'index' });
        }, (response) => {
            console.log(response);
            dispatch(VALIDATE_ERROR, [response.data.error]);
        });
};

export const me = ({ dispatch }, name, token) => dispatch(LOGIN, name, token);
