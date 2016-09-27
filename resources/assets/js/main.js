import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

import routes from './routes';

import App from './containers/App.vue';

/* register plugin */
Vue.use(Router);
Vue.use(Resource);

/* register router */
/* eslint-disable no-new */
const router = new Router();

/* http://router.vuejs.org/zh-cn/index.html */
routes(router);

/* start app */
router.start(App, '#app');
