import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';
import plugins from './plugins';

/* register plugin. http://vuex.vuejs.org/zh-cn/ */
Vue.use(Vuex);

const state = {
    name: '',
    token: '',
    authenticated: false,
    validate_errors: {},
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins,
});
