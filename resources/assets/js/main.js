// load css
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

import Vue from 'vue';
import Resource from 'vue-resource';

import router from './router';
import store from './store';

import App from './containers/App.vue';

/* register plugin */
Vue.use(Resource);

/* http://router.vuejs.org/zh-cn/essentials/getting-started.html */
const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
