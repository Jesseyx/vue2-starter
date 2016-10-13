import Vue from 'vue';
import Resource from 'vue-resource';
import router from '../router';
import { LOGIN, LOGOUT, VALIDATE_ERROR } from './mutation-types';

Vue.use(Resource);
const client = Vue.http;

export const login = ({ commit }, payload) => {
    client.post('/api/login', payload)
        .then((response) => {
            console.log(response);
            commit(LOGIN, {
                name: response.data.name,
                token: response.data.token,
            });
            router.push({ name: 'index' });
        }, (response) => {
            console.log(response);
            commit(VALIDATE_ERROR, [response.data.error]);
        });
};

export const register = ({ commit }, payload) => {
    client.post('/api/register', payload).then((response) => {
        commit(LOGIN, {
            name: response.data.name,
            token: response.data.token,
        });
        router.push({ name: 'profile' });
    }, (response) => {
        commit(VALIDATE_ERROR, response.data.errors);
    });
};

export const logout = ({ commit }) => {
    commit(LOGOUT);
};

export const me = ({ commit }, payload) => commit(LOGIN, payload);

export const deleteDog = ({ commit, state }, { id }) => {
    client.delete(`/api/dog/${id}?token=${state.token}`).then((response) => {
        location.reload();
    }, (response) => {
        commit(VALIDATE_ERROR, ['Delete failed! Please try later.']);
    });
};

export const createDog = ({ commit, state }, payload) => {
    client.post(`/api/dog?token=${state.token}`, payload).then((response) => {
        router.push({ name: 'index' });
    }, (response) => {
        commit(VALIDATE_ERROR, response.data.errors);
    });
};

export const editDog = ({ commit, state }, payload) => {
    client.put(`/api/dog/edit/${payload.id}?token=${state.token}`, payload).then(() => {
        location.reload();
    }, (response) => {
        commit(VALIDATE_ERROR, ['Update failed. Please try later.']);
    });
};

export const showErrors = ({ commit }, errors) => {
    commit(VALIDATE_ERROR, errors);
};
