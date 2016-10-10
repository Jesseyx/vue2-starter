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

export const deleteDog = ({ dispatch, state }, _this, id) => {
    _this.$http.delete(`/api/dog/${id}?token=${state.token}`).then((response) => {
        location.reload();
    }, (response) => {
        dispatch(VALIDATE_ERROR, ['Delete failed! Please try later.']);
    });
};

export const logout = ({ dispatch }) => {
    dispatch(LOGOUT);
};

export const createDog = ({ dispatch, state }, _this, name, age) => {
    _this.$http.post(`/api/dog?token=${state.token}`, { name, age }).then((response) => {
        _this.$route.router.go({ name: 'index' });
    }, (response) => {
        dispatch(VALIDATE_ERROR, response.data.errors);
    });
};

export const editDog = ({ dispatch, state }, _this, id, name, age) => {
    _this.$http.put(`/api/dog/edit/${id}?token=${state.token}`, { name, age }).then(() => {
        location.reload();
    }, (response) => {
        dispatch(VALIDATE_ERROR, ['Update failed. Please try later.']);
    });
};

export const showErrors = ({ dispatch }, errors) => {
    dispatch(VALIDATE_ERROR, errors);
};

export const register = ({ dispatch }, _this, name, email, password, password_confirmation) => {
    _this.$http.post('/api/register', { name, email, password, password_confirmation }).then((response) => {
        dispatch(LOGIN, response.data.name, response.data.token);
        _this.$route.router.go({ name: 'profile' });
    }, (response) => {
        dispatch(VALIDATE_ERROR, response.data.errors);
    });
};
