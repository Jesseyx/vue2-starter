import Vue from 'vue';
import Router from 'vue-router';

import routes from './routes';

/* register plugin */
Vue.use(Router);

/* register router */
const router = new Router({
    // history 模式，需要服务器配置，see http://router.vuejs.org/zh-cn/essentials/history-mode.html
    // mode: 'history',
    routes,
    // see http://router.vuejs.org/zh-cn/api/options.html
    linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('jwt-token');
    if (to.meta.auth && (!token || token === null)) {
        return next('/auth/login');
    }

    if (to.meta.guest && token) {
        return next('/auth/profile');
    }

    next();
});

export default router;
